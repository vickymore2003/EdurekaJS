var wt = parseFloat(prompt("Enter your weight!! "));
switch (wt) {
  case 1:
    document.write("You are under wt...");
    break;
  case 2:
    document.write("you are healthy...");
    break;
  case 3:
    document.write("you are overWt");
    break;
  default:
    document.write("you are not in correct category");
}
