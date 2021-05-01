// this is a comment

//arithmatic operator
var num1 = 5;
var num2 = 2;
sum = num1 + num2;
diff = num1 - num2;
prod = num1 * num2;
div = num1 / num2;
mod = num1 % num2;
diff--;
sum++;

console.log("sum : " + sum);
console.log("diff : " + diff);
console.log("prod : " + prod);
console.log("div : " + div);
console.log("mod : " + mod);
console.log("diff-- :" + diff);
console.log("sum++ :" + sum);

//assignment operators
var s = 8;
s += 3;
console.log(s);
s -= 3;
console.log(s);
s *= 3;
console.log(s);
s /= 3;
console.log(s);

//comparison operator
// < <= >= == === !=

if (false) {
  console.log("sunny");
} else {
  console.log("vicky");
}

var s1 = 8;
var s2 = "8";

if (s1 == s2) {
  //check value and also type
  console.log("if part");
} else {
  console.log("else part");
}

if (s1 === s2) {
  //check value and also type
  console.log("if part");
} else {
  console.log("else part");
}

if(!(s1>=s2) && s1===s2){    // && and , || or , ! negation
    console.log("if part")
}else{
    console.log("else")
}

//ternary operator
console.log( 1 >2 ? true:false) // if true left side statement is executed and vice versa
s1 = 8
s2 = 9
console.log( s2 >s1 ? "S2 is greater than s1":"S1 is greater than s2")

























