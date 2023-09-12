function createHome() {
   const home =  document.createElement('div');
   home.classList.add('home');
   
   const homeName = document.createElement('p')
   homeName.classList.add('home-name')
   homeName.textContent = '닭'

   home.appendChild(homeName);

   return home;
}

function homePage() {
   const main = document.getElementById('main');
   main.textContent = '';
   main.className = '';
   main.classList.add('home-page');
   main.appendChild(createHome());
}

export default homePage;