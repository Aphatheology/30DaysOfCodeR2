function indicesOfaSum(arr, n) {
    let indicesArray = []
    let uniqueIndices = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if((i != j) && arr[i] + arr[j] === n) {
                
                indicesArray.push(i)
                indicesArray.push(j)

                
                uniqueIndices = [...new Set(indicesArray)]

                //return (uniqueIndices)
            } 
            
            else if( indicesArray.length === 0 ) {
                uniqueIndices = [-1, -1]
            }
        }
    }
    
    console.log(uniqueIndices);

    return uniqueIndices;
}

// Testing
indicesOfaSum([1,9,4,5,3, 0] , 10 ); // [0,1]
indicesOfaSum([2,5,9,6,1,53, 45], 47 ); // [0,6]
indicesOfaSum([4,9,3,5,0,14,10], 100); // [-1, -1]