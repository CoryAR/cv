function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

let monthDays = daysInMonth(new Date().getMonth() + 1, new Date().getFullYear());
let dates = Array.from(Array(monthDays).keys());

for (let i = 0; i < dates.length; i++) {
  document.querySelector('#calendar').appendChild('<span class="btn">' + dates[i] + '</span>');
}
