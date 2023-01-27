

function getCube(params) {
    // Add objects to the scene
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({color: 0xff0000});


    const cube = new THREE.Mesh(geometry, material);
    // cube.position.x = 2
    cube.position.y = 2
    cube.position.x = 2
    return cube;
}

