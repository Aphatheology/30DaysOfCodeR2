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

function conciseFizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let f = i % 3 == 0,
          b = i % 5 == 0;
        console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
      }
}

// TEST
//fizzBuzz(23)
conciseFizzBuzz(23)