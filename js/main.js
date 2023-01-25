// Get the canvas element
const canvas = document.getElementById("render_canvas");

// Create a renderer
const renderer = new THREE.WebGLRenderer({ canvas });

// Set the renderer size
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setClearColor( 0xfffd3e, 0.6);

// Create a scene
const scene = new THREE.Scene();



function rays(params) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixels = new Uint8Array(width * height * 4);

    const raycaster = new THREE.Raycaster();

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            // calculate the x, y and z values of the pixel
            const x = (i / width) * 2 - 1;
            const y = - (j / height) * 2 + 1;
            const z = 0.5;
            const vector = new THREE.Vector3(x, y, z);

            // Unproject the pixel position
            vector.unproject(getCamera());

            // Set the origin and direction of the raycaster
            raycaster.set(getCamera().position, vector.sub(getCamera().position).normalize());
            
            const intersects = raycaster.intersectObjects(scene.children);
            // if(intersects.leght > 0){
            console.log(intersects)
            // }

            // Find all the objects the ray intersects
        }
    }
}







// Render the scene
function render(params) {
    scene.add(directionalLight(), pointLight(), spotLight(), ambientLight());
    scene.add(getCube());
    renderer.render(scene, getCamera());
    setTimeout(rays(), 5000);

}


// Fix the aspect ratio of the camera when the canvas resizes
window.addEventListener('resize', () => {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    getCamera().aspect = canvas.clientWidth / canvas.clientHeight;
    getCamera().updateProjectionMatrix();
    render();
});

window.onload=function(){
    var renderTrigger = document.getElementById("renderTrigger")
    renderTrigger.addEventListener("click", render)
}


