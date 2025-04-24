function findLongestWord(mySentence) {
   let  singleWord = "";
   let longestWord = "";
   let  wordStorage = [];

    for (let i = 0; i <= mySentence.length; i++) {
        
        if (mySentence[i] === " " || i === mySentence.length) {
            if (singleWord.length > longestWord.length) {
                longestWord = singleWord;
            }
            wordStorage.push(singleWord, singleWord.length);
            singleWord = " ";
        } else {
            singleWord += mySentence[i];
        }
    }
    console.log(
        `The longest word is:"${longestWord}" and it has "${longestWord.length}" characters`
    );
    console.log(`The words in the sentence are: ${wordStorage}`);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
