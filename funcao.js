/*function dizerTchau(nome, sobrenome) {
    console.log(nome + " " + sobrenome + " foi embora.");
}
dizerTchau("João", "Moura");
*/

/*
parOuImpar(14);
function parOuImpar(numero) {
    if(numero % 2 == 0) {
        console.log("NUmero " + numero + " é par!");
    }else {
        console.log("Número " + numero + " é impar!");
    }
}
*/

/*
function dizerOi(nome) {
    console.log("Olá " + nome);
}
dizerOi("Rafael");
*/

//Função anônima
/*
var dizerOla = function (nome) {
    return "Olá " + nome;
}
console.log(dizerOla("Isaque"));
*/

//Função com construtor, pouco utilizada e insegura
/*
var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");
*/

//Função dentro de outra função - Aninhada
/*
function circunferencia (raio) { 
    function diametro() { //Função aninhada
        return 2*raio; //raio é uma variável da função pai
    }
     return Math.PI * diametro(); //invocamos a função
}
console.log(circunferencia(2));
*/

//Função callbak - É uma função que só será executada quando a primeira for executada
// Muito usado em processos assíncronos
/*
function a(callback) {
    setTimeout(function() { callback();}, 3000 );
    console.log( 'a vem primeiro');
}

function b() {
    console.log( 'b vem depois');
}

a( b );
*/

//Outra forma pouco usada de executar função
// call e apply é pra chamada de execução de método
/*
function dizerOi(nome) {
    console.log(this);
    console.log("Oi, " + nome);
}
dizerOi("Rafael");
dizerOi.call({}, "Arya"); //null
dizerOi.apply({}, ["Maria"]); //null
*/

//Função anônima, auto executável/invocada, sem precisar chamar em lugar nenhum.
//Quando passar por ela, o interpretador vai executar na hora.
/*
(function() {
    var a = 1;
    console.log(a);
})();
*/

//declarando objetos
//This diz que os atributos a serem pegos são do próprio objeto.
/*
var obj = {
    nome: "Isaque",
    sobrenome: "Moura",
    idade: 30,
    apresentar: apresentacao
}
function apresentacao() {
    console.log("Olá, eu sou " + this.nome + " " + this.sobrenome + ".");
}
console.log(obj.sobrenome);
obj.apresentar();
*/

//Prototype, método do objeto String. Forma de colocar métodos em obj que já tem os seus
//Sring é tratada como objeto em JS
/*
String.prototype.apagar = function() {
    return "";
}
console.log("Oi".apagar());
*/

//Datas
/*var d = new Date();
console.log(d);
var d = new Date("2020-07-31");
console.log(d);
var d = new Date(1599887585397);
console.log(d);
*/

//String
/*
var s = "The winter is coming. It's really coming!"
console.log(s.length);
console.log(s.indexOf('coming'));
console.log(s.toUpperCase().indexOf('COMING'));
console.log(s.lastIndexOf('coming'));
console.log(s.slice(4,10));
console.log(s.slice(4,-8));
console.log(s.substr(4,6));
console.log(s.replace("winter", "summer"));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.concat("?", "!"));
console.log(s.split(" "));
*/

//console.log("Olá".concat( " Isaque", "!"));

//Split é uma função bastante utilizada
/*
var nomes = "Ned,Jon,Robb,Sansa,Bran,Arya,Rickon";
var array = nomes.split(",")
console.log(array[6]);
*/

//var array = "Ned Jon Rob Bran Rickon".split(' ');
//console.log(array.toString()); Converter em string separada por ,
//console.log(array.join(' | ')); Junta com o sinal que quiser nos espaços
//array.push("Sansa"); Coloca um elemento no final do array
//array.unshift("Sansa"); Retira o primeiro elemento e coloca esse no lugar
//array.shift(""); Exclui o primeiro elemento do array
//array[1] = "Jon Snow"; Troca o elemento dessa posição por esse elemento
//var slice = array.slice(3,5);
//console.log(slice);
//var splice = array.splice(0,1, "Arya", "Sansa");
//console.log(splice);
//console.log(array);

//Função para percorrer o array
/*
let array = [1, 5, 7];
array.forEach(function(value, index) {
    console.log("No índice: " + index + " está o valor: " + value);
});
*/

//Função para percorrer o array e modificar os valores
/*
let array = [1, 5, 7];
array.map(function(numero) {
    console.log(numero * 2);
})
*/

//Função para percorrer o array e informar quem é maior ou menor de 18
/*
let array = [13, 18, 20];
    console.log(array.filter(function(numero){
        return array;
    }))

    console.log(array.reduce(function(total, numero) {
        return total + numero;
    }));
    */