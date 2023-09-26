/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Emily Cordero';
var currentYear = new Date(); 
var profilePicture = 'C:\Users\Corde\OneDrive\Desktop\cse121b\images\profilePicture.jpg'
/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
textContent.setAttribute = `${currentYear}`;
imageElement.setAttribute('images/profilePicture.jpg', profilePicture);
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
const foods = ['enchiladas', 'costillas de puerco', 'beans'];

foodElement.innerHTML = `<br> ${foods}`;

const newFoods = foods.push('chicken', 'beef', 'veggies');
foodElement.innerHTML += `<br> ${newFoods}`;
