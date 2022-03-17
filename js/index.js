//********** WORK IN PROGRESS **********

// document.addEventListener("DOMContentLoaded", pageLanding);

// function pageLanding() {
//     fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(element => {
//             const name = document.createElement("p");
//             name.innerHTML = element.name;
//             document.querySelector(".main").appendChild(name);
//         })})
// }

//********** GENERAL FUNCTIONS **********

//Handle Click Event
function handleClick(element) {
    const name = document.createElement("p");
    name.innerHTML = element.name;
    document.querySelector(".main").appendChild(name);
}
//Add Title
function addTitle(id) {
    const title = document.createElement("p");
    title.innerHTML = id; 
    document.querySelector(".main").appendChild(title);
}

// ********** BUTTONS **********

//Blush
const blush = document.querySelector("#blush");
blush.addEventListener("click", blushBtn);

function blushBtn() {
    //Add Title
    let id = "BLUSH";
    addTitle(id);

    //Fetch Blush Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}
//Bronzer
const bronzer = document.querySelector("#bronzer");
bronzer.addEventListener("click", bronzerBtn);

function bronzerBtn() {
    //Add Title
    let id = "BRONZER";
    addTitle(id);

    //Fetch Bronzer Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}

//Eyebrow
const eyebrow = document.querySelector("#eyebrow");
eyebrow.addEventListener("click", eyebrowBtn);

function eyebrowBtn() {
    //Add Title
    let id = "EYEBROW";
    addTitle(id);

    //Fetch Eyebrow Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}

//Eyeliner
const eyeliner = document.querySelector("#eyeliner");
eyeliner.addEventListener("click", eyelinerBtn);

function eyelinerBtn() {
    //Add Title
    let id = "EYELINER";
    addTitle(id);

    //Fetch Eyeliner Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}

//Eyeshadow
const eyeshadow = document.querySelector("#eyeshadow");
eyeshadow.addEventListener("click", eyeshadowBtn);

function eyeshadowBtn() {
    //Add Title
    let id = "EYESHADOW";
    addTitle(id);

    //Fetch Eyeshadow Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}

//Foundation
const foundation = document.querySelector("#foundation");
foundation.addEventListener("click", foundationBtn);

function foundationBtn() {
    //Add Title
    let id = "FOUNDATION";
    addTitle(id);

    //Fetch Foundation Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}

//Lip Liner
const lipLiner = document.querySelector("#lipLiner");
lipLiner.addEventListener("click", lipLinerBtn);

function lipLinerBtn() {
    //Add Title
    let id = "LIP LINER";
    addTitle(id);

    //Fetch Lip Liner Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}

//Lipstick
const lipstick = document.querySelector("#lipstick");
lipstick.addEventListener("click", lipstickBtn);

function lipstickBtn() {
    //Add Title
    let id = "LIPSTICK";
    addTitle(id);

    //Fetch Lipstick Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}

//Mascara
const mascara = document.querySelector("#mascara");
mascara.addEventListener("click", mascaraBtn);

function mascaraBtn() {
    //Add Title
    let id = "MASCARA";
    addTitle(id);

    //Fetch Mascara Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}

//Nail Polish
const nailPolish = document.querySelector("#nailPolish");
nailPolish.addEventListener("click", nailPolishBtn);

function nailPolishBtn() {
    //Add Title
    let id = "NAIL POLISH";
    addTitle(id);

    //Fetch Nail Polish Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}

