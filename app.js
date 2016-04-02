var temp;
var type;
function convertor (temp, type) {
	// type = type.toLowerCase();
  //if (type==="F")||
  if (type==="f") {
    ntemp= (temp-32)*(5/9);
    console.log(temp+" degrees in F is equal to " +ntemp+" degrees in C");
  }
  //else (type==="C")||
  else if (type==="c") {
    ntemp = (temp *(9/5))+32;
    console.log(temp+" degrees in C is equal to " +ntemp+" degrees in F");
  }
  else {
    console.log("TYPO IDIOT!!!!!")
  }
}
console.log(convertor(100, "c"));
