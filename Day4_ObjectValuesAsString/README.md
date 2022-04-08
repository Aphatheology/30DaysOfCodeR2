# Create a function that takes in an array of objects containing properties: name, age and level. It should return an array of strings where each string is a concatenation of all values contained in the object separated by a slash

- For example: 

- [{name: ‘Seun’, age: 23, level: ‘100 level’}] 
    - The function output =>  [‘Seun/23/100 level’]


- [{name: ‘Seern’, age: 23, level: ‘500 level’}, {name:’BBBgh’, age:’twenty three’, level: ‘year 1’}] 
    - The function output =>  [‘Seern/23/500 level’,’BBBgh/twenty three/year 1’]


## Things I learned from this Challenge
- There are several ways of solving a problem, as a beginner, I will first make it work, then I improve the method used.

- Try to consider weird test cases.
    - The first method I used is by hardcoding the ouput, I am putting the "/" manually, if a new key-value pair is added to the objects, the output won't consider it. 
    
    - The second method is using the array method .join('/') which will make the output perfect even the object is increased.

- I learned and practised destructuring, and other Objects methods like `Object.keys, Object.values, Object.entries and Object.fromEntries`

### Hosted link: https://aphatheology.github.io/30DaysOfCodeR2/Day4_ObjectValuesAsString/