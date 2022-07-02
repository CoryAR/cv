let calc = document.querySelectorAll('#calculator input');

calc.addEventListener('click', function () {
  document.querySelector('input[name="results"]').value += this.value;
});
