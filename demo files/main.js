let a, b, c, d, e, f;
console.log("Hello vishal sir!");
a = parseInt(prompt("Enter the value of a: "));
b = parseInt(prompt("Enter the value of b: "));
c = parseInt(prompt("Enter the value of c: "));
d = parseInt(prompt("Enter the value of d: "));
e = parseInt(prompt("Enter the value of e: "));
f = parseInt(prompt("Enter the value of f: "));

if (a > 0 && c > 0 && e > 0) {
  if (a - e >= 0 && a - c >= 0 && a - e < 10 && a - c < 10) {
    console.log("your variables (a-e,a-c) outputs is correct ");
    console.log(a - e, a - c);
  } else {
    console.log("your variables (a-e,a-c) outputs is wrong");
  }
} else {
  console.log("your variables (a-e,a-c) outputs is wrong");
}

if (b > 0 && c > 0 && f > 0) {
  if (c - f >= 0 && b - c >= 0 && c - f < 10 && b - c < 10) {
    console.log("your variables (c-f,b-c) outputs is correct ");
    console.log(c - f, b - c);
  } else {
    console.log("your variables (c-f,b-c) outputs is wrong");
  }
} else {
  console.log("your variables (c-f,b-c) outputs is wrong");
}

if (b > 0 && c > 0 && f > 0) {
  if (c - f >= 0 && b - f >= 0 && c - f < 10 && b - f < 10) {
    console.log("your variables (c-f,b-f) outputs is correct ");
    console.log(c - f, b - f);
  } else {
    console.log("your variables (c-f,b-f) outputs is wrong");
  }
} else {
  console.log("your variables (c-f,b-f) outputs is wrong");
}

if (b > 0 && c > 0 && e > 0) {
  if (b - c >= 0 && b - e >= 0 && b - c < 10 && b - e < 10) {
    console.log("your variables (b-c,b-e) outputs is correct ");
    console.log(b - c, b - e);
  } else {
    console.log("your variables (b-c,b-e) outputs is wrong");
  }
} else {
  console.log("your variables (b-c,b-e) outputs is wrong");
}

if (b > 0 && c > 0 && e > 0) {
  if (c - b >= 0 && c - e >= 0 && c - b < 10 && c - e < 10) {
    console.log("your variables (c-b,c-e) outputs is correct ");
    console.log(c - b, c - e);
  } else {
    console.log("your variables (c-b,c-e) outputs is wrong");
  }
} else {
  console.log("your variables (c-b,c-e) outputs is wrong");
}

if (a > 0 && b > 0 && e > 0) {
  if (a + e >= 0 && a - b >= 0 && a + e < 10 && a - b < 10) {
    console.log("your variables (a+e,a-b) outputs is correct ");
    console.log(a + e, a - b);
  } else {
    console.log("your variables (a+e,a-b) outputs is wrong");
  }
} else {
  console.log("your variables (a+e,a-b) outputs is wrong");
}

if (a > 0 && b > 0 && e > 0) {
  if (b + e >= 0 && a - b >= 0 && b + e < 10 && a - b < 10) {
    console.log("your variables (b+e,a-b) outputs is correct ");
    console.log(b + e, a - b);
  } else {
    console.log("your variables (b+e,a-b) outputs is wrong");
  }
} else {
  console.log("your variables (b+e,a-b) outputs is wrong");
}

if (a > 0 && b > 0 && e > 0 && f > 0) {
  if (e + f >= 0 && a - b >= 0 && e + f < 10 && a - b < 10) {
    console.log("your variables (e+f,a-b) outputs is correct ");
    console.log(e + f, a - b);
  } else {
    console.log("your variables (e+f,a-b) outputs is wrong");
  }
} else {
  console.log("your variables (e+f,a-b) outputs is wrong");
}

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

if (a > 0 && b > 0 && d > 0 && e > 0) {
  if (e - a >= 0 && b + d >= 0 && e - a < 10 && b + d < 10) {
    console.log("your variables (e-a,b+d) outputs is correct ");
    console.log(e - a, b + d);
  } else {
    console.log("your variables (e-a,b+d) outputs is wrong");
  }
} else {
  console.log("your variables (e-a,b+d) outputs is wrong");
}
