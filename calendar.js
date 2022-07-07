function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

let monthDays = daysInMonth(new Date().getMonth() + 1, new Date().getFullYear());
let dates = Array.from(Array(monthDays).keys());

for (let i = 0; i < dates.length; i++) {
  let span = document.createElement('span');
  span.className = 'btn btn-primary';
  span.innerText = dates[i];
  document.querySelector('#calendar').appendChild(span);
}

document.querySelectorAll('#calendar span').addEventListener('click', function () {
  var textarea = document.createElement('textarea');
  textarea.style.margin = '10px';
  document.querySelector('#calendar').appendChild(textarea);
});
