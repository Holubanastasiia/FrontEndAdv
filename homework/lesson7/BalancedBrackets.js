// Determine whether a generated string of brackets is balanced; that is, whether it consists entirely of pairs of opening / closing brackets(in that order), none of which mis - nest.

// function isBalanced(str) {
//     let openBracket = "[";
//     let closedBracket = "]";
//     let idxOpen = str.indexOf(openBracket);
//     let idxClose = srt.indexOf(closedBracket);
//     let stack = []

//     if (str === "") {
//         return true;
//     }

//     if (idxOpen % 2 == 0 && idxClose % 2 == 1) {
//         console.log(stack.push(openBracket, closedBracket));
//     }

// }
// isBalanced("[]")