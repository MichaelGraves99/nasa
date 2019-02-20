export default class Thing {
  constructor(data) {
    this.name = data.title
    this.img = data.url
    this.description = data.explanation
  }

  getCard() {
    return `
        <div class="col">
            <div class="card">
              <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title cen">${this.name}</h5>
                    <p class="card-body">${this.description}</p>
                </div>
            </div>
        </div>
        `
  }
}