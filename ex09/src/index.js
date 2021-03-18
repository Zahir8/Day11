function myBouncer(arr){
    var myNewArray = arr.filter(Boolean);
    return myNewArray;
}
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
module.exports = myBouncer;