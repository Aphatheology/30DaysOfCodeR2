# Create a function that does the opposite of what yesterday’s function did. It takes the output of the function and returns the input.

- Therefore, your function should take an array of strings containing the name, age and level values separated by a slash. Your function should return an array of objects that have the name, class and level keys with their corresponding values.

- For example: 

- Input: [‘Seun/23/100 level’] 
    - The function output =>  [{name: ‘Seun’, age: 23, level: ‘100 level’}]


- Input: [‘Seern/23/500 level’,’BBBgh/twenty three/year 1’] 
    - The function output =>  [{name: ‘Seern’, age: 23, level: ‘500 level’}, {name:’BBBgh’, age:’twenty three’, level: ‘year 1’}]


## Things I learned from this Challenge
- There are several ways of solving a problem, as a beginner, I will first make it work, then I improve the method used.

- Try to consider weird test cases.
    - The first method I used is by hardcoding the ouput, I am putting the "/" manually, if a new key-value pair is added to the objects, the output won't consider it. 
    
    - The second method is using the array method .join('/') which will make the output perfect even the object is increased.

- I learned and practised destructuring, and other Objects methods like `Object.keys, Object.values, Object.entries and Object.fromEntries`

### Hosted link: https://aphatheology.github.io/30DaysOfCodeR2/Day4_ObjectValuesAsString/