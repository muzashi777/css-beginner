const first = document.getElementById("first");
const second = document.getElementById("second");

document.addEventListener("submit", cal);
var z,
  w,
  k = 0,
  a = [],
  b = [],
  c = [];

function cal() {
  const x = Number(first.value);
  const y = Number(second.value);
  if (x < 0 || y < 0) {
    alert("Number must >= 0");
    first.value = 0;
    second.value = 0;
    return;
  }
  lcm(x, y);
  gcd(x, y);
  first.value = 0;
  second.value = 0;
  show();
}

function gcd(x, y) {
  if (x === 0 || y === 0) {
    w = 0;
    return;
  }
  calArray(x, y);
  calGcdArray();
  calGcd(x, y);
}

function calGcdArray() {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        c.push(a[i]);
        a.splice(i, 1);
        b.splice(j, 1);
        calGcdArray();
      }
    }
  }
}

function calGcd(x, y) {
  if (c.length === 0) {
    if (x === 0 || y === 0) {
      w = 0;
    } else {
      w = 1;
    }
  } else {
    w = c.reduce((first, next) => {
      return first * next;
    });
  }
  a = [];
  b = [];
  c = [];
}

function lcm(x, y) {
  if (x === 0 || y === 0) {
    z = 0;
    return;
  }
  calArray(x, y);
  calLcmArray();
  calLcm(x, y);
}

function calArray(x, y) {
  for (let i = 2; i <= x; i++) {
    if (x % i === 0) {
      a.push(i);
      k = x / i;
      // console.log(k);
      solution1(k);
      // console.log("before break");
      k = 0;
      break;
    }
  }
  for (let i = 2; i <= y; i++) {
    if (y % i === 0) {
      b.push(i);
      k = y / i;
      // console.log(k);
      solution2(k);
      // console.log("before break");
      k = 0;
      break;
    }
  }
}

function solution1(k) {
  for (let i = 2; i <= k; i++) {
    // console.log(k);
    if (k % i === 0) {
      a.push(i);
      k = k / i;
      // console.log(k);
      solution1(k);
      k = 0;
      break;
    }
  }
}

function solution2(k) {
  for (let i = 2; i <= k; i++) {
    // console.log(k);
    if (k % i === 0) {
      b.push(i);
      k = k / i;
      // console.log(k);
      solution2(k);
      break;
    }
  }
}

function calLcmArray() {
  for (let i = 0; i < a.length; i++) {
    // console.log("indexX " + i);
    for (let j = 0; j < b.length; j++) {
      // console.log("indexY " + j);
      if (a[i] === b[j]) {
        // console.log("realX " + i);
        // console.log("realY " + j);

        a.splice(i, 1);
        b.splice(j, 1);
        calLcmArray();
      }
    }
  }
}

function calLcm(x, y) {
  if (b.length !== 0) {
    b.forEach((item) => {
      x *= item;
    });
  } else {
    a.forEach((item) => {
      y *= item;
    });
  }

  a = [];
  b = [];
  z = x;
}

function show() {
  const change = document.getElementById("change");
  change.style.color = "#ffffff";
  change.innerHTML = `LCM: ${z}<br>GCD: ${w}<br>`;
  const deleteValue = document.createElement("button");
  const text = document.createTextNode("Clear");
  deleteValue.id = "delete";
  deleteValue.appendChild(text);
  change.appendChild(deleteValue);
  deleteAll();
}

function deleteAll() {
  document.getElementById("delete").addEventListener("click", () => {
    change.innerHTML = " ";
  });
}
