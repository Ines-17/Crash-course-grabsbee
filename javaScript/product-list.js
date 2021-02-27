const 
cart = document.querySelector('.cart-trigger');
close= document.querySelector('.cart-btn');
search = document.querySelector('.search-trigger');
exit= document.querySelector('.search-btn');
menu= document.querySelector('.menu-trigger');
menuexit = document.querySelector('.close-menu');



cart.addEventListener('click', () => {
 document.querySelector('.minicart').classList.remove('visualy-hidden');
});
close.addEventListener('click', () => {
 document.querySelector('.minicart').classList.add('visualy-hidden');
})

search.addEventListener('click', () => {
document.querySelector('.search-form').classList.remove('visualy-hidden');
});
exit.addEventListener('click', () => {
 document.querySelector('.search-form').classList.add('visualy-hidden');
})

menu.addEventListener('click', () => {
 document.querySelector('nav').classList.remove('visualy-hidden');
});
menuexit.addEventListener('click', () => {
 document.querySelector('nav').classList.add('visualy-hidden');
})