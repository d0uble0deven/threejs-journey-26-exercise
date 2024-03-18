import * as THREE from 'three'
import Experience from "../Experience/Experience";
import Environment from "./Environment";
import Floor from "./Floor";
import Fox from './Fox';

export default class World {

    constructor() {
        this.experience = new Experience
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // const testMesh = new THREE.Mesh(
        //     new THREE.BoxGeometry(1,1,1),
        //     new THREE.MeshStandardMaterial({wireframe: false})
        // )
        // this.scene.add(testMesh)

        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
            this.floor = new Floor()
            this.fox = new Fox()
            this.environment = new Environment()
        })

    }


    update() {
        if(this.fox)
            this.fox.update()
    }
}
