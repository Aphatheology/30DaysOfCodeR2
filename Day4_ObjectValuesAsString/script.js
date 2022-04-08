
function objectValuesAsString(arr) {
    let objectValues = [];

    arr.map(eachObjArr => {
        // The method below works with the test cases provided, but it is hardcoded which means if the object is increased, the function will need to be edited to take care of the new key-value pair added to the object, as seen in the additional test case

        //const {name, age, level} = eachObjArr;
        // objectValues.push(
        //     `${name}/${age}/${level}`
        // )

        // This method works perfectly for any number of key-value pair in the object
        
        let valueArray = Object.values(eachObjArr).join('/')
        objectValues.push(valueArray)

    })
    console.log(objectValues);
    
    return objectValues;
}

objectValuesAsString([{name: "Seun", age: 23, level: "100 level", school: "Funaab"}] ) // Return ['Seun/23/100 level/Funaab']

objectValuesAsString([{name: "Seern", age: 23, level: "500 level", school: "OAU"}, {name:"BBBgh", age:"twenty three", level: "year 1", school: "Unilag"}] ) // Return ['Seern/23/500 level/OAU', 'BBBgh/twenty three/year 1/Unilag']