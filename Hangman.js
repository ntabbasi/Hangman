let POSSIBLE_WORDS=["dodurate", "versimolitude", "defebestrate",
    "obseqious", "dissonant", "toady", "impdepotent"];
    let guesses = "";
     let word="";
    let MAX_GUESSES=6;
    let guessCount = MAX_GUESSES;
    let gameOver = false;


function newGame(){
    let randomIndex = parseInt(Math.random()* POSSIBLE_WORDS.length);
     word = POSSIBLE_WORDS[randomIndex];

     guesses="";
     guessCount= MAX_GUESSES;
     gameOver= false;
     document.getElementById("guess").value="";
     gameOver=false; 
     updateScreen();

}
function guess(){
    let input = document.getElementById("guess");
    let letter = input.value;
    input.value = "";
    if(word==""  || gameOver || guessCount == 0){
        return;
    }
    if(guesses.indexOf(letter)>=0){
        return;
    }
    if(word.indexOf(letter)<0){
        guessCount--;
    }
    guesses+=letter;
    updateScreen();
   
}
function updateScreen(){
    let clueString = "";
for(let i = 0; i < word.length; i++){
    let letter = word.charAt(i);
    if(guesses.indexOf(letter) >=0){
        clueString += letter+ " ";
    }
    else{ clueString+="_";   }
}
let clue= document.getElementById("clue");
clue.textContent = clueString;

let guessArea =
 document.getElementById("guesses");
guessArea.textContent = "Guessed letter: " + guesses;

let image = document.getElementById("hangmanpic");
image.src = 'hangman'+ guessCount + ".gif";

 if(guessCount==0){
    guessArea.textContent += " | You Lose! The word was: " + word;
    gameOvver = true;
 }
 else if(clueString.indexOf("_")< 0){
    guessArea.textContent += " You Win!";
    gameOver = true;
 }
}




// what fucntiossnr esponsible for guessin  guwess, if u guess it alreayd do ntohing if u didn do normal
// i need to check if i won or lost hwo do yk if u lsot, if u uess 6 times it should be 0 and check you losy and stop u from guessing (look it up)  if u won then display you won, when you have the whoelw orld, hint: a whole world u dont have any dashes and check if dash or _ is 0
// no duplciate guesses, when u guess it clears the box and empties it and cant bguess before the guess starta
// blank out letter one line of code 
// did u lose one line code