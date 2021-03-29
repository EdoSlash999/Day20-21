$ = function (id) {
  return document.getElementById(id);
};

var letterKeys = function (id) {
  let inputArea = document.getElementById("display");
  inputArea.value += $(id).value;
};

function funcDel() {
  var current = document.getElementById('display').value;
  var x = document.getElementById('display').value.length;
  var y = 1;
  var z = x-y;
  document.getElementById('display').value=current.slice(0,z);
};

function funcSpace() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value=current+' ';
};

function yourFunction(){
  document.getElementById('display').value +=  "\n" ;
};



