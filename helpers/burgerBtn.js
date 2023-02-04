import { useEffect } from "react";

export function burgerBtn() {   
  animateBars()

  // Get id burger menu  
  showingMenu();     
}


function animateBars() {

  var line1__bars = document.querySelector('.line1__btn-burg');
  var line2__bars = document.querySelector('.line2__btn-burg');
  var line3__bars = document.querySelector('.line3__btn-burg');

  line1__bars.classList.toggle('activeline1__btn-burg');
  line2__bars.classList.toggle('activeline2__btn-burg');
  line3__bars.classList.toggle('activeline3__btn-burg');
}


function showingMenu() {  

  // Working with burger menu event
  const contMenu = document.getElementById('menu__bg');
  const showMenu = document.getElementById('showMenuMobile');
  const mainHeader = document.getElementById('start');
  var bodyControl = document.querySelector('body');

  contMenu.classList.toggle('active__container');
  showMenu.classList.toggle('active__menu');
  mainHeader.classList.toggle('header__fixed'); 

}

