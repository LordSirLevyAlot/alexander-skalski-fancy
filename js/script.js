document.addEventListener('wheel', handleScrolling);
window.addEventListener('resize scroll', handleScrolling);
//window.onerror = window.prompt("opsie whoopsie");

let width = window.width;
let navbar = document.querySelector("nav");
let utvikt = false;

navbar.addEventListener('click', () =>{
    if(width>1000){
        return;
    }
    if(utvikt){
        navbar.style.left = "70vw";
        utvikt = false;
    }else{
        navbar.style.left = "30vw";
        utvikt = true;
    }
})
    


function handleScrolling(){
    let höjd = document.body.scrollHeight;
    let höjdAvSkärm = (window.innerHeight || document.documentElement.clientWidth);
    /*let sak = document.getElementById("försökskanin");
    let information = sak.getBoundingClientRect();*/
    //console.log(höjd +"   " +höjdAvSkärm + "   ");



let saker = document.querySelectorAll("section");

for (let index = 0; index < saker.length; index++) {

    let buff = saker[index].getBoundingClientRect();

    if((buff.top + buff.height*0.5) >= 0 && buff.bottom <= (höjdAvSkärm+ buff.height*0.5))
    {
        saker[index].style.opacity = "1";
    }else
    {
        saker[index].style.opacity = "0";
    }
    
}


}


//let scrollat = window.scrollY;
