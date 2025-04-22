function FizzBuzz(myNumber) {

    let i = 1;
    let Three = 3;
    let Five = 5;

    while (i <= myNumber) {
        if (i === Three && i === Five) {
            console.log("FizzBuzz");
            Three += 3;
            Five += 5;
        } else if (i === Three) {
            console.log("Fizz");
            Three += 3;
        } else if (i === Five) {
            console.log("Buzz");
            Five += 5;
        } else {
            console.log(i);
        }

        i++;
    }
}

FizzBuzz(20);
