let POSSIBLE_WORDS=["dodurate", "versimolitude", "defebestrate",
    "obseqious", "dissonant", "toady", "impdepotent"];

function newGame(){
    let randomIndex = parseInt(Math.random()* POSSIBLE_WORDS.length);
     word = POSSIBLE_WORDS[randomIndex];
     updateScreen();

}
function guess(){
    let input = document.getElementById("guess");
    let letter = input.value;
    let guesses = "";
    guesses=letter;

}
function updateScreen(){
    let clueString = "";
for(let i = 0; i < word.length; i++){
    let letter = word.charAt(i);
    if(guesses.indexOf(letter)){
        clueString=letter+" ";

    }
    else{ clueString="_";   }
clueString="_";
}
let clue= document.getElementById("clue");
clue.textContent = clueString;
let guessArea = document.getElementById("guesses");
guessArea.textContent = "Guessed letter:"+guesses;
}