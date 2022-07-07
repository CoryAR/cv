function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

let monthDays = daysInMonth(new Date().getMonth(), new Date().getFullYear());
let dates = Array.from(Array(monthDays).keys());

for (let i = 0; i < dates.length; i++) {
  document.querySelector('#calendar').append(dates[i]);
}
