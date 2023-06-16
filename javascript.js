const btn = document.getElementById('btn');

btn.addEventListener('mouseover', () => {
    console.log('test');
})

btn.addEventListener('click', showMenu);



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
const previousImg = document.getElementById('previous');
const nextImg = document.getElementById('next');

nextImg.addEventListener('click', getNextImg);
previousImg.addEventListener('click', getPreviousImage)


function getNextImg() {
    const currentImg = document.querySelector(".showImg");
    let nextImg = currentImg.nextElementSibling;
    if (nextImg === null) {
        nextImg = document.getElementById('startingImage');
    }
    toggleClass(currentImg);
    toggleClass(nextImg);
}

function toggleClass(changingImage) {
    if(changingImage.className === 'showImg') {
        changingImage.classList.remove('showImg');
        changingImage.classList.add('hideImg');
    } else {
        changingImage.classList.remove('hideImg')
        changingImage.classList.add('showImg')

    }
}

function getPreviousImage() {
    const currentImg = document.querySelector(".showImg");
    let nextImg = currentImg.previousElementSibling;
    if (nextImg === null) {
        nextImg = document.getElementById('endingImage');
    }
    toggleClass(currentImg);
    toggleClass(nextImg);
}