let aboutTitle = document.querySelector(".aboutTitle");
let navItems = document.getElementsByClassName("navItem");

navItems[1].onmouseenter = function(){
    aboutTitle.innerHTML = 'About <i class="fas fa-angle-double-up"></i>';
};

navItems[1].onmouseleave = function(){
    aboutTitle.innerHTML = 'About <i class="fas fa-angle-double-down"></i>';
};

