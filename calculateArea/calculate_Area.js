let length;
let width;
let grocery1;
let grocery2;
let grocery3;

function calculateArea(){
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTraker(){
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    grocery3 = parseFloat(document.getElementById("grocery3").value);

    let somme = grocery1 + grocery2 + grocery3
    document.getElementById("resultGrocery").innerHTML = `Le montant total est ${somme}`
}