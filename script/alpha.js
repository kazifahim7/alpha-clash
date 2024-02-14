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
     continueGame();

}