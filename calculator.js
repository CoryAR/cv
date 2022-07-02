let calc = document.querySelectorAll('#calculator input:not([value="="])');

for (let i in calc) {
calc[i].addEventListener('click', function () {
  document.querySelector('input[name="results"]').value += this.value;
});
}
