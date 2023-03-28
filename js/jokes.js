
const jokeCategory = document.getElementById("jokeCategory");
const jokeSetup = document.getElementById("jokeSetup");
const jokeDelivery = document.getElementById("jokeDelivery")

const api_url = "https://v2.jokeapi.dev/joke/Any";
async function loadJoke(){
    const response = await fetch(api_url);
    const data = await response.json();
    const {category, type, setup, delivery, joke} = data;

    jokeCategory.innerHTML = category;
    
    if(type == 'single'){
        jokeSetup.innerHTML = "";
        jokeDelivery.innerHTML = joke;
        
    }
    else{
        jokeSetup.innerHTML = setup;
        jokeDelivery.innerHTML = delivery;
    }
}