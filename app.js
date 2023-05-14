'use strict'

const burger = document.querySelector('.menu__burger');
const burgerBars = document.querySelectorAll('.menu__bar');
const menuList = document.querySelector('.menu__list');
const skillsBar = document.querySelectorAll('.skills__bar');
const portfolioList = document.querySelector('.portfolio__list');
const portfolioButtons = document.querySelectorAll('.portfolio__link');
const portfolioCards = document.querySelectorAll('.portfolio__card');
const upButton = document.querySelector('.up-button');
const header = document.querySelector('.header');

skillsBar.forEach(bar => {
  bar.style.width = `${randomPercentage()}%`
})

burger.addEventListener('click', () => {
  burgerAnimation(burgerBars);
});

portfolioList.addEventListener('click', (e) => {
  if(!e.target.classList.contains('portfolio__link--activ') &&
    e.target.classList.contains('portfolio__link')) {
    portfolioButtons.forEach(button => {
      button.classList.remove('portfolio__link--activ')
    })
    e.target.classList.add('portfolio__link--activ')
    showCards(e.target)
  }
  
});

upButton.addEventListener('click', () => {
  window.scrollTo(0, 0)
});

menuList.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu__link')) {
    e.preventDefault();
    burgerAnimation(burgerBars);
    menuList.classList.remove('menu__list--activ');
    const headerHeight = header.getBoundingClientRect().height;
    const targetElement = document.getElementById(e.target.hash.slice(1));
    window.scrollTo(0, targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight);
  }
});

document.addEventListener('scroll', () => {
  if(window.pageYOffset < 500) {
    upButton.classList.add('up-button--hidden')
  } else {
    upButton.classList.remove('up-button--hidden')
  }
})

function burgerAnimation(bars) {
  bars.forEach(bar => {
    bar.classList.toggle('menu__bar--transformed');
  });
  menuList.classList.toggle('menu__list--activ');
}

function randomPercentage() {
  return Math.floor(Math.random() * (100 - 70) + 70);
}

function showCards(el) {
  const tag = el.dataset.tag;
  portfolioCards.forEach(card => {
    if (tag === 'all') {
      card.style.display = 'block';
    } else {
      tag === card.dataset.tag ? 
      card.style.display = 'block' : 
      card.style.display = 'none';
    }
  })
}