//names function
function addNum(a, b) {
    console.log("Function for add 2 numbers")
    return a + b;
}

console.log(addNum(6, 8))
var sum = addNum(9, 7)
console.log(sum)
addNum(8, 3)

//Anonymouns function  --- assigned it to variable
var anon = function (a, b) {
    console.log("anonymous function is called")
    return a + b;
}
anon(6 + 3)

setTimeout(anon, 1000)
setTimeout(function () { console.log("function called in setTimeout") }, 500)

//Constructors   --- is called when an object is created using new keyword
var cons = new Function("a","b","console.log('in constructor');return a+b;");
console.log(cons(6,8));


//Self invoking function
(function(a,b){
    console.log("self invoking function")
    return a+b;
})((6+7));







