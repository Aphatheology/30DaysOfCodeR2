function sumOfArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}

// TEST
sumOfArray([0, 5, 4, 86, 95]) // Return 190
sumOfArray([-91, 20, -3, 5]) // Return -69