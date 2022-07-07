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
  if (parseInt(calSpan[i].innerText, 10) === currentDate) {
    calSpan[i].classList.remove('btn-primary');
    calSpan[i].classList.add('btn-default');
  }
  
calSpan[i].addEventListener('click', function () {
  if (document.querySelector('#add-event') !== null) {
    document.querySelector('#add-event').remove();
    document.querySelector('input[value="Add Event"]').remove();
        document.querySelector('input[value="Remove Event"]').remove();
  }
  
  let textarea = document.createElement('textarea');
  textarea.placeholder = 'Add an event for ' + month + '/' + calSpan[i].innerText;
  textarea.id = 'add-event';
  var input = document.createElement('input');
  input.type = 'button';
  input.className = 'btn';
  input.value = 'Add Event';
    var input2 = document.createElement('input');
  input2.type = 'button';
  input2.className = 'btn';
  input2.style.marginLeft = '5px';
  input2.value = 'Remove Event';
  document.querySelector('#calendar').appendChild(textarea);
  document.querySelector('#calendar').appendChild(input); 
  document.querySelector('#calendar').appendChild(input2);  
  let addEventText = document.querySelector('#add-event');
  let addEvent = document.querySelector('input[value="Add Event"]');
  let removeEvent = document.querySelector('input[value="Remove Event"]');
  let clickedEvent = calSpan[i].innerText;
      
addEvent.addEventListener('click', function () {
  localStorage.setItem('event' + calSpan[i].innerText, calSpan[i].innerText + '~' + addEventText.value);
  let eventDot = document.createElement('span');
  eventDot.className = 'event-dot';
  eventDot.title = addEventText.value;
  
  if (calSpan[i].innerText === clickedEvent && calSpan[i].innerHTML.indexOf('event-dot') === -1) {
    calSpan[i].appendChild(eventDot);
    addEventText.innerHTML = '';
  }
});
  
  removeEvent.addEventListener('click', function () {
    if (calSpan[i].innerText === clickedEvent) {
      calSpan[i].innerHTML = clickedEvent;
      localStorage.removeItem('event' + clickedEvent);
    }
  });
});
 
  var array = [];
  
        for (let x = 0; x < localStorage.length; x++) {
            if (localStorage.key(x).indexOf('event') !== -1) {
                array.push(localStorage.key(x));
                let eKeyDate = localStorage.getItem(localStorage.key(x)).split('~')[0];
                let eKeyText = localStorage.getItem(localStorage.key(x)).split('~')[1];

              if (calSpan[i].innerText === eKeyDate) {
                let eventDot = document.createElement('span');
                eventDot.className = 'event-dot';
                eventDot.title = eKeyText;
                calSpan[i].appendChild(eventDot);
                            }
        }
              }
}
