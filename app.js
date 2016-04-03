

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
    elementTemp.innerHTML = temp+"˚ F = " + ntemp.toFixed(2) + "˚ C";
    answer.appendChild(elementTemp);
  }
  //else (type==="C")||
  else if (celc) {
    var ntemp = (temp *(9/5))+32;
    elementTemp.innerHTML= temp+"˚ C = " + ntemp.toFixed(2) + "˚ F";
    answer.appendChild(elementTemp);
  }
  else {
    console.log("TYPO IDIOT!!!!!");
  }
};
// console.log(convertor(100, "c"));

// return convertor();
