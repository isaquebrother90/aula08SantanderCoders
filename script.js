/*var nome = "Isaque";

var num1 = 10;
var num2 = 5;

var resultado = num1 % num2;

var lista = [10,20,30];

var objeto = {
    nome: 'joao' ,
    sobrenome: 'silva'
};

var z;
var pessoa = null;


console.log(resultado);

var idade = 70

if(!(idade <= 18) && idade >= 65){
    console.log('Voto obrigatório')
}else{
    console.log('Voto facultativo')
}

var diaDaSemana = 'Segunda-feira';

diaDaSemana == 'Domingo'
? console.log('hoje é dia de churrasco!') 
: console.log('hoje não é dia de churrasco :(')

mesDoAno = 'Julho'

mesDoAno == 'Agosto'
? console.log('É o mês do meu aniversário')
: console.log('Não é o mês do meu aniversário :('); 

var numInteiro = 2
var numInteiroNegativo = -1
var numDecimal = 5.6
var stringExample = 'Joãoneba';
var valorVerdadeiro = true

console.log(numInteiro)
console.log(numInteiroNegativo)
console.log(numDecimal)
console.log(stringExample)
console.log(valorVerdadeiro)

var nome = 'Isaque'
var sobrenome = "Moura"
console.log('Meu nome e sobrenome é ' + nome + ' ' + sobrenome)

var nome = "Clara";
console.log(Nome);
console.log(nome.sobrenome); 

var texto = 'Lore ipsum Lorem ipsuk Lore ipsum Lorem ipsukLore ipsum Lorem ipsukLore ipsum Lorem ipsukLore ipsum Lorem ipsukLore ipsum Lorem ipsukLore ipsum Lorem ipsuk';
console.log(texto)

var valorNulo = null;
var naoDefinido = undefined;
console.log(valorNulo + ' ' + naoDefinido); 

var array = ['Banana', 'Maçã', 'Abacate', 'Jambo', 'Pêssego'];
console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

var digitalHouse = 'Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar e criar o que sempre sonharam';
console.log(digitalHouse) 


var mes = 7;

switch(mes){

    case 1: console.log("Janeiro");
            break;
    case 2: console.log("Fevereiro")
            break;
    case 3: console.log("Março");
            break;
    case 4: console.log("Abril")
            break;
    default: console.log("Mês não existe")
} 

var numero = 0;

while (numero < 3) {
    console.log('Ola ' + numero);
    numero++; //ou numero = numero+1; 
} 

var numero = 4;

do{
    console.log('Olá ' + numero);
    numero = numero + 1; // ou numero++
}while (numero < 3);

for (var numero = 4; numero > 0; numero--) {
    console.log('Olá ' + numero);
}


var lista = [10, 20, 30];

for (var elemento in lista) { // Atalho para percorrer vetor, lista, em Js.
    console.log(lista[elemento]);
}*/

var nome = {
    nome: 'Isaque',
    sobrenome: 'Moura'
}


for(var n in nome){
	console.log(n + ": "+ nome[n]);	
}