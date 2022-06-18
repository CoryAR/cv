let button = document.querySelectorAll('#calculator button');
let total = 0;
let num;

for (let i in button) {
  button[i].onclick = function(e) {
    if (this.innerText.indexOf('C') !== -1) {
          document.querySelector('#results').innerText = '';
        } else if (this.innerText.indexOf('<') !== -1) {
          document.querySelector('#results').innerText = document.querySelector('#results').innerText.slice(0, -1);
        } else if (this.className === 'num') {
          num = this.innerText;
          document.querySelector('#results').innerText += num;
        } else if (this.className === 'add') {
            document.querySelector('#results').innerText += '+';
            total = parseInt(num + document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          } else if (this.className === 'subtract') {
            document.querySelector('#results').innerText += '-';
            total = parseInt(num - document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          } else if (this.className === 'multiply') {
            document.querySelector('#results').innerText += '*';
            total = parseInt(num * document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          } else if (this.className === 'divide') {
            document.querySelector('#results').innerText += '/';
            total = parseInt(num / document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          }
        };
    console.log(total);
  }
