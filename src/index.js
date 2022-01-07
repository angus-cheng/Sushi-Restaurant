import "./styles/index.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";
import pageLoad from "./pageLoad.js"
import homeLoad from "./pages/home.js";
import menuLoad from "./pages/menu.js";
import contactLoad from "./pages/contact.js";

pageLoad();

const tabs = document.querySelectorAll("[data-tab-target]");
const body = document.querySelector("body");
const title = document.querySelector("h1");

tabs.forEach(tab => {
    tab.addEventListener("click", e => {
        e.preventDefault; 
        body.classList.remove("fade-in");
        void body.offsetWidth;
        body.classList.add("fade-in");
        switch(tab.dataset.tabTarget) {
            case "home":
                clearPage();
                homeLoad();
                tab.classList.add("tab-highlight");
                break;
            case "menu":
                clearPage();
                menuLoad();
                tab.classList.add("tab-highlight");
                break;
            case "contact":
                clearPage();
                contactLoad();
                tab.classList.add("tab-highlight");
                break;
        }
    });
});

title.addEventListener("click", () => {
    body.classList.remove("fade-in");
    void body.offsetWidth;
    body.classList.add("fade-in");
    clearPage();
    homeLoad();
    tabs[0].classList.add("tab-highlight");
});

const clearPage = () => {
    const main = document.querySelector("main");
    if (main !== null) {
        main.remove();
    }
    tabs.forEach(tab => {
        tab.classList.remove("tab-highlight");
    });
}
