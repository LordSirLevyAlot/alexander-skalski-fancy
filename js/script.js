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
            navInnehåll[0].style.opacity = "0";
            nav[0].style.left = "95%";
            navBarUtvikt = false;
        }
    }

});

navBarKnapp[0].addEventListener('click', ()=>{
    if(navBarUtvikt){
        navInnehåll[0].style.opacity = "0";
        nav[0].style.left = "95%";
        navBarUtvikt = false;
    }else{
        navInnehåll[0].style.opacity = "1";
        nav[0].style.left = "70vw";
        navBarUtvikt = true;
    }
})













//Footer
let about = document.getElementById("about");
let business = document.getElementById("business");
let foldOuts = document.getElementsByClassName("foldOut");
let område = document.getElementById("footerList");
about.addEventListener('mouseover', ()=>{setTimeout(ShowAbout, 10)});
business.addEventListener('mouseover', ()=>{setTimeout(ShowBusiness, 10)});



område.addEventListener('mouseleave', ()=>{
    clearInterval(ShowAbout);
    clearInterval(ShowBusiness);
    foldOuts[0].style.display = "none";
    foldOuts[0].style.opacity = "0";

    foldOuts[1].style.display = "none";
    foldOuts[1].style.opacity = "0";
});


function ShowAbout(){
    clearInterval(ShowBusiness);

    setTimeout(()=>foldOuts[1].style.display = "none", 500);
    foldOuts[1].style.opacity = "0";

    setTimeout(()=>foldOuts[0].style.opacity = "1", 500);
    foldOuts[0].style.display = "block";
}

function ShowBusiness(){
    clearInterval(ShowAbout);

    setTimeout(()=>foldOuts[0].style.display = "none", 500);
    foldOuts[0].style.opacity = "0";

    setTimeout(()=>foldOuts[1].style.opacity = "1", 500);
    foldOuts[1].style.display = "block";
}