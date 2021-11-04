function sum() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
    return sum;
}
sum(1, 2, 3, 4, 5);
sum(1, 2, 3, 4);
sum(1, 2, 3);