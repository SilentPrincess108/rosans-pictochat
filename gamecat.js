//Game Catalogue - Selecting a game
const game = document.querySelectorAll(".game-item");

game.forEach(item =>{
    item.addEventListener("click", () =>{
        //save selected game to local storage
        localStorage.setItem("selectedGame", item.id);
    })
})
