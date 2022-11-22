var container = document.getElementById('jokeContainer');
var jokeText = document.getElementById('jokeText');
var button = document.getElementById('button');

JokeAPI.getJokes({
    jokeType: "single"
})
.then(res => res.json())
.then(data => {
    displayJoke(data)
})

function displayJoke(jokeData){
    jokeText.innerHTML = jokeData.joke;
    console.log(jokeData.joke);
}