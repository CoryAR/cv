let calc = document.querySelectorAll('#calculator input.btn');
let numbers = [];
let operation = [];

for (let i in calc) {
calc[i].addEventListener('click', function () {
  if (this.value !== '=' && this.value !== 'C') {
  document.querySelector('input[name="results"]').value += this.value;
  } else if (this.value === 'C') {
    document.querySelector('input[name="results"]').value = '';
  } else if (this.value === '=') {
    results();
  }
});
}

function results() {
  numbers.push(document.querySelector('input[name="results"]').value.match(/[0-9]+/g));
  operation.push(document.querySelector('input[name="results"]').value.match(/\+|-|\*|\//g));
  
  for (let i in numbers) {
    for (let j in operation) {
      if (operation[j] === '+') {
        document.querySelector('input[name="results"]').value = numbers[i] += numbers[i + 1];
    } else if (operation[j] === '-') {
      document.querySelector('input[name="results"]').value = numbers[i] -= numbers[i + 1];
    } else if (operation[j] === '*') {
      document.querySelector('input[name="results"]').value = numbers[i] *= numbers[i + 1];
    } else if (operation[j] === '/') {
      document.querySelector('input[name="results"]').value = numbers[i] /= numbers[i + 1];
    }
  }
}
