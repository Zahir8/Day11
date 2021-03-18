var myNestedArray = [["Toblerone", 5]];

function myNestedFunction(arr){
    //var myNewNestedArray = [...arr];
    var someOtherArray = ["Milka", 3];
    myNestedArray.push(someOtherArray);

    return myNestedArray;
}
console.log(myNestedFunction(myNestedArray));
myNestedFunction(myNestedArray);
module.exports = myNestedFunction;