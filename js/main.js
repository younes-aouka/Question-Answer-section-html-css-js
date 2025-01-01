const questions = document.querySelectorAll(".question");
console.log(questions);

questions.forEach(function(question){
    question.addEventListener("click",function(){
    try{
        question.querySelector(".plus").classList.toggle("hide-plus");
        question.querySelector(".minus").classList.toggle("show-minus");
        question.querySelector(".answer-section").classList.toggle("show-answer");
    }catch(e){
        console.log("Error occured! \n",e);
    }
    });
});