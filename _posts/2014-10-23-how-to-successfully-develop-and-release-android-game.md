---
layout: posts
title: How to successfully develop and release an Android game
author: John Moses
tags: [game development, android, interview]
categories: [blog]
permalink: /2014/10/23/how-to-successfully-develop-and-release-android-game.html
---


I talked with [Henrique Boregio @apuraditos](http://twitter.com/apuraditos) tonight about his game Tiny Words that he worked on with Marcos Almonacid at night while working full time as developers in Argentina.  Tiny Words a fast paced word tile game that you play against another person - either random or a Facebook friend.  Think Scrabble with Friends and Jumble mixed together.  It is on the [Google Play Store](https://play.google.com/store/apps/details?id=com.thirtymatches.apuraditos).

<img src="/images/2014-10-23-tiny_1.png">
<img src="/images/2014-10-23-tiny_2.png">
<img src="/images/2014-10-23-tiny_3.png">

### Background

**John Moses: Hey Henrique!**  
Henrique Boregio: Hey  

**JM: Did you work on Tiny Words yourself?**  
HB: I developed the client side (the Android app) and a colleague of mine developed the backend.  

**JM: How did you guys meet?**  
HB: We’ve been working together at the same company for a the past couple of years.

**JM: Are you guys both full time developers?**  
HB: Yeah, I mainly do Android development full-time and he works on the backend, either in ruby on rails or erlang.  

**JM: Where do you guys live at?**  
HB: Both in Buenos Aires, Argentina  

<img src="/images/2014-10-23-map.png"><br>
<span class="radius secondary label">For the geographically impaired</span>

**JM: You don't hear about erlang alot.  Is that big in your area?**  
HB: Not really. There aren’t many erlang developers here in Argentina, but our company does a lot of erlang work, so the few erlang developers in Argentina, tend to work with us.  

**JM: What kind of stuff do you work on full time?**  
HB: Mainly mobile (iOS and Android) apps their backend infrastructure.  

### Getting started

**JM: How did you get the idea for the game?**  
HB: We actually both wanted to do something on our own and went back and forth with a couple of ideas. Our initial idea was to actually make a sort of real time poker game that you played with groups of friends, similar to a whatsapp group (which is quite popular here in Argentina), but transforming it into a poker style game. After a few back and forths, we decided to work on a game building game, and after a few more iterations, it became what it is now.  

**JM: How long from when you started with your idea of the poker game to what Tiny Words is now?**  
HB: Wow, well, I guess we discarded the poker idea pretty fast, mainly because I thought it would be too demanding (graphically) on the client side. We’re both developers, so graphics design isn’t really our strong points, so I figured the chances we had of making a good looking poker game making the graphics ourselves, were pretty slim ha.  

**JM: I actually thought the graphics were really polished, did that take a lot of time to get right?**  
HB: I did actually. The initial prototype of the board for example only had a basic grid layout with black and white tiles. As time passed, we put more effort into the design part. What really helped was releasing a beta version about a month ago. We sent it out to friends and also a couple of subreddits and got some nice feedback. That helped us not only fix bugs, but also get some feedback on the UI part of the app.  

**JM: How many beta testers did you end up getting? How usable was the game? How long ago was that? How did you distribute it to them?**  
HB: I think it was about a month ago (give or take a couple of weeks) and that version was pretty usable. You could signup, search for players, have access to your stats, etc, but the UI was still kind of raw and also the game had quite a few bugs. This beta release helped us to test out the game in the real world and thanks to crashlytics, keep us informed of the bugs. In the distribution side, we used Google Play’s beta release feature, which let’s you distribute a beta version of the app to a small amount of users, before it goes live to production.  

<img src="/images/2014-10-23-tiny_4.png"><br>
<span class="radius secondary label">Early shot of the beta</span>

**JM: How long did you work on it up to that point?**  
HB: I think the first commit was probably about 6-7 months ago. I probably worked on the Android app by myself for the first 2-3 months and once I had the basic gameplay right, my colleague (Marcos Almonacid) joined me to start working on the server side. So I’d say, but the time of the beta release, we had probably put in about 4-5 months of work in total.  

**JM: How did you stay motivated on a side project for that long? Did you work on anything else while working on the game?**  
HB: We both have pretty intensive full time jobs, so that kept us busy, but after work, we would try to work at leas an hour or 2 on the project, and then more during the weekends. I think what motivated us was that we actually found the game fun while we were making it. While testing, we would both complete the rounds and compare scores, and since day after day we would see improvements both at the client side as well as the server side, that sort of motivated us to push towards a finished product and not be content with a simple prototype.  

**JM: Have you developed any other games before?**  
HB: About 2 years ago I developed an Android game called CelebrityPop. I was a trivia game where you would also play with friends and try to guess photos of celebrities which appeared on the screen. Similar to a QuizUp, which of course wasn’t available at that time, but with just this “celebrity picture” category. The game was live for about 1 year. I did relatively well but never got a decent amount of visibility. I think at the end it had about 50.000 downloads or so, but I eventually had to take it down since it wasn’t really growing.  

<img src="/images/2014-10-23-quizup.png"><br>
<span class="radius secondary label">QuizUp</span>

### Marketing
**JM: Did you market Tiny Words in advance?**  
HB: Not really. The closest we had to marketing was our beta release.  

**JM: Have you been monitoring the traffic or downloads at all?**  
HB: We have. We don’t really have exact metrics yet since it’s only been a day since our launch and Google Plays takes a couple of days to update it’s stats, but a few raw metrics we got from our server a few hours ago, showed about 300 registered users. It’s not a lot, but it’s definitely a good start for the first 24 hours since the release, with close to 0 marketing.  

**JM: I see you ended up doing a free game with ads, did you think about other types of monetization?**  
HB: We did get a few users saying that they’d pay 0.99 for an ad-free version of the app, so we’ll definitely have that. But also, we first want to try to understand how the users use the app, how they react to the gameplay, if they like it or now, etc, and once we have those metrics, add some relevant in-app purchasable items.  

<img src="/images/2014-10-23-admob.png"><br>
<span class="radius secondary label">Better than pop ups!</span>

**JM: Is that admob?  Did you look at the other networks?**  
HB: Just admob for now, haven’t really looked into other at the moment.  

### Mobile Development

**JM: How much mockups, specs and requirements did you make if any?**  
HB: None hah. We just sat down and started playing around with the idea. Once we had the basic concept in a somewhat playable prototype, we started implementing the actual gameplay as we went along. Same thing for the server side. We would use the app a couple of times and think “hey, it would be cool to have some stats” and we’d work on that for the next few days. So pretty much the whole development cycle followed this pattern.  

**JM: Is it a native android? Did you consider doing a cross platform framework for easy porting?**  
HB: Yes, it’s 100% Android. If we get a decent amount of users playing the app, we’ll most likely make an iOS version also, but it’s probably going to be native as well. I’ve only played around with a couple of libraries (libgdx for example) but I didn’t want to spend a lot of time learning a new platform before making the game, which is the main reason I chose to go native, since it was something I already had experience in.  

**JM: What did Marcos go with for the backend?**  
HB: He developed it in Ruby on Rails, also since it’s a technology he is pretty comfortable with and was confident he could quickly develop the backend. For data storage we’re using a combination of PostgreSQL and Redis.  

**JM: Where are you hosting it at?**  
HB: Right now it’s a digital ocean. They offer a great service. Easy to setup, configure, pay, and also they offer SSD disks which really make a difference when you’re reading and writing stuff to the database.  

**JM: Do you have monitoring in the client or service piece?  Like New Relic or something similar?**  
HB: Sure, we’re using New Relic for server side monitoring.  

**JM: Any moments were you did not think the game would get released?**  
HB: I don’t think so. I don’t think any of us expected the app to look as polished as it looks now (the prototypes were pretty nasty ha), so I guess the only doubt we had prior to releasing was agreeing on a good enough interface. We eventually landed at the UI we have now  

**JM: I think its awesome, can you tell how long I played it today? There was never a moment when I was not instantly hooked up with a random opponent.**  
HB: Thanks! hah I guess I could, I’d have to look into google analytics and find you.
HB: Yeah, we noticed there was also people playing the game. I actually got an email from a user telling me to cut down on the ‘bots’ since they were annoying haha. Needless to say, we don’t have any bots playing the app, they were all real users.  

**JM: I'm out of questions anything else you would like me to post?**  
HB: Hum not really, I just think it’s great that people do these kinds of blog posts. I’ve found them interesting since they’re real stories. You’re not talking about an app that was made over the weekend and got 1 million downloads during the first hours and stuff, you’re talking about a normal app that had a good day, that’s it. Where it goes from here, who knows ha, but I think people enjoy these kinds of down to earth stories more than the 1 hit wonder stories, so in that sense, thanks for reaching out to me and wanting to write about us!  

<a href="https://play.google.com/store/apps/details?id=com.thirtymatches.apuraditos"><img src="/images/2014-10-23-play.png"></a>
