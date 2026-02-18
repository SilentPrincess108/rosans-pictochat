//Import the THREE.js library
//import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
//import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
//import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//create scene
//const scene = new THREE.Scene();
//create new camera with positions and angles
//const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//let object;
//let control;
//let objToRender = 'model';

//vars for text
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