/*
O que é uma promisse? 
    - É função que retorna algo que vc deseja ou ela é rejeitada.
*/

function testes(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const erro = false;
            if(erro){
                reject('Erro...');
            }else{
                resolve("A promisse foi resolvida com sucesso")
            }
        },2000)
        
    })
}
/* "then" continua caso a function funcione
testes().then((res)=>{
    alert(res);
}).catch((err)=>{
    alert(err);
})


Função Assíncrona: possível colocar o "await"
    await, serve para fazer uma function esperar outra para ai sim ser executada;
*/
async function testes2(){
    await testes().then((res)=>{
        alert(res);
    });
    alert('olá');
}

testes2();

