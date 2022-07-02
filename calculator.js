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
      numbers.push(document.querySelector('input[name="results"]').value.match(/[0-9]+/g));
  operation.push(document.querySelector('input[name="results"]').value.match(/\+|-|\*|\//g));
  let value;
    
  for (let i in numbers) {
    for (let j in operation) {
      if (operation[j] === '+') {
        console.log(numbers[i] += numbers[i + 1]);
    } else if (operation[j] === '-') {
      value = numbers[i] -= numbers[i + 1];
    } else if (operation[j] === '*') {
      value = numbers[i] *= numbers[i + 1];
    } else if (operation[j] === '/') {
      value = numbers[i] /= numbers[i + 1];
    }
    document.querySelector('input[name="results"]').value = value;
  }
}
  }
});
}
