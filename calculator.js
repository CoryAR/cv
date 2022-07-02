let calc = document.querySelectorAll('#calculator input.btn');

for (let i in calc) {
calc[i].addEventListener('click', function () {
  if (this.value !== '=' && this.value !== 'C') {
  document.querySelector('input[name="results"]').value += this.value;
  } else if (this.value === 'C') {
    document.querySelector('input[name="results"]').value = '';
  } else if (this.value === '=') {
      document.querySelector('input[name="results"]').value = parseInt(document.querySelector('input[name="results"]').value, 10);
  }
});
}
