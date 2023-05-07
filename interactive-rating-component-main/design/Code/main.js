window.onload = () =>{

// local variables
const resultsList = document.getElementById("demo2");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const option5 = document.getElementById("option5");

// adds funtcions to buttons
option1.addEventListener("click", addNumber);
option2.addEventListener("click", addNumber);
option3.addEventListener("click", addNumber);
option4.addEventListener("click", addNumber);
option5.addEventListener("click", addNumber);

 

document.getElementById("button").addEventListener("click", ()=>{
    

document.querySelector(".hidden").style.display = "block"
document.querySelector(".show").style.display = "none"

})


function addNumber(clickedButton){
let valueHolder = "";
valueHolder = clickedButton.target.value  
resultsList.innerHTML = `You selected ${valueHolder} out of 5`
}





}

