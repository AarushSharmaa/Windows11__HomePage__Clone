// once someone clicks on taskbar, pop up the startmenu

let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

taskbar.addEventListener("click", () => {

    if (startmenu.style.bottom == "-650px") {
        startmenu.style.bottom = "50px";

    } else {
        startmenu.style.bottom = "-650px";
    }
})