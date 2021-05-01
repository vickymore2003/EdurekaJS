function createPerson() {
    var person = new Object();

    person.name = "Sunny";
    person.age = 31;
    person.phno = 1236641;
    return person;
}

var sunny = createPerson();

function createPerson2() {
    var person = {};

    person.name = "Sunny3";
    person.age = 31;
    person.phno = 1236641;
    return person;
}
 sunny = createPerson2();
