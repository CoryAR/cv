let calc = document.querySelectorAll('#calculator input.btn');
let results = document.querySelector('input[name="results"]');

let numbers = {
    firstNumber: 0,
    secondNumber: 0
};

for (let i in calc) {
    calc[i].addEventListener('click', function() {
        if (this.value !== '=' && this.value !== 'C') {
            results.value += this.value;

            if (results.value.match(/[0-9\.]+/g).length >= 2 && results.value.match(/\+|−|x|\//i).length === 1) {
                document.querySelector('#calculator input.equals').click();
            }
        } else if (this.value === 'C') {
            results.value = '';
        } else if (this.value === '=') {
            numbers.firstNumber = parseFloat(results.value.match(/[0-9]+/i)[0], 10);
            numbers.secondNumber = parseFloat(results.value.split(/\+|−|x|\//i)[1], 10);

             if (results.value.includes('+')) {
                results.value = numbers.firstNumber + numbers.secondNumber;
            } else if (results.value.includes('−')) {
                results.value = numbers.firstNumber - numbers.secondNumber;
            } else if (results.value.includes('x')) {
                results.value = numbers.firstNumber * numbers.secondNumber;
            } else if (results.value.includes('/')) {
                results.value = numbers.firstNumber / numbers.secondNumber;
            }
        }
    });
}
