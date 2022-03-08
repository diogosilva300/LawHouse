
/* Acão do Menu */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    })
}

const links = document.querySelectorAll('nav ul li a');

for (const element of links){
    element.addEventListener('click', function() {
        nav.classList.remove('show');
    })
}

/* Altura do Header */
const header = document.querySelector('#header');
const navHeigth = header.offsetHeight;

function soltarHeader(){

    if (window.scrollY >= (navHeigth)){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
}

/* Swiper JS Código */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    mousewheel: true,
    keyboard: true
  });

  // Scroll Reveal configuração

  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    durarion: 700,
    reset: true
  });

  scrollReveal.reveal(
      `
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .swiper,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, 
    {interval: 100
  });

  // botão de subir a página

const botao = document.querySelector('.back-to-top');

function botaoTopo(){

    if(window.scrollY >= 560){
        botao.classList.add('show');
    }else{
        botao.classList.remove('show');
    }
}


window.addEventListener('scroll', function() {
    soltarHeader()
    botaoTopo()
})