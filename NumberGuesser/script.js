let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generating the target number
const generateTarget = ()=>{
  return Math.floor(Math.random()*10);
};
//absolute difference
const getAbsoluteDistance = (guess,target) => {
  return Math.abs(guess-target);
}
//comparing values human and computer
const compareGuesses = (userGuess,computerGuess,targetNumber) => {
  if(userGuess<0 || userGuess>9){
    alert('Input is out of range.');
  }
  if(getAbsoluteDistance(userGuess)<getAbsoluteDistance(computerGuess)){
    return true;
  }else if (getAbsoluteDistance(computerGuess)<getAbsoluteDistance(userGuess)) {
    return false;
  }else{
    console.log('none of them has won');
  }
};

//updating the score
const updateScore = winner => {
  if(winner==='human'){
    humanScore++;
  } else if (winner==='computer') {
    computerScore++;
  }else{
    console.log('none of them has won');
  }
};

//advancing the round
const advanceRound = ()=>{
  currentRoundNumber++; // advancing the round number
};
