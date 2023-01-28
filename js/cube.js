

function getCube(params) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({color: 0xff0000});

    const cube = new THREE.Mesh(geometry, material);

    cube.position.y = 2
    cube.position.x = 2
    cube.position.z = 1
    return cube;
}

