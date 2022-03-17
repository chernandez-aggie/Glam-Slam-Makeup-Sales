const testButton = document.querySelector("#test");
testButton.addEventListener("click", handleClick);

function handleClick() {
    console.log("clicked");
}

document.addEventListener("DOMContentLoaded", pageLanding);

function pageLanding() {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    // ,{
    //     method: "GET", 
    //     mode: "no-cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // })
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const name = document.createElement("p");
            name.innerHTML = element.name;
            document.querySelector(".main").appendChild(name);
        })})
}
