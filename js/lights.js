
function directionalLight(params) {
    // Create a directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
    directionalLight.position.set(5, 3, 5);
    return directionalLight;
}

function pointLight(params) {
    // Create a point light
    const pointLight = new THREE.PointLight(0xff0000, 1, 100);
    pointLight.position.set(1, 1, 5);
    return pointLight;
}

function spotLight(params) {
    // Create a spot light
    const spotLight = new THREE.SpotLight(0x00ff00, 1, 100);
    spotLight.position.set(1, 1, 5);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.05;
    spotLight.decay = 2;
    spotLight.distance = 200;
    return spotLight;
}

function ambientLight(params) {
    // Create an ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    return ambientLight;
}


