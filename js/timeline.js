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
    console.log(event.screenX);
    console.log(0.83*document.body.clientWidth);
    if(navBarUtvikt){
        if(event.screenX<=0.83*document.body.clientWidth){
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

/*
let fortsätt= document.getElementsByClassName("fa-chevron-down");
let fårGåVidare = false;
for (let index = 0; index < fortsätt.length; index++) {
    fortsätt[index].addEventListener('click', ()=>{
        if(fårGåVidare===false){
            return;
        }
        counter++;
        längdFrånToppen = 100;
        fårGåVidare=false;
    });
    
}
*/

function påbörjaTimeline(){/*
    navbar.style.display= "none";
    header.style.display =  "none";
    knappHållare.style.height = window.innerHeight + "px";
    console.log(window.innerHeight);*/
}


let scrollJusterare = 20;

//Hjul input
window.addEventListener('wheel', () =>{
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
    /*if(!fårFortsätta){
        return;
    }*/
    //console.log(ikon);



    console.log(counter);
    console.log(längdFrånToppen);
    längdFrånToppen = längdFrånToppen - delta;
    if(längdFrånToppen >= 100 || längdFrånToppen <= 0){
        slides[counter].style.top = längdFrånToppen + "vh";
    }
    if(längdFrånToppen >= 100){
        slides[counter-1].style.opacity = "1";
        längdFrånToppen=0;
        if(counter!=1)
        {
            counter--;
        }else{
            längdFrånToppen += delta
        }

    }else if(längdFrånToppen <= 0){
        slides[counter-1].style.opacity = "0";
        längdFrånToppen = 100;
        if(counter!=slides.length-1)
        {
            counter++;
        }else{
            längdFrånToppen += delta
        }

    }
    //console.log(längdFrånToppen + "vh   " + delta);
/*
    //Scrollar uppåt
    if(längdFrånToppen<=100 && delta<0){
        scrollJusterare = 10;
        if(längdFrånToppen>50){
            //console.log("Active cheat");
            längdFrånToppen = 100;
            slides[counter].style.top = "100vh";
        }else{
            slides[counter].style.top = längdFrånToppen + "vh";
            slides[counter-1].style.opacity = 0.01*längdFrånToppen;
        }
    }
    else if(längdFrånToppen>=minHöjd && delta>0){//Scrollar nedåt     
        if(längdFrånToppen<50){
            //console.log("beee");
            längdFrånToppen = minHöjd;
            slides[counter].style.top = längdFrånToppen + "vh";
            scrollJusterare = 1;
        }else if(längdFrånToppen<100){
            scrollJusterare = 10;
        }else{
            slides[counter-1].style.opacity = 0.01*längdFrånToppen;
            slides[counter].style.top = längdFrånToppen + "vh";
        }
    }
    else{//Nått en gräns och man inte får scrolla åt det hållet
        fårFortsätta = true;
        längdFrånToppen = längdFrånToppen + delta;
        if(längdFrånToppen<=minHöjd){
            slides[counter-1].style.opacity = "0";
            if(counter != slides.length-1){
                //console.log("BYTER NEDÅT");
                counter++;
                längdFrånToppen = 100;
            }
        }else if(längdFrånToppen>=100 && counter != 1){
            //console.log("BYTER UPPÅT");
            //console.log("kommer in som " + counter);
            counter--;

            längdFrånToppen = minHöjd;
        }


        /*while(slides[counter].style.top != 0 || slides[counter].style.top != 100){
            console.log(slides[counter].style.top + "joojojo");
    
        };
    }/*
    if(slides[counter].style.top == "100vh"){
        slides[counter-1].style.opacity = "1";
        fårFortsätta = true;
    }/*else if(slides[counter].style.top == minHöjd + "vh"){
        slides[counter-1].style.opacity = "0";
        fårFortsätta = true;
    }*/



   /* if(fårFortsätta){
        fårFortsätta = false;
        console.log("TID:");
        let tidEtt = new Date();
        console.log(tidEtt.getTime());

        let tidTvå = new Date();
        console.log(tidTvå.getTime());

        while(tidEtt.getTime()+200 > tidTvå.getTime()){
            console.log(tidEtt.getMilliseconds() + "   " + tidTvå.getMilliseconds());
            console.log("HELLO");
            tidTvå = new Date();
        };
        console.log("Free from that wretched prison");
        fårFortsätta = true;
    }*/
}

//Funktion som sänker scrollJusterare en halv sekund och sen höjer den igen

async function PausaScroll(){
    scrollJusterare = 1;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}