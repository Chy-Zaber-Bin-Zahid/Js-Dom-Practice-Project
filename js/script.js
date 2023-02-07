// quote part
let text = "";
let author = "";

function change() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      text = data.content;
      author = data.author;

      document.querySelector(".quote-text").textContent = "❝ " + text + " ❞";
      document.querySelector(".author-name").textContent = author;
    });
}

change();

function changeGreen() {
  document.querySelector(".quote-text-area").style.color = "black";
  document.querySelector(".quote-text-area").style.backgroundColor = "green";
  change();
}

function changeYellow() {
  document.querySelector(".quote-text-area").style.color = "blue";
  document.querySelector(".quote-text-area").style.backgroundColor = "yellow";
  change();
}

function changeBlue() {
  document.querySelector(".quote-text-area").style.color = "red";
  document.querySelector(".quote-text-area").style.backgroundColor = "skyblue";
  change();
}

function changeOrange() {
  document.querySelector(".quote-text-area").style.color = "green";
  document.querySelector(".quote-text-area").style.backgroundColor = "orange";
  change();
}

// hero converter part
let num = 0;
let con = "";
let p = document.querySelector(".hero-p");

function convert() {
  num = Number(document.querySelector(".hero-input").value);
  con = document.querySelector(".hero-drop").value;
}
setInterval(convert, 100);

function check() {
  if (con === "kg") {
    p.textContent = `${Number(num) * 0.4536} kilograms`;
  } else {
    p.textContent = `${Number(num) * 2.2046} pounds`;
  }
}

// Series part
let arr = [];
let max = document.querySelector(".max");
let min = document.querySelector(".min");
let sum = document.querySelector(".sum");
let average = document.querySelector(".average");
let reverse = document.querySelector(".reverse");

function ping() {
  let text = document.querySelector(".series-input").value;
  arr = text.split(",");
  if (arr[0] === "") {
    max.textContent = NaN;
    min.textContent = NaN;
    sum.textContent = NaN;
    average.textContent = NaN;
    reverse.textContent = NaN;
  } else {
    // max
    max.textContent = Math.max(...arr);
    // min
    if ("" !== arr[arr.length - 1]) {
      min.textContent = Math.min(...arr);
    } else {
      let newArr = arr.slice(0, arr.length - 1);
      min.textContent = Math.min(...newArr);
    }
    // sum
    let sumArr = 0;
    for (let i = 0; i < arr.length; i++) {
      sumArr += Number(arr[i]);
    }
    sum.textContent = sumArr;
    // average
    if ("" !== arr[arr.length - 1]) {
      average.textContent = Number.parseFloat(sumArr / arr.length);
    } else {
      average.textContent = Number.parseFloat(sumArr / (arr.length - 1));
    }
    // reverse
    if ("" !== arr[arr.length - 1]) {
      reverse.textContent = arr.reverse();
    } else {
      let store = arr.reverse().slice(1, arr.length);
      reverse.textContent = store;
    }
  }
}

setInterval(ping, 100);

// magic part
// clear part
function clearText() {
  document.querySelector(".magic-textarea").value = "";
}
// capital lower part
function cap() {
  if (document.querySelector(".btn-cap").textContent === "Capitalize Up") {
    const store = document.querySelector(".magic-textarea").value;
    document.querySelector(".magic-textarea").value = store.toUpperCase();
    document.querySelector(".btn-cap").textContent = "Capitalize Low";
  } else {
    const store = document.querySelector(".magic-textarea").value;
    document.querySelector(".magic-textarea").value = store.toLowerCase();
    document.querySelector(".btn-cap").textContent = "Capitalize Up";
  }
}
// sort part
function sorted() {
  const store = document
    .querySelector(".magic-textarea")
    .value.split("\n")
    .sort();
  let temp = "";
  for (let i = 0; i < store.length; i++) {
    if (i !== store.length - 1) {
      temp = temp + store[i] + "\n";
    } else {
      temp = temp + store[i];
    }
  }
  document.querySelector(".magic-textarea").value = temp;
}
// reverse part
function revText() {
  const store = document
    .querySelector(".magic-textarea")
    .value.split("\n")
    .reverse();
  let temp = "";
  for (let i = 0; i < store.length; i++) {
    if (i !== store.length - 1) {
      temp = temp + store[i] + "\n";
    } else {
      temp = temp + store[i];
    }
  }
  document.querySelector(".magic-textarea").value = temp;
}
// strip part
function strip() {
  const store = document.querySelector(".magic-textarea").value.split("\n");
  let store2 = [];
  for (let i = 0; i < store.length; i++) {
    if (store[i] !== "") {
      store2.push(store[i]);
    }
  }
  let temp = "";
  for (let i = 0; i < store2.length; i++) {
    if (i !== store2.length - 1) {
      temp = temp + store2[i] + "\n";
    } else {
      temp = temp + store2[i];
    }
  }
  let store3 = temp.split("\n");
  temp = "";
  for (let j = 0; j < store3.length; j++) {
    if (j !== store3.length - 1) {
      temp = temp + store3[j].replace(/\s+/g, " ").trim() + "\n";
    } else {
      temp = temp + store3[j].replace(/\s+/g, " ").trim();
    }
  }
  document.querySelector(".magic-textarea").value = temp;
}
// add num part
function aNum() {
  const store = document.querySelector(".magic-textarea").value.split("\n");
  let count = 1;
  let temp = "";
  for (let i = 0; i < store.length; i++) {
    if (i !== store.length - 1) {
      temp += `${count}. ` + store[i] + "\n";
    } else {
      temp += `${count}. ` + store[i];
    }
    count++;
  }
  document.querySelector(".magic-textarea").value = temp;
}
// shuffle part
function shuffle() {
  const store = document.querySelector(".magic-textarea").value.split("\n");
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const store1 = shuffle(store);
  let temp = "";
  for (let i = 0; i < store1.length; i++) {
    if (i !== store1.length - 1) {
      temp = temp + store1[i] + "\n";
    } else {
      temp = temp + store1[i];
    }
  }
  document.querySelector(".magic-textarea").value = temp;
}
