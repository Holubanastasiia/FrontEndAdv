// There are 100 doors in a row that are all initially closed.You make 100 passes by the doors.The first time through, visit every door and 'toggle' the door(if the door is closed, open it; if it is open, close it).The second time, only visit every 2nd door(i.e., door #2, #4, #6, ...) and toggle it.The third time, visit every 3rd door(i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
// 4, 8, 12, 16...

function getFinalOpenedDoors(numDoors) {
    let doors = [];
    let i = 1;
    let a = i * i;

    while (a <= numDoors) {
        doors.push(a);
        i++; a = i * i;
    }
    return doors;
}
