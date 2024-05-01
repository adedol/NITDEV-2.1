const button = document.querySelector(".btn");

button.onclick = () =>{
    console.log("button clicked");
}


const button = document.querySelector(".btn");

button.addEventListener ("click", () =>{
    console.log("first button clicked");
})
button.addEventListener ("click", () =>{
    console.log("second button clicked");
})