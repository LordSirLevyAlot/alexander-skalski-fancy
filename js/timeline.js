let startKnapp = document.getElementById("knapp");
let navbar = document.querySelector("nav");
let header = document.querySelector("header");
let knappHållare = document.getElementById("knappHållare");
startKnapp.addEventListener('click', påbörjaTimeline);

let slides = document.getElementsByClassName("slide");

function påbörjaTimeline(){/*
    navbar.style.display= "none";
    header.style.display =  "none";
    knappHållare.style.height = window.innerHeight + "px";
    console.log(window.innerHeight);*/
}

let counter = 0;
function nästa(){
    counter++;
    slides[counter].style.top = "0";
    slides[counter].style.zIndex = counter;
    slides[counter-1].style.opacity = "0";
}
function bakåt(){
    slides[counter-1].style.opacity = "1";
    slides[counter].style.top = "100vh";
    counter--;
}


let blah=0;
function hejsvejs(){
    console.log(document.body.scrollY);
    blah++;
    if(blah%10 == 0){
        nästa();
    }
}

window.addEventListener('wheel', event => {
    const delta = Math.sign(event.deltaY);
    console.info(delta);
    blah+=delta;
    //slides[counter].style.top = blah + "vh";
    if(blah%10 == 0){

        if(delta>0){
            nästa();
        }else{
            bakåt();
        }

    }
});
