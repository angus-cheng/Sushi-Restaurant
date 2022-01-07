const contactLoad = () => {
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    const contactTitle = document.createElement("h2");
    const contactContainer = document.createElement("div");
    const info = document.createElement("div");
    const locationIcon = document.createElement("i");
    const location = document.createElement("p");
    const scheduleIcon = document.createElement("i");
    const scheduleTextContainer = document.createElement("div");
    const scheduleWeekday = document.createElement("p");
    const scheduleWeekend = document.createElement("p");
    const phoneIcon = document.createElement("i");
    const phoneNumber = document.createElement("p");
    const map = document.createElement("iframe");

    contactContainer.classList.add("contact-container");
    info.classList.add("info");
    locationIcon.classList.add("material-icons");
    scheduleIcon.classList.add("material-icons");
    scheduleTextContainer.classList.add("schedule-text-container");
    phoneIcon.classList.add("material-icons");
    map.classList.add("map");

    contactTitle.textContent = "Contact Us";
    locationIcon.textContent = "place";
    scheduleIcon.textContent = "schedule";
    location.textContent = "17 Oxford St, Builmba\n Brisbane, 4171";
    scheduleWeekday.textContent = "Mon-Thurs: 10am-9pm";
    scheduleWeekend.textContent = "Fri-Sun: 10am-10pm";
    phoneIcon.textContent = "phone";
    phoneNumber.textContent = "07 123 456";
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.28745781430277!2d153.05356343546435!3d-27.450595123914763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915998fda46189%3A0xca3e8b5353cca82d!2s17%20Oxford%20St%2C%20Bulimba%20QLD%204171!5e0!3m2!1sen!2sau!4v1641443448652!5m2!1sen!2sau" style="border:0;" allowfullscreen="" loading="lazy"></iframe>"';

    scheduleTextContainer.append(scheduleWeekday, scheduleWeekend);
    info.append(locationIcon, location, scheduleIcon, scheduleTextContainer, phoneIcon, phoneNumber, map);
    contactContainer.append(info);
    main.append(contactTitle, contactContainer);
    content.append(main);
};

export default contactLoad;