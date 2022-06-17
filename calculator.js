let button = document.querySelectorAll('#calculator button');

for (let i in button) {
  button[i].onclick = function() {
    if (this.innerText.indexOf('C') !== -1) {
          button[i].innerText = '';
        } else if (this.innerText.indexOf('<') !== -1) {
          button[i].charAt(0).innerText = '';
        } else {
          document.querySelector('#results').innerText += button[i].innerText;
        }
  };
}
