let startKnapp = document.getElementById("knapp");
let navbar = document.querySelector("nav");
let header = document.querySelector("header");
let knappHållare = document.getElementById("knappHållare");
let footer = document.querySelector("footer");
startKnapp.addEventListener('click', påbörjaTimeline);

let slides = document.getElementsByClassName("slide");

function påbörjaTimeline(){/*
    navbar.style.display= "none";
    header.style.display =  "none";
    knappHållare.style.height = window.innerHeight + "px";
    console.log(window.innerHeight);*/
}

let counter = 1;
function nästa(){

    if(counter == slides.length)
        {return;}
    slides[counter].style.top = "0";
    slides[counter].style.zIndex = counter;
    slides[counter-1].style.opacity = "0";
    if(counter == slides.length-1)
    {return;}
    counter++;
    slides[counter].style.zIndex = counter;
}
function bakåt(){
    if(counter==1)
        {return;}

    slides[counter-1].style.opacity = "1";
    slides[counter].style.top = "100vh";
    counter--;
}
let blah = 0;


window.addEventListener('wheel', event => {
    const delta = Math.sign(event.deltaY);
    console.info(delta);
    blah+=delta;
    console.log(blah*10 + "vh");
    console.log(counter);

    if(footer.getBoundingClientRect().top != 0){
        console.log(footer.getBoundingClientRect().top + "ff");
        SmoothTransition();
    }


    if(blah%5 == 0){
        blah = 0;
        if(delta>0){
            nästa();
        }else{
            bakåt();
        }

    }
});

function SmoothTransition(){
    try{
        slides[counter].style.top = 100-blah*10 + "vh";
    }
    catch{}
}
