let calc = document.querySelectorAll('#calculator input.btn');

let results = {
  firstNumber: 0,
  secondNumber: 0,
  operator: '+'
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
    results.secondNumber = document.querySelector('input[name="results"]').value.split(/\+|-|\*|\//i)[1];
    console.log(parseInt(result.firstNumber results.operator results.secondNumber, 10));
  }
});
}
