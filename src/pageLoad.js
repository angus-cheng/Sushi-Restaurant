const pageLoad = () => {
    const contentContainer = document.querySelector("#content");

    const header = document.createElement("header");
    const navbar = document.createElement("nav");
    const title = document.createElement("h1");
    const tabContainer = document.createElement("ul");
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li")

    title.textContent = "Sushi";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    home.dataset.tabTarget = "home";
    menu.dataset.tabTarget = "menu";
    contact.dataset.tabTarget = "contact";

    tabContainer.append(home, menu, contact);
    navbar.append(title, tabContainer);
    header.append(navbar);
    contentContainer.append(header);
}

export default pageLoad;