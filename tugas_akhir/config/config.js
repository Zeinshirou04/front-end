var width = window.innerWidth;
var height = window.innerHeight;

console.log(`The width is ${width} and the height is ${height}`);

var guestName = function () {
    const name = document.getElementById('guestName').innerHTML;
    return name;
}