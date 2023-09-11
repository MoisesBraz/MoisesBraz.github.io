//Script da parte que a frase está digitando no section3
document.addEventListener("DOMContentLoaded", function () {
    function ativaLetra(elemento) {
      const arrTexto = elemento.innerHTML.split('');
      elemento.innerHTML = '';
  
      arrTexto.forEach((letra, i) => {
        setTimeout(() => {
          elemento.innerHTML += letra;
        }, 75 * i);
      });
    }
  
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
  });


// navegação das 3 linhas
  document.addEventListener("click", function () {
    const ativaMenu = document.querySelector('.fa-solid.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');

    ativaMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
  });


// Resumo, clicar nas bolinhas e mudar o conteúdo
document.addEventListener("DOMContentLoaded", function () {
  const bolinhasExperiencia = document.querySelectorAll('.exerience_content ul li');
  const bolinhasEducacao = document.querySelectorAll('.education_content ul li');
  const conteudoExperiencia = document.querySelectorAll('.exerience_content div');
  const conteudoEducacao = document.querySelectorAll('.education_content div');

  conteudoExperiencia[0].classList.add('ativo');
  conteudoEducacao[0].classList.add('ativo');
  bolinhasEducacao[0].classList.add('ativo');
  ~bolinhasExperiencia[0].classList.add('ativo');

  // Função para mostrar o conteúdo de experiência com base no índice
  function mostrarConteudoExperiencia(index) {
    conteudoExperiencia.forEach((div) => {
      div.classList.remove('ativo');
    });
    bolinhasExperiencia.forEach((bolinha) => {
      bolinha.classList.remove('ativo');
    });
    conteudoExperiencia[index].classList.add('ativo');
    bolinhasExperiencia[index].classList.add('ativo');
  }

  // Função para mostrar o conteúdo de educação com base no índice
  function mostrarConteudoEducacao(index) {
    conteudoEducacao.forEach((div) => {
      div.classList.remove('ativo');
    });
    bolinhasEducacao.forEach((bolinha) => {
      bolinha.classList.remove('ativo');
    });
    conteudoEducacao[index].classList.add('ativo');
    bolinhasEducacao[index].classList.add('ativo');
  }

  // Adicionar event listeners para as bolinhas de experiência
  bolinhasExperiencia.forEach((bolinha, index) => {
    bolinha.addEventListener('click', () => {
      mostrarConteudoExperiencia(index);
    });
  });

  // Adicionar event listeners para as bolinhas de educação
  bolinhasEducacao.forEach((bolinha, index) => {
    bolinha.addEventListener('click', () => {
      mostrarConteudoEducacao(index);
    });
  });
});