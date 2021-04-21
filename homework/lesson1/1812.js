// You are given coordinates, a string that represents the coordinates of a square of the chessboard.
// Return true if the square is white, and false if the square is black.
// The coordinate will always represent a valid chessboard square.The coordinate will always have the letter first, and the number second.

var squareIsWhite = function (coordinates) {
    if (!validateCoordinates(coordinates)) {
        return "error";
    }

    if (coordinates[0].charCodeAt(0) % 2) {
        return coordinates[1] % 2 ? false : true;
    } else {
        return coordinates[1] % 2 ? true : false;
    }

};

function validateCoordinates(coordinates) {
    if (coordinates.length != 2) {
        return false;
    } else if (coordinates[0] < "a" || coordinates[0] > "h") {
        return false;
    } else if (coordinates[1] < 1 || coordinates[1] > 8) {
        return false;
    }

    return true;

}