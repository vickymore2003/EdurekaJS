
//Type one for creating an object
function createPerson() {
    var person = new Object();
    person.name = "Sunny";
    person.age = 31;
    person.phno = 1111111;
    return person;
}
var sunny1 = createPerson();

//Type two for creating an object
function createPerson2() {
    var person = {};
    person.name = "Sunny2";
    person.age = 32;
    person.phno = 2222222;
    return person;
}
sunny2 = createPerson2();

//Type three for creating an object
function createPerson3() {
    var person = {};
    person['name'] = "Sunny3";
    person['age'] = 33;
    person['phno'] = 33333333;
    return person;
}
sunny3 = createPerson3();

//Type four for creating an object
function createPerson4() {
    var person = {
        name: "Sunny4",
        age: 34,
        designation: "QA",
        phno: 444444
    };
    return person;
}
sunny4 = createPerson4()

// alert("name is " + sunny1.name + ", age is "
//     + sunny2.age + " and contact number  "
//     + sunny3.phno + " his desg is " + sunny4.designation)



