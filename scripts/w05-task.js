/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        const templeName = document.createElement('h3');
        templeName.textContent = temple.name;
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(templeName);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
    
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const templesData = await response.json();
    templeList = templesData;
    displayTemples(templeList);
    
}


/* reset Function */
const reset = () => {
    templesElement.textContent="";
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            const utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break
        case "nonutah":
            const nonUtahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(nonUtahTemples);
            break
        case "older":
            const olderTemples = temples.filter(temple => temple.dedicated < new Date(1950,0,1));
            displayTemples(olderTemples);
            break
        case "all":
            displayTemples(temples);
            break
        default:
            console.log("Invalid.");
            break
    }
};


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList)});
