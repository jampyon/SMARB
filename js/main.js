// let numTest = 0;
// let userInputVal = document.getElementById("whyNoReadNum").value;
// let testTestNum = parseInt(userInputVal);
// let outputCalc = document.getElementById('placeToPutConversion');
// const massCalculation = document.querySelector('#convertButton').addEventListener('click', massCalc);

// function massCalc() {
//     numTest = testTestNum / 2;
//     outputCalc.innerHTML = numTest;
// }
//Can't figure out how to do the calc. JS funct. won't read user input as a num.

const massTypeTextChange = document.getElementById('massTypeConverter');

massTypeTextChange.addEventListener('change', testFunction);
function testFunction() {
    document.getElementsByName('converterUserInput')[0].placeholder = 'Kilograms to Pounds';
    //Above changes placeholder text for HTML input. Make sure to get the elem. name right
    //next time...
    document.querySelector('#convertButton').textContent = 'Convert to Pounds';
    //Above changes button text.
}

Array.from(document.getElementsByClassName('toBeUpdated'))
    .forEach(function(element) {
        element.addEventListener('click', function(){
            alert("Nah, son, not yet. Also, IDK why the compile button isn't included in the alert list.");
        })
    }) //Adds an event listener to each class elem. by converting elems. into an array.
        //Don't know why compile button isn't included in this.
        //Pieced it together from (https://stackoverflow.com/questions/56763768/is-there-any-way-to-add-an-event-listener-to-a-class)