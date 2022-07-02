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
    let len = calculations.length;
    
  for (let i in calculations) {
      if (calculations[i].indexOf('+') !== -1) {
      document.querySelector('input[name="results"]').value = parseInt(calculations[(i+len-1)%len] + calculations[(i+1)%len], 10);
    } else if (calculations[i].indexOf('-') !== -1) {
      document.querySelector('input[name="results"]').value = parseInt(calculations[i - 1] - calculations[i + 1], 10);
    } else if (calculations[i].indexOf('*') !== -1) {
      document.querySelector('input[name="results"]').value = parseInt(calculations[i - 1] * calculations[i + 1], 10);
    } else if (calculations[i].indexOf('/') !== -1) {
      document.querySelector('input[name="results"]').value = parseInt(calculations[i - 1] / calculations[i + 1], 10);
    }
  }
  }
});
}
