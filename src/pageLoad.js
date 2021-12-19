import homeLoad from "./pages/home";

const pageLoad = () => {
    const contentContainer = document.querySelector("#content");
    const head = document.querySelector("head");

    const header = document.createElement("header");
    const navbar = document.createElement("nav");
    const titleContainer = document.createElement("div");
    const title = document.createElement("h1");
    const tabContainer = document.createElement("ul");
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li")
    const googleIcons = document.createElement("link");

    googleIcons.rel = "stylesheet";
    googleIcons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    titleContainer.id = "title-container";

    title.textContent = "Sushi";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    home.dataset.tabTarget = "home";
    menu.dataset.tabTarget = "menu";
    contact.dataset.tabTarget = "contact";

    titleContainer.append(title);
    tabContainer.append(home, menu, contact);
    navbar.append(titleContainer, tabContainer);
    header.append(navbar);
    contentContainer.append(header);
    head.append(googleIcons);

    homeLoad();
}

export default pageLoad;