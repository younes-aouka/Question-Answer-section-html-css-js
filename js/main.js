const Buttons = document.querySelectorAll(".container .question .question-section .icon");

Buttons.forEach(function(button){
    button.addEventListener("click",function(){
    try{
        button.querySelector(".plus").classList.toggle("hide-plus");
        button.querySelector(".minus").classList.toggle("show-minus");
        button.parentElement.nextElementSibling.classList.toggle("show-answer");
    }catch(e){
        console.log("Error occured! \n",e);
    }
    });
});