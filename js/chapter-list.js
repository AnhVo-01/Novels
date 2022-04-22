const chapter = document.querySelectorAll(".chapter-list"),
    select = document.querySelectorAll(".show-list");

function showList(){
    select[0].style.display = "none";
    select[1].style.display = "none";

    chapter[0].style.display = "block";
    chapter[1].style.display = "block";
}