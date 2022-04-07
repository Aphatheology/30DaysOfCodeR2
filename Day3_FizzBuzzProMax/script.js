
function fizzBuzzProMax(arr) {
    let proMaxOutput = [];
    for(j = 0; j < arr.length; j++) {
        proMaxOutput.push(fizzBuzz(arr[j]))
    }
    // console.log(proMaxOutput)
    return proMaxOutput;
    
}

function fizzBuzz(n) {
    let output = [];
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 != 0 ) {
            output.push("Fizz");
        } else if(i % 3 != 0 && i % 5 === 0 ) {
            output.push("Buzz");
        } else if(i % 3 === 0 && i % 5 === 0 ) {
            output.push("FizzBuzz");
        } else {
            output.push(i)
        }
        
    }
    return output;
}

// Testing
// fizzBuzzProMax([4, 10, 6]);
// Output from Line 7 if not commented - console.log(proMaxOutput)
// (3) [Array(4), Array(10), Array(6)]
// 0: (4) [1, 2, 'Fizz', 4]
// 1: (10) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
// 2: (6) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz']
// length: 3
// [[Prototype]]: Array(0)
