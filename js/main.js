// Inicialização da cena, câmera e renderizador
const canvas = document.getElementById("render_canvas");
var renderer = new THREE.WebGLRenderer({ canvas });

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Adiciona um cubo à cena
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posiciona a câmera
camera.position.z = 5;

// Inicializa o Raycaster
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// Loop para percorrer o viewport
function loop() {
  console.log("Inicializando");

  for (var i = 0; i < canvas.clientWidth; i++) {
    for (var j = 0; j < canvas.clientHeight; j++) {
      // Define as coordenadas do pixel
      mouse.x = (i / canvas.clientWidth) * 2 - 1;
      mouse.y = -(j / canvas.clientHeight) * 2 + 1;
      // Define a posição do raio baseado nas coordenadas do pixel e na configuração da câmera
      raycaster.setFromCamera(mouse, camera);
      // Detecta quais objetos estão sendo atingidos pelo raio
      var intersects = raycaster.intersectObjects(scene.children, true);
      // console.log(intersects);

      // Faça algo com os objetos intersectados, por exemplo, mudar a cor deles
      for (var k = 0; k < intersects.length; k++) {
        intersects[k].object.material.color.set(0x0000FF);
        // console.log(intersects);
        updateScene()
      }
    }
  }
  console.log("Done");
  

  // requestAnimationFrame(loop);
}

function updateScene(params) {
  renderer.render(scene, camera);
}

// Render the scene
function render(params) {
  
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  document.body.appendChild(renderer.domElement);

  scene.add(directionalLight(), pointLight(), spotLight(), ambientLight());
  // scene.add(getCube());/
  renderer.render(scene, camera);
  // Raycaster()
}

// Fix the aspect ratio of the camera when the canvas resizes
window.addEventListener("resize", () => {
  // renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  // getCamera().aspect = canvas.clientWidth / canvas.clientHeight;
  // getCamera().updateProjectionMatrix();
  render();
});

window.onload = function () {
  var renderTrigger = document.getElementById("renderTrigger");
  renderTrigger.addEventListener("click", () => {
    render();
    loop();
  });
};
