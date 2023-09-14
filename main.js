const bar = document.querySelector('#bar');
bar.addEventListener('click', ()=>{
    const nav = document.querySelector('nav');
    nav.classList.toggle('d-none');    
})