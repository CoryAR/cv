let calc = document.querySelectorAll('#calculator input.btn');

for (let i in calc) {
calc[i].addEventListener('click', function () {
  if (this.value.indexOf(/[0-9]/i) !== -1) {
  document.querySelector('input[name="results"]').value += this.value;
  } else if (this.value === 'C') {
    document.querySelector('input[name="results"]').value = '';
  }
});
}
