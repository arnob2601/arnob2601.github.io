---
layout: post
title: Write your own YouTube Ad-blocker
date: 2025-03-01 08:57:00-0400
description: An attempt to custom YouTube Ad-blocker.
tags: adblocker
categories: hands-on-learning
---


# Building a Custom YouTube Ad Blocker: A Learning Experience

So, I attempt to make my very own Ad-blocker for YouTube. Even though, I realize that we can just use a browser called `Brave` to save us the trouble or use extensions like `uBlock` that mostly works. But the latter is often a hit or miss and there is NO FLEX in it! 

But trying to get it to work felt like an exciting experience, even though I could not get it to work in a usable way.

### Why I Wanted an Ad Blocker

So, I was running YouTube Premium as part of my friend’s family group, and he has been taking care of the service so far, but the service got suspended recently. But now: once perfectly normal YouTube ads started feeling like draining my time worth of eternity. I am very sure that it was just an exaggerated feeling and like one of those curses; that once you experience it, then there is just no going back to the former state.

But hey, I do not have much knowledge about how these browsers work, but at least I know that there are extensions that you could install on your browser and that would do the job of blocking the Ads for you. That I feel like is something that I can get started with!

### The Problem with Traditional Ad Blockers

Hmm, I used to have those too, what happened? Why they stopped working all of a sudden swarming with unlimited ads that sometimes I cannot even skip; sometimes I am forced to watch a full ad, or two in the worst. Also getting the premium service for the last year have spoiled me and weakened my basic survival instincts (only for the digital world 🙃).

Also the Ad-blocker that runs only on extension needs to be maintained as the core logic behind them working is: basically setting some rules that needs to be adapted to YouTube’s Ad-dispensing approach that are also adapting and fighting back to push the Ads. So, they always need to be maintained. If you let them go stale or do not use a 3rd party variant do so, then chances are you are going to see Ads.

### So, a few things in my mind:

1. I no longer want to keep seeing ads on YouTube when I play a video for starters.
2. I cannot get the Premium as Google has not hired me and I do not make enough to pay them for the service. If the circumstances changes, I will definitely reconsider and subscribe ;)
3. I do not wish to use any 3rd-party extensions as most are either shady or requires regular maintenance.
4. I do not want to use Brave as it just makes things too easy. But to be honest, I just do not wish to quit using the current browser (Edge, yes, I am expecting tons of hate and ridicule at this point but bear with me please!) just because I do not intend to pay for the ad-free service or because the browser does not have built-in ads blocking capability.

### The Insight That Led to My Solution

So here it goes. First, I wanted to learn that why my trusty extension that I used to use 2 years ago is no longer working out of the box. It seems like YouTube had been making changes on their end that made it difficult for the ad blocking extension to work the way they worked.

So? I do not know but I noticed that when the YouTube links are embedded in any website no ads pass through. This bit of insight struck me when I was going over the `NeetCode` videos on YouTube. 

When I watched the video on YouTube (as in www.youtube.com) it would start off with an ad and every time I scrolled the slider I would meet with another ad. But when I watch the same video but from [neetcode.io](http://neetcode.io) that has it embedded no-Ads!

To me the most frustrating experience was like 15 seconds Ad - 1 second video playback - me realizing this is not the part I want to watch with 1 second scrolling - bam! another 15 seconds Ad then not scrolling, again Ad after 3 or 5 minutes. THIS just was not working out for me.

### Testing the Embedded Video Trick

So, if I can always embed the link of the video that I want to see to some other site they just do not show ads. You can check if this works in practice. Just a YouTube link, go to [notion.com](http://notion.com) (Notion is a cloud-based workspace that helps you organize and collaborate on notes, tasks, wikis, and databases) paste the link there; they will auto embed it within the notion page and Voila! Your YouTube video no longer has ads and you can keep on scrolling and no other ad will pop up as well.

### Automating the Process

But as you can see, every time I want to see an Ad-free video, I do not want to open another website and copy the link there and then play from there, this again is too much work and won’t cut it for me (as you can tell by this point, I am so very LAZY).

So, I know that if I can embed the link somehow to a website, I can have Ads-free experience. But do I know enough about it to get it done by myself? NO!

### Call for Help

I turn towards the AI, my trusty friend with lots of information and knowledge as well. So, first thing I needed was a listener on browser end that tracks if I am visiting a YouTube video link; if the link is in fact a YT-video link, then we close the tab and embed the link to a locally hosted website and open it on a new tab. 

### How it Works

The listener is implemented as a browser extension and the [localhost](http://localhost) that will play my embedded video with ad-free experience is implemented using `flask` and `flask-cors` . As of now they are decoupled. The extension needs to be loaded to the browser and the server needs to be running to catch the links and display the video on localhost.

As I said before this workaround is working with the insight of no Ads getting transmitted over non-youtube links when they are embedded. Since it did not seem feasible to copy and paste the links somewhere manually, I came up with this small hack. Again, nothing very useful but still little something when you have good enough authority to by-pass the Ads with the a few lines of code that you write ;)

I wrote this blog as a learning experience that was pretty exciting to me. If you wish to just check out how it works you can use the Git repo: https://github.com/arnob2601/YouTube-AdBlocker, or just write a few lines of code and integrate it (take help from your friends/AI if you feel stuck). Happy Ad-blocking!