const btn = document.querySelector('.btn');
const listitms = document.querySelector('.listItm');

btn.addEventListener('click', ()=>{
    btn.classList.toggle('itms');
    listitms.classList.toggle('itms');
})

document.querySelectorAll('.itm').forEach(n => n.addEventListener('click', ()=>{
    btn.classList.toggle('itms');
    listitms.classList.toggle('itms');
}))