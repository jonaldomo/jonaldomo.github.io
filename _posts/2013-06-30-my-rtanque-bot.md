---
layout: posts
title: My RTanque bot
author: John Moses
---
### RTanque
[KCRuby](http://www.meetup.com/kcruby/) is running a RTanque contest right now.  I heard about this when [Wes Garrison](https://twitter.com/wesgarrison/) gave a presentation on Ruby at Cerner's internal tech conference and gave a plug to KCRuby.

[RTanque](https://github.com/awilliams/RTanque) is a tank game where you create your own tank (a bot) and target and shoot other tanks.  It is based on [Robotwar](http://corewar.co.uk/robotwar/) that is back from the 1970s.  The underlying framework for RTanque is written in Ruby and uses the [Gosu library](http://www.libgosu.org/) , a 2d game platform that is available for IOS and soon Android.  Your bots are written in Ruby and look like this:

{% highlight ruby linenos %}
class Moses < RTanque::Bot::Brain
  NAME = 'Moses'
  include RTanque::Bot::BrainHelper

  TURRET_FIRE_RANGE = RTanque::Heading::ONE_DEGREE * 1.0
  
  def tick!
    self.evade
    if(self.nearest_target)
      target = nearest_target
      kill(target)
    else
      scan
    end
  end

  def evade
    command.speed = MAX_BOT_SPEED
    command.heading = sensors.heading + 0.02
  end

  def kill(target)
    self.command.radar_heading = target.heading
    self.command.turret_heading = target.heading
    if self.sensors.turret_heading.delta(target.heading).abs < TURRET_FIRE_RANGE
      self.command.fire(MAX_FIRE_POWER)
    end
  end

  def nearest_target
    self.sensors.radar.min { |a,b| a.distance <=> b.distance }
  end

  def scan
    self.command.radar_heading = self.sensors.radar_heading + MAX_RADAR_ROTATION
  end
end 
{% endhighlight %}

The RTanque repo has instructions on setting the game up.  You will need version 1.9.2 of Ruby or higher.  By default Mac has 1.8.7 installed, so you will have to use [RVM](https://rvm.io/) to get it going.  Here is a screenshot of the actual game in action.

<img src="{{ site.url }}/images/rtanque.png" />
