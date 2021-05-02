window.console.log("hi")
function windowOP() {
    var newWindow = window.open("https://www.google.com", "new ", "height = 600,width =800")
    newWindow.moveTo(100, 100)
    newWindow.close()
}

function navigatorProp() {
    document.write("<br> AppCode : " + navigator.appCodeName)
    document.write("<br> AppNamce : " + navigator.appName)

    document.write("<br> Platform : " + navigator.platform)
    document.write("<br>Cookie enabled : " + navigator.cookieEnabled)

}
//navigatorProp()

function location1() {
    console.log("herf of browser " + location.href)
}

function paraCLicked() {
    document.getElementById("abc").setAttribute("style", "color: red")
}

function mouseOver() {
    document.getElementById("abc").setAttribute("style", "color: blue")
}

function buttonClick() {
    document.getElementById("abc").setAttribute("style", "color: green")
}

document.getElementById("abc").addEventListener("click", paraCLicked)
document.getElementById("abc").addEventListener("mouseover", mouseOver)


function validateForm(){
    var name = document.getElementById("name");
    var phNo = document.getElementById("phno")

    if(name.value==""){
        alert("Please enter name ")
    }
    if (!isNaN(name.value)){
        alert("you have added a number")
    }
    if(isNaN(phNo.value)){
        alert("You have not entered correct number")
    }
}