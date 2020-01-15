var value = 0;
var azzu;
var answers1 = ["'Thanks to Venus in Cancer,",
    " 'Thanks to Mars in Aries,",
    "'Thanks to Jupiter in Virgo,",
    "'Thanks to Sun in Saggitarius,",
    "'Thanks to Pluto in Capricorn,",
    "'Thanks to Moon in Libra,",
    "'Thanks to Mars in Aquarius,",
    "'Thanks to Neptune in Taurus,",
    "'Thanks to Uranium in Gemini,",
    "'Thanks to Saturn in Leo,",
    "'Thanks to Moon in Scorpio,",
    "'Thanks to Sun in Pisces,",];
var randomtext1;
var answers2 = ["you will fall in love with an as*hole'",
    "is better for you not to eat salad'",
    "today is going to be a s*itty day'",
    "your drunk ex will call you soon'",
    "keep in mind: you will NEED a toilet'",
    "it’s going to be a hot night, baby'",
    "watch out for those little parrots'",
    "you will never win that, come on!'",
    "you MUST not walk outside the lines'",
    "your wallet will be empty, again'",
    "your job will never stop s*cking'",
    "you can only run away: don't stop'",];
var randomtext2;


function preload() {

  azzu = loadImage("assets/azzu.png");
  zodiac = loadImage("assets/zodiac.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  setShakeThreshold(20);
}


function draw() {
    backgroundImage();
    image(azzu, (width / 2) - 430, (height / 2) - 150, 900, 1000);

    var myText = "Azzurra*'s";
    drawingContext.font = "70px Work Sans";
    drawingContext.textAlign = "center";
    fill('black');
    text(myText, width / 2, 100);

    var myText2 = "✨ HOROSCOPE ✨";
    drawingContext.font = "100px Work Sans";
    drawingContext.textAlign = "center";
    fill('black');
    text(myText2, width / 2, 200);

    var myText3 = "Just shake her as if she were an object";
    drawingContext.font = "40px Work Sans";
    drawingContext.textAlign = "center";
    fill('black');
    text(myText3, width / 2, 270);

    var myText4 = "*Yes, my roommate again";
    drawingContext.font = "30px Work Sans";
    drawingContext.textAlign = "center";
    fill('white');
    text(myText4, width / 2, height - 40);

    drawingContext.font = "50px Work Sans";
    drawingContext.textAlign = "center";
    fill('black');
    text(randomtext1, width / 2, 450);

    drawingContext.font = "50px Work Sans";
    drawingContext.textAlign = "center";
    fill('black');
    text(randomtext2, width / 2, 520);
  }

function backgroundImage() {
  var scale = Math.max(width / zodiac.width, height / zodiac.height);
  image(zodiac, 0, 0, zodiac.width * scale, zodiac.height * scale);
}

function deviceShaken() {
  randomtext1 = random(answers1);
  randomtext2 = random(answers2);
}

function touchMoved() {
  return false;
}

function touchEnded() {
  DeviceOrientationEvent.requestPermission()
}
