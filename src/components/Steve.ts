import { BoxGeometry, Mesh, MeshBasicMaterial, TextureLoader } from "three";
import { scene } from "../scene/scene";
import SimpleBlock from "./SimpleBlock";


class Steve {
    private xBase: number;
    private yBase: number;
    private zBase: number;
    constructor(xBase: number, yBase: number, zBase: number ) {
        this.xBase = xBase;
        this.yBase = yBase;
        this.zBase = zBase;
      }
  




    public get(){
        const sapato1 = new SimpleBlock(this.xBase-1, this.yBase+1,this.zBase,'sapato',2);
        scene.add(sapato1.get())
    
        const sapato2 = new SimpleBlock(this.xBase+1, this.yBase+1,this.zBase,'sapato',2);
        scene.add(sapato2.get())
    
        const calca1 = new SimpleBlock(this.xBase-1, this.yBase+3.5,this.zBase,'calca',3);
        scene.add(calca1.get())
        const calca2 = new SimpleBlock(this.xBase+1, this.yBase+3.5,this.zBase,'calca',3);
        scene.add(calca2.get())
    
        const camisa1 = new SimpleBlock(this.xBase-1, this.yBase + 6.5,this.zBase,'camisa',3);
        scene.add(camisa1.get())
        
        const camisa2 = new SimpleBlock(this.xBase+1, this.yBase+6.5,this.zBase,'camisa',3);
        scene.add(camisa2.get())
    
        const camisa3 = new SimpleBlock(this.xBase-2, this.yBase+7.3,this.zBase,'camisa',1.5);
        scene.add(camisa3.get())

        const camisa4 = new SimpleBlock(this.xBase+2, this.yBase+7.3,this.zBase,'camisa',1.5);
        scene.add(camisa4.get())
    
        const mao1 = new SimpleBlock(this.xBase-4, this.yBase+7.3,this.zBase,'brow',1.5);
        scene.add(mao1.get())
    
        const mao2 = new SimpleBlock(this.xBase+4, this.yBase+7.3,this.zBase,'brow',1.5);
        scene.add(mao2.get())
    
        const cubeMaterials = [
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/steveside.png') }), //right side
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/steveleft.png') }), //left side
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/stevetop.png') }),  //top side
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/steveside.png') }), //bottom side
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/stevefront.png') }),//front side
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/stevetop.png') }),  //back side
        ];
    
        const steve = new Mesh(new BoxGeometry(2,2,2,2), cubeMaterials);
        steve.position.set(this.xBase,  this.yBase+9, this.zBase+0.2);
        scene.add(steve);
    }
    
   
}

export default Steve;
