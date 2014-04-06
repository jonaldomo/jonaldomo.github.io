---
layout: posts
title: Moving from Subversion to Git
author: John Moses
tags: [subversion, git, svn, repo]
---

Subversion was the first revision control system I learned and used both professionally and personally.  Using it professionally was easy, as the server was already setup.  On a personal basis it was more work as you had to setup a server.  That problem was solved by distributed revision control systems like git, mercurial and bazaar.  I think using any revision control systems puts you in the lead anyway.  But being able to setup a repo by just typing `git init` and not have to configure a server is cool.  

#### Goodbye old friend

What really motivates me to switch is the ability to use multiple remote origins (think servers with Subversion).  Not to mention that finding a free remote origin like Github or Bitbucket is relatively easy.  And with Atlassian tools like Jira, commit hooks are super easy and do not require complex configuration (subversion with bugzilla anybody?)

Other people have problems too (see below list).  My personal favorite is file locks.  Yuck.  

######Merging problems
*  [What Mother never told you about SVN Branching and Merging](http://designbygravity.wordpress.com/2009/10/19/what-mother-never-told-you-about-svn-branching-and-merging/)
*  [It's Time to Fix Subversion Merge](http://blog.assembla.com/assemblablog/tabid/12618/bid/58122/It-s-Time-to-Fix-Subversion-Merge.aspx)

######Locking problems
*  [Working copy XXX locked and cleanup failed in SVN](http://stackoverflow.com/questions/127932/working-copy-xxx-locked-and-cleanup-failed-in-svn)
*  [Understanding Subversion’s Problems](http://ventspace.wordpress.com/2011/03/09/understanding-subversions-problems/)

#### Getting down with Git
<img src="{{ site.url }}/images/2014-03-21-daftpunktocat-thomas.gif" style="height:200px; float:right; padding: 10px"/>
Github is really cool.  It is not the only reason I prefer Git, but it is definitely at the top of the list.  In a quick nutshell, here is why I get down with git (see what I did there?):
*  Git will allow you to have multiple local branches that can be entirely independent of each other and the creation, merging and deletion of those lines of development take seconds.
*  Git has a staging area, so you can see what you need to commit, have already added, etc.
*  Easy to learn for newer team members, documentation is everywhere.  Have you seen [Codeschool's Git Real](https://www.codeschool.com/courses/git-real)?

[More reasons](http://thkoch2001.github.io/whygitisbetter/) are eloquently documented by Scott Chacon, a founder of Github


#### Moving a project from Subversion to Git
Now that you are convinced you should move your project out of Subversion and into Git there are a few steps you need to take so that you can save history.

First, you need to make sure each user in the auth.conf file in Subversion has a line in an empty text file that links to there name and email address.

Sample auth.conf file:  
`JMOSES=jomama,JOMAMA`  
`NDOGG=ruggster,RUGGSTER`  

Matching authors.txt file:  
`jomama = John Moses <moses.john.r@gmail.com>`  
`JOMAMA = John Moses <moses.john.r@gmail.com>`  
`ndogg = Nate Dogg <nate.dogg@arecordcompany.com>`  
`NDOGG = Nate Dogg <nate.dogg@arecordcompany.com>`  

Second, create a directory to store your new repo.
`mkdir project && cd project`

Create a new git repo
`git init`

Then checkout the project from subversion, passing --no-metadata is actually recommended against but it worked for me so I am posting it here.
`git svn init http://svn.com/proj --no-metadata`

Pass your new authors file to match up users, if done properly your Github user account will now show your contributions  
`git config svn.authorsfile ~/authors.txt`

And then bring it home  
`git svn fetch`

I actually had to run fetch a few times as I was burned by the case sensitivity of the auth.conf/authorsfile, which is why I have multiple lines for different users.

Running `git svn fetch` actually saves your progress too, which is nice for large projects.