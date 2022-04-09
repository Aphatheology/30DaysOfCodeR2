function reverseObjectValuesAsString(arrr) {
    let reversedArray = []
    let NewArray = arrr.map(function(v){
        return v.split("/");
     });

     for(let i = 0; i < arrr.length; i++) {
        let j =  arrr[i].split("/")
       let k =  Object.assign({}, j)
        //console.log( k)
        reversedArray.push(k)
     }
    
    // let newobj2 = NewArray.map(z => {
    //     return (Object.assign({}, z))
    // })

    // reversedArray.push(newobj2)
     console.log(reversedArray)
}


let testArr = ["Seern/23/500 level","BBBgh/twenty three/year 1"]

reverseObjectValuesAsString(testArr)
//reverseObjectValuesAsString(newArr2)