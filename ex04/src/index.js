var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr){
    var newMonitorList = [...arr];
    var monitorList = [];

    for (var i = 0; i < newMonitorList.length; i++){
        var tempList = [];
        tempList.push(newMonitorList[i], i+1);
        monitorList.push(tempList);
    }

    return monitorList;
}
console.log(myMonitorsFunction(monitorsListArray));
myMonitorsFunction(monitorsListArray);
module.exports = myMonitorsFunction;