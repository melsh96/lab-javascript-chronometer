class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      //if (typeof callback === 'function) callback()
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    // this.currentTime / 60 | 0
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let stringDoubleNumber = "";
    //console.log(typeof value);
    if (value < 10)
      stringDoubleNumber = "0" + value.toString();

    else 
      stringDoubleNumber = value.toString();

    return stringDoubleNumber;
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes());
    let second = this.computeTwoDigitNumber(this.getSeconds());

    return `${minute}:${second}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
