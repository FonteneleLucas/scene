import { BoxGeometry, Mesh, MeshBasicMaterial, TextureLoader } from "three";
import { scene } from "../scene/scene";



class SimpleBlock {
    private x: number;
    private y: number;
    private z: number;
    private textureType: number;
    private height: number;
    
    constructor(x: number, y: number, z: number, textureType: number, height: number) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.textureType = textureType;
      this.height = height
    }

    private defineTexture(){
        var path = "src/resources/"
        if (this.textureType === 1){
            path+="block.png"
        }else if (this.textureType === 2) {
            path+="grama.png"
        }
        
        const texture = new TextureLoader().load( path );
        return texture;
    }

    public render() {
        const cube = new Mesh( 
            new BoxGeometry(2,this.height,2,2), 
            new MeshBasicMaterial({ map: this.defineTexture() }));
        cube.position.set(this.x, this.y, this.z)
        return cube;
    }

    public renderLineZ(limite: number, marginLeft:number){
        for (let index = -limite; index <= limite; index+=2) {
            const cube1 = new SimpleBlock(marginLeft,0.5,index,2,1);
            scene.add(cube1.render())
        }
    }

    public renderLineX(planeFactorX: number, planeFactorZ: number){
        var midleValueX = planeFactorX/2;
        for (let index = -midleValueX; index <= midleValueX; index+=2) {
            this.renderLineZ(planeFactorZ/2,index)  
        }
    }


    public renderBaseArea(planeFactorX: number, planeFactorZ: number){
        this.renderLineX(planeFactorX, planeFactorZ)
    }

    
}

export default SimpleBlock;
