function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

let monthDays = daysInMonth(new Date().getMonth() + 1, new Date().getFullYear());
let dates = Array.from(Array(monthDays).keys());
let month = new Date().getMonth() + 1;
let currentDate = new Date().getDate();

for (let i = 0; i < dates.length; i++) {
  let span = document.createElement('span');
  span.className = 'btn btn-primary';
  span.style.margin = '3px';
  span.innerText = dates[i] + 1;
  document.querySelector('#calendar').appendChild(span);
}

let calSpan = document.querySelectorAll('#calendar span');

for (let i in calSpan) {
  if (calSpan[i].innerText === currentDate) {
    calSpan[i].classList.remove('btn-primary').add('btn-default');
  }
  
calSpan[i].addEventListener('click', function () {
  if (document.querySelector('#add-event') !== null) {
    document.querySelector('#add-event').remove();
    document.querySelector('input[value="Add Event"]').remove();
  }
  
  let textarea = document.createElement('textarea');
  textarea.placeholder = 'Add an event for ' + month + '/' + calSpan[i].innerText;
  textarea.id = 'add-event';
  var input = document.createElement('input');
  input.type = 'button';
  input.className = 'btn';
  input.value = 'Add Event';
  document.querySelector('#calendar').appendChild(textarea);
  document.querySelector('#calendar').appendChild(input);
});
}
