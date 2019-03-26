
var Run = require("./axios");
var r = new Run();
var fs = require('fs')

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

var songDefault = 'ace of base'

function execute(){

if (search === "spotify" && term !== "") {
  console.log("Searching for song info...");
  r.spotify(term);
}else {
      r.spotify(songDefault)
    }

if (search === "event") {
  console.log("Searching for event info...");
  r.concerts(term);
}
if (search === "movie") {
  console.log("Searching for movie info...");
  r.movie(term);

}
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
        console.log("it:  " + inputTest)
        execute()

})}

