var temp=document.getElementById("inputTemp").value;
var fehr=document.getElementById;("selectF").checked;
var celc=document.getElementById;("selectC").checked;

function convertor (temp, type) {
	// type = type.toLowerCase();
  //if (type==="F")||
  if (fehr===true) {
    var ntemp= (temp-32)*(5/9);
    ntemp.innerHTML = temp+" degrees in F is equal to " +ntemp+" degrees in C";
    answer.appendChild(ntemp);
  }
  //else (type==="C")||
  else if (celc===true) {
    ntemp = (temp *(9/5))+32;
    console.log(temp+" degrees in C is equal to " +ntemp+" degrees in F");
  }
  else {
    console.log("TYPO IDIOT!!!!!")
  }
}
console.log(convertor(100, "c"));
