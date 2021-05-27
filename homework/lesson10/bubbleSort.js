// instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function bubbleSort(array) {
    let arrSort = [];

    for (; array.length;) {
        arrSort.push(array.splice(array.indexOf(Math.min(...array)), 1)[0])
    }

    return arrSort;
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);