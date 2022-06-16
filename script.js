//---------- 01 -----------//

let idade = 20;

if (idade >= 18){
    console.log("É maior de idade!");
}
else{
    console.log("É menor de idade!");
}

//---------- 02 -----------//

let IAmHuman = true;

if ((idade >= 18) && (IAmHuman)){
    console.log('Acesso liberado');
}
else{
    console.log('Acesso negado');
}

//--------- 03 --------------//

let mesAniversario = 'Janeiro';

if (mesAniversario === 'Janeiro' || mesAniversario === 'Dezembro'){
    console.log(`O mês de aniversario é ${mesAniversario}`);
}

//---------- 04 ------------//

let nome = 'rose';

if ((nome[0] === 'R') || (nome[0] === 'r')){
    console.log('Este nome começa com a letra R');
}
else{
    console.log('Este nome não começa com a letra R');
}

//--------- 05 -----------//

let nOme = 'Rosa';

if (nOme.length >= 6 || nOme[0] === 'E'){
    console.log('Este nome tem mais de 6 letras ou começa com a letra R');
}
else{
    console.log('Este nome não tem mais de 6 letras ou não começa com a letra R');
}