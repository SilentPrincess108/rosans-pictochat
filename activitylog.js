//JS FOR COLLAPSIBLE TOGGLE
const coll = document.querySelectorAll(".collapsible");


console.log(coll);

coll.forEach(btn => {
    btn.addEventListener("click", () =>{
        btn.classList.toggle("active");
        let content = btn.nextElementSibling;
        if (content.style.display === "block"){
            content.style.display = "none";
        }
        else{
            content.style.display = "block";
        }
    })
})

//JS FOR CONTENT OF GAME LOGS
contents = document.querySelectorAll(".content")
text = document.getElementById("content-text");
image = document.getElementById("content-img")

fetch("activitylog.json")
    .then(response => response.json())
    .then(data => {
        contents.forEach(log =>{
            data.forEach(item => {
                if (log.id == item.id){
                    text = log.querySelector("#content-text");
                    image = log.querySelector("#content-img")
                    text.innerText = item.content;
                    image.setAttribute("src", item.img);
                }
            })
        })
    })