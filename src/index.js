console.log('You got this!');

import homePage from "./home";
import menuPage from "./menu";
import aboutUsPage from "./aboutus";

const content = document.getElementById('content');
content.classList.add('content')

function createHeader() {
   const header = document.createElement('header');
   header.classList.add('header');

   const restaurantName = document.createElement('h1');
   restaurantName.classList.add('restaurantName');
   restaurantName.textContent = 'DAK';

   const buttonsDiv = document.createElement('div');
   buttonsDiv.classList.add('btnDiv');

   const homeBtn = document.createElement('button');
   homeBtn.classList.add('button');
   homeBtn.textContent = 'Home';

   const menuBtn = document.createElement('button');
   menuBtn.classList.add('button');
   menuBtn.textContent = 'Menu';

   const aboutBtn = document.createElement('button');
   aboutBtn.classList.add('button');
   aboutBtn.textContent = 'About';

   buttonsDiv.appendChild(homeBtn);
   buttonsDiv.appendChild(menuBtn);
   buttonsDiv.appendChild(aboutBtn);

   header.appendChild(restaurantName);
   header.appendChild(createNav());

   return header;
}

function createNav() {
   const buttonsDiv = document.createElement('div');
   buttonsDiv.classList.add('btnDiv');

   const homeBtn = document.createElement('button');
   homeBtn.classList.add('button');
   homeBtn.textContent = 'Home';
   homeBtn.addEventListener('click', () => {
      homePage();
   });

   const menuBtn = document.createElement('button');
   menuBtn.classList.add('button');
   menuBtn.textContent = 'Menu';
   menuBtn.addEventListener('click', () => {
      menuPage();
   });

   const aboutBtn = document.createElement('button');
   aboutBtn.classList.add('button');
   aboutBtn.textContent = 'About Us';
   aboutBtn.addEventListener('click', () => {
      aboutUsPage();
   });

   buttonsDiv.appendChild(homeBtn);
   buttonsDiv.appendChild(menuBtn);
   buttonsDiv.appendChild(aboutBtn);

   return buttonsDiv;
}

function createBody() {
   const main = document.createElement('div');
   main.setAttribute('id', 'main');

   return main;
}

function createFooter() {
   const footer = document.createElement('footer');
   footer.classList.add('footer');

   const photoCredit = document.createElement('a');
   photoCredit.classList.add('photo-credit');
   photoCredit.textContent = 'Photo by Jon Tyson';
   photoCredit.href = "https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"

   const githubDiv = document.createElement('div');
   githubDiv.classList.add('github-div');

   const credit = document.createElement('span');
   credit.classList.add('credit');
   credit.textContent = 'Created by laumt'

   const divider = document.createElement('span');
   divider.classList.add('divider');
   divider.textContent = '|'

   const github = document.createElement('a');
   github.classList.add('github');
   github.href = 'https://github.com/laumt9'

   const githubIcon = document.createElement('img');
   githubIcon.classList.add('githubIcon');
   githubIcon.src = '../dist/img/github.svg';

   github.appendChild(githubIcon);

   githubDiv.appendChild(credit);
   githubDiv.appendChild(divider);
   githubDiv.appendChild(github);

   footer.appendChild(photoCredit);
   footer.appendChild(githubDiv);

   return footer;
}

function onload() {
   content.appendChild(createHeader());
   content.appendChild(createBody());
   content.appendChild(createFooter());
   homePage();
}

onload();