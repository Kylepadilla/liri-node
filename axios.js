require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var axios = require("axios");




var Run = function (){
    this.spotify = function(queryMusic){
        
            spotify.search({
                type: 'track',
                query: queryMusic
            }).then(function(data) {
                
                var spotifyResponse = data.tracks.items[0]
                console.log("---------------------------------\n");
                console.log("Artist: " + spotifyResponse.artists[0].name);
                console.log("Song name: " + spotifyResponse.name);
                console.log("Link to song: " + JSON.stringify(spotifyResponse.artists[0].external_urls).slice(11,-1));
                console.log("Album: " + spotifyResponse.album.name);
                console.log("\n---------------------------------\n");
              })
              .catch(function(err) {
                console.log("Spotify Error:" + err);
              })
            },
        

    this.concerts = function(artist){

        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(URL)
        .then( 
           function(response){
            for(var i = 0; i < response.data.length; i++) {

                var events = response.data[i]
                var eventTime = events.datetime
                var momentTime = moment(eventTime).format("L"); 

            console.log("---------------------------------");
            console.log("Venue: " + events.venue.name);
            console.log("Location: " + events.venue.city + ", " + events.venue.region + ", " + events.venue.country);
            console.log("Date: " + momentTime);
            console.log("---------------------------------");
        }
    })},
        


    this.movies = function(movieTitle){
        var URL1 = "http://www.omdbapi.com/?t=" + movieTitle + "&apikey=7ab220f2&"

        axios.get(URL1)
        .then(
          function(response) {
                var movie = response.data
                var tomatoes = movie.Ratings[1].value
                var tomRatings = tomatoes
            console.log("\n---------------------------------")
            console.log("Title: " + JSON.stringify(movie.Title));
            console.log("Realse Year: " + JSON.stringify(movie.Year));
            console.log("IMDB Rating: " + JSON.stringify(movie.imdbRating));
            console.log("Rotten Tomatoes: " + JSON.stringify(tomRatings));
            console.log("Country: " + JSON.stringify(movie.Country));
            console.log("Language: " + JSON.stringify(movie.Language) + "\n");
            console.log("Plot: \n" + JSON.stringify(movie.Plot)+"\n");
            console.log("Actors: " + JSON.stringify(movie.Actors));
            console.log("---------------------------------")

              })
            }
}


module.exports = Run


