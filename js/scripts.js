// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')

    menu.addEventListener('click', (e) => {
      if(menu.classList.contains('active')){
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav'),
        hero = document.querySelector('.hero');
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 80;
    if (window.scrollY >= breakpoint) {
      hero.style.paddingTop = 4 + nav.clientHeight / 10 + 'rem'
      nav.classList.add('fixed__nav')
    } else {
      hero.style.paddingTop = 4 + 'rem'
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)

  ;
document.addEventListener('DOMContentLoaded', ()=> {
    const p = document.querySelectorAll('p');
    p.forEach(item => {
        item.classList.add('hide');
    });
    
    const sense = 100;
    function animation(){
        p.forEach(item => {
            if(window.pageYOffset + window.screen.height - sense >= item.offsetTop + item.offsetHeight){
                item.classList.remove('hide');
                item.classList.add('show');
            }
        })
    }
    animation()
    window.addEventListener('scroll', () => {
        animation()
    });
})
;

