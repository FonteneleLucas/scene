

function getSphere(params) {
    // Add objects to the scene
    const geometry = new THREE.SphereGeometry( 2, 15, 20 );
    const material = new THREE.MeshStandardMaterial( { color: 0xffff00 } );

    const sphere = new THREE.Mesh( geometry, material );

    //sphere.position.x = 2
    sphere.position.y = 1.5
    sphere.position.x = -2
    sphere.position.z = -5
    return sphere;
}

