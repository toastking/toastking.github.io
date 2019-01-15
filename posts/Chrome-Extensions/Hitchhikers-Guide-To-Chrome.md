---
layout: post
title: A Hitchhiker’s Guide to Chrome Extension Development
date: "2019-01-14"
---

The Chrome Extensions API’s have surprisingly good documentation, but there’s no real “recipes” section. They give you all the parts you need then say “go have fun”. So this post will go through some of the rough edges I ran into when I started working on a Chrome extension.

For security, Chrome heavily sandboxes all its extension code. You use **messages** to communicate with disparate pieces of code.  Chrome extension api’s are also event based, such as browser actions or  devtools

There’s two main types of Chrome scripts, [content scripts](https://developer.chrome.com/extensions/content_scripts) and [background scripts](https://developer.chrome.com/extensions/background_pages#manifest). _Background scripts_ run based on listening to events. _Content scripts_ are injected in to the web page but they can listen to messages from the background scripts. This is how you can trigger DOM changes from an extension.

## How Do Chrome Extensions interface with the DOM?
The content scripts usually hold code to communicate with local storage and the DOM.
One of the things that confused me when I started working with Chrome API’s was how content scripts are run. Unlike background scripts, content scripts can either be injected programmatically or by declaring something in the _manifest_ so it runs on certain urls. 

The other slightly confusing thing about content scripts is they are injected but not removed when you inject the script again. That means if you want to have a background script trigger a DOM event over and over you should inject the script _once_ and then add code to listen for messages from the background script.

In your _content script_ call `chrome.runtime.onMessage.addListener` to listen for events from you background script. That way the extension injects the script into the DOM once and then will run whatever code is inside the listener whenever the background script fires off that message.

## How can I debug the different scripts?
Chrome has support for the javascript `debugger;` statement. You can use that to programmatically put down breakpoints in the different files. _Content Scripts_ can be debugged using the devtools on the current page.

_Background scripts_ are a bit trickier because they’re not on the DOM.  You can access the devtools for a background script by going to `chrome://extensions` and then clicking on the _Background Page_ link for you Chrome extension. This assumes you [loaded it as an unpacked extension](https://developer.chrome.com/extensions/getstarted). 

## How do HAR Files work?
Chrome’s network panel uses[HTTP Archive files](https://en.wikipedia.org/wiki/.har)to display network information. This is how you can timing information for different network requests in your background scripts. You can use the [chrome network apis](https://developer.chrome.com/extensions/devtools_network)to get various HAR information. This is how I was able to get timing information for API calls.


