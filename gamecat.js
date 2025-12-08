//Game Catalogue - Selecting a game
const game_cover = document.getElementById("game-cover");
const game_title = document.getElementById("game-title");
const game = document.querySelectorAll(".game-item");
let cover = null;
let game_data = {};

fetch("games.json")
    .then(response => response.json())
    .then(data =>{
        game_data = data;
    })
    .catch(err => console.error("Error loading JSON: ", err));

game.forEach(item =>{
    item.addEventListener("click", () =>{
        //save selected game to local storage
        localStorage.setItem("selectedGame", item.id);
    })

    item.addEventListener("mouseover", () =>{
        game_data.forEach(game =>{
            if (item.id == game.id){
                game_cover.setAttribute("src", game.cover);
                game_title.innerText = game.title;
            }
        })
    })
})
