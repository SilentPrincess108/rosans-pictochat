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