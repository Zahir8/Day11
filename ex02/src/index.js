var temp = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61],
];

function myArrayFunction(){
    var newTemps = [...temp];
    var averageDayTemp = [];

    for (var i = 0; i < temp.length; i++){
        var count = 0;
        var sumOfTemp = 0;

        for(var j = 0; j < temp[i].length; j++){
            count++;
            sumOfTemp += temp[i][j];
        }

        averageDayTemp.push(sumOfTemp / count);
    }

    return averageDayTemp;
}
console.log(myArrayFunction(temp));
myArrayFunction(temp);
module.exports = myArrayFunction;