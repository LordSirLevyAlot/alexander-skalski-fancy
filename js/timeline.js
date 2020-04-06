//För tidslinjen
let startKnapp = document.getElementById("knapp");
let footer = document.querySelector("footer");
let ikon = document.querySelector("img[src='pics/logga2.png']").height;
let slides = document.getElementsByClassName("slide");
let minHöjd = 100*document.getElementsByClassName("ett")[0].getBoundingClientRect().top/window.innerHeight;
let counter = 1;
let längdFrånToppen = 100;
let scrollJusterare = 10;
let fårTrycka = true;
let senasteTouch = 1000; //För touch-enheter. Funkar lite sådär

//Navbar som kommer in från sidan
let navBarKnapp = document.getElementsByClassName("navknappHållare");
let nav = document.getElementsByClassName("navHållare");
let navBarUtvikt = false;


window.onload = function(){
    console.log("Heja");
    nav[0].style.left = 100-((navBarKnapp[0].getBoundingClientRect().width/window.innerWidth)*100) + "%";
};
window.onresize = function(){
    nav[0].style.left = 100-((navBarKnapp[0].getBoundingClientRect().width/window.innerWidth)*100) + "%";
};

document.body.addEventListener('click', function(event){
    let klickatX = event.clientX;
    let gränsFörUtvikning = document.documentElement.clientWidth - nav[0].getBoundingClientRect().width*0.75;
    if(navBarUtvikt){
        if(klickatX<=gränsFörUtvikning){
            nav[0].style.left = 100-((navBarKnapp[0].getBoundingClientRect().width/window.innerWidth)*100) + "%";
            navBarUtvikt = false;
        }
    }
});

navBarKnapp[0].addEventListener('click', ()=>{
    if(navBarUtvikt){
        nav[0].style.left = 100-((navBarKnapp[0].getBoundingClientRect().width/window.innerWidth)*100) + "%";
        navBarUtvikt = false;
    }else{
        nav[0].style.left = 100-nav[0].getBoundingClientRect().width/window.innerWidth*100 + "%";
        navBarUtvikt = true;
    }
})



// TIMELINE RELATERAT

//Hjul input
window.addEventListener('wheel', () =>{
    const delta = Math.sign(event.deltaY) * scrollJusterare;
    Scrollar(delta);
});

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

//Touchinput. Funkar sådär...
document.body.addEventListener('touchmove', function(event){
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
    }//Scrollar nedåt
    else if(längdFrånToppen>=minHöjd && delta>0){
        console.log("Scrollar nedåt");
        if(längdFrånToppen<50){
            längdFrånToppen = minHöjd;
            slides[counter].style.top = längdFrånToppen + "vh";
            slides[counter-1].style.opacity = "0";

        }else{
            slides[counter].style.top = längdFrånToppen + "vh";
            slides[counter-1].style.opacity = 0.01*längdFrånToppen;
        }
    }
    else{//Nått en gräns och man inte får scrolla åt det hållet
        fårFortsätta = false;
        if(längdFrånToppen<=minHöjd){
            slides[counter-1].style.opacity = "0";
            if(counter != slides.length-1){
                setTimeout(NästaSlide, 800);
                längdFrånToppen = 100;
            }else{
                fårFortsätta = true;
            };
        }else if(längdFrånToppen>=100 && counter != 1){
            setTimeout(FöregåendeSlide, 800);
            längdFrånToppen = minHöjd;
        }else{
            fårFortsätta = true;
        }
        längdFrånToppen = längdFrånToppen + delta;
    };
    if(slides[counter].style.top == "100vh"){
        slides[counter-1].style.opacity = "1";
    }else if(slides[counter].style.top == minHöjd + "vh"){
        slides[counter-1].style.opacity = "0";
    }

    //Ibland så buggar scrollen lite grann, en extra säkerhetsåtgärd för att göra upplevelsen
    //åtminstonde lite bättre
    for (let index = 0; index < counter; index++) {
        slides[index].style.top = minHöjd + "vh";  
    };
}

/*
function BytSlide(){
    if(längdFrånToppen<=minHöjd){
            counter--;
    }else if(längdFrånToppen>=100){
        counter++;
    }else{
        console.log("Hmmm, något gick fel");
    }
}*/

function NästaSlide(){
    counter++;
    fårFortsätta = true;
}

function FöregåendeSlide(){
    counter--;
    fårFortsätta = true;
}



//Footer
let område = document.querySelector("footer");
let about = document.getElementById("about");
let business = document.getElementById("business");
let länkHållare = document.getElementById("länkRuta").children[0].children;
about.addEventListener('mouseover', ()=>{
    for (let index = 0; index < 3; index++) {
        console.log(länkHållare[0].children[0]);
        länkHållare[index].style.display = "list-item";
    };

    console.log(länkHållare[0].children[0]);

    länkHållare[0].children[0].innerHTML = "Our founders";
    länkHållare[0].children[0].href = "founder.html";

    länkHållare[1].children[0].innerHTML = "Our CEO";
    länkHållare[1].children[0].href = "ceo.html";

    länkHållare[2].children[0].innerHTML = "Our goals";
    länkHållare[2].children[0].href = "goals.html";
});

business.addEventListener('mouseover', ()=>{
    for (let index = 0; index < 2; index++) {
        länkHållare[index].style.display = "list-item";
    };
    länkHållare[2].style.display = "none";

    länkHållare[0].children[0].innerHTML = "The Wayne E. Family";
    länkHållare[0].children[0].href = "businesses.html";

    länkHållare[1].children[0].innerHTML = "Join us";
    länkHållare[1].children[0].href = "joblistings.html";
});

område.addEventListener('mouseleave', ()=>{
    for (let index = 0; index < 3; index++) {
        länkHållare[index].style.display = "none";
    };
});