import { BoxGeometry, Mesh, MeshBasicMaterial, TextureLoader } from "three";
import { scene } from "../scene/scene";






class SimpleBlock {
    private x: number;
    private y: number;
    private z: number;
    private textureType: 'pedra'|'block'|'grama' |'bamboo'| 'brow'| 'sapato'| 'calca'|'camisa'|'cloud';
    private height: number;

    private x_rotate: number;
    private y_rotate: number;
    private z_rotate: number;
    
    constructor(x: number, y: number, z: number, textureType:  'pedra'|'block'|'grama' |'bamboo'| 'brow'| 'sapato'| 'calca'|'camisa'|'cloud', height: number) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.textureType = textureType;
      this.height = height
      this.x_rotate = 0;
      this.y_rotate = 0;
      this.z_rotate = 0;
    }

    public rotate(x: number, y: number, z: number){
        this.x_rotate = x;
        this.y_rotate = y;
        this.z_rotate = z;
    }

    private defineTexture(){
        var path = "/assets/resources/"
        path+=`${this.textureType}.png`
        // if (this.textureType === 1){
        //     path+="block.png"
        // }else if (this.textureType === 2) {
        //     path+="grama.png"
        // }else if (this.textureType === 3) {
        //     path+="bamboo.png"
        // }else if(this.textureType === 4) {
        //     path+="brow.png"
        // }else if(this.textureType === 5) {
        //     path+="sapato.png"
        // }else if(this.textureType === 6) {
        //     path+="camisa.png"
        // }else if(this.textureType === 7) {
        //     path+="calca.png"
        // }else{
        //     path+="cloud.png"
        // }
        
        const texture = new TextureLoader().load( path );
        return texture;
    }

    public get() {
        const cube = new Mesh( 
            new BoxGeometry(2,this.height,2,2), 
            new MeshBasicMaterial({color: "#FFF", map: this.defineTexture()}));
        cube.position.set(this.x, this.y, this.z)
        cube.rotateX(this.x_rotate)
        cube.rotateY(this.y_rotate)
        cube.rotateZ(this.z_rotate)
        return cube;
    }

    public renderLineZ(limite: number, marginLeft:number){
        for (let index = -limite; index <= limite; index+=2) {
            const cube1 = new SimpleBlock(marginLeft,0.5,index,'grama',1);
            scene.add(cube1.get())
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

    public cloud(){
        for (let index = 0; index < 3; index++) {
            const nuvem = new SimpleBlock(this.x+4,this.y+2,this.z+4, this.textureType, this.height);
            nuvem.rotate(50, 0, 0)
            scene.add(nuvem.get())
        }
        
    }

    public clouds(){
        const cloud1 = new SimpleBlock(4, 10, 2, 'cloud', 1);
        cloud1.cloud()

        const cloud2 = new SimpleBlock(-8, 9, -6,'cloud', 1);
        cloud2.cloud()

        const cloud3 = new SimpleBlock(-10, 9, -6, 'cloud', 2);
        cloud3.cloud()

        const cloud4 = new SimpleBlock(2, 10, -6, 'cloud', 1);
        cloud4.cloud()

        const cloud5 = new SimpleBlock(7, 9.5, -6, 'cloud', 2);
        cloud5.cloud()
    }

    
}

export default SimpleBlock;
