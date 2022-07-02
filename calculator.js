let calc = document.querySelectorAll('#calculator input');

for (let i in calc) {
calc[i].addEventListener('click', function () {
  document.querySelector('input[name="results"]').value += this.value;
});
}
