function selectionSort(array) {
    let i = 0;
    for (; i <= array.length - 1; i++) {

        let smallestIdx = i

        for (let j = i; j <= array.length - 1; j++) {
            if (array[j] < array[smallestIdx]) {
                smallestIdx = j
            }
        }

        if (array[i] > array[smallestIdx]) {
            let temp = array[i]
            array[i] = array[smallestIdx]
            array[smallestIdx] = temp
        }
    }
    return array;
}

selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);