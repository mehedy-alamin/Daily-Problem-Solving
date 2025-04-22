function multiplicationTable(myNumber, increment) {

    for (let i = 1; i <= increment; i++) {
       let result = myNumber * i;
        console.log(`${myNumber} x ${i} = ${result}`); 
    }
}


multiplicationTable(5, 20); 