const model_name = document.getElementById("name");
const program = document.getElementById("program");
const use = document.getElementById("use");
const time = document.getElementById("time");

let design_data = {};
const model = document.querySelectorAll(".selection");

fetch("designs.json")
    .then(response => response.json())
    .then(data =>{
        design_data = data;
    })
    .catch(err => console.error("Error loading JSON: ", err));

model.forEach(item =>{
    item.addEventListener("mouseover", ()=>{
        design_data.forEach(model =>{
            if (item.id == model.name){
                model_name.innerText = "Name: " + model.name;
                program.innerText = "Program: " + model.program;
                use.innerText = "Use: " + model.use;
                time.innerText = "Time Spent: " + model.time;
            }
        })
    })
})