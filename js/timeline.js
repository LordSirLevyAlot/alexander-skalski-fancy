let startKnapp = document.getElementById("knapp");
let knappHållare = document.getElementById("knappHållare");
let footer = document.querySelector("footer");


let slides = document.getElementsByClassName("slide");

let counter = 1;
let hundra = 100;


let fortsätt= document.getElementsByClassName("fa-chevron-down");
let fårGåVidare = false;
for (let index = 0; index < fortsätt.length; index++) {
    fortsätt[index].addEventListener('click', ()=>{
        if(fårGåVidare===false){
            return;
        }
        counter++;
        hundra = 100;
        fårGåVidare=false;
    });
    
}

startKnapp.addEventListener('click', påbörjaTimeline);
function påbörjaTimeline(){/*
    navbar.style.display= "none";
    header.style.display =  "none";
    knappHållare.style.height = window.innerHeight + "px";
    console.log(window.innerHeight);*/
}
let fårFortsätta = true;


//Hjul input
window.addEventListener('wheel', () =>{
    const delta = Math.sign(event.deltaY) * 10;
    Scrollar(delta);
});
let fårTrycka = true;

//Tangentinput
document.addEventListener('keydown', function (event){
    if(fårTrycka)
    {
        fårTrycka = false;
        if(event.code == "ArrowDown"){
            Scrollar(10);
        }else if(event.code == "ArrowUp"){
            Scrollar(-10);
        }
    }
    fårTrycka=true;

})

function Scrollar(delta){
    
    hundra = hundra - delta;
    console.log(hundra + "vh");

    //Scrollar uppåt
    if(hundra<=100 && delta<0){
        if(hundra>50){
            slides[counter].style.top = "100vh";
        }else{
            slides[counter].style.top = hundra + "vh";
        }
    }else if(hundra>=0&&delta>0){//Scrollar nedåt
        if(hundra<50){
            console.log("beee");
            slides[counter].style.top = "0vh";
        }else{
            slides[counter].style.top = hundra + "vh";
        }
    }
    else{//Nått en gräns och man inte får scrolla åt det hållet
        hundra = hundra + delta;
        if(hundra==0){
            slides[counter-1].style.opacity = "0";
            fårGåVidare=true;
        }
    }
}


async function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

function SmoothTransition(){
    try{
        slides[counter].style.top = 100-blah*10 + "vh";
    }
    catch{}
}
