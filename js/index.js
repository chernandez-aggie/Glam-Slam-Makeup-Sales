document.addEventListener("DOMContentLoaded", () => 
{

    const results = document.querySelector(".results");
    

    function handleSubmit (event) {
        event.preventDefault();
        let subscriber = {
            name: event.target.name.value,
            email: event.target.email.value,
        };
        form.innerHTML = "Thanks for signing up, expect to receive exclusive Glam Slam Makeup deals within the next 1-2 business days.";
        event.target.reset();
        addSubscriber(subscriber);
    }

    function addSubscriber (subscriber){
        fetch('http://localhost:3000/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscriber)
        })
        .then(res => res.json())
        
    }

    function productDisplay(element) {
      
        const productInfo = document.createElement("p");
        productInfo.setAttribute("id", "productInfo");
        productInfo.setAttribute("class", "text");
        productInfo.innerText = `Brand: ${element.brand.toUpperCase()}\nProduct Name: ${element.name}`;
     
        const productPrice = document.createElement("p");
        productPrice.setAttribute("id", "productPrice");
        productPrice.setAttribute("class", "text");
        if(element.price == 0.0){
            productPrice.innerText = `\nSOLD OUT`;
        } else {
            productPrice.innerText = `\nPrice: $${element.price}0`;
            }
      
        const img = document.createElement("img");
        img.setAttribute("id", "img" + element.id);
        img.setAttribute("class", "image");
        img.setAttribute("src", element.image_link);
        img.setAttribute("height", "150");
        img.setAttribute("width", "150");
    
        const productDescription = document.createElement("p");
        productDescription.setAttribute("id", "productDescription");
        productDescription.setAttribute("class", "text");
        productDescription.innerHTML = element.description;
      
        results.appendChild(productInfo);
        results.appendChild(productPrice);
        results.appendChild(img);
        results.appendChild(productDescription);

        
        img.addEventListener("mouseover", (e) => {
            e.target.width = 300;
            e.target.height = 300;
        }); 
        
        img.addEventListener("mouseleave", (e) => {
            e.target.width = 150;
            e.target.height = 150;
        });
    }
    
    function addTitle(id) {
        const title = document.createElement("h3");
        title.setAttribute("id", "title");
        title.setAttribute("class", "text");
        title.innerText = `${id}`; 
        results.appendChild(title);
    }

    
    const form = document.getElementById("signUp");
    form.addEventListener("submit", handleSubmit);



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

    
    function productBtn (e){
     
        results.innerHTML = "";
    
        let id = e.target.id.toUpperCase();
        addTitle(id);
        const apiURL = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=" + id.toLowerCase();
 
        fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            
            data.forEach(element => productDisplay(element))
        })     
    } 

});