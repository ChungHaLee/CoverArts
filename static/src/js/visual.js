let martiniModel;
let setSpecularColor = true;


// 만든 OBJ 모델 업로드
function preload() {
  martiniModel = loadModel('../static/assets/martini.obj', true);
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
}

function draw(){
  background('#f3f3f3');
  orbitControl();
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  ambientLight(200, 200, 110);

  if (setSpecularColor) {
    specularColor(168, 221, 240);
  }
  // -- create the light
  pointLight(80, 129, 146, locX, locY, 50); // white light


  specularMaterial(210);
  shininess(10);

  scale(2)
  rotateX(-10)
  rotateY(16)
  rotateY(millis() / 6000);
  model(martiniModel);
}