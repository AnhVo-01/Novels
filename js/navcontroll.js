const opt = document.querySelectorAll(".dropdown"),
    optShow = document.querySelectorAll(".dropdown-menu");

for (let i = 0; i < opt.length; i++){
    opt[i].addEventListener("click", function() {
        for (let j = 0; j < opt.length; j++){
            if(opt[j].classList.contains("open")){
                opt[j].classList.remove("open");
            }
        }
        opt[i].classList.toggle("open");
    });  
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.text')) {
        for(let i = 0; i < opt.length; i++){
            if (opt[i].classList.contains('open')) {
                opt[i].classList.remove('open');
            }
        }
    }
}