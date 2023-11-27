
let attempts = 0
let randomNum = Math.floor(Math.random()*25+1);
// console.log(randomNum)
const guess = document.getElementById('guess');
const submit = document.getElementById('submit');
const point = document.getElementById('point');
const attemptsText = document.getElementById('attempts');

function check(){
     const userValue = Number(guess.value);
    attempts++ ;
    // console.log(attempts)
    
    
    if(userValue === randomNum ){
        
        point.textContent = 'Təbriklər siz ədədi və ya rəqəmi təxmin etdiniz';
        
    }
    else if(userValue < randomNum){
        point.textContent = 'təxmin etdiyiniz aşağıdır, yenidən cəhd edin'
        
    }
    else{
        point.textContent = ' təxmin etdiyiniz yuxarıdır, yenidən cəhd edin'};
        

        alert( 'Cəhdiniz:' + ' ' + attempts  )  ;
}










