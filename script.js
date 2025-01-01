document.getElementById('convertBtn').addEventListener('click', function() {
    let tempInput = document.getElementById('tempInput').value;
    let unitInput = document.getElementById('unitInput').value;
    let outputTemp = document.getElementById('outputTemp');
    let outputUnit = document.getElementById('outputUnit');

    if (tempInput === '') {
        outputTemp.textContent = 'Please enter a temperature!';
        outputUnit.textContent = '';
        return;
    }

    tempInput = parseFloat(tempInput);

    if (unitInput === 'Celsius') {
        let fahrenheit = (tempInput * 9/5) + 32;
        outputTemp.textContent = `${fahrenheit.toFixed(2)} °F`;
        outputUnit.textContent = 'Converted to Fahrenheit';
    } else if (unitInput === 'Fahrenheit') {
        let celsius = (tempInput - 32) * 5/9;
        outputTemp.textContent = `${celsius.toFixed(2)} °C`;
        outputUnit.textContent = 'Converted to Celsius';
    }
});
