function arrayPalindrom(inputArray) {
    let outputArray = []
    inputArray.map(eachElement => {
        
        let reverseElement = eachElement.split("").reverse().join("")
        if(reverseElement === eachElement) {
            outputArray.push(true)
        } else {
            outputArray.push(false)
        }

        // Using Ternary Operator
        // reverseElement === eachElement ? outputArray.push(true) : outputArray.push(false)
        
    })
    console.log(outputArray)

    return outputArray
}

// Testing
arrayPalindrom(["bad", "good", "evil"])
arrayPalindrom(["racecar","abcd","bab","kala","madam", "carac"])