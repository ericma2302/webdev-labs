var hfontsize = 2;
var pfontsize = 1;

const makeBigger = () => {
   //console.log(document.querySelector("p").style.fontSize)
   hfontsize = hfontsize * 1.05;
   pfontsize = pfontsize * 1.05;
   document.querySelector("p").style.fontSize = pfontsize.toString() + 'em';
   document.querySelector("h1").style.fontSize = hfontsize.toString() + 'em';
};

const makeSmaller = () => {
   hfontsize = hfontsize * .95;
   pfontsize = pfontsize * .95;
   document.querySelector("p").style.fontSize = pfontsize.toString() + 'em';
   document.querySelector("h1").style.fontSize = hfontsize.toString() + 'em';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

