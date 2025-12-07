//Game Catalogue - Selecting a game
const game_cover = document.getElementById("game-cover");
const game_title = document.getElementById("game-title");
const game = document.querySelectorAll(".game-item");
let cover = null;

game.forEach(item =>{
    item.addEventListener("click", () =>{
        //save selected game to local storage
        localStorage.setItem("selectedGame", item.id);
    })

    item.addEventListener("mouseover", () =>{
        cover = item.id;
        console.log(cover);
        game_cover.setAttribute("src", "images/" + item.id + "_cover.jpg");
    })
})
