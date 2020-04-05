let startKnapp = document.getElementById("knapp");
let footer = document.querySelector("footer");
let ikon = document.querySelector("img[src='pics/logga2.png']").height;

let slides = document.getElementsByClassName("slide");

let minHöjd = 100*document.getElementsByClassName("ett")[0].getBoundingClientRect().top/window.innerHeight;
console.log(minHöjd + "Minhöjd");

let counter = 1;
let längdFrånToppen = 100;

//Navbar som kommer in från sidan
let navBarKnapp = document.getElementsByClassName("fa-bars");
let nav = document.getElementsByClassName("navHållare");
let navBarUtvikt = false;

document.body.addEventListener('click', function(event){
    let klickatX = event.clientX;
    let gränsFörUtvikning = 0.8*window.innerWidth;
    console.log(klickatX);
    console.log(gränsFörUtvikning);
    if(navBarUtvikt){
        if(klickatX<=gränsFörUtvikning){
            nav[0].style.left = "95vw";
            navBarUtvikt = false;
        }
    }

});

navBarKnapp[0].addEventListener('click', ()=>{
    if(navBarUtvikt){
        nav[0].style.left = "95vw";
        navBarUtvikt = false;
    }else{
        nav[0].style.left = "70vw";
        navBarUtvikt = true;
    }
})

function påbörjaTimeline(){/*
    navbar.style.display= "none";
    header.style.display =  "none";
    knappHållare.style.height = window.innerHeight + "px";
    console.log(window.innerHeight);*/
}


let scrollJusterare = 10;

//Hjul input
window.addEventListener('wheel', () =>{
    //console.log("Scrollar");
    const delta = Math.sign(event.deltaY) * scrollJusterare;
    Scrollar(delta);
});
let fårTrycka = true;

//Tangentinput
document.addEventListener('keydown', function (event){
    if(fårTrycka)
    {
        fårTrycka = false;
        if(event.code == "ArrowDown"){
            Scrollar(scrollJusterare);
        }else if(event.code == "ArrowUp"){
            Scrollar(-scrollJusterare);
        }
    }
    fårTrycka=true;

})
let senasteTouch = 1000;
document.body.addEventListener('touchmove', function(event){
    //console.log(event.changedTouches[0].screenY);
    if(event.changedTouches[0].screenY>senasteTouch){
        Scrollar(-scrollJusterare);
    }else if(event.changedTouches[0].screenY < senasteTouch){
        Scrollar(scrollJusterare);
    }
    senasteTouch = event.changedTouches[0].screenY;
})

let fårFortsätta = true;
function Scrollar(delta){
    if(!fårFortsätta){
        return;
    };
    längdFrånToppen = längdFrånToppen - delta;
    //console.log(längdFrånToppen);

    //console.log(längdFrånToppen + "vh   " + delta);

    //Scrollar uppåt
    if(längdFrånToppen<=100 && delta<0){
        console.log("Scrollar uppåt");
        if(längdFrånToppen>50){
            //console.log("Active cheat");
            längdFrånToppen = 100;
            slides[counter].style.top = "100vh";
            slides[counter-1].style.opacity = "1";
        }else{
            slides[counter].style.top = längdFrånToppen + "vh";
            slides[counter-1].style.opacity = 0.01*längdFrånToppen;
        }
    }
    else if(längdFrånToppen>=minHöjd && delta>0){//Scrollar nedåt     
        console.log("Scrollar nedåt");
        //console.log(counter);
        if(längdFrånToppen<50){
            //console.log("beee");
            längdFrånToppen = minHöjd;
            slides[counter].style.top = längdFrånToppen + "vh";
            slides[counter-1].style.opacity = "0";

        }else{
            slides[counter].style.top = längdFrånToppen + "vh";
            slides[counter-1].style.opacity = 0.01*längdFrånToppen;
        }
    }
    else{//Nått en gräns och man inte får scrolla åt det hållet
        //längdFrånToppen = längdFrånToppen + delta;
        console.log("Gränsat");
        fårFortsätta = false;
        if(längdFrånToppen<=minHöjd){
            //console.log(counter);
            slides[counter-1].style.opacity = "0";
            console.log(längdFrånToppen+ "   " + counter + "  whoops");
            if(counter != slides.length-1){
                setTimeout(NästaSlide, 500);
                console.log("BYTER NEDÅT");
                längdFrånToppen = 100;
            }else{
                fårFortsätta = true;
            };

        }else if(längdFrånToppen>=100 && counter != 1){
            setTimeout(FöregåendeSlide, 500);
            console.log("BYTER UPPÅT");
            längdFrånToppen = minHöjd;
        }else{
            console.log(längdFrånToppen+ "   " + counter);
            fårFortsätta = true;
        }
        längdFrånToppen = längdFrånToppen + delta;
    };
    if(slides[counter].style.top == "100vh"){
        slides[counter-1].style.opacity = "1";
    }else if(slides[counter].style.top == minHöjd + "vh"){
        slides[counter-1].style.opacity = "0";
    }
}



function BytSlide(){
    if(längdFrånToppen<=minHöjd){
        console.log("minskar");
            counter--;
    }else if(längdFrånToppen>=100){
        console.log("ökar");
        counter++;
    }else{
        console.log("wtf");
    }
}

function NästaSlide(){
    counter++;
    console.log("Hej från nästa slide");
    fårFortsätta = true;
}

function FöregåendeSlide(){
    counter--;
    console.log("Hej från föregående slide");
    fårFortsätta = true;
}
