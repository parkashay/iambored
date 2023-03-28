const quoteContent = document.getElementById("quoteContent");
const quoteAuthor = document.getElementById("quoteAuthor");
async function loadQuote(){
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    const {content, author} = data;
    quoteContent.innerHTML = content;
    quoteAuthor.innerHTML = "- " + author;
}