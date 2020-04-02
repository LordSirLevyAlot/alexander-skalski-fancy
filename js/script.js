document.addEventListener('wheel', handleScrolling);
window.addEventListener('resize scroll', handleScrolling);

let senasteTouch = 1000;
document.body.addEventListener('touchmove', handleScrolling);



/*
let width = window.width;
let navbar = document.querySelector("nav");
let utvikt = false;

navbar.addEventListener('click', () =>{
    if(width>1000){
        return;
    }
    if(utvikt){
        navbar.style.left = "100vw";
        utvikt = false;
    }else{
        navbar.style.left = "30vw";
        utvikt = true;
    }
})*/
    
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