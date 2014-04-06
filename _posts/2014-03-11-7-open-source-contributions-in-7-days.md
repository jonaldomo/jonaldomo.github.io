---
layout: posts
title: 7 Open Source Contributions in 7 Days
author: John Moses
tags: [open source, chrome]
---

Today I am committing myself to contribute to seven different open source projects over the next seven days.

### Open Source Aspirations
I have always been enamored by open source projects and how people can dedicate time and energy to them outside of their day to day jobs.  I tried to give it a go a few years ago with java projects over at Apache, but ultimately gave up as I felt over my head.  Which looking back on it, I feel anybody would be in over their head trying to jump into an Apache project.  One of the most popular projects Apache HTTP server has 2,267,859 lines of code.  Experience has taught me that starting small with a new code base increases the chances of developer success.

### Google Chrome Plugins
I actually made my first commit today before I sold myself on the idea of committing to seven different projects in seven days.  I use a syntax highlighter in Google Chrome called [Sight](https://github.com/tsenart/sight) when browsing the web viewer that sits on top of code repository at work.  We have a Grails project that had a bug reported and I was trying to reference the line of code I thought contained the error, but Sight did not have support groovy files.  I modified the Google Chrome plugin to add .groovy files to pick up the same highlighting rules that java source code files had and Voila! I was in business.

<img src="https://f.cloud.github.com/assets/166513/2387380/463e1506-a936-11e3-9f32-ac54aaa5cfde.png" style="height:400px; padding: 10px"/>

### Conclusions
I forked the repo and made a pull request, but while I was at it I took a look at the comments and found two others that I thought I could accomplish as well.

[#46 support for groovy](https://github.com/tsenart/sight/pull/46)
<br>[#47 support for local files](https://github.com/tsenart/sight/pull/47)
<br>[#48 font size in options](https://github.com/tsenart/sight/pull/48)

<img src="https://f.cloud.github.com/assets/166513/2387833/a486f2e0-a93b-11e3-847e-35a4a9854735.png" style="height:400px; padding: 10px"/>

While the code changes were not huge in size, I do believe I made a good contribution.  On to find the next project for tomorrow, any suggestions?

Comments can be found over at [Hackernews](https://news.ycombinator.com/item?id=7382047).