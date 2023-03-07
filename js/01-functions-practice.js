//STEP 1
function halfNumber(num) {
    let half = num / 2;
    console.log("Half of " + num + " is " + half + ".");
    return half;
  }
//STEP 2  
  function squareNumber(num) {
    var squared = num * num;
    console.log("The result of squaring the number " + num + " is " + squared + ".");
    return squared;
  }
//STEP 3  
  function percentOf(num1, num2) {
    var percent = (num1 / num2) * 100;
    console.log(num1 + " is " + percent + "% of " + num2 + ".");
    return percent;
  }
//STEP 4  
  function findModulus(num1, num2) {
    var modulus = num1 % num2;
    console.log(modulus + " is the modulus of " + num1 + " and " + num2 + ".");
    return modulus;
  }
//STEP 5
halfNumber(5); 
squareNumber(3); 
percentOf(2, 4); 
findModulus(10, 4); 