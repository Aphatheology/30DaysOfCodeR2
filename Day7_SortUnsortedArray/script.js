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
    console.log(arr);

    return arr;

}

// Testing
sortUnsortedArray([4,9,-3,5,0,-14,10]) // [-14,-3,0,4,5,9,10]
sortUnsortedArray([2,5,9,6,1,53, 45]) // [1,2,5,6,9,45,53]