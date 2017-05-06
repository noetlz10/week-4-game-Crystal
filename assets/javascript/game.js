 $(document).ready(function() {


  var crystalCounter = 0;
  var yourScore = 0;
  var winCounter = 0;
  var lossCounter = 0;
  var blueGem = 0;
  var greenGem = 0;
  var redGem = 0;
  var turqoiseGem = 0;


  function startGame ()
  {
    $('#yourScore').html(0);
    crystalCounter = (Math.floor(Math.random() * 120) + 19);
    $('#crystalCounter').html(crystalCounter);
    $('#winCounter').html(winCounter);
    $('#lossCounter').html(lossCounter);
    turqoiseGem = (Math.floor(Math.random() * 12) + 1);
    redGem = (Math.floor(Math.random() * 12) + 1);
    greenGem = (Math.floor(Math.random() * 12) + 1);
    blueGem = (Math.floor(Math.random() * 12) + 1);
    yourScore = 0;
  }

startGame();


function youLose ()
  {
    alert("You Lose!");
    lossCounter++;
    $('#lossCounter').html(lossCounter);
    startGame ();
  }

function youWin ()
  {
    alert("You Win!");
    winCounter++;
    $('#winCounter').html(winCounter);
    startGame ();
  }


$('#blue').on('click', function() {
    yourScore = blueGem + yourScore;
    $('#yourScore').html(yourScore);
  if (yourScore > crystalCounter) {
    youLose();
  }
  if (yourScore === crystalCounter) {
    youWin();
  }
})

$('#green').on('click', function() {
    yourScore = greenGem + yourScore;
    $('#yourScore').html(yourScore);

  if (yourScore > crystalCounter) {
    youLose();
  }
  if (yourScore === crystalCounter) {
    youWin();
  }
})

$('#red').on('click', function() {
    yourScore = redGem + yourScore;
    $('#yourScore').html(yourScore);

  if (yourScore > crystalCounter) {
    youLose();
  }
  if (yourScore === crystalCounter) {
    youWin();
  }
})

$('#turqoise').on('click', function() {
    yourScore = turqoiseGem + yourScore;
    $('#yourScore').html(yourScore);

  if (yourScore > crystalCounter) {
    youLose();
  }
  if (yourScore === crystalCounter) {
    youWin();
  }
})
});