// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.In other words, return the symmetric difference of the two arrays.

//     Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    var newArr = [];

    function compare(array1, array2) {
        for (var i = 0; i < array1.length; i++) {
            if (array2.indexOf(array1[i]) === -1) {
                newArr.push(array1[i]);
            }
        }
    }

    compare(arr1, arr2);
    compare(arr2, arr1);

    // return newArr;
    console.log(newArr);
}

diffArray([1, 2, 3, 5],
    [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"])
