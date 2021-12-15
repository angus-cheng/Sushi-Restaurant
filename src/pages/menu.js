const menuLoad = () => {
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    const text = document.createElement("p");
    text.textContent = "fda";
    main.append(text)
    content.append(main);
}

export default menuLoad;