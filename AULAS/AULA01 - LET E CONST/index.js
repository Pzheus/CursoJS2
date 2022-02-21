// Porque não usar "var" na criação de variavéis

var minhaVar = 'Mateus'

console.log(minhaVar);


/*if(true){
    var exposta = "exposta"
    let naoExposta =" Não exposta" //Valor não definido for do IF
}

console.log(exposta, naoExposta);*/

/*for (let i = 0; i<=10; i++){
    var j = i; //O valor i não é lido fora do FOR
}

console.log(i,j)*/

let varivel = 10; 
variavel = 20;

/*
const varivel = 10; // erro ao ler, pois a CONST não pode ser reatribuida
variavel = 20; 
*/


const arr = [1,2,3,]; //Mesmo a variavel sendo do tipo const, o seu valor pode ser alterado em casos com no array
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);

const obj = {a:1, b:2, c:3}; //A mesma situação acontece aqui, so que com um objeto
obj.d=4;
console.log(obj);
delete obj.d
console.log(obj);