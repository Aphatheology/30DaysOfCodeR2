
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
    // console.log(objectValues);
    
    return objectValues;
}

let newArr = objectValuesAsString([{name: "Seun", age: 23, level: "100 level"}] );

// console.log("New Array: " + newArr)

let newArr2 = objectValuesAsString([{name: "Seern", age: 23, level: "500 level"}, {name:"BBBgh", age:"twenty three", level: "year 1"}] );
// console.log("New Array 2: " + newArr2)

function reverseObjectValuesAsString(arrr) {
    let reversedArray = []
    let NewArray = arrr.map(function(v){
        return v.split("/");
     });
    // let newobj2 =  Object.assign({}, NewArray[0]);
    // let newobj = NewArray.map(y => {
    //     y.reduce((a, v) => ({ ...a, {name, age, level, schol}: v}), {}) 
    //  })
    // let neee = NewArray[0].reduce((a, name, age, level) => ({ ...a, [name]: name}), {}) 
    //  console.log(NewArray)
    //  console.log(newobj2)
    //  console.log(neee)
    let newobj2 = NewArray.map(z => {
        return (Object.assign({}, z))
    })



    // newobj2 = newobj2.map(item => {
    //     return {
    //       name: item.key1,
    //       key2: item.key2
    //     };
    //   });
    // console.log(typeof newobj2)
    reversedArray.push(newobj2)
    console.log(reversedArray)
}

// reverseObjectValuesAsString(objectValuesAsString([{name: "Seun", age: 23, level: "100 level", school: "Funaab"}] ))
let testArr = ["Seern/23/500 level","BBBgh/twenty three/year 1"]
reverseObjectValuesAsString(testArr)
//reverseObjectValuesAsString(newArr2)