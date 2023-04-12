
function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

class Store {
  constructor(a, b, c, d) {
    this.name = a;
    this.minCust = b;
    this.maxCust = c;
    this.avgCookie = d;
    this.cookiesBought = [];
  }
  getCookiesBought() {
    let cookiesTotal = 0;
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesBought.push(cookies);
      cookiesTotal += cookies;
    }
    this.cookiesBought.push(cookiesTotal);
  }


}

export default Store;