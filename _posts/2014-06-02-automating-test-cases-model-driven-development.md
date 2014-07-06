---
layout: posts
title: Automating test cases with model driven development
author: John Moses
tags: [testing, model driven development, automation]
categories: [blog]
permalink: /2014/06/02/automating-test-cases-model-driven-development.html
---

I watched Bob Binder present on 'Model Driven Development - Taking BDD/ATDD to the Next Level' recorded at Cerner Corporation and was blown away when I saw him automate every single test case.  

Video can be found at [Youtube](https://www.youtube.com/watch?v=OSlm6F8YmKc&feature=youtu.be) 

<img src="/images/2014-06-02-binder.png">

###What is it?
Software bugs are found in every code set. Some industries, like aerospace, on average have less bugs per 1000 lines of code than others, but bugs can be found everywhere.  In the past decade test driven development practices have become popular and have successfully decreased the number of bugs.  Test code like production code is still technical debt and over time as production code changes, the test code will require maintenace as well.  Enter model drive development tools like Microsoft's Spec Explorer.  With Spec Explorer you maintain a test model, and the rest follows through code generation tools.  For instance, the developer writes one test model and describes some behaviors and properties and a test suite is generated and ran.  This allows the developer to not have to maintain all the test cases, but just the model.  Additionally, automating the test cases solves problems such as ambiguous, missing, contradictory, incorrect, redundant and or incomplete test cases.

###Takeaways
The biggest takeaway for me was the test case generation.  Test models that can be rapidly revised and automatically regenerated is very cool.

Test cases are easy if your code is written cleanly and broken up in small functions in logical classes.  However, that is not usually the case.  The idea of just writing a test model which generates hundreds of test cases is very appealing.  But to get that point, a clean code base needs to exist.  With this holy grail in mind, I will be more motivated to continue to refactor existing code to make it more clean and testable to get to the place to use model driven development.
