let calc = document.querySelectorAll('#calculator input.btn');
let calculations = [];

for (let i in calc) {
calc[i].addEventListener('click', function () {
  if (this.value !== '=' && this.value !== 'C') {
  document.querySelector('input[name="results"]').value += this.value;
  } else if (this.value === 'C') {
    document.querySelector('input[name="results"]').value = '';
  } else if (this.value === '=') {
      calculations.push(document.querySelector('input[name="results"]').value.match(/[0-9]+|\+|-|\*|\//g));
  let value = 0;
    
  for (let i in calculations) {
      if (calculations[i] === '+') {
      value = parseInt(calculations[i - 1] += calculations[i + 1], 10);
    } else if (calculations[i] === '-') {
      value = parseInt(calculations[i - 1] -= calculations[i + 1], 10);
    } else if (calculations[i - 1] === '*') {
      value = parseInt(calculations[i - 1] *= calculations[i + 1], 10);
    } else if (calculations[i] === '/') {
      value = parseInt(calculations[i - 1] /= calculations[i + 1], 10);
    }
  }
    document.querySelector('input[name="results"]').value = value;
  }
});
}
