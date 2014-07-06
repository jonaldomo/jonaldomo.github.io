---
layout: posts
title: Monte Carlo and the Bomb
author: John Moses
tags: [statistics, monte carlo, history]
categories: [blog]
permalink: /2014/05/27/monte-carlo-and-the-bomb.html
---

The Manhattan Project was a research and development project that produced the first atomic bombs during World War II.  Two of the mathematicians on the project were John von Neumann and Stanislaw Ulam.

>John von Neumann (/vɒn ˈnɔɪmən/; December 28, 1903 – February 8, 1957) was a Hungarian-American pure and applied mathematician, physicist, and polymath. He made major contributions to a number of fields, including mathematics (foundations of mathematics, functional analysis, ergodic theory, geometry, topology, and numerical analysis), physics (quantum mechanics, hydrodynamics, and fluid dynamics), economics (game theory), computing (Von Neumann architecture, linear programming, self-replicating machines, stochastic computing), and statistics. He was a pioneer of the application of operator theory to quantum mechanics, in the development of functional analysis, a principal member of the Manhattan Project and the Institute for Advanced Study in Princeton (as one of the few originally appointed), and a key figure in the development of game theory and the concepts of cellular automata, the universal constructor, and the digital computer.

[John von Neumann](http://en.wikipedia.org/wiki/John_von_Neumann)

>Stanisław Marcin Ulam (pronounced ['staɲiswaf 'mart͡ɕin 'ulam]; 13 April 1909 – 13 May 1984) was a renowned Polish-American mathematician. He participated in America's Manhattan Project, originated the Teller–Ulam design of thermonuclear weapons, invented the Monte Carlo method of computation, and suggested nuclear pulse propulsion. In pure and applied mathematics, he produced many results, proved many theorems, and proposed several conjectures... From the publication of his first paper as a student in 1929 until his death, Ulam was constantly writing on mathematics. The list of Ulam's publications includes more than 150 papers. Topics represented by a significant number of papers are: set theory (including measurable cardinals and abstract measures), topology, transformation theory, ergodic theory, group theory, projective algebra, number theory, combinatorics, and graph theory. In March 2009, the Mathematical Reviews database contained 697 papers with the name "Ulam"

[Stanislaw Ulam](http://en.wikipedia.org/wiki/Stanislaw_Ulam)

In 1945 while John and Stanislaw were working on the Manhattan Project, the first electronic general purpose computer named the ENIAC - Electronic Numerical Integrator And Computer was created.  On an interesting side note, John William Mauchly and J. Presper Eckert designed the ENIAC even though John von Neumann was coined the "Father of the Modern Computer".  The whole story is documented by Scott McCartney in [Eniac: The Triumphs and Tragedies of the World's First Computer ](http://www.goodreads.com/book/show/720730.Eniac)

<img src="/images/2014-05-27-Eniac.jpg" alt="ENIAC">

The ENIAC was initially designed to calculate artillery firing tables for the United States Army.  John von Neumann thought that a better use of the ENIAC was to run through a computational model of a thermonuclear reaction.  Together with Ulam, the two created a possible statistical approach to running realistic simulations on von Neumann's thermonuclear reaction model.  The two needed to run statistical samplings at a very high volume, with the volume so high they could not input all the numbers themselves and came up with the idea to pass in random numbers.  The idea of getting a random number generated reminded the group of Ulam's uncle who loved to gamble at the Monte Carlo, but did not have any money and had to ask relatives whenever he wanted to go.

A more detailed account is detailed by Nicholas Metropolis, a physicist who worked at Los Alamos with von Neumann, entitled [The Beginning of the Monte Carlo Method](http://library.lanl.gov/cgi-bin/getfile?15-12.pdf)