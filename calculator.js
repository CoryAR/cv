let button = document.querySelectorAll('#calculator button');
let total = 0;

for (let i in button) {
  button[i].onclick = function(e) {
    if (this.innerText.indexOf('C') !== -1) {
          document.querySelector('#results').innerText = '';
        } else if (this.innerText.indexOf('<') !== -1) {
          document.querySelector('#results').innerText = document.querySelector('#results').innerText.slice(0, -1);
        } else if (this.className === 'num') {
          let num = button[i].innerText;
          document.querySelector('#results').innerText += num;
          if (button[i].className === 'add') {
            document.querySelector('#results').innerText += '+';
            total = parseInt(num + document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          } else if (button[i].className === 'subtract') {
            document.querySelector('#results').innerText += '-';
            total = parseInt(num - document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          } else if (button[i].className === 'multiply') {
            document.querySelector('#results').innerText += '*';
            total = parseInt(num * document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          } else if (button[i].className === 'divide') {
            document.querySelector('#results').innerText += '/';
            total = parseInt(num / document.querySelector('#results').innerText.substring(5, document.querySelector('#results').innerText.length - 1), 10);
          }
        }
    console.log(total);
  };
}
