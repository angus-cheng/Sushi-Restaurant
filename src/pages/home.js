const homeLoad = () => {
    const contentContainer = document.querySelector("#content");
    const home = document.createElement("div");
    const main = document.createElement("main");
    const containerCenter = document.createElement("div");
    const hookCenter = document.createElement("h2");
    const information = document.createElement("div");
    const orderButton = document.createElement("button");
    const locationIcon = document.createElement("i");
    const locationText = document.createElement("p");
    const scheduleIcon = document.createElement("i");
    const scheduleTextContainer = document.createElement("div");
    const scheduleWeekday = document.createElement("p");
    const scheduleWeekend = document.createElement("p");

    home.id = "home"
    orderButton.id = "btn-order";
    containerCenter.classList.add("container-center");
    hookCenter.classList.add("hook-center");
    hookCenter.textContent = "Come on down for some delicious cuisine"
    orderButton.textContent = "Order Now";
    locationText.textContent = "HERE";
    information.classList.add("information");
    locationIcon.classList.add("material-icons");
    locationIcon.textContent = "place";
    scheduleIcon.classList.add("material-icons");
    scheduleIcon.textContent = "schedule";
    scheduleTextContainer.classList.add("schedule-text-container");
    scheduleWeekday.textContent = "Mon-Thurs: 10am-9pm";
    scheduleWeekend.textContent = "Fri-Sun: 10am-10pm";

    scheduleTextContainer.append(scheduleWeekday, scheduleWeekend);
    information.append(locationIcon, locationText, scheduleIcon, scheduleTextContainer);
    hookCenter.append(orderButton);
    containerCenter.append(hookCenter, information);
    home.append(containerCenter);
    main.append(home)
    contentContainer.append(main);
}

export default homeLoad;