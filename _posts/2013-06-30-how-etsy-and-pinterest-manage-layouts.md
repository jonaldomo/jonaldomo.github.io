---
layout: posts
title: How Etsy and Pinterest manage their layouts
---
### Tight grid layouts with Masonry or Isotope
Both Masonry and Isotope accomplish the same thing -- using the available 
space in the most efficient way.

### Masonry
Masonry is available at http://masonry.desandro.com/. You can use it via cdnjs 
with a script tag:
//cdnjs.cloudflare.com/ajax/libs/masonry/3.0.0/masonry.pkgd.js

Or you can use with Bower:
bower install masonry

I recommend just using the cdnjs so you don't have to mess with the build.  The 
dependiences are not built automatically, so you have to run their build script 
to package in the three or four dependencies.  (Notice the .pkdg.js at the end 
of the filename.

### Isotope
