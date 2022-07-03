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

            if (results.value.length >= 2 && results.value.match(/\+|-|\*|\//i).length === 1) {
                document.querySelector('#calculator input.equals').click();
            }
        } else if (this.value === 'C') {
            results.value = '';
        } else if (this.value === '=') {
            numbers.firstNumber = parseInt(results.value.match(/[0-9]+/i)[0], 10);
            numbers.secondNumber = parseInt(results.value.split(/\+|-|\*|\//i)[1], 10);

            if (results.value.includes('+')) {
                results.value = numbers.firstNumber + numbers.secondNumber;
            } else if (results.value.includes('-')) {
                results.value = numbers.firstNumber - numbers.secondNumber;
            } else if (results.value.includes('*')) {
                results.value = numbers.firstNumber * numbers.secondNumber;
            } else if (results.value.includes('/')) {
                results.value = numbers.firstNumber / numbers.secondNumber;
            }
        }
    });
}
