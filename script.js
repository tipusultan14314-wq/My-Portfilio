// Mobile nav toggle
const nav = document.querySelector('.nav');
const btn = document.querySelector('.menu');
btn.addEventListener('click', ()=> nav.classList.toggle('open'));

// Smooth fade-in on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, {threshold:.12});

document.querySelectorAll('.card, .section-title').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Little animation helpers
const style = document.createElement('style');
style.textContent = `
.reveal{opacity:.001; transform: translateY(12px); transition: opacity .5s ease, transform .5s ease}
.reveal.in{opacity:1; transform:none}
`;
document.head.appendChild(style);
