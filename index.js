const burgerList = document.querySelector(".burgerList");
const infoResponsiveDiv = document.querySelector(".infoResponsiveDiv")
const infoResponsive = document.querySelector(".infoResponsive")
const separator = document.querySelector(".separator")
const separator2 = document.querySelector(".separator2")
const aboutPlanets = document.querySelector(".aboutPlanets")
const smallInfo = document.querySelector(".smallInfo")
const span = document.querySelector(".span")
const p = document.querySelector(".p")
const burgerr = document.querySelector(".burgerr")
const wikiInfo = document.querySelector(".wikiInfo")
const planetsss = document.querySelector(".planetsss")

let clicked = true;

function displayNone() {
    clicked = !clicked;
    if(clicked) {
        planetsss.style.display = "none";
        burgerList.style.display = "flex";
        aboutPlanets.style.display = "flex";
        smallInfo.style.display = "flex";
        span.style.display = "flex";
        p.style.display = "flex";
        burgerr.style.top = "-1000px";
        burgerList.style.display = "none";
    } else {  
        planetsss.style.display = "flex";
        burgerList.style.display = "flex";
        aboutPlanets.style.display = "none";
        smallInfo.style.display = "none";
        span.style.display = "none";
        p.style.display = "none";
        burgerr.style.top = "90px";
        wikiInfo.style.display = "none"

    }
}
const planetPc = document.querySelector("#planetPc")
const planetPic = document.querySelector(".planetPic")
const planetPicc = document.querySelector(".planetPicc")
const planetP = document.querySelector("#planetP")
function planet() {
    clicked = !clicked;
    if(clicked) {
                planetP.style.display = "none";
                planetPicc.style.display = "flex"; 
            } else {
                planetP.style.display = "flex";
                planetPicc.style.display = "none";
            }
}
