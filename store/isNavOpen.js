import {makeAutoObservable} from "mobx";

class IsNavOpen {
    isNavOpen = false

    constructor() {
        makeAutoObservable(this)
    }

    setIsNavOpen() {
        this.isNavOpen = !this.isNavOpen
    }
}

export default new IsNavOpen