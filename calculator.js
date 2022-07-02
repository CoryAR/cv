let calc = document.querySelectorAll('#calculator input.btn');

let results = {
  firstNumber: firstNumber,
  secondNumber: secondNumber,
  operator: operator
};

for (let i in calc) {
calc[i].addEventListener('click', function () {
  if (this.value !== '=' && this.value !== 'C') {
  document.querySelector('input[name="results"]').value += this.value;
  } else if (this.value === 'C') {
    document.querySelector('input[name="results"]').value = '';
  } else if (this.value === '=') {
    results.operator = document.querySelector('input[name="results"]').value.match(/\+|-|\*|\//i);
    results.firstNumber = document.querySelector('input[name="results"]').value.match(/[0-9]+/i)[0];
    results.secondNumber = document.querySelector('input[name="results"]').value.match(/[0-9]+/i)[1];
    console.log(results);
  }
});
}
