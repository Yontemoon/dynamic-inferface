const btn = document.getElementById('btn');

btn.addEventListener('mouseover', () => {
    console.log('test');
})

btn.addEventListener('click', showMenu);


//click on the button to popup a menu
//True = its active
//
function showMenu() {
        const menuSec = document.getElementById('menuSec');
        menuSec.setAttribute('class', 'show');
        menuSec.innerHTML = "";
        const menuCtn = document.createElement('div')
        const hideMenuBtn = document.createElement('button');
        hideMenuBtn.setAttribute('id', 'getDeleteBtn');
        hideMenuBtn.onclick = function (){hideMenu(menuSec)};
        hideMenuBtn.innerText = 'X';
        menuCtn.appendChild(hideMenuBtn);
        const menu = document.createElement('div');
            menu.innerText = "THIS IS WHERE A HYPOTHEICAL MENU WILL BE....!!!!"
        menuCtn.appendChild(menu);
        menuSec.appendChild(menuCtn);
}

// Hides menu
function hideMenu(section) {
    section.setAttribute('class', 'hide');

}


const imageSliderCtn = document.getElementById('imageSliderCtn');