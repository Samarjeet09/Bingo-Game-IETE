var buttonState = new Array(20).fill(false);

var bgimgFixed = [];

const bgImg = [
  "./pictures/E0.png",
  "./pictures/E1.png",
  "./pictures/E2.png",
  "./pictures/E3.png",
  "./pictures/E4.png",
  "./pictures/E5.png",
  "./pictures/E6.png",
  "./pictures/E7.png",
  "./pictures/E8.png",
  "./pictures/E9.png",
  "./pictures/css.png",
  "./pictures/html.png",
  "./pictures/nodejs.png",
  "./pictures/py.png",
];

function buttonCounter(id, val) {
  var btn = document.getElementById(id);

  if (buttonState[val]) {
    buttonState[val] = false;
    // console.log("false");
    btn.style.backgroundColor = "#fbeee0";
    // btn.style.animationPlayState = "running";
  } else {
    btn.style.backgroundColor = "#31157c";
    // btn.style.animationPlayState = "paused";
    buttonState[val] = true;
    // console.log("true");
  }
  localStorage.setItem("buttonState", JSON.stringify(buttonState));
}

const setRandom = (array) => {
  var test = document.getElementsByClassName("button1");
  var c = 0;
  while (array.length) {
    const random = Math.floor(Math.random() * array.length);
    const el = array.splice(random, 1)[0];
    var btn = test.item(c);
    bgimgFixed.push(el);
    btn.style.backgroundImage = `url(${el})`;
    c++;
  }
  localStorage.setItem("storedposi", JSON.stringify(bgimgFixed));
};

function resetSelections() {
  buttonState.forEach((e, i) => {
    if (e) {
      buttonState[i] = false;
      var btn = document.getElementById(`placeholder${i}`);
      btn.style.backgroundColor = "#fbeee0";
    }
  });

  localStorage.setItem("buttonState", JSON.stringify(buttonState));
}
