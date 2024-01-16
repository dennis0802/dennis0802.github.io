const toggler = document.querySelector(".toggle-input");
const toggleIcon = document.querySelector(".toggle-icon");
const page = document.body;
console.log("BEFORE CHECK: " + localStorage.getItem("checked"));
setCheckedState();

function setCheckedState(){
    if(!(localStorage.checked === undefined)){
        toggler.checked = isTrue(localStorage.getItem("checked"));
        console.log(toggler.checked);
        console.log(localStorage.getItem("checked"));
        console.log("MID CHECK: " + localStorage.getItem("checked"));
        toggleTheme();
    }
}

function toggleTheme() {
    replaceClass();
    toggleIconTheme();
    updateLocalStorage();
}

/*function replaceClass(){
    if(toggler.checked){
        console.log("BEFORE: " + page.classList);
        page.classList.replace("light-mode", "dark-mode");
        console.log("AFTER: " + page.classList);
    }
    else{
        console.log("BEFORE: " + page.classList);
        page.classList.replace("dark-mode", "light-mode");
        console.log("AFTER: " + page.classList);
    }
}

function toggleIconTheme(){
    if(page.classList.contains('light-mode')){
        toggleIcon.src = "./images/moon.png";
        toggleIcon.alt = "Switch to Dark Mode";
    }
    else{
        toggleIcon.src = "./images/sun.png";
        toggleIcon.alt = "Switch to Light Mode";
    }
}

function updateLocalStorage(){
    localStorage.setItem("checked", toggler.checked);
}

function isTrue(value){
    return value === 'true';
}

toggler.addEventListener("change", toggleTheme);*/