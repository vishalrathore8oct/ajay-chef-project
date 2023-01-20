function myFunction2(){
  var a1 = document.getElementById("myNumber1").value;
  var b1 = document.getElementById("myNumber2").value;
  var c1 = document.getElementById("myNumber3").value;
  var d1 = document.getElementById("myNumber4").value;
  var e1 = document.getElementById("myNumber5").value;
  var f1 = document.getElementById("myNumber6").value;

  var a = parseInt(a1);
  var b = parseInt(b1);
  var c = parseInt(c1);
  var d = parseInt(d1);
  var e = parseInt(e1);
  var f = parseInt(f1);

  if (a > 0 && c > 0 && e > 0) {
    if (a - e >= 0 && a - c >= 0 && a - e < 10 && a - c < 10) {
      document.write("your variables (a-e,a-c) outputs is correct: =  ");
      document.write(a - e, a - c);
    } else {
      document.write("your variables (a-e,a-c) outputs is wrong");
    }
  } else {
    document.write("your variables (a-e,a-c) outputs is wrong");
  }

  document.write("<br>");
  
  if (b > 0 && c > 0 && f > 0) {
    if (c - f >= 0 && b - c >= 0 && c - f < 10 && b - c < 10) {
      document.write("your variables (c-f,b-c) outputs is correct: =  ");
      document.write(c - f, b - c);
    } else {
      document.write("your variables (c-f,b-c) outputs is wrong");
    }
  } else {
    document.write("your variables (c-f,b-c) outputs is wrong");
  }

  document.write("<br>");
  
  if (b > 0 && c > 0 && f > 0) {
    if (c - f >= 0 && b - f >= 0 && c - f < 10 && b - f < 10) {
      document.write("your variables (c-f,b-f) outputs is correct: =  ");
      document.write(c - f, b - f);
    } else {
      document.write("your variables (c-f,b-f) outputs is wrong");
    }
  } else {
    document.write("your variables (c-f,b-f) outputs is wrong");
  }

  document.write("<br>");
  
  if (b > 0 && c > 0 && e > 0) {
    if (b - c >= 0 && b - e >= 0 && b - c < 10 && b - e < 10) {
      document.write("your variables (b-c,b-e) outputs is correct: =  ");
      document.write(b - c, b - e);
    } else {
      document.write("your variables (b-c,b-e) outputs is wrong");
    }
  } else {
    document.write("your variables (b-c,b-e) outputs is wrong");
  }

  document.write("<br>");
  
  if (b > 0 && c > 0 && e > 0) {
    if (c - b >= 0 && c - e >= 0 && c - b < 10 && c - e < 10) {
      document.write("your variables (c-b,c-e) outputs is correct: =  ");
      document.write(c - b, c - e);
    } else {
      document.write("your variables (c-b,c-e) outputs is wrong");
    }
  } else {
    document.write("your variables (c-b,c-e) outputs is wrong");
  }

  document.write("<br>");
  
  if (a > 0 && b > 0 && e > 0) {
    if (a + e >= 0 && a - b >= 0 && a + e < 10 && a - b < 10) {
      document.write("your variables (a+e,a-b) outputs is correct: =  ");
      document.write(a + e, a - b);
    } else {
      document.write("your variables (a+e,a-b) outputs is wrong");
    }
  } else {
    document.write("your variables (a+e,a-b) outputs is wrong");
  }

  document.write("<br>");
  
  if (a > 0 && b > 0 && e > 0) {
    if (b + e >= 0 && a - b >= 0 && b + e < 10 && a - b < 10) {
      document.write("your variables (b+e,a-b) outputs is correct: =  ");
      document.write(b + e, a - b);
    } else {
      document.write("your variables (b+e,a-b) outputs is wrong");
    }
  } else {
    document.write("your variables (b+e,a-b) outputs is wrong");
  }

  document.write("<br>");
  
  if (a > 0 && b > 0 && e > 0 && f > 0) {
    if (e + f >= 0 && a - b >= 0 && e + f < 10 && a - b < 10) {
      document.write("your variables (e+f,a-b) outputs is correct: =  ");
      document.write(e + f, a - b);
    } else {
      document.write("your variables (e+f,a-b) outputs is wrong");
    }
  } else {
    document.write("your variables (e+f,a-b) outputs is wrong");
  }

  document.write("<br>");
  
  if (a > 0 && b > 0 && e > 0 && f > 0) {
    if (b - f >= 0 && a + e >= 0 && b - f < 10 && a + e < 10) {
      document.write("your variables (b-f,a+e) outputs is correct: =  ");
      document.write(b - f, a + e);
    } else {
      document.write("your variables (b-f,a+e) outputs is wrong");
    }
  } else {
    document.write("your variables (b-f,a+e) outputs is wrong");
  }

  document.write("<br>");
  
  if (a > 0 && b > 0 && d > 0 && e > 0) {
    if (e - a >= 0 && b + d >= 0 && e - a < 10 && b + d < 10) {
      document.write("your variables (e-a,b+d) outputs is correct: =  ");
      document.write(e - a, b + d);
    } else {
      document.write("your variables (e-a,b+d) outputs is wrong");
    }
  } else {
    document.write("your variables (e-a,b+d) outputs is wrong");
  }

}
