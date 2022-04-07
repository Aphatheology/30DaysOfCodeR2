function fizzBuzz(n) {
    // First Idea
    let output = ""
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 != 0 ) {
            output += `Fizz `;
        } else if(i % 3 != 0 && i % 5 === 0 ) {
            output += `Buzz `;
        } else if(i % 3 === 0 && i % 5 === 0 ) {
            output += `FizzBuzz `;
        } else {
            output += `${i} `;
        }
        
    }
    console.log(output)

    return output;
}

// TEST
fizzBuzz(23)