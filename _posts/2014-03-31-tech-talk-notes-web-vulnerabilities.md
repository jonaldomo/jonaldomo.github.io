---
layout: posts
title: Tech Talk Notes on Top Web Vulnerabilities
author: John Moses
tags: [owasp, security]
---

I had the opportunity to listen to Michael Coates who is the Chairman of the Open Web Application Security Project OWASP, these are my notes.

<a href="https://www.youtube.com/watch?v=sY7pUJU8a7U" target="_blank"><img src="{{ site.url }}/images/2014-03-31-web-vulnerabilities.png" border="0"/></a>

####What OWASP does
From their [wikipedia page ](https://www.owasp.org/index.php/Main_Page)
> The Open Web Application Security Project (OWASP) is a 501(c)(3) worldwide not-for-profit charitable organization focused on improving the security of software. Our mission is to make software security visible, so that individuals and organizations worldwide can make informed decisions about true software security risks.

Systems are being compromised all the time and it is a costly affair.  In 2013, the global price tag more than $113 billion.  As an comparison drug trafficking accounts around $300 billion.  The vast majority of attacks are from outside sources.  The talk discusses how easy it is to run common attacks that OWASP sees around the world.  

####Common Attacks
Michael walks through how to setup a virtual testing environment and how it works using a proxy server to see the next three attacks in action.

The attacks he goes over in detail:

#####Cross Site Scripting
Injecting javascript and/or HTML to get full control of the page, redirect to a malicious site or hijack user sessions.

How to prevent attack:
Validate user input and encode output to use benign characters
Be mindful of what GET/POST parameters are being used

#####SQL Injection
SQL statements are being ran with user input.  Classic example is in a name search box entering the text: Bob' OR '1'='1 which the attacker hopefully can view all the rows of the table.

How to prevent attack:
Use paramterized queries, eliminating confusion with control characters.
Input validation, only allow alpha numeric characters for example

#####Access Control
Developers assume some parts of app can't be seen, tamperred with or invoked by the user.  This allow attackers to get access to data they should not have privilege to.

How to prevent attack:
Access control is performed server side
Never rely upon security by obscurity
Be careful with identifiers

####General Security
Michael spends some time talking about generals items to protect yourself or your users.

#####Insecure Session Management and how SSL/TLS can be abused. 
He talks about the firefox plugin firesheep http://codebutler.com/firesheep/ that helped bring the topic to light.  Things to do protect your site:  
Use HTTPS throughout web site
Enable HTTP strict transport security

#####Password Storage
Use Bcrypt or PBKDF2 and add a per user salt.  Some bad approaches are using your own algorithm, md5, sha1, base64 encryption.  Correct password hashing protects against offline attacks and brute forcing. Consider using internal SSL to transfer sensitive data.  Monitoring database queries and response sizes are also good ideas.

#####Denial of Service
Overloading a server by exhausting network bandwidth or server cpu and or memory usually through a botnet.  You can protect yourself from a network DDOS by using a CDN or available services, but application DDOS attacks are new and few services exist to protect yourself.

#####Account Takeover
Using credentials that are stolen from large public attacks are used at other sites around the internet