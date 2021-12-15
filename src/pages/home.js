const homeLoad = () => {
    const contentContainer = document.querySelector("#content");
    const home = document.createElement("div");
    const main = document.createElement("main");

    home.id = "home"
    home.dataset.tabContent = "";
    home.style.height = "95vh";

    main.append(home)
    contentContainer.append(main);
}

export default homeLoad;