let button = document.querySelectorAll('#calculator button');

for (let i in button) {
  button[i].onclick = function() {
    if (this.innerText.indexOf('C') !== -1) {
          document.querySelector('#results').innerText = '';
        } else if (this.innerText.indexOf('<') !== -1) {
          document.querySelector('#results').charAt(0).innerText = '';
        } else if (this.innerText.indexOf('=') === -1) {
          document.querySelector('#results').innerText += button[i].innerHTML;
        }
  };
}

document.querySelector('#equals').onclick = function() {
  let equals = parseInt(document.querySelector('#results').innerText, 10);
  document.querySelector('#results').innerText = equals;
};
