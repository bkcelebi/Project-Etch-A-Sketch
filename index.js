"use strict"

const container = document.querySelector('#container');
const range = document.querySelector('#range');
const rangeDisplay = document.querySelector('#rangeDisplay');
const amountOfSquare = range.value;
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const colorPalette = document.querySelector('#colorPalette');
const colorMode = document.querySelector('#colorMode');

//set the column amount for container class
const setGridAttribute = amountOfColumn => {
    container.setAttribute(
        'style', 
        `grid-template-columns: repeat(${amountOfColumn}, auto);`
        );
};

//create the squares themselves in the playground
const createSquares = (amountOfSquare = 16) => {

    for (let i = 0; i < amountOfSquare**2; i++){
        const divs = document.createElement('div');
        divs.classList.add('divs');
        container.appendChild(divs);
    };
};

//change the color palette and pass it to draw function
colorPalette.onclick = function(){
    colorPalette.addEventListener('change', () => {
        draw(colorPalette.value);
    });
};

colorMode.onclick = function(){
    draw(colorPalette.value);
};

//erase the drawing
eraser.onclick = function(){
    draw('white');
};

//DRAWING
const draw = (color = colorPalette.value) => {
    const divs = document.querySelectorAll('.divs');

    divs.forEach(div => div.addEventListener("touchmove", e => {
        
        e.target.style.background = color;
    }));
    
};

//control the playground
const controlPlayground = () => {

    console.log(navigator.userAgent);
    //DEFAULT SQUARE CREATION
    //getting the default value of range input
    const defaultAmountOfSquare = range.value;
    
    //16X16 default amount of squares
    rangeDisplay.innerText = `${defaultAmountOfSquare} x ${defaultAmountOfSquare}`;

    //set the column amount for the default value
    setGridAttribute(amountOfSquare);

    //creating default amount of squares
    createSquares();

    //drawing
    draw();

    clear.addEventListener('mousedown', () => {

        container.textContent = ''; 

        //creating adjusted amount of squares    
        createSquares(defaultAmountOfSquare);

        //drawing
        draw("white");
    });

    //ADJUSTED SQUARE CREATION
    //capturing the input event when range is changed
    range.addEventListener('input', () => {
        
        //getting the value of adjusted range input
        const adjustedAmountOfSquare = range.value;
        
        //set the range display
        rangeDisplay.textContent = `${adjustedAmountOfSquare} x ${adjustedAmountOfSquare}`;

        //set the column amount dynamically
        setGridAttribute(adjustedAmountOfSquare);
        
        //reset the playground
        container.textContent = '';

        //creating adjusted amount of squares    
        createSquares(adjustedAmountOfSquare);

        //drawing
        draw();

        clear.addEventListener('mousedown', () => {

            container.textContent = ''; 
    
            //creating adjusted amount of squares    
            createSquares(adjustedAmountOfSquare);
    
            //drawing
            draw("white");
        });
    });


};

controlPlayground();










