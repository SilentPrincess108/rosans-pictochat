//Game Page - displaying info for selected games

gameSelected = localStorage.getItem("selectedGame");
console.log(gameSelected);

title = document.getElementById("title");
thoughts = document.getElementById("thoughts-text");

fetch("games.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(game =>{
            if (game.id == gameSelected){
                title.innerText = game.title;
                thoughts.innerText = game.thoughts;
            }
        })
    })
    .catch(error => console.error("Error loading JSON", error));

