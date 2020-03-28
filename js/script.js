document.addEventListener('wheel', handleScrolling);
window.addEventListener('resize scroll', handleScrolling);
//window.onerror = window.prompt("opsie whoopsie");

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
