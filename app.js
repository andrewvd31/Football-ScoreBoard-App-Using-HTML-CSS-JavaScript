let homeEl = document.getElementById("home-container");
let guestEl = document.getElementById("guest-container");
let homeCountEl = 0;
let guestCountEl = 0;

function homeIncrementFunction(homeElvalue){
    homeCountEl += homeElvalue;
    homeEl.textContent = homeCountEl;
}

function guestIncrementFunction(guestElvalue){
    guestCountEl += guestElvalue;
    guestEl.textContent = guestCountEl;
}

function clearHomeEl(){
    homeCountEl = 0;
    homeEl.textContent = homeCountEl;
}

function clearGuestEl(){
    guestCountEl = 0;
    guestEl.textContent = guestCountEl;
}