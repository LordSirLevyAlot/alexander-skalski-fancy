let sectioner = document.querySelectorAll("section");
let navBarKnapp = document.getElementsByClassName("navknappHållare");
let nav = document.getElementsByClassName("navHållare");
let navBarUtvikt = false;
let senasteTouch = 1000;


//Navbar som kommer in från sidan
window.onload = function(){
    nav[0].style.left = 100-((navBarKnapp[0].getBoundingClientRect().width/window.innerWidth)*100) + "%";
    KollaReferens();
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
});


//SCROLL FUNKTIONER
document.addEventListener('wheel', handleScrolling);
document.body.addEventListener('touchmove', handleScrolling);

function handleScrolling(){
    let höjdAvSkärm = (window.innerHeight || document.documentElement.clientWidth);

    for (let index = 0; index < sectioner.length; index++) {

        let infoOmElementet = sectioner[index].getBoundingClientRect();
        if((infoOmElementet.top + infoOmElementet.height*0.5) >= 0 && infoOmElementet.bottom <= (höjdAvSkärm + infoOmElementet.height*0.5))
        {
            sectioner[index].style.opacity = "1";
        }else
        {
            sectioner[index].style.opacity = "0";
        };
    };
}

//Ge användaren lite innehåll på en gång
window.addEventListener('load', ()=>{
    sectioner[0].style.opacity = "1";
})



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



//LÄDERLAPPEN REFERENS
let referens = document.getElementById("referenceWrapper");
function KollaReferens(){
    let random = Math.floor(Math.random()*50);
    console.log(random);
    if(random >=40){
        referens.style.display="block";
        referens.style.animationName = "referensRörelse";
        referens.children[0].style.animationName = "referensRotation";
    }
}