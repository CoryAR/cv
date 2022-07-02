let calc = document.querySelectorAll('#calculator input.btn');

let results = {
  firstNumber: 0,
  secondNumber: 0
};

for (let i in calc) {
calc[i].addEventListener('click', function () {
  if (this.value !== '=' && this.value !== 'C') {
  document.querySelector('input[name="results"]').value += this.value;
  } else if (this.value === 'C') {
    document.querySelector('input[name="results"]').value = '';
  } else if (this.value === '=') {
    results.firstNumber = parseInt(document.querySelector('input[name="results"]').value.match(/[0-9]+/i)[0], 10);
    results.secondNumber = parseInt(document.querySelector('input[name="results"]').value.split(/\+|-|\*|\//i)[1], 10);
    console.log(results.firstNumber + results.secondNumber);
  }
});
}
