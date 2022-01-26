export default function dishesList(element) {
    
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
        for (let j=0; j<dishes[i].componenents.length; j++){
            const component = document.createElement('li');
            component.textContent = dishes[i].componenents[j];
            ingredients.appendChild(component);
        }

        division.appendChild(title);
        division.appendChild(ingredients);
        element.appendChild(division);
    }

    return element;
}