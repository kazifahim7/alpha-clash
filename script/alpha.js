function keyBoardbuttonPress(event){
     const playerPress = event.key;

     if(playerPress === 'Escape'){
          gameOver();
     }

     const currentAlphabetPress = document.getElementById('current-alphabet');
     const currentAlphabet = currentAlphabetPress.innerText;
     const alphaBet = currentAlphabet.toLowerCase();
     
     if(playerPress === alphaBet){
          const curentScore = document.getElementById('curent-score');
          const value = curentScore.innerText;
          const score = parseInt(value);
          const finalScore = score + 1 ;
          curentScore.innerText = finalScore ;
          
          const lastscore = document.getElementById('last-score');
          lastscore.innerText = finalScore ;



         
          removeBackgound(alphaBet);
          continueGame();
          
     }
     else{
          const lifeScore = document .getElementById('life-score');
          const lifeValue = lifeScore.innerText ;
          const value = parseInt(lifeValue);
          const finallife = value-1;
          lifeScore.innerText= finallife ;

          if(finallife <=0){
               gameOver()
              
          }
     }
}



document.addEventListener('keyup',keyBoardbuttonPress)






function continueGame(){
     const alphaBet = getRandomWord();
     // console.log(alphaBet);
     const currentAlphabet =document.getElementById('current-alphabet');
     currentAlphabet.innerText = alphaBet ;


     addBackgroundolor(alphaBet);

}






function playNow(){
     const homeScreen = document.getElementById('home-screen');
     homeScreen.classList.add('hidden');
     const playground = document.getElementById('play-ground');
     playground.classList.remove('hidden');
     const scorecontainer = document.getElementById('score-container');
     scorecontainer.classList.add('hidden');
     // set score and life ;
     setValueByid('life-score',5);
     setValueByid('curent-score',0); 


     const currentAlphabet = getElementTextById('current-alphabet');
     removeBackgound(currentAlphabet);

     
     continueGame();

}