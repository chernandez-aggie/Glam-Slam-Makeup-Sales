document.addEventListener("DOMContentLoaded", () => 
{
    //********** BUTTONS **********

    //Where Product Information is Appended
    const results = document.querySelector(".results");
    const image = results.querySelector("#image");
    //Callback Functions for Event Listeners    
        //Product Display
    function productDisplay(element) {
        //Product Information
        const productInfo = document.createElement("p");
        productInfo.setAttribute("id", "productInfo");
        productInfo.setAttribute("class", "text");
        productInfo.innerText = `Brand: ${element.brand.toUpperCase()}\nProduct Name: ${element.name}`;
        if(element.price == 0.0){
            productInfo.innerText = productInfo.innerText + "\nSOLD OUT";
        } else {
            productInfo.innerText = productInfo.innerText + `\nPrice: $${element.price}0`;
            }
        //Product Image
        const img = document.createElement("img");
        img.setAttribute("id", "img" + element.id);
        img.setAttribute("class", "image");
        img.setAttribute("src", element.image_link);
        img.setAttribute("height", "150");
        img.setAttribute("width", "150");
        //Product Description
        const productDescription = document.createElement("p");
        productDescription.setAttribute("id", "productDescription");
        productDescription.setAttribute("class", "text");
        productDescription.innerHTML = element.description;
        //Append to Page
        results.appendChild(productInfo);
        results.appendChild(img);
        results.appendChild(productDescription);
        //Mouseover Event Listener - Enlarge product image size
        img.addEventListener("mouseover", (e) => {
            e.target.width = 300;
            e.target.height = 300;
        }); 
        //Mouseleave Event Listener - Reduce product image size
        img.addEventListener("mouseleave", (e) => {
            e.target.width = 150;
            e.target.height = 150;
        });
    }
        //Add Title
    function addTitle(id) {
        const title = document.createElement("p");
        title.setAttribute("id", "title");
        title.setAttribute("class", "text");
        title.innerText = `${id}`; 
        results.appendChild(title);
    }

    //Create an Array of Buttons
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

    //Fetch Methods Invoked
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
        .then(data => data.forEach(element => productDisplay(element)))     
    } 

});