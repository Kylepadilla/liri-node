
var Run = require("./axios");
var r = new Run();
var fs = require('fs')

var search = process.argv[2];
var term = process.argv.slice(3).join("");
var termp = process.argv.slice(3).join("+");

// var songDefault = 'ace of base';
// var movieDefault = "mr.nobody"

function execute(){

if (search === "spotify") {
  console.log("Searching for song info...");
  r.spotify(term);

if (search === "event") {
  console.log("Searching for event info...");
  r.concerts(term);
  console.log(term);
}
if (search === "movie") {
  console.log("Searching for movie info...");
  r.movies(term);
}}
}
execute();

if (search === "random") {
    fs.readFile('random.txt',"UTF-8", function(err,data) {
        if (err) {throw err};

        var randomText = data.split(",")
        var commandReplace = randomText[0]
        var x = randomText[1].replace(/\s/g, '+');
        var y = x.replace(/\"/g, '');
        var inputTest = y
        search = commandReplace
        term = inputTest
        execute()

})}


