//Game Page - displaying info for selected games

gameSelected = localStorage.getItem("selectedGame");
console.log(gameSelected);

title = document.getElementById("title");
thoughts = document.getElementById("thoughts-text");
date = document.getElementById("date");
studio = document.getElementById("studio");
genre = document.getElementById("genre");
poster = document.getElementById("poster");

fetch("games.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(game =>{
            if (game.id == gameSelected){
                title.innerText = game.title;
                thoughts.innerText = game.thoughts;
                date.innerText = "Release Date: " + game.release;
                studio.innerText = "Studio: " + game.studio;
                genre.innerText = "Genre: " + game.genre;
                poster.setAttribute("src", game.poster);
            }
        })
    })
    .catch(error => console.error("Error loading JSON", error));

