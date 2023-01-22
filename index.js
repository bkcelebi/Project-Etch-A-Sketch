"use strict"

const gridSquare = 10;
const amountOfSquare = 500 / gridSquare;
const container = document.querySelector('#container');


//Control panel
const range = document.querySelector('#range');
const rangeVal = document.querySelector('#rangeVal');

for (let i = 0; i < amountOfSquare; i++){
    let divs = document.createElement('div');
    divs.classList.add('divs');
    divs.innerText = i; 
    container.appendChild(divs);

};





//Control panel

rangeVal.innerText = `${range.value} x ${range.value}`;
range.addEventListener('input', e => {
    rangeVal.textContent = `${range.value} x ${range.value}`;
});
