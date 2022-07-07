function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

let monthDays = [];

for (let i = 0; i < monthDays; i++) {
  monthDays[i].push(daysInMonth(new Date().getMonth(), new Date().getFullYear()));
  document.querySelector('#calendar').append(monthDays[i]);
}
