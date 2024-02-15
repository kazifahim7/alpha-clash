


function getRandomWord(){
     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
     const alphaBets = alphabetString.split('');
    
     
     const randomNumber =  Math.random() * 25 ;
     const index = Math.round(randomNumber) ;
     const alphaBet = alphaBets[index];
     return alphaBet;
     
}


function addBackgroundolor(elementId){
     const color = document.getElementById(elementId);
     color.classList.add('bg-orange-400');

}

function removeBackgound(elementId){
     const color = document.getElementById(elementId);
     color.classList.remove('bg-orange-400');
}


function gameOver(){
     const playground = document.getElementById('play-ground');
               playground.classList.add('hidden');
               const scoreDisplay = document.getElementById('score-container');
               scoreDisplay.classList.remove('hidden');
}



function setValueByid(element,value){
     const element2 = document.getElementById(element);
     element2.innerText = value ;
}


function getElementTextById(element){
     const element2 = document.getElementById(element);
     const text = element2.innerText ;
     return text ;
}