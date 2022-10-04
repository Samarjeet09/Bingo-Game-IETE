var buttonState = new Array(20).fill(false);

var bgimgFixed = [];

const bgImg = [
  "./pictures/css.png",
  "./pictures/database.png",
  "./pictures/html.png",
  "./pictures/nodejs.png",
  "./pictures/py.png",
  "./pictures/img1.jpg",
  "./pictures/img2.jpg",
  "./pictures/img3.jpg",
  "./pictures/img4.jfif",
  "./pictures/img5.png",
  "./pictures/css.png",
  "./pictures/database.png",
  "./pictures/html.png",
  "./pictures/nodejs.png",
  "./pictures/py.png",
  "./pictures/img1.jpg",
  "./pictures/img2.jpg",
  "./pictures/img3.jpg",
  "./pictures/img4.jfif",
  "./pictures/img5.png",
];

function buttonCounter(id, val) {
  var btn = document.getElementById(id);

  if (buttonState[val]) {
    buttonState[val] = false;
    // console.log("false");
    btn.style.backgroundColor = "#fbeee0";
  } else {
    btn.style.backgroundColor = "#31157c";
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
