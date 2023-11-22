let num1 = prompt  ("Digite um número:");

let num2 = prompt ("Digite outro número:");

let op = prompt ("Digite operação matemática:");

let soma;

if (op == "+"){
    soma = Number(num1) + Number(num2);
}else if(op == "-"){
    soma = Number(num1) - Number(num2);
}else if(op == "*"){
    soma = Number(num1) * Number(num2);
}else if(op == "/"){
    soma = Number(num1) / Number(num2);
}else{
    alert ('Informe uma op válida');
}

alert ('O resultado da op é'+soma);

// let num1; declarando a variável
// let num2; porém da para declarar já utilizando ela.

// let num1 = prompt("Digite um número:");

// let num2 = prompt("Digite outro número:");

// let op = prompt ("Digite a operação matemática")

// let soma;

// if(op == "+"){
//     soma = Number(num1) + Number(num2);   
// }else if(op == '-'){
//     soma = Number(num1) - Number(num2); 
// }else if(op == '*'){
//     soma = Number(num1) * Number(num2);
// }else if(op == '/'){
//     soma = Number(num1) / Number(num2);
// }else{
//     alert('Informe uma operação valida!')
// }

// alert('O resultado da operação é' +soma)


let n1 = prompt ("Informe a primeira nota");
let n2 = prompt ("Informe a segunda nota");
let n3 = prompt ("Informe a terceira nota");
let n4 = prompt ("Informe a quarta nota");
let media;

media = (Number(n1) + Number(n2) + Number(n3) + Number(n4))/4;

alert('O resultado da média é: ' +media);