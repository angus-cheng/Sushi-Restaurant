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

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        e.preventDefault; 
        body.classList.remove("fade-in");
        void body.offsetWidth;
        body.classList.add("fade-in");
        switch(tab.dataset.tabTarget) {
            case "home":
                clearPage();
                homeLoad();
                break;
            case "menu":
                clearPage();
                menuLoad();
                break;
            case "contact":
                clearPage();
                contactLoad();
                break;
        }
    });
});

const clearPage = () => {
    const main = document.querySelector("main");
    if (main !== null) {
        main.remove();
    }
}
