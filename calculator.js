let button = document.querySelectorAll('#calculator button');

for (let i in button) {
  button[i].onclick = function() {
    if (this.innerText.indexOf('C') !== -1) {
          document.querySelector('#results').innerText = '';
        } else if (this.innerText.indexOf('<') !== -1) {
          document.querySelector('#results').innerText = document.querySelector('#results').innerText.slice(0, -1);
        } else if (this.innerText.indexOf('=') === -1) {
          document.querySelector('#results').innerText += button[i].innerText;
        }
  };
}

document.querySelector('#equals').onclick = function() {
  document.querySelector('#results').innerText = equals;
};
