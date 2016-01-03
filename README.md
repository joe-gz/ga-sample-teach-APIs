# APIs

## Learning Objectives

- Review what is an API
- Consider the use of external APIs
- Build an app that makes use of an external API
- Understand how to manipulate the returned data and create different requests

## Define an API?

**Can someone remind me what API is and what an API does?**

An API can both collect and provide data for public use.  API stands for "Application Program Interface".  It allows developers to access certain raw data behind a given web app.

As developers, we can create our own APIs, connect to external APIs, or both!

**Can anyone think of some sites that would have useful APIs?**

* https://github.com/Giphy/GiphyAPI
* http://www.omdbapi.com/
* https://developers.google.com/maps/?hl=en
* http://espn.go.com/apis/devcenter/
- Oh wait, forget that last one :(
  Some companies choose to keep their data private!

## Using an External API

Let's get started actually building an app that utilizes an external API where the data are called through AJAX requests in Javascript. For this, we're going to use the OMDB API to build a simple movie search tool.  Clone down this repo and open it up in Atom

## Intro

Right now we have the basic HTML setup and some empty Javascript function.  If you open the index.html file in your browser, you will see you have a basic input field, but nothing happens when you try to search! We'll get into that right now:
* note, there is a solution branch here if you need to check your work later!

We are going to use jQuery here, as it provides a library to make an "AJAX" (Asynchronous Javascript and XML) call.  
