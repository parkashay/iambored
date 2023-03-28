const memeTitle = document.getElementById("memeTitle");
const memeImg = document.getElementById("memeImg");
const nextMeme = document.getElementById("nextMeme");

async function loadMeme(){
    memeImg.style.display="none";
    memeTitle.innerHTML = "Loading meme...";
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();
    const {title, url} = data;
    memeTitle.innerHTML = title;
    memeImg.src = url;
    memeImg.style.display = "block";
    nextMeme.innerHTML = "LOL , next"
}