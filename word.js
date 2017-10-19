var Letter = require("./letter.js");

var Word = function(newWord) {
  this.contains = [];
  for (var i=0; i<newWord.length; i++) {
    this.contains.push(new Letter(newWord[i]));
  }

  this.guesses = 6;
  this.tried = [];

  this.checkLetters = function (check) {
    this.tried.push(check);
    for (index in this.contains) {
      this.contains[index].show(check);
    }
  }

  this.displayWord = function() {
    wordToDisplay = "";
    for (index in this.contains) {
      wordToDisplay += this.contains[index].display;
      if(this.contains[index].display !== " ") {
        wordToDisplay += " ";
      }
    }
    return wordToDisplay;
  }
}

module.exports = Word;