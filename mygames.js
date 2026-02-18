const game_name = document.getElementById("project-title");
const synopsis = document.getElementById("game-synopsis");
const start = document.getElementById("start-date");
const end = document.getElementById("end-date");
const genre = document.getElementById("genre");
const img = document.getElementById("game-img");
const link = document.getElementById("play-link");

let game_data = {};
const project = document.querySelectorAll(".file");


fetch("mygames.json")
    .then(response => response.json())
    .then(data => {
        game_data = data;
    })
    .catch(err => console.error("Error loading JSON: ", err))

project.forEach(item =>{
    item.addEventListener("mouseover", ()=>{
        game_data.forEach(game =>{
            if (item.id == game.name){
                game_name.innerText = game.name;
                synopsis.innerText = game.synopsis;
                start.innerText = game.start;
                end.innerText = game.end;
                genre.innerText = game.genre;
                img.setAttribute("src", game.img);
                link.setAttribute("href", game.link);
            }
        })
    })
})