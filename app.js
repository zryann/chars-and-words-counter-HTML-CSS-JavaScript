const text = document.querySelector(".text");
const words = document.querySelector(".word");
const char = document.querySelector(".char");

function countWordsAndChars() {
  //Calculating chars(letters,symbols,spaces..)
  char.textContent = this.value.length;
  const sentence = this.value.trim();
  const wordsInArray = sentence.split(/\s+/).map((word) => word);
  //fixing a bug that shows 1 word and in real its empty..
  if (wordsInArray[0] == "") {
    words.textContent = 0;
  } else {
    words.textContent = wordsInArray.length;
  }
}

//handling event
text.addEventListener("input", countWordsAndChars);
