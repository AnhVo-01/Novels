const menuBtn = document.querySelector(".menu-icon")

menuBtn.addEventListener("click" , () =>{
    var headContainer = document.querySelector(".head-local");
    headContainer.classList.toggle("act");
});