$(document).ready(function() {

  var inputs = [""];

  var totalString;

  var ops1 = ["+", "-", "/", "*"];

  var ops2 = ["."];
 
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function getValue(input) {
    if (ops2.includes(inputs[inputs.length - 1]) === true && input === ".") {
      alert("MATH ERROR '.'");
    } else if (inputs.length === 1 && ops1.includes(input) === false) {
      inputs.push(input);
    } else if (ops1.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(input);
    } else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }

  function update() {
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }

  function getTotal() {
    console.log("getTotal Called");
    totalString = inputs.join("");
    //console.log(totalString + ": " + eval(totalString));
    $("#steps").html(eval(totalString));
  }

  $("button").on("click", function() {
    if (this.id === "deleteAll") {
      inputs = [""];
      update();
    } else if (this.id === "backOne") {
      inputs.pop();
      update();
    } else if (this.id === "total") {
      getTotal();
    } else { 
      
      getValue(this.id);
 
    }
  });
});