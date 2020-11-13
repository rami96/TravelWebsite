let burger = document.getElementById('burger');
let burger1 = document.querySelector('.burger1');
let burger2 = document.querySelector('.burger2');
let burger3 = document.querySelector('.burger3');
let smallMenu = document.querySelector('.hiddenMenu')
let hideNav = document.querySelector('.listAndButton2')
smallMenu.classList.add('hidden');
hideNav.classList.add('hidden2');

burger.addEventListener('click',function(){
    //burger1.setAttribute("class", "burger1click")
    burger1.classList.toggle('burger1click');
    burger2.classList.toggle('burger2click');
    burger3.classList.toggle('burger3click');
    smallMenu.classList.toggle('hidden');
    hideNav.classList.toggle('hidden2');
})