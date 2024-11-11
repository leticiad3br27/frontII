const p = document.querySelector('#paragrafo');
const divImg = document.querySelector('#divImg');

//divImg.addEventListener('click', () => {
  //  divImg.style.border = '2px solid black';
//})

function pMouse() {
    divImg.style.border = '2px solid black';
}

function sMouse() {
    divImg.style.border = 'none';
}

divImg.addEventListener('mouseover', pMouse);
divImg.addEventListener('mouseout', sMouse);

p.onclick = () => {
    alert('Paragrafo clicado!')
}

const clique = () => {
    console.log('Botão clicado!')
    alert('Botão clicado!')
}

function pressTecla() {
    if (window.getComputedStyle(divImg, null).getPropertyValue
    ('backgound-color') === 'rgb(0, 0, 0)') {
        divImg.style.backgroundColor = 'rgb(255, 255, 255)'
    } else {
        divImg.style.backgroundColor = 'rgb(0, 0, 0)'
    }
}