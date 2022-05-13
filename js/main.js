// let numTest = 0;
// let userInputVal = document.getElementById("whyNoReadNum").value;
// let testTestNum = parseInt(userInputVal);
// let outputCalc = document.getElementById('placeToPutConversion');
// const massCalculation = document.querySelector('#convertButton').addEventListener('click', massCalc);

// function massCalc() {
//     numTest = testTestNum / 2;
//     outputCalc.innerHTML = numTest;
// }

const massTypeTextChange = document.getElementById('massTypeConverter');

massTypeTextChange.addEventListener('change', testFunction);
function testFunction() {
    document.getElementsByName('converterUserInput')[0].placeholder = 'Kilograms to Pounds';
    //Above changes placeholder text for HTML input. Make sure to get the elem. name right
    //next time...
    document.querySelector('#convertButton').textContent = 'Convert to Pounds';
    //Above changes button text.
}