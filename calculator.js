let button = document.querySelectorAll('#calculator button');
let total = 0;

for (let i in button) {
  button[i].onclick = function(e) {
    if (this.innerText.indexOf('C') !== -1) {
          document.querySelector('#results').innerText = '';
        } else if (this.innerText.indexOf('<') !== -1) {
          document.querySelector('#results').innerText = document.querySelector('#results').innerText.slice(0, -1);
        } else if (this.innerText.indexOf('=') === -1) {
          if (button[i].className === 'add') {     
            total = parseInt(button[i].innerText + document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          } else if (button[i].className === 'subtract') {
            total = parseInt(button[i].innerText - document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          } else if (button[i].className === 'multiply') {
            total = parseInt(button[i].innerText * document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          } else if (button[i].className === 'divide') {
            total = parseInt(button[i].innerText / document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          }
        }
    console.log(total);
  };
}
