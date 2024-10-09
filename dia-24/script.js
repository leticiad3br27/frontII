const titulo=document.querySelector('h1');
console.log(titulo.innerHTML)
console.log(titulo.innerText)
console.log(titulo.textContent)

titulo.textContent="Ola leticia" 

const body= document.querySelector('body')
const ancora= document.createElement('a');
ancora.setAttribute('href',"https://www.ifro.edu.br")
ancora.setAttribute('target','_blank')
ancora.textContent="IFRO";
body.appendChild(ancora);
ancora.style.color="#f00"
ancora.style.textDecoration="none" 
const titulo=document.querySelector('h1');
titulo.remove();


const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);

const ulElement = document.querySelector('ul'); 
const lista = document.createElement('li');
lista.classList.add('item1', 'item2', 'item3');
ulElement.appendChild(lista);
