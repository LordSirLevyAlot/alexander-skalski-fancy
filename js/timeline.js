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



window.addEventListener('wheel', () =>{
    const delta = Math.sign(event.deltaY) * 10;
    Scrollar(delta);
});
let fårTrycka = true;


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

    if(hundra<=100 && delta<0 || hundra>=0&&delta>0){
        slides[counter].style.top = hundra + "vh";
    }else{
        hundra = hundra + delta;
        if(hundra==0){
            console.log("shlooaa");
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
