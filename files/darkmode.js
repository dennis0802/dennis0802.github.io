const toggler = document.querySelector(".toggle-input");
const toggleIcon = document.querySelector(".toggle-icon");
const webIcons = document.querySelectorAll("#weblink");
const workIcons = document.querySelectorAll("#workplace");
const vidIcons = document.querySelectorAll("#demo");
const pdfIcons = document.querySelectorAll("#pdf");
const gitIcons = document.querySelectorAll("#gitrepository");
const uniIcons = document.querySelectorAll("#universityProject");
const windowsDownloadIcons = document.querySelectorAll("#windowsDownload");
const personalProjectIcons = document.querySelectorAll("#personalProject");
const page = document.body;

setCheckedState();

function setCheckedState(){
    if(!(localStorage.checked === undefined)){
        toggler.checked = isTrue(localStorage.getItem("checked"));
        toggleTheme();
    }
}

function toggleTheme() {
    replaceClass();
    toggleIconTheme();
    updateLocalStorage();
}

function replaceClass(){
    if(toggler.checked){
        page.classList.replace("light-mode", "dark-mode");
    }
    else{
        page.classList.replace("dark-mode", "light-mode");
    }
}

function toggleIconTheme(){
    if(page.classList.contains('light-mode')){
        toggleIcon.src = "./images/moon.png";
        toggleIcon.alt = "Switch to Dark Mode";

        if(webIcons.length !== 0){
            // Invert icons
            webIcons.forEach(element => {
                element.src = "./images/web.png"
            });

            workIcons.forEach(element => {
                element.src = "./images/workplace.png"
            });

            vidIcons.forEach(element => {
                element.src = "./images/video.png"
            });

            pdfIcons.forEach(element => {
                element.src = "./images/report.png"
            });

            gitIcons.forEach(element => {
                element.src = "./images/github.png"
            });

            uniIcons.forEach(element => {
                element.src = "./images/university.png"
            });

            windowsDownloadIcons.forEach(element => {
                element.src = "./images/windows.png"
            });

            personalProjectIcons.forEach(element => {
                element.src = "./images/personalProject.png"
            });
        }
    }
    else{
        toggleIcon.src = "./images/sun.png";
        toggleIcon.alt = "Switch to Light Mode";

        if(webIcons.length !== 0){
            // Invert icons
            webIcons.forEach(element => {
                element.src = "./images/web-bright.png"
            });

            workIcons.forEach(element => {
                element.src = "./images/workplace-bright.png"
            });

            vidIcons.forEach(element => {
                element.src = "./images/video-bright.png"
            });

            pdfIcons.forEach(element => {
                element.src = "./images/report-bright.png"
            });

            gitIcons.forEach(element => {
                element.src = "./images/github-bright.png"
            });

            uniIcons.forEach(element => {
                element.src = "./images/university-bright.png"
            });

            windowsDownloadIcons.forEach(element => {
                element.src = "./images/windows-bright.png"
            });

            personalProjectIcons.forEach(element => {
                element.src = "./images/personalProject-bright.png"
            });
        }
    }
}

function updateLocalStorage(){
    localStorage.setItem("checked", toggler.checked);
}

function isTrue(value){
    return value === 'true';
}

toggler.addEventListener("change", toggleTheme);