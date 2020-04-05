document.addEventListener('wheel', handleScrolling);
window.addEventListener('resize scroll', handleScrolling);

let senasteTouch = 1000;
document.body.addEventListener('touchmove', handleScrolling);


    
//Skulle vilja targeta alla element i första raden av gridet
let saker = document.querySelectorAll("section");
window.addEventListener('load', ()=>{
    saker[0].style.opacity = "1";
})

function handleScrolling(){
    let höjd = document.body.scrollHeight;
    let höjdAvSkärm = (window.innerHeight || document.documentElement.clientWidth);

    for (let index = 0; index < saker.length; index++) {

        let infoOmElementet = saker[index].getBoundingClientRect();
        if((infoOmElementet.top + infoOmElementet.height*0.5) >= 0 && infoOmElementet.bottom <= (höjdAvSkärm + infoOmElementet.height*0.5))
        {
            saker[index].style.opacity = "1";
        }else
        {
            saker[index].style.opacity = "0";
        }
    }


}

//let scrollat = window.scrollY;




//Navbar som kommer in från sidan
let navBarKnapp = document.getElementsByClassName("coverUp");
let nav = document.getElementsByClassName("navHållare");
let navInnehåll = document.getElementsByClassName("navLogga");
let navBarUtvikt = false;

document.body.addEventListener('click', function(event){
    let klickatX = event.clientX;
    let gränsFörUtvikning = 0.8*window.innerWidth;
    console.log(klickatX);
    console.log(gränsFörUtvikning);
    if(navBarUtvikt){
        if(klickatX<=gränsFörUtvikning){
            //navInnehåll[0].style.opacity = "0";
            nav[0].style.left = "95%";
            navBarUtvikt = false;
        }
    }

});

navBarKnapp[0].addEventListener('click', ()=>{
    if(navBarUtvikt){
        //navInnehåll[0].style.opacity = "0";
        nav[0].style.left = "95%";
        navBarUtvikt = false;
    }else{
        //navInnehåll[0].style.opacity = "1";
        nav[0].style.left = "70vw";
        navBarUtvikt = true;
    }
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