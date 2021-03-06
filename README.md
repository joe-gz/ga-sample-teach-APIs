# Connecting to External APIs Using AJAX

## Learning Objectives

- Review what is an API
- Consider the use of external APIs
- Build a basic app that makes use of an external API
- Understand how to manipulate the returned data and create different requests

## Define an API

**Can someone remind me what API is and what it does?**

An API can both collect and provide data for public use.  API stands for "Application Program Interface".  It allows developers to access certain raw data behind a given web app.

As developers, we can create our own APIs, connect to external APIs, or both!

**Can anyone think of some sites that would have useful APIs?**

* https://developers.google.com/maps/?hl=en
* http://www.brewerydb.com/developers

## Using an External API with jQuery

Let's get started actually building an app that utilizes an external API where the data are called through AJAX requests in Javascript. For this, we're going to use the OMDB API (http://www.omdbapi.com/) to build a simple movie search tool.  Fork and clone down this repo and open it up in Atom.

## Intro

Right now we have the basic HTML setup and some empty Javascript functions.  If you open the index.html file in your browser, you will see you have an input field and button, but nothing happens when you try to search! We'll get into that right now.
* note, there is a solution branch here if you need to check your work later!

We are going to use jQuery here, as it provides a library to make an "AJAX" (Asynchronous Javascript and XML) call.  The "$.ajax" allows us to make the usual HTTP requests: 'GET' 'POST' 'PUT' 'PATCH' 'DELETE', depending on the access we have for a given API.  In this case, we're going to work with 'GET'.

## We Do
**Let's get this set up**

As you can see, we have a couple empty functions right now. ```apiCall``` will be the function through which we create the AJAX request, while ```movie``` will be used to append the returned data to the browser. So, how do we go about setting up the AJAX request? First, Let's see where we need to go to make the request.
Let's go to the OMDB api page, http://www.omdbapi.com/.  You can see that they provide a link to make "data requests". Let's play around with it..


Now that we have the url, let's add the code below to ```apiCall```.

```javascript
// get value from search input field
var keyword = $("input[name='keyword']").val();
var url = "https://www.omdbapi.com/?t="+keyword
$.ajax({
  url: url,
  type: "GET",
  dataType: "json"
}).done ( function(response){
  console.log(response);
  // call movie function below to append movie titles
  movie(response);
}).fail ( function (){
  console.log("fail");
}).always( function(){
  console.log("Something happens");
})
```
The syntax here is pretty straight forward! All we need to do is pass in a url that leads to an API source, the type of request ('GET'), and the type of data to be returned ('json' - JavaScript Object Notation).
The request takes three promises, ```.done```, ```.fail```,```.always```.  These each return functions based on the outcome of the request.  ```.done``` will run if the request is successful.  ```.fail``` will run if it fails. ```.always``` runs in both circumstances, as it allows you to trigger a following action regardless of the outcome.

Let's now try searching for "Star Wars: The Force Awakens" and see what shows up in the console.  It's an object! But where is that coming from exactly?
The JSON file returned by OMDB returns an object containing all of our data, which we can parse through and print to the page.

All we need to do now is append the data to the browser.  Adding the below to ```movie``` will process the response and append any data we want to the body of the browser.

```javascript
  // append movie titles to body
  $('body').append("<div class = movie-title></div>")
  $('.movie-title').append("<p>"+response.Title+"</p>")
  $('.movie-title').append("<img src = '"+response.Poster+"'>")
```

We have a movie search!

## You Do (2-3 mins)
Right now our search only returns movie titles, and a picture.  
Take a couple minutes to explore the data returned to the console and add something else to the browser. What's the movie about? Does it have a high rating?

## Bonus

Try re-doing this exercise, but with the Giphy api source!
* https://github.com/Giphy/GiphyAPI

**Note, this API takes an API key**

## Wrap-up Questions/Discussion

* Some companies choose to keep their data private! (http://espn.go.com/apis/devcenter/)

* What is a good use of external APIs?
* What are the promises we use in an AJAX request?
* What other ways are there to make API requests?

## Resources

* https://www.getpostman.com/
* http://www.programmableweb.com/apis
