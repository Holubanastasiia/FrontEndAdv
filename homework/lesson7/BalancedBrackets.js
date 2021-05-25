// Determine whether a generated string of brackets is balanced; that is, whether it consists entirely of pairs of opening / closing brackets(in that order), none of which mis - nest.

function isBalanced(str) {
    if (str === "") return true;

    str = str.split("");
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "[") {
            stack.push("[");
        } else if (str[i] === "]" && stack[stack.length - 1] === "[") {
            stack.pop();
        }
    }
    return stack.length === 0;
}