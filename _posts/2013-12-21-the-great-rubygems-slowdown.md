---
layout: index
title: The great rubygems slowdown
author: John Moses
---

It is the first day of my nine day Christmas break and I thought 
it would be cool to graph some statistics about rubygems.  The 
front page of rubygems only shows data on the most popular, but 
I am really interested in seeing recent activity.  Specifically, 
I would like to see a line graph of the release date of the 
latest version of each gem.

### Getting the data

After a little searching, I was unable to find the data in the 
format necessary for putting together a graph.  And anyway, I was 
interested in scraping the site.  My tool of choice is the [nodejs 
cheerio library](http://matthewmueller.github.io/cheerio/).  The 
gem executable can give us a list of each gem by running `gem list 
--remote`.  Fortunately, each gem has its own homepage with a 
nice URL.  e.g. Rails can be found at http://rubygems.org/gems/rails

{% gist 8075189 %}
