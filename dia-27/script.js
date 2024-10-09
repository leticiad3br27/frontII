const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
];

const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul); 


function criarMenu() {
    const menu = document.getElementById('menu');
    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.nome;
        a.href = item.url;
        li.appendChild(a);
        menu.appendChild(li);
    });
}

function estilizarElementos() {
    const cabecalho = document.querySelector('header');
    cabecalho.style.backgroundColor = '#071D41';
    cabecalho.style.fontFamily = 'Arial';
    cabecalho.style.margin= '';


    const listaNaoOrdenada = document.querySelector('ul');
    listaNaoOrdenada.style.height = '40px';
    listaNaoOrdenada.style.display = 'flex';
    listaNaoOrdenada.style.justifyContent = 'center';
    listaNaoOrdenada.style.alignItems = 'center';
    listaNaoOrdenada.style.gap = '20px';
    listaNaoOrdenada.style.listStyleType = 'none';


 
    const links = document.querySelectorAll('ul li a');
    links.forEach(link => {
        link.style.textDecoration = 'none';
        link.style.color = '#ffffff';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    criarMenu();
    estilizarElementos();
});
