import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import showRestaurantCard from './restaurantCard';
import dataRestaurant from './dataRestaurant';

const restaurantListContainer = document.querySelector('.restaurant-list');
const drawerButton = document.querySelector('#drawer-button');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
const restDesc = document.querySelectorAll('.rest-desc');

drawerButton.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (e) => {
  e.preventDefault();
  drawerElement.classList.remove('open');
});

let restaurantCard = '';
dataRestaurant.forEach((e) => {
  restaurantCard += showRestaurantCard(e);
  restaurantListContainer.innerHTML = restaurantCard;
});

setTimeout(() => {
  for (let i = 0; i < restDesc.length; i++) {
    console.log(restDesc[i]);
  }
}, 6000);
console.log(restDesc);
