window.addEventListener('scroll',()=>{
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav-bar');
    header.classList.toggle('header-scroll', window.scrollY > 0);
    nav.classList.toggle('bar-scroll', window.scrollY > 0);
});
