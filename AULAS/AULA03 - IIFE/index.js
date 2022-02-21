/*

(
    function () {
        const meuNome= "Mateus"
}
)()

meuNome; //Não será executado por está dentro da IIFE

*/

const resultado = (function(){
    const meuNome = "Mateus"
    return meuNome;
})()

console.log(resultado)