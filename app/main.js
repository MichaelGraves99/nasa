import NasaController from "./components/nasaController.js"


class App {
  constructor() {
    this.controllers = {
      pokeController: new NasaController()
    }
  }
}

window['app'] = new App()