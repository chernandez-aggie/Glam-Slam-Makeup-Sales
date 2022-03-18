document.addEventListener("DOMContentLoaded", () => 
{
    //********** BUTTONS **********

    //Where Product Information is Appended
    const results = document.querySelector(".results");

    //Handle Click Event
    // function handleClick(element) {
    //     const name = document.createElement("p");
    //     name.innerText = element.name;
    //     results.appendChild(name);
    // }
    function handleClick(element) {
        const productName = document.createElement("p");
        productName.innerText = `${element.brand.toUpperCase()}     ${element.name}\n$${element.price}0`;
        const img = document.createElement("img");
        img.setAttribute("src", element.image_link)
        img.setAttribute("height", "100");
        img.setAttribute("width", "100");
        const productDescription = document.createElement("p");
        productDescription.innerText = element.description;
        results.appendChild(productName);
        results.appendChild(img);
        results.appendChild(productDescription);
    }
    //Add Title
    function addTitle(id) {
        const title = document.createElement("p");
        title.innerText = `${id} \n\n If Price is Shown as $0.00, Item is Currently Sold Out`; 
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
        //Clear Page Content
        results.innerHTML = "";
        //Add Title
        let id = e.target.id.toUpperCase();
        addTitle(id);
        const apiURL = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=" + id.toLowerCase();
        //Fetch Blush Product Line
        fetch(apiURL)
        .then(response => response.json())
        .then(data => data.forEach(element => handleClick(element)))
    }
});