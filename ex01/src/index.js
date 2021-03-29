$ = function (id) {
  return document.getElementById(id);
};



let fCapsLock = 0;
let fShift = 0;


var letterKeys = function (id) {
  var inputArea = document.getElementById("display");

  if (fCapsLock == "0") {
    if (fShift == "0") {
      inputArea.value += $(id).value.toLowerCase();
    } else if (fShift == "1") {
      fShift = "0";
      inputArea.value += $(id).value.toUpperCase();
    }
  } else if (fCapsLock == "1") {
    if (fShift == "0") {
      inputArea.value += $(id).value.toUpperCase();
    } else if (fShift == "1") {
      fShift = "0";
      inputArea.value += $(id).value.toLowerCase();
    }
  }
};


function funcDel() {
  let current = document.getElementById("display").value;
  let x = document.getElementById("display").value.length;
  let y = 1;
  let z = x - y;
  document.getElementById("display").value = current.slice(0, z);
}


function funcSpace() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current + " ";
}


function funcEnter() {
  let current = (document.getElementById("display").value += "\n");
}


function funcCaps() {
  if (fCapsLock === "0") {
    fCapsLock = "1";
  } else {
    fCapsLock = "0";
  }
}


function funcShift() {
  if (fShift === "0") {
    fShift = "1";
  } else {
    fShift = "0";
  }
}


function funcOk(){
	alert(document.getElementById("display").value);
  document.getElementById("display").value = "";
}