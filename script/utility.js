


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