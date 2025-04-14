var inputElm = document.getElementById('userInput')

function getValue (btnValue){

    if(btnValue === '='){
        var result = eval(inputElm.value);
        inputElm.value = result;
        return
    }
    if(btnValue === 'AC'){
        inputElm.value = '';
        return
    }
    if(btnValue === 'D'){
        inputElm.value = inputElm.value.slice(0, inputElm.value.length-1);
        return
    }

    inputElm.value += btnValue;
}