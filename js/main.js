// Inicialização da cena, câmera e renderizador
const canvas = document.getElementById("render_canvas");
var renderer = new THREE.WebGLRenderer({ canvas});
var scene = new THREE.Scene();
var camera = null;
var raycaster = null;
var intersects = []
var min = 100000000


function addObjects(params) {
  scene.add(getCube());
  scene.add(getCylinder());
  scene.add(getSphere());
}

function init(params) {
  // Inicializa objetos
  camera = getCamera();
  raycaster = getRayCaster();
  scene.add(directionalLight(), pointLight(), spotLight(), ambientLight());
 
  addObjects();
}

// Loop para percorrer o viewport
function loop() {
  var pixel = new THREE.Vector2();
  console.log("Inicializando...");

  for (var i = 0; i < canvas.clientWidth; i++) {
    for (var j = 0; j < canvas.clientHeight; j++) {

      pixel.x = (i / canvas.clientWidth) * 2 - 1;
      pixel.y = -(j / canvas.clientHeight) * 2 + 1;

      // Verifica a posição do raio baseado nas coordenadas do pixel a partir da câmera
      raycaster.setFromCamera(pixel, camera);

      // Verifica intersecao
      intersects = raycaster.intersectObjects(scene.children, true);
      // console.log(intersects);

      for (var k = 0; k < intersects.length; k++) {
        intersects[k].object.material.color.set(0x000FFD);
        setMinValue(intersects[k].distance)
        // console.log(intersects);
        updateScene()
      }
    }
  }
  console.log("Done");
}

function render(params) {
  renderer.render(scene, camera);
  renderer.setClearColor(new THREE.Color(0xD2C5C5));
}

function updateScene(params) {
  renderer.render(scene, camera);
}

function setMinValue(value) {
  if(value < min){
    min = value;
  }
}


window.onload = function () {
  var renderTrigger = document.getElementById("renderTrigger");
  renderTrigger.addEventListener("click", () => {
    init()
    render();
    loop();
    console.log("menor dist: ", min)
    // findMinValue();
  });
};
