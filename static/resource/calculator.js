window.addEventListener('load', function() {
    let calculator = document.querySelector('#calculator');
    let calcResult = document.querySelector('#calc-result');

    let buttons = calculator.querySelectorAll('button')

    for (let button of buttons){
        button.addEventListener('click', function(evt) {
            let elem = evt.target;
            let buttonText = elem.innerText;
            if (buttonText == 'C') {
                calcResult.value = '';
                return;
            }

            if (buttonText == '=') {
                try{
                    calcResult.value = eval(calcResult.value);
                } catch{
                    calcResult.value = '수식 오류';
                }
                return;
            }
            calcResult.value += buttonText;
        });
    }
})
