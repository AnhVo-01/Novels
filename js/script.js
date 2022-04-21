const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    let main = document.querySelector('.main');

    toggle.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
        main.classList.toggle('active');
    })

    searchBtn.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
        main.classList.toggle('active');
    })

    modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");
    
        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode";
        }else{
            modeText.innerText = "Dark mode";
        
        }
    });