
function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
    for (let i = 0; i < 15; i++) {
      let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesBought.push(cookies);
      cookiesTotal += cookies;
    }
    this.cookiesBought.push(cookiesTotal);
  }

}

export default Store;