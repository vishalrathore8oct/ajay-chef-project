function myFunction2(){
  var a1 = document.getElementById("myNumber1").value;
  var b1 = document.getElementById("myNumber2").value;
  var e1 = document.getElementById("myNumber3").value;
  var f1 = document.getElementById("myNumber4").value;

  var a = parseInt(a1);
  var b = parseInt(b1);
  var e = parseInt(e1);
  var f = parseInt(f1);

  // document.getElementById("demo1").innerHTML = a;
  // document.getElementById("demo2").innerHTML = b;
  // document.getElementById("demo3").innerHTML = e;
  // document.getElementById("demo4").innerHTML = f;

  if (a > 0 && b > 0 && e > 0 && f > 0) {
    if (b - f >= 0 && a + e >= 0 && b - f < 10 && a + e < 10) {
      console.log("your variables (b-f,a+e) outputs is correct ");
      console.log(b - f, a + e);
    } else {
      console.log("your variables (b-f,a+e) outputs is wrong");
    }
  } else {
    console.log("your variables (b-f,a+e) outputs is wrong");
  }
  
  // console.log(b + f, a + e);
  
}

// if (a > 0 && b > 0 && e > 0 && f > 0) {
//     if (b - f >= 0 && a + e >= 0 && b - f < 10 && a + e < 10) {
//       console.log("your variables (b-f,a+e) outputs is correct ");
//       console.log(b - f, a + e);
//     } else {
//       console.log("your variables (b-f,a+e) outputs is wrong");
//     }
//   } else {
//     console.log("your variables (b-f,a+e) outputs is wrong");
//   }