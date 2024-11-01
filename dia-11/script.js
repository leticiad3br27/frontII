// Espera até que a página esteja totalmente carregada
document.addEventListener('DOMContentLoaded', function() {
    // Pega todas as imagens pequenas (miniaturas)
    const miniaturas = document.querySelectorAll('.miniatura');
    // Pega a imagem grande que vai aparecer quando clicarmos nas miniaturas
    const imgAmpliada = document.getElementById('imgAmpliada');
  
    // Para cada imagem pequena, adiciona uma ação quando clicarmos nela
    miniaturas.forEach(function(miniatura) {
      miniatura.addEventListener('click', function() {
        // Quando clicamos, a imagem grande vai mostrar a mesma imagem da miniatura clicada
        imgAmpliada.src = this.src;
        // Faz a imagem grande aparecer na tela
        imgAmpliada.style.display = 'block';
        // Deixa a miniatura clicada com a opacidade total (bem visível)
        this.style.opacity = '1';
        // Deixa as outras miniaturas mais transparentes (menos visíveis)
        miniaturas.forEach(function(outro) {
          if (outro !== miniatura) {
            outro.style.opacity = '0.4';
          }
        });
      });
    });
  });
  