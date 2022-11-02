function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}
 
var arr = [ 2, 4, 6, 5, 4 ];
 
if (hasDuplicates(arr)) {
    console.log("True");
}
else {
    console.log("False");
}