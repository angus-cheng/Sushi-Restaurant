import californiaRollImg from "../assets/menuItems/californiaRoll.jpg";
import avocadoRollImg from "../assets/menuItems/avocadoRoll.jpg";
import tunaRollImg from "../assets/menuItems/tunaRoll.jpg";
import crabRollImg from "../assets/menuItems/crabRoll.jpg";
import salmonRollImg from "../assets/menuItems/salmonRoll.jpg";
import cucumberRollImg from "../assets/menuItems/cucumberRoll.jpg";

const menuLoad = () => {
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    const menuTitle = document.createElement("h2");
    const menuItemsContainer = document.createElement("div");

    const menuItems = ["california", "avocado", "tuna", "crab", "salmon", "cucumber"];
    let menuItemDivs = [];

    menuItems.forEach(item => {
        const itemContainer = document.createElement("div");
        itemContainer.id = item;
        itemContainer.classList.add("item-container");

        const itemImg = document.createElement("img");
        const itemText = document.createElement("h3");
        const itemOverlay = document.createElement("div");

        itemOverlay.classList.add("overlay");
        const text = document.createElement("p");
        text.classList.add("menu-item-text");
        itemOverlay.append(text);

        itemContainer.append(itemOverlay, itemImg, itemText);
        menuItemDivs.push(itemContainer);
        menuItemsContainer.append(itemContainer);
    });

    menuItemDivs[0].firstChild.firstChild.textContent = "A makizushi sushi roll, rolled inside-out containing cucumber, imitation crab and avocado";
    menuItemDivs[0].childNodes[1].src = californiaRollImg;
    menuItemDivs[0].lastChild.textContent = "California Roll";
    menuItemDivs[1].firstChild.firstChild.textContent = "A makizushi sushi roll, rolled inside-out containing cucumber, imitation crab and avocado";
    menuItemDivs[1].childNodes[1].src = avocadoRollImg;
    menuItemDivs[1].lastChild.textContent = "Avocado Roll";
    menuItemDivs[2].childNodes[1].src = tunaRollImg;
    menuItemDivs[2].lastChild.textContent = "Tuna Roll";
    menuItemDivs[3].childNodes[1].src = crabRollImg;
    menuItemDivs[3].lastChild.textContent = "Crab Roll";
    menuItemDivs[4].childNodes[1].src = salmonRollImg;
    menuItemDivs[4].lastChild.textContent = "Salmon Roll";
    menuItemDivs[5].childNodes[1].src = cucumberRollImg;
    menuItemDivs[5].lastChild.textContent = "Cucumber Roll";

    menuItemsContainer.id = "menuItems";
    menuTitle.textContent = "Menu";

    content.classList.add("fade-in");

    main.append(menuTitle, menuItemsContainer);
    content.append(main);
}

export default menuLoad;