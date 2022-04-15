// MERGE TWO SORTED ARRAY AND SORT THE OUTPUT
function mergeAndSortArray(arr1, arr2) {
    if(Array.isArray(arr1, arr2))  {
        if(isSorted(arr1) && isSorted(arr2)){
            let ouputArray = [];
            ouputArray = [...arr1, ...arr2]
            sortUnsortedArray(ouputArray)
            return ouputArray
        } else {
            return("The input array should be sorted")
        }
    } else {
        return("Input parameter should be an array")
    }
    
}

// CHECK IF INPUT ARRAY IS SORTED
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  }

// SORT THE OUTPUT ARRAY
function sortUnsortedArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let target = arr[i];
            arr[i] = arr[min];
            arr[min] = target;
        }
    }

    return arr;

}

// Testing
let test1 = mergeAndSortArray(2 , [2,5,9,14])
let test2 = mergeAndSortArray([-14,-3,0,4,5,9,10], [1,2,5,6,9,45,53])

console.log(test1) // Input parameter should be an array
console.log(test2) // [-14, -3, 0, 1, 2,  4, 5,  5, 6, 9, 9, 10, 45, 53]