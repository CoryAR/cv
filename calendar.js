function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

let monthDays = daysInMonth(new Date().getMonth() + 1, new Date().getFullYear());
let dates = Array.from(Array(monthDays).keys());

for (let i = 0; i < dates.length; i++) {
  let span = document.createElement('span');
  span.className = 'btn btn-primary';
  span.style.margin = '3px';
  span.innerText = dates[i];
  document.querySelector('#calendar').appendChild(span);
}

let calSpan = document.querySelectorAll('#calendar span');

for (let i in calSpan) {
calSpan[i].addEventListener('click', function () {
  if (document.querySelector('#add-event').length) {
    document.querySelector('#add-event').remove();
  }
  
  var textarea = document.createElement('textarea');
  textarea.style.margin = '10px';
  textarea.id = 'add-event';
  document.querySelector('#calendar').appendChild(textarea);
});
}
