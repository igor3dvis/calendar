const date = new Date();

let store = {
  _state: {
    nameMonthes: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    monthsNumber: {
      JAN: 0,
      FEB: 1,
      MAR: 2,
      MAY: 4,
      JUL: 6,
      AUG: 7,
      OCT: 9,
      DEC: 11,
    },

    namesWeekend: {
      SAT: 6,
      SUN: 0,
    },

    currentData: date.getDate(),
    currentMonth: date.getMonth(),
    currentYear: date.getFullYear(),
  },
  _callSubscriber() {
    console.log("reRender");
  },

  getState() {
    return this._state;
  },

  

  renderMonth() {
    return this._state.currentMonth;
  },

  firstDayOfMonth() {
    return new Date(
      `${this._state.currentYear}-${this.renderMonth() + 1}-01`
    ).getDay();
  },

  lastDaysPrevMonth() {
    if (this.firstDayOfMonth() === this._state.namesWeekend.SUN) {
      return this._state.namesWeekend.SAT; // если "Вс", то последнее число пред. месяца = "Сб"
    }
    return this.firstDayOfMonth() - 1;
  },

  getTitleMonth() {
    return this._state.nameMonthes[this.renderMonth()];
  },

  // метод вычисляет количество дней в текущем и предыдущем месяце
  howmatchDays() {
    const { MAY, JUL, OCT, DEC, FEB, MAR, JAN, AUG } = this._state.monthsNumber;

    // Дефолтное количество дней в текущем и предыдущем месяце
    let daysCurrentMonth = 30;
    let daysPrevMonth = 31;
    if (
      this.renderMonth() === MAY ||
      this.renderMonth() === JUL ||
      this.renderMonth() === OCT ||
      this.renderMonth() === DEC
    ) {
      daysCurrentMonth = 31;
      daysPrevMonth = 30;
    } else if (this.renderMonth() === FEB) {
      daysCurrentMonth = 28;
      daysPrevMonth = 31;
    } else if (this.renderMonth() === MAR) {
      daysCurrentMonth = 31;
      daysPrevMonth = 28;
    } else if (this.renderMonth() === JAN || this.renderMonth() === AUG) {
      daysCurrentMonth = 31;
      daysPrevMonth = 31;
    }

    return {
      howmatchDaysCurMonth: daysCurrentMonth,
      howmatchDaysPrevMonth: daysPrevMonth,
    };
  },

  funcNumbersDaysOfCurrentMonth(monthCurrent, monthPrev) {
    let testArray = [];
    let firstDayOfMonth = this.firstDayOfMonth();
    let lastDaysPrevMonth = this.lastDaysPrevMonth();

    let days =
      (monthCurrent === 31 &&
        (firstDayOfMonth === this._state.namesWeekend.SUN ||
          firstDayOfMonth === this._state.namesWeekend.SAT)) ||
      (monthCurrent === 30 && firstDayOfMonth === this._state.namesWeekend.SUN)
        ? 42
        : 35;

    if (firstDayOfMonth === this._state.namesWeekend.SUN) {
      lastDaysPrevMonth = this._state.namesWeekend.SAT; // если "Вс", то последнее число пред. месяца = "Сб"
    }

    for (let i = lastDaysPrevMonth; i > 0; i--) {
      testArray.push(monthPrev - (i - 1));
    }

    // testArray.push(...[...new Array(monthC).keys()]);
    for (let i = 1; i <= monthCurrent; i++) {
      testArray.push(i);
    }

    for (let i = 1; i <= days - (monthCurrent + lastDaysPrevMonth); i++) {
      testArray.push(i);
    }
    return testArray;
  },

  changeCurrMonth(x) {
if (x === 'prev'){
  this._state.currentMonth -= 1;
} else if (x === 'next'){
  this._state.currentMonth += 1;
}

   // this._state.currentMonth = a;
    console.log("xx");
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    console.log("sss");

    this._callSubscriber = observer;
  },
};

export { store };