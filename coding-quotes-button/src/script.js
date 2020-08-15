$(document).ready(function() {

  function getQuote() {
    
    var displayedQuote = '';

    var quotes = ["There is no try", "In theory, theory and practice are the same. In practice, they’re not.", "Computers are good at following instructions, but not at reading your mind.", "It is what it is.", "It's fine.", "They don't make bugs like Bunny anymore.", "There's no day off for hairstyles", "First, solve the problem. Then, write the code."];
    var author = ["-Yoda", "-Yogi Berra", "-Donald Knuth", "-Hussain", "-Farid", "-Olav Mjelde", "-Nazia", "-John Johnson"];

    var displayedQuote = Math.floor((Math.random() * quotes.length));

    var randomQuote = quotes[displayedQuote];
    var randomAuthor = author[displayedQuote];
    
    

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text='+randomQuote).attr('target', '_blank');
   
    

  }

  $(".btn").on("click", function() {
    getQuote();
  });

});

var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

var x = 200,
  y = 165,
  // Radii of the white glow.
  innerRadius = 15,
  outerRadius = 178,
  // Radius of the entire circle.
  radius = 60;

//js for canvas circle
ctx.beginPath();
var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
gradient.addColorStop(0, 'white');
gradient.addColorStop(1, 'green');
ctx.arc(200, 180, 179, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = gradient;
ctx.fill();