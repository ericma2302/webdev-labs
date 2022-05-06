/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const makeDefault = () => {
   //console.log(document.querySelector("p").style.fontSize)
   document.querySelector("body").className = '';
};

const makeOcean = () => {
   //console.log(document.querySelector("p").style.fontSize)
   document.querySelector("body").className = 'ocean';
};

const makeDesert = () => {
   //console.log(document.querySelector("p").style.fontSize)
   document.querySelector("body").className = 'desert';
};

const makeHighContrast = () => {
   //console.log(document.querySelector("p").style.fontSize)
   document.querySelector("body").className = 'high-contrast';
};


document.getElementById('default').addEventListener('click', makeDefault);
document.getElementById('ocean').addEventListener('click', makeOcean);
document.getElementById('desert').addEventListener('click', makeDesert);
document.getElementById('high-contrast').addEventListener('click', makeHighContrast);





