function calSqur(a) {
    return a * a
}

console.log("calling named fun " + calSqur(6))

var cal = function (b) {
    return b * b;
}
console.log("calling anon func " + cal(7))

var nCal = new Function("a", "return a*a;")
console.log("calling const func " + nCal(3));


    
(function (d) { 
    console.log("calling self func"); 
    return d * d;}
    )(4)