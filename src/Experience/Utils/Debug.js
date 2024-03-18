import GUI from 'lil-gui'

export default class Debug {
    constructor() {
        /* 
            ***  http://localhost:5173/#debug  ***
        */
        this.active = window.location.hash === '#debug'

        if(this.active) {
            this.ui = new GUI()
        }
    }
}
