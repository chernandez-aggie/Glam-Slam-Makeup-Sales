document.addEventListener("DOMContentLoaded", () => 
{
    //********** BUTTONS **********

    //Where Product Information is Appended
    const results = document.querySelector(".results");

    //Handle Click Event
    function handleClick(element) {
        const name = document.createElement("p");
        name.innerText = element.name;
        results.appendChild(name);
    }
    //Add Title
    function addTitle(id) {
        const title = document.createElement("p");
        title.innerText = id; 
        results.appendChild(title);
    }
    //Create an Array of Buttons Utilizing Button Variables
    //Add Click Event Listener to Each Button
    const blush = document.querySelector("#blush");
    const bronzer = document.querySelector("#bronzer");
    const eyebrow = document.querySelector("#eyebrow");
    const eyeliner = document.querySelector("#eyeliner");
    const eyeshadow = document.querySelector("#eyeshadow");
    const foundation = document.querySelector("#foundation");
    const lipLiner = document.querySelector("#lip_liner");
    const lipstick = document.querySelector("#lipstick");
    const mascara = document.querySelector("#mascara");
    const nailPolish = document.querySelector("#nail_polish");
    const btnArray = [blush, bronzer, eyebrow,eyeliner,eyeshadow,foundation,lipLiner,lipstick,mascara,nailPolish];
    btnArray.forEach(button => button.addEventListener("click", productBtn));

    //Callback Function - Appends Product List to Page
    function productBtn (e){
        //Add Title
        let id = e.target.id.toUpperCase();
        results.innerHTML = "";
        addTitle(id);
        const apiURL = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=" + id.toLowerCase();
        //Fetch Blush Product Line
        fetch(apiURL)
        .then(response => response.json())
        .then(data => data.forEach(element => handleClick(element)))
    }
});