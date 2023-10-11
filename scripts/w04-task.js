/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Emily Cordero", 
    photo: "images/profilePicture.jpg",
    favoriteFoods: [
        'enchiladas', 
        'costillas de puerco', 
        'beans', 
        'egg'
    ],
    hobbies: [
        'drawing',
        'spending time with family',
        'coding',
        'watching movies'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Wenatchee, WA',
        length: '1 year'
    },
    {
        place: 'Yakima, WA',
        length: '6 years'
    },
    {
        place: 'Mesa, WA',
        length: '2 years'
    },
    {
        place: 'Connell, WA',
        length: '1 year'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('name').alt = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place;
    let dd = document.createElement('dd');
    dd.textContent = length;
    document.querySelector('#places-lived').appendChild(dt, dd);
})


