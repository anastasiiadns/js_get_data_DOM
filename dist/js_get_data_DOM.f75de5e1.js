'use strict';
const elements = document.querySelectorAll('.population');
const values = [];
let sum = 0;
for (const element of elements){
    const valueText = element.textContent;
    const numberString = valueText.replace(/[^0-9]/g, '');
    const number = parseInt(numberString);
    if (!isNaN(number)) {
        values.push(number);
        sum += number;
    }
}
const averageValue = values.length > 0 ? sum / values.length : 0;
const totalElements = document.querySelectorAll('.total-population');
const averageElements = document.querySelectorAll('.average-population');
const resultSum = sum.toLocaleString('en-US');
const resultAverageValue = Math.round(averageValue).toLocaleString('en-US');
for (const element of totalElements)element.textContent = resultSum;
for (const element of averageElements)element.textContent = resultAverageValue;

//# sourceMappingURL=js_get_data_DOM.f75de5e1.js.map
