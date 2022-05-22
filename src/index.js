import './styles.css';
import dishesList from './menu';

const mainWrapper = document.querySelector('.content');
const header = document.createElement('header');
const footer = document.createElement('footer');

// Create footer elements
const footEditor = document.createElement('p'); footEditor.textContent = "Designed by Yahia KERDACHE";
const footImageSrc = document.createElement('p'); footImageSrc.textContent = "Image source www.freeimages.com";
const footIdeaSrc = document.createElement('p'); footIdeaSrc.textContent = "(c) The odin project";

footer.appendChild(footEditor); footer.appendChild(footImageSrc); footer.appendChild(footIdeaSrc);

// Create header elements
const btns = document.createElement('nav');
const homeBtn = document.createElement('button'); homeBtn.textContent = "Home";
const menuBtn = document.createElement('button'); menuBtn.textContent = "Menu";
const contactBtn = document.createElement('button'); contactBtn.textContent = "Contact";

btns.appendChild(homeBtn); btns.appendChild(menuBtn); btns.appendChild(contactBtn);

// header
const blueBar = document.createElement('div');
blueBar.className = 'blue-bar';
header.appendChild(blueBar);
header.appendChild(btns)
mainWrapper.appendChild(header);

// build welcome page
const container = document.createElement('section');

const welcomePage = (() => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('main-wrapper');

    const title = document.createElement('h1');
    title.textContent = "Yahia Restauration";
    wrapper.appendChild(title);

    const intro = document.createElement('div');
    intro.classList.add('intro');
    const introPar = document.createElement('p');
    introPar.textContent = `Experienced eaters know that experiencing a culture's signature dishes, 
    in restaurants valued by the people of the country, brings a far deeper connection with a place 
    than visiting the “must-see” tourist spots. One sure way to find the best restaurants wherever you 
    travel is to consult the Michelin Restaurant Guide. Welcome to our place of pleasure`;
    intro.appendChild(introPar);
    const introFoot = document.createElement('p');
    introFoot.textContent = "Chef Yahia";
    introFoot.classList.add('intro-foot');
    intro.appendChild(introFoot);

    wrapper.appendChild(intro);

    const openHours = document.createElement('div');
    openHours.classList.add('open-hours');
    const hoursHead = document.createElement('h2');
    hoursHead.textContent = "Hours";
    openHours.appendChild(hoursHead);
    const hoursList = document.createElement('ul');
    let documentList = [];
    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    for (let i = 0; i < days.length - 1; i++) {
        documentList[i] = document.createElement('li');
        documentList[i].textContent = days[i] + " 10am - 10pm";
        hoursList.appendChild(documentList[i]);
    }
    documentList[days.length - 1] = document.createElement('li');
    documentList[days.length - 1].textContent = days[days.length - 1] + " 03pm - 10pm";
    hoursList.appendChild(documentList[days.length - 1]);

    openHours.appendChild(hoursList);

    wrapper.appendChild(openHours);

    const locationWrap = document.createElement('div');
    const locationHead = document.createElement('h2');
    locationHead.textContent = "Location";
    locationWrap.appendChild(locationHead);
    const locationPar = document.createElement('p');
    locationPar.textContent = "Cite 72 lgts LSP El Kerma - Oran";
    locationWrap.appendChild(locationPar);

    wrapper.appendChild(locationWrap);

    const build = () => {
        return wrapper;
    }
    return { build };
})();

const contactBuild = (() => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('main-wrapper');

    const details = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = "Contact us";
    details.appendChild(title);

    const email = document.createElement('p');
    const emailinit = document.createElement('strong');
    emailinit.textContent = "Email : ";
    const emailcont = document.createElement('span');
    emailcont.textContent = "yahia.ah.kerdache@gmail.com";
    email.appendChild(emailinit);
    email.appendChild(emailcont);
    const phone = document.createElement('p');
    const phoneinit = document.createElement('strong');
    phoneinit.textContent = "Phone number : ";
    const phonecont = document.createElement('span');
    phonecont.textContent = "0111 11 11 11";
    phone.appendChild(phoneinit);
    phone.appendChild(phonecont);
    details.appendChild(email);
    details.appendChild(phone);

    wrapper.appendChild(details);

    const build = () => {
        return wrapper;
    }
    return { build };
})();

const menuBuild = (() =>{
    const wrapper = document.createElement('div');
    wrapper.classList.add('main-wrapper');

    const title = document.createElement('h1');
    title.textContent = "Our Menu";
    wrapper.appendChild(title);

    // complete the menu here
    let dishes = [];
    let filler = [
        ['Soup', "Potatoes,Carrots,Tomatoes,Thyme,Lentils"],
        ["Vegan salad", "Couscous,Beans,Olives,Cucumber,Onions"],
        ["Chicken Kebab", "Chicken,Yogurt,Garlic cloves,Mustard,Pepper"],
        ["Rice pudding", "Rice,Sugar,Vanilla,Milk,Jam"]
    ];

    class Dish {
        constructor(name, componenents) {
            this.name = name;
            this.componenents = componenents.split(",");
        }
    }

    for (let i = 0; i < filler.length; i++) {
        const division = document.createElement('div');
        const title = document.createElement('h2');
        const ingredients = document.createElement('ul');
        dishes[i] = new Dish(filler[i][0], filler[i][1]);
        title.textContent = dishes[i].name;
        for (let j=0; j<dishes[i].componenents.length; j++){
            const component = document.createElement('li');
            component.textContent = dishes[i].componenents[j];
            ingredients.appendChild(component);
        }

        division.appendChild(title);
        division.appendChild(ingredients);
        wrapper.appendChild(division);
    }

    const build = () => {
        return wrapper;
    }
    return { build };
})();

homeBtn.addEventListener('click', () => {
    const old = document.querySelector('.main-wrapper');
    container.removeChild(old);
    container.appendChild(welcomePage.build());
});
contactBtn.addEventListener('click', () => {
    const old = document.querySelector('.main-wrapper');
    container.removeChild(old);
    container.appendChild(contactBuild.build());
});
menuBtn.addEventListener('click', () => {
    const old = document.querySelector('.main-wrapper');
    container.removeChild(old);
    container.appendChild(menuBuild.build());
});

// Initial page
container.appendChild(welcomePage.build());

// Add the container
mainWrapper.appendChild(container);

// footer
mainWrapper.appendChild(footer);