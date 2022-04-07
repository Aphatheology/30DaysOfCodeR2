function sumOfArray(arr) {
    // First Idea
    // let sum = 0;
    // for(let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }

    // Second Idea, thanks to Google!
    let sum = arr.reduce((a, b) => {
        return a + b;
    }, 0)
    
    return sum;
}

// TEST
sumOfArray([0, 5, 4, 86, 95]) // Return 190
sumOfArray([-91, 20, -3, 5]) // Return -69