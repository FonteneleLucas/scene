import { BoxGeometry, CylinderGeometry, Mesh, MeshBasicMaterial } from "three";
class Cilindro {
  public get() {
    //cubo
    var cilindroGeometria =new CylinderGeometry( 1, 1, 2, 32 );

    var cilindroMaterial = new MeshBasicMaterial( { color:'#5EDCAE' } );
    var cilindro = new Mesh(cilindroGeometria, cilindroMaterial);
    cilindro.position.set(-2, 2, 0);
    return cilindro
  }
}

export default Cilindro
