function createMenu() {
   const menu = document.createElement('div');
   menu.classList.add('menu');

   const menuTitle = document.createElement('h1');
   menuTitle.classList.add('menu-title');
   menuTitle.textContent = 'Menu';

   menu.appendChild(menuTitle);

   menu.appendChild(
      createMenuItem('Dak Classic', '$14', 
      'Classic original fried chicken, marinated with our signature DAK seasoning')
   );

   menu.appendChild(
      createMenuItem('Soy Garlic', '$15', 
      'Hand battered whole chicken coated with soy garlic sauce')
   );

   menu.appendChild(
      createMenuItem('Spicy', '$15', 
      'Hand battered whole chicken coated with our DAK sweet and spicy sauce')
   );

   menu.appendChild(
      createMenuItem('Half & Half', '$18', 
      'Combination of two choices: Dak Classic, Soy Garlic, and Spicy')
   );

   menu.appendChild(
      createMenuItem('Chicken Tenders', '$13', 
      'Double breaded crispy and juicy 100% white meat chicken tenders (+$1 to coat with the sauce of your choice)')
   );

   menu.appendChild(
      createMenuItem('Dak Classic Thigh Burger', '$12', 
      'Signature DAK seasoned premium chicken thigh, fried to perfection and topped with fresh lettuce, onion, pickles, and our DAK burger secret sauce on a toasted sesame seed bun (Served with seasoned fries)')
   );

   menu.appendChild(
      createMenuItem('Tteokbokki', '$12', 
      'Sweet, spicy, and chewy rice cakes served with fish cakes and topped with scallions')
   );

   menu.appendChild(
      createMenuItem('Seasoned Fries', '$7',
      'Crispy and perfectly seasoned french fries, served with our house made garlic aioli')
   );

   return menu;
}

function createMenuItem(name, price, description) {
   const menuItem = document.createElement('div');
   menuItem.classList.add('menu-item-div');

   const foodImage = document.createElement('img');
   foodImage.classList.add('food-image');
   foodImage.src = `./img/food/${name.toLowerCase()}.png`;
   foodImage.alt = `${name}`;

   const foodInfoDiv = document.createElement('div');
   foodInfoDiv.classList.add('food-info-div');

   const foodName = document.createElement('h2');
   foodName.classList.add('food-name');
   foodName.textContent = name;

   const foodPrice = document.createElement('h3');
   foodPrice.classList.add('food-price');
   foodPrice.textContent = price;

   const foodDescription = document.createElement('p');
   foodDescription.classList.add('food-description');
   foodDescription.textContent = description;

   foodInfoDiv.appendChild(foodName);
   foodInfoDiv.appendChild(foodPrice);
   foodInfoDiv.appendChild(foodDescription);
   
   menuItem.appendChild(foodImage);
   menuItem.appendChild(foodInfoDiv);
   
   return menuItem;
}

function menuPage() {
   const main = document.getElementById('main');
   main.textContent = '';
   main.className = '';
   main.classList.add('menu-page');
   main.appendChild(createMenu());
   console.log('Menu');
}
 
export default menuPage;