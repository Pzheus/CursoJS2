/* 

const MinhaF = function(){
    console.log("alguma coisa")
} //Expressão de Função

function MinhaF(){ 
    console.log("alguma coisa")
} //Declaração de Função

*/

const funcao = () => "Uma expressão de função"; //Função anônima com uma return (Não usada com bloco)

console.log(funcao())

const thisGlobal = () => { 
    console.log(this);
} // Função global
 
thisGlobal()

const obj = {
    thisLocal:function() {

        const thisLocal = (( console.log(this))) ()
        console.log (thisLocal)
    }
} //Função global

obj.thisLocal