

function convertor(temp) {
	// type = type.toLowerCase();
  //if (type==="F")||
  var temp=document.getElementById("inputTemp").value;
  var fehr=document.getElementById("selectF").checked;
  var celc=document.getElementById("selectC").checked;

  var elementTemp=document.createElement('div');
  document.getElementById("answer").innerHTML = "";
  // document.appendChild(elementTemp);


  if (fehr) {
    ntemp= (temp-32)*(5/9);
    elementTemp.innerHTML = temp+" degrees in F is equal to " +ntemp.toFixed(2)+" degrees in C";
    answer.appendChild(elementTemp);
  }
  //else (type==="C")||
  else if (celc) {
    var ntemp = (temp *(9/5))+32;
    elementTemp.innerHTML= temp+" degrees in C is equal to " +ntemp.toFixed(2)+" degrees in F";
    answer.appendChild(elementTemp);
  }
  else {
    console.log("TYPO IDIOT!!!!!");
  }
};
// console.log(convertor(100, "c"));

// return convertor();
