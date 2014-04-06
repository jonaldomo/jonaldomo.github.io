---
layout: posts
title: Setting up a Mysql cluster with MariaDB Galera
author: John Moses
tags: [mysql, mariadb]
---

One of the applications I help develop and support uses Mysql as its database.  As the application starts to scale we notice the server with Mysql installed begans to have high CPU and memory utilization and sometimes feels like it is slowing down.  To be able to scale the database needs to be able to handle more reads and writes.  To do that I have chosen to setup MariaDB Galera, a synchronous multi-master cluster for MariaDB.

<img src="//i.imgur.com/paXaVaK.gif">

####MariaDB
>MariaDB is a community-developed fork of the MySQL relational database management system, the impetus being the community maintenance of its free status under the GNU GPL. Being a fork of a leading open source software system, it is notable for being led by its original developers and triggered by concerns over direction by an acquiring commercial company Oracle. Contributors are required to share their copyright with Monty Program AB.

>The intent is also to maintain high compatibility with MySQL, ensuring a "drop-in" replacement capability with library binary equivalency and exact matching with MySQL APIs and commands. It includes the XtraDB storage engine for replacing InnoDB, as well as a new storage engine, Aria, that intends to be both a transactional and non-transactional engine perhaps even included in future versions of MySQL.

>Its lead developer is Michael "Monty" Widenius, the founder of MySQL and Monty Program AB. He had previously sold his company, MySQL AB, to Sun Microsystems for 1 billion USD. MariaDB is named after Monty's younger daughter, Maria.

[MariaDB Wikipedia Entry](http://en.wikipedia.org/wiki/MariaDB)

####Synchronous multi-master replication
> The basic difference between synchronous and asynchronous replication is that "synchronous" guarantees that if changes happened on one node of the cluster, they happened on other nodes "synchronously". "Asynchronous" gives no guarantees about the delay between applying changes on "master" node and the propagation of changes to "slave" nodes. The delay can be short or long - it is a matter of luck. This also implies that if master node crashes, some of the latest changes may be lost.

[Codership Galera Replication](http://codership.com/products/galera_replication)

####Choosing between 5.5 and 10.0
The stable generally available release is 5.5.  The development version is 10.0, but is not stable yet.  After reading about some of the enhancements available in 10.0, I jumped at the chance to use it.  

*  Cassandra storage engine
*  Multi source replication
*  CONNECT storage engine

[What is MariaDB 10.0?](https://mariadb.com/kb/en/what-is-mariadb-100/)

After completing installation, I tried to start the server but ran into a syntax error in the init.d script [MDEV-5759](https://mariadb.atlassian.net/browse/MDEV-5759).  So I stuck with the stable release.

####Installation on Red Hat with yum

######1. Adding MariaDB yum repo
MariaDB has built a [repository generator](https://downloads.mariadb.org/mariadb/repositories/#mirror=osuosl) that you can use to tell your package manager where to find the installation files.  For RHEL6 64bit the generator gave me the following, for which I copied into /etc/yum.repos.d/MariaDB.repo

{% highlight bash linenos %}
# MariaDB 5.5 RedHat repository list - created 2014-03-18 19:06 UTC
# http://mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/5.5/rhel6-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
{% endhighlight %}

######2. Installing MariaDB server, client and Galera with yum
{% highlight bash linenos%} sudo yum install MariaDB-Galera-server MariaDB-client galera {% endhighlight %}

######3. Configuring Galera
Once installation is complete, you will need to configure Galera by updating your Mysql configuration.  Find the location of the libgalera_smm.so file with the following command.
{% highlight bash linenos%} find / -name libgalera_smm.so {% endhighlight %}

Then update your mysql conf file with the following. Mine was found at /etc/my.cnf.d/server.conf.

{% highlight bash linenos %}
[mysqld]
# 1. Mandatory settings: these settings are REQUIRED for proper cluster operation
query_cache_size=0
binlog_format=ROW
default_storage_engine=innodb
innodb_autoinc_lock_mode=2
# innodb_doublewrite=1 - this is the default and it should stay this way

# 2. Optional mysqld settings: your regular InnoDB tuning and such
datadir=/mnt/mysql/data
innodb_buffer_pool_size=28G
innodb_log_file_size=100M
innodb_file_per_table
innodb_flush_log_at_trx_commit=2

# 3. wsrep provider configuration: basic wsrep options
wsrep_provider=/usr/lib64/galera/libgalera_smm.so
wsrep_provider_options="gcache.size=32G"
wsrep_cluster_address=gcomm://192.168.0.1,192.168.0.2,192.168.0.3
wsrep_cluster_name='my_galera_cluster'
wsrep_node_address='192.168.0.2'
wsrep_node_name='node2'
wsrep_sst_method=xtrabackup
wsrep_sst_auth=root:rootpa$$

# 4. additional "frequently used" wsrep settings
wsrep_node_incoming_address='192.168.10.2'
wsrep_sst_donor='node3'
wsrep_slave_threads=16
{% endhighlight %}

######4. Starting MariaDB
The first node of your cluster will need to be started with the command `sudo service mysql start --wsrep-new-cluster`.
All other nodes can be started with `sudo service mysql start`.

By default on RHEL6 the logging is directed to /var/lib/mysql/host-name-goes-here.err

The first time I ran start the output just kept concatenating with a ... and never started.  The logfile indicated something about InnoDB storage engine, removing the ib files with `rm -f ib*` did the trick since.

####Testing
Here are some statements you can run to see the replication in action that I grabbed from a [DigitalOcean tutorial](https://www.digitalocean.com/community/articles/how-to-configure-a-galera-cluster-with-mariadb-on-ubuntu-12-04-servers) I followed:
{% highlight sql linenos %}
CREATE DATABASE playground;
CREATE TABLE playground.equipment ( 
    id INT NOT NULL AUTO_INCREMENT
  , type VARCHAR(50)
  , quant INT
  , color VARCHAR(25)
  , PRIMARY KEY(id));
INSERT INTO playground.equipment (type, quant, color)
  VALUES ("slide", 2, "blue");
SELECT * FROM playground.equipment;
{% endhighlight %}
 
####Load balancing

Once everything is setup, you will need to distribute the workload to each server in the cluster.  A common setup is to use HAProxy.  I used a network VIP, but here are a few resources to lookover that go into detail in how to setup HAProxy.

*  [MariaDB Galera Cluster with HA Proxy and Keepalived on Centos 6](http://www.thenoccave.com/2013/12/30/mariadb-galera-cluster-ha-proxy-keepalived-centos-6/)
*  [Avoiding Deadlocks in Galera - Set up HAProxy for single-node writes and multi-node reads](http://www.severalnines.com/blog/avoiding-deadlocks-galera-set-haproxy-single-node-writes-and-multi-node-reads)
*  [High Availability: MySQL Cluster with Galera + HAProxy](http://blog.secaserver.com/2012/02/high-availability-mysql-cluster-galera-haproxy/)