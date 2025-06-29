// ここからコードを書いてください
export function setupConverter(){
    const converterForm = document.querySelector(".converter-form");
    const converterInput = document.querySelector(".converter-input");
    const converterFrom = document.querySelector(".converter-from");
    const converterTo = document.querySelector(".converter-to");
    const converterResult = document.querySelector(".converter-result");

    const lengthUnit = [
        {name: "meter",base: 1},
        {name: "kilometer",base: 1000},
        {name: "centimeter",base: 0.01},
        {name: "millimeter",base: 0.001},
        {name: "inch",base: 0.0254},
        {name: "foot",base: 0.3048},
        {name: "yard",base: 0.9144},
        {name: "mile",base: 1609.344}
    ];
    
    function populateSelectOptions(selectElement,units){
        units.forEach(unit =>{
            const option = document.createElement("option");
            option.value = unit.base;
            option.textContent = unit.name;
            selectElement.appendChild(option);
        });
    };
    populateSelectOptions(converterFrom,lengthUnit);
    populateSelectOptions(converterTo,lengthUnit);
    converterFrom.selectedIndex = 0;
    converterTo.selectedIndex = 1;


    function convert(){
        const value = parseFloat(converterInput.value);
        if(isNaN(value)){
            converterResult.textContent = 'Please enter a valid number';
            return;
        };
        const fromBase = converterFrom.value;
        const toBase = converterTo.value;
        const resultValue = (value * parseFloat(fromBase)) /  parseFloat(toBase);
        converterResult.textContent =`${converterInput.value} ${converterFrom.options[converterFrom.selectedIndex].text} = ${resultValue.toFixed(3)} ${converterTo.options[converterTo.selectedIndex].text}`;
    };
    converterInput.addEventListener("input",convert);
    converterFrom.addEventListener("change",convert);
    converterTo.addEventListener("change",convert);

    convert();
};
