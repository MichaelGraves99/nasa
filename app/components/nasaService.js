//Private
import Thing from "../models/thing.js";

let _nasaAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=Eh5QDRncokpxgyzzmAQFWh94aktlGevZyXXz5hxi'
})

let _state = {
  ApiNasa: []
}

let _subscribers = {
  ApiNasa: []
}
function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

//Public
export default class NasaService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }
  get Thing() {
    return _state.ApiNasa
  }

  //GET DATA
  getNasaData() {
    _nasaAPI.get()
      .then(res => {
        let data = new Thing(res.data)
        setState('ApiNasa', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
}
// api key: Eh5QDRncokpxgyzzmAQFWh94aktlGevZyXXz5hxi