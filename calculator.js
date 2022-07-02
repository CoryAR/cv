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
    console.log(numbers);
    console.log(operation);
  }
});
}

function results() {
  let numb = document.querySelector('input[name="results"]').value.match(/[0-9]+/g);
  let oper = document.querySelector('input[name="results"]').value.match(/\+|-|\*|\//g);
      
  for (let i in numb) {
    numbers.push(numb.charAt(i));
  }
  
  for (let i in oper) {
    operation.push(oper.charAt(i));
  }
}
