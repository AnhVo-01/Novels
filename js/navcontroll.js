const opt = document.querySelectorAll(".dropdown"),
    optShow = document.querySelectorAll(".dropdown-menu");

for (let i = 0; i < opt.length; i++){
    opt[i].onclick = () =>{
        for (let j = 0; j < opt.length; j++){
            if(opt[j].classList.contains("open")){
                opt[j].classList.remove("open");
            }
        }
        opt[i].classList.toggle("open");
    }
}

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    for (let k = 0; k < opt.length; k++){
        if (event.target == opt[k]) {
            opt[k].classList.remove("open");
        }
    }
}