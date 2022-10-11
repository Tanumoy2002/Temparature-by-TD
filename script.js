const calculate = () =>{

    const numberTemp = document.getElementById('temp').value;

    const tempSelected =  document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFaren = (cel) =>{
        let farenheit = Math.round((cel * 9/5) + 32);
        return farenheit;
    }

    const farenToCel = (faren) =>{
        let Celsius = Math.round((faren - 32) * 5/9);
        return Celsius;
    }


    let result;

    if(valueTemp == 'cel'){
        result = celToFaren(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Farenheit`
    }else{
        result = farenToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Celsius`
    }

}