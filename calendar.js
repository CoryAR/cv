function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(new Date().getMonth(), new Date().getFullYear()));
let monthDays = daysInMonth(new Date().getMonth(), new Date().getFullYear());
let startDate = 0;

for (let i of monthDays) {
document.querySelector('#calendar').append(startDate[i]++);
}
