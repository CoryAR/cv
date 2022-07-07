function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

let monthDays = daysInMonth(new Date().getMonth(), new Date().getFullYear())
let startDate = 0;

for (let i in monthDays) {
document.querySelector('#calendar').append(startDate[i]++);
}
