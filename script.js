function playGame(userChoice) {

    document.getElementById('res-display').style.display = "block";
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    if (userChoice === computerChoice) {
      document.getElementById("result").innerHTML = "Tie!";
    } else if (userChoice === 'rock' && computerChoice === 'scissors' || 
               userChoice === 'paper' && computerChoice === 'rock' || 
               userChoice === 'scissors' && computerChoice === 'paper') {
      document.getElementById("result").innerHTML = "You Win the Game!";
    } else {
      document.getElementById("result").innerHTML = "Computer wins the Game!";
    }
  }