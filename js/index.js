const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function passValues1(){
    localStorage.setItem("textvalue", "<strong>Project 1</strong>");  
    return false;
}
function passValues2(){
    localStorage.setItem("textvalue", "<strong>Project 2</strong>");  
    return false;
}
function passValues3(){
    localStorage.setItem("textvalue", "<strong>Project 3</strong>");  
    return false;
}
function passValues4(){
    localStorage.setItem("textvalue", "<strong>Project 4</strong>");  
    return false;
}
function passValues5(){
    localStorage.setItem("textvalue", "<strong>Project 5</strong>");  
    return false;
}
function passValues6(){
    localStorage.setItem("textvalue", "<strong>Project 6</strong>");  
    return false;
}
function passValues7(){
    localStorage.setItem("textvalue", "<strong>Project 7</strong>");  
    return false;
}
window.addEventListener("load", function () {
    var first = document.getElementById("first");
    first.innerHTML = localStorage.getItem("textvalue");
});