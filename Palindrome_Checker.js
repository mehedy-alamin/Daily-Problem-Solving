function isPalindrome(myString) {
    let myStringLower = myString.toLowerCase();
    let reverse = "";
    let forward = "";

    for (let i = myStringLower.length - 1; i >= 0; i--) {
        if (myStringLower[i] !== " ") {
            reverse += myStringLower[i];
        }
    }

    for (let j = 0; j < myStringLower.length; j++) {
        if (myStringLower[j] !== " ") {
            forward += myStringLower[j];
        }
    }
    if (forward === reverse) {
        console.log("true");
    } else {
        console.log("false");
    }

    console.log(forward);
    console.log(reverse);
}

isPalindrome("Was it a car or a cat I saw");
