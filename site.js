document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.mobile-toggle').forEach(b=>b.addEventListener('click',()=>document.querySelector('.menu')?.classList.toggle('open')));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
  document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
});
