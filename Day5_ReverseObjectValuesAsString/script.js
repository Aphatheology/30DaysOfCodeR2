function reverseObjectValuesAsString(arrr) {
    let reversedArray = []
    

    for(let i = 0; i < arrr.length; i++) {
        let arrayOfSplitted =  arrr[i].split("/")
        
        let turnToObject =  Object.assign({}, arrayOfSplitted)

        //Renaming the Object keys
        turnToObject['name'] = turnToObject[0];
        delete turnToObject[0];

        turnToObject['age'] = turnToObject[1];
        delete turnToObject[1];

        turnToObject['level'] = turnToObject[2];
        delete turnToObject[2];

        reversedArray.push(turnToObject);
    }

    console.log(reversedArray)
    
    return reversedArray;
}


// testing
let testArr = ["Seern/23/500 level","BBBgh/twenty three/year 1"]
let testArr2 = ["Seun/23/100 level"] 

reverseObjectValuesAsString(testArr)
reverseObjectValuesAsString(testArr2) // [ { name: 'Seun', age: '23', level: '100 level' } ]