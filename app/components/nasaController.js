//Private
import NasaService from "./nasaService.js";

let _ns = new NasaService()

function drawApiNasa() {
  let template = ''
  let thing = _ns.Thing
  template = thing.getCard()
  console.log(template)

  document.querySelector('.nasaCard').innerHTML = template
}


//Public
export default class NasaController {
  constructor() {
    _ns.addSubscriber('ApiNasa', drawApiNasa)
    _ns.getNasaData()
  }
}


