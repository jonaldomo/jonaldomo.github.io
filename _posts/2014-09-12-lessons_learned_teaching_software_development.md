---
layout: posts
title: Lessons learned teaching software development
author: John Moses
tags: [education, tech talk]
categories: [blog]
permalink: /2014/09/12/lessons_learned_teaching_software_development.html
---
I wanted to watch a tech talk from Pycon 2014 that happened in April of 2014.  I scanned the topics to find one that was a little more advanced than an 'Intro to Django' and something that could hold my attention in the middle of a Friday.  I found one called Sofware Carpentry: Lessons Learned by Greg Wilson.

I googled each presentor before watching and found that Greg was the author of a book I really enjoy called Beautiful Code.  Think of Beautiful Code in the same genre as Pragmatic Programmer, Clean Code and Code Complete.

<img src="/images/2014-09-12-beautiful_code.jpg">

The talk is about lessons he has learned over the course of teaching software development to scientists.  His courses focus on four technologies, but describes them in a way I had not heard that really hits home to me.

* Unix shell => task automation
* Git/Github => tracking and sharing
* Python/R => modularization
* SQL => structured data

###Lesson #1: Most scientists think of programming as a tax they have to pay in order to do science.
I think this lesson can be applied to other areas in software development, think unit tests.

###Lesson #2: The curriculum is full.
To add a lesson in programming, you need to remove something from the current curriculum.

###Lesson #3: live coding, Etherpad, sticky notes, minute cards, sign up with friends, editors are hard
People are shy, new tools help these people interact and get help.

###Lesson #4: We know a lot about how people learn and how to teach them.
Book recommendation: How Learning Works, 7 Research-Based Principles for Smart Teaching  What makes people achieve more http://www.slideshare.net/richardcookau/john-hattie-effect-sizes-on-achievement

###Lesson #5: Train your trainers

###Lesson #6: Python 3 made no difference.  We should have fixed the standard library...
This was by far one of the most interesting topics.  Greg describes a paper that compared three languages, Quorum, Perl and Randomo.  Quorumo is a language that in short is constantly being improved in the area of user experience.  Perl is perl.  Randomo is a language where the functions are randomly named based on a random number generator and the ascii table.  Novice programmers found Randomo just as difficult as Perl.  http://neverworkintheory.org/2011/10/24/an-empirical-comparison-of-the-accuracy-rates-of-novices-using-the-quorum-perl-and-randomo-programming-languages.html

The authors later improved the paper and has since been published by the ACM where they find that Java and Perl performed similarly as Randomo.  Ruby and python out did Java and Perl and Quorum outperformed every other language.

Lastly Greg suggests that if we want to dramatically improve the quality of teaching then educational lessons should be treated similarly to an open source project or wikipedia article.