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
    console.log("clicked");
    //Add Title
    let id = "BLUSH";
    addTitle(id);

    //Fetch Blush Product Line
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush")
    .then(response => response.json())
    .then(data => data.forEach(element => handleClick(element))
    )}

    const bronzer = document.querySelector("#bronzer");
    bronzer.addEventListener("click", bronzerBtn);
    
    function bronzerBtn() {
        console.log("clicked");
        //Add Title
        let id = "BRONZER";
        addTitle(id);
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer")
        .then(response => response.json())
        .then(data => data.forEach(element => handleClick(element))
        )}

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

