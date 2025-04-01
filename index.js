import quotes from './quote_data.js';

console.log(quotes);

const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author-name');
const quoteRegion = document.getElementById('quote-region');
const generateBtn = document.getElementById('generate-btn');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
function displayQuote(quote) {
    quoteText.textContent = `" ${quote.text} "`;
    quoteAuthor.textContent = quote.author;
    quoteRegion.textContent = quote.region;
}
function generateRandomQuote() {
    const randomQuote = getRandomQuote();
    displayQuote(randomQuote);
}
generateBtn.addEventListener('click', generateRandomQuote);