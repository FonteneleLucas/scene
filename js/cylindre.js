function getCylinder(params) {
    // Adiciona um cilindro à cena
    var cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 2, 10 );
    var cylinderMaterial = new THREE.MeshStandardMaterial({color: 0xffff00});
    var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.x = -2
    cylinder.position.y = 6
    cylinder.position.z = -5 
    return cylinder

}
