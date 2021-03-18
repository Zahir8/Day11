function myMutation(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i].toLowerCase();
    }
    var s1 = [];
    var s2 = [];
    s1 = arr[0].split('');
    s2 = arr[1].split('');
    s1.sort();
    s2.sort();

    for (var i = 0; i < s2.length; i++){
        if (s1.includes(s2[i])) {
            continue;
        } else {
            return false;
            break;
        }
    }
    return true;
}
console.log(myMutation(["Hello", "hello"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Hello", "Neo"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["addfjfeiqooa", "diqf"]));
console.log(myMutation(["Alien", "line"]));
