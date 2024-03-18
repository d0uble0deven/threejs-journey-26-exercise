import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from "./Experience"

export default class Camera {
    constructor() {
        
        // // Access Experience.js via Global Var
        // this.experience = window.experience
        // console.log(this.experience.sizes.width)
        
        // // Access Experience.js via Argument
        // // // add this.camera = new Camera(this) to Experience.js
        // // // constructor(experience) { in this file
        // this.experience = experience
        // console.log(this.experience.sizes.width)

        // Access Experience.js via Singleton
        // // add `let instance = null` to top of Experience.js
        // // add `if (instance) { return instance } instance = this` under constructor in Experience.js
        // this.experience = new Experience()
        
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        console.log(this)

        this.setInstance()
        this.setOrbitControl()

    }

    
    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            35, 
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }

    setOrbitControl() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize() {
        console.log('camera resize')
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        this.controls.update()
    }

}