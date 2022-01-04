const contactLoad = () => {
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    const contactTitle = document.createElement("h2");
    const contactContainer = document.createElement("div");
    const info = document.createElement("div");
    const location = document.createElement("p");

    contactContainer.classList.add("contact-container");
    info.classList.add("info");

    contactTitle.textContent = "Contact Us";
    location.textContent = "fdafdas";

    info.append(location);
    contactContainer.append(info);
    main.append(contactTitle, contactContainer);
    content.append(main);
};

export default contactLoad;