/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Emily Cordero';
var currentYear = new Date(); 
var profilePicture = 'images/profilePicture.jpg'
/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
const food = ['enchiladas', 'costillas de puerco', 'beans', 'egg'];
foodElement.innerHTML = `${food}`;
const favFood = ', cheese';
foodElement.innerHTML += `<br>${food + favFood}`
food.pop(0)
foodElement.innerHTML += `<br>${food}`
food.pop(3)
foodElement.innerHTML += `<br>${food}`

