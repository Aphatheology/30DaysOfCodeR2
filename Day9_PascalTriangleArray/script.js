function pascalTriangleArray(n) {
    const arr = []
    
    for (let i = 0; i < n; i++) {
        const row = [1]
        
        for (let j = 1; j < i; j++) {
            row.push(arr[i-1][j-1] + arr[i-1][j])
        }
        
        if( i > 0 ) {
            row.push(1)
        }
        arr.push(row)
    }
    
    return arr
}

// Test
console.log(pascalTriangleArray(4)) // [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ] ]