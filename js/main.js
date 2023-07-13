var Quotes = [ 
    {
        author : "Oscar Wilde" ,
        quote : "“Be yourself; everyone else is already taken.”"
    },
    {
        author : "Marilyn Monroe" ,
        quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
    },
    {
        author : "Albert Einstein" ,
        quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe..”"
    },
    {
        author : "Frank Zappa" ,
        quote : "“So many books, so little time”"
    },
    {
        author : "Marcus Tullius Cicero" ,
        quote : "“A room without books is like a body without a soul”"
    },
];



var btn = document.getElementById('btn');
var qoute = document.getElementById('random-qoute');
var author = document.getElementById('random-author');

var currentNumber ;

function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * Quotes.length) ;
    if (randomNumber ===  currentNumber) {
        randomNumber = Math.floor(Math.random() * Quotes.length) ;
    }
    currentNumber = randomNumber ; 
    return randomNumber ;
}

function getQuotes () {
  var randomQuotes = Quotes[getRandomNumber()];
  qoute.innerHTML  = randomQuotes.quote ;
  author.innerHTML  = randomQuotes.author ;
}


btn.onclick = getQuotes

