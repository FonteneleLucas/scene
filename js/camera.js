
function getCamera(){
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

    // Set the position of the camera
    camera.position.set(0, 2, 5);

    // Set the rotation of the camera
    camera.rotation.set(0, 0, 1);

    // Set the field of view
    camera.fov = 45;

    // Set the aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;

    // Set the near and far planes
    camera.near = 0.1;
    camera.far = 1000;
    return camera;
}
