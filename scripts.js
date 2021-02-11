var abit16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

var bit1 = abit16[Math.floor(Math.random() * 16)];
var bit2 = abit16[Math.floor(Math.random() * 16)];
var bit3 = abit16[Math.floor(Math.random() * 16)];
var bit4 = abit16[Math.floor(Math.random() * 16)];
var bit5 = abit16[Math.floor(Math.random() * 16)];
var bit6 = abit16[Math.floor(Math.random() * 16)];
var bit7 = abit16[Math.floor(Math.random() * 16)];
var bit8 = abit16[Math.floor(Math.random() * 16)];
//var all = ;

document.getElementById('button').onclick = function() { 
//for(var i = 9999; all < i; all++) {
    let theField = document.getElementById('field');
    let out = '';
    out += `<p role="alert">${"#" + bit1 + bit2 + bit3 + bit4 + bit5 + bit6 + bit7 + bit8}</p>`;
    theField.innerHTML = out;
    //console.log(i);
//}
}