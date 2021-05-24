var addQuote = document.getElementById('addQuote');
var myQuote = document.getElementById('myQuote');
var show = document.getElementById('show');
var postQuote = document.getElementById('postQuote');
var author = document.getElementById('author');
var quote = document.getElementById('quote');
var submitQuote = document.querySelector('.submitQuote');

var quotes = [
    {quote:"Life isn't about finding yourself, it is about creating yourself.", author:'-George Bernard Shaw'},
    {quote:"If you are going down the right path and you are willing to keep walking, eventually you'll make progress.", author:'-Barrack Obama'},
    {quote:"I have far more respect for the person with a single idea who gets there than one with a thousand ideas and does nothing.", author:'-Thomas Edison'},
    {quote:"What is necessary to change a person is to change awareness of himself.", author:'-Anonymous'},
    {quote:"Many people die at the age of 25, but their bodies are not buried until 75.", author:'-Benjamin Franklin'},
    {quote:"If you don't get up every morning with a burning desire to do things, you don't have enough goals.", author:'-Lou Holtz'},
    {quote:"The way to learning is to get rid of the arrogance of knowledge.", author:'-Confucius'}
]


next.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = '"' + quotes[random].quote + '"';
    author.innerText = '"' + quotes[random].author + '"';
})


function addNewQuote() {
    if(myQuote.value.length > 0 && myAuthor.value.length > 0) {
    var newQuotes = {"quote": myQuote.value, "author": myAuthor.value};
    quotes.push(newQuotes);
    quote.innerText = '"' + myQuote.value + '"';
    author.innerText = '-' + myAuthor.value;
    myAuthor.value = "";
    myQuote.value = "";
    quotesDisplay.style.display = 'none';
    postQuote.style.display = 'grid';
    } else {
        alert('enter quote!');
    }
}

submitQuote.addEventListener('click', addNewQuote);

addQuote.addEventListener('click', () => {
    if(quotesDisplay.style.display === 'none' || quotesDisplay.style.display === "") {
        quotesDisplay.style.display = 'grid';
    } else {
        quotesDisplay.style.display = 'none';
    }
})

