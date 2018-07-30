

function marquee(){
const marquee = document.querySelector('.marquee span');
const title = marquee.innerHTML;
const newTitle = new Array(50).fill(title).join(' + ');
marquee.innerHTML = newTitle;
}

function circlesAnimation(){
  const circles = document.querySelectorAll('.circle');
  circles.forEach(function(circle, index) {
    circle.animate([
      {transform: 'scale(1)'},
      {transform: 'scale(1.5)'},
      {transform: 'scale(1)'}
    ],
    {
      delay: 300 * index,
      duration: 3000,
      iterations: Infinity
    });
  });
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function squigglesAnimation(){
  const squiggles = document.querySelectorAll('.squiggle');
  squiggles.forEach(function(squiggle, index){
    squiggle.animate([
      {transform: 'rotate(0deg)'},
      //{transform: 'rotate(' + random(15, 45) + 'deg)'},
      {transform: `rotate(${random(15, 45)}deg)`},
      {transform: 'rotate(0deg)'}
    ],{
      delay: 300 * index,
      duration: 3000,
      iterations: Infinity
    })
  })
}

marquee();
circlesAnimation();
squigglesAnimation();

inView('.section')
    .on('enter', section => {
      section.classList.add('inView');
    })
    .on('exit', section => {
      section.classList.remove('inView');
    })

inView.threshold(0.5);


const sections = document.querySelectorAll('.section');

sections.forEach((section, index) => {
  const artists = section.querySelectorAll('.lineup li');
  const shapes = section.querySelectorAll('.shape');

  artists.forEach((artist, index) => {
    const delay = index * 100;
    artist.style.transitionDelay = delay + 'ms';
  })

  shapes.forEach((shape, index) => {
    const delay = (index + artists.length) * 100;
    shape.style.transitionDelay = delay + 'ms';
  })
})

const links = document.querySelectorAll('.js-scroll');
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);
    document.querySelector(href).scrollIntoView({behavior: 'smooth'});
  })
})
