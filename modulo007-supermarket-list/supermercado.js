var items = [];

//Adicionando uma ação ao botão "Cadastrar"
    document.querySelector('input[type=submit]')
    .addEventListener('click',()=>{
        var nomeProduto = document.querySelector('input[name=nome_produto]');
        var precoProduto = document.querySelector('input[name=price]');

//Cadastrando nossa array: 
    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

/*
Modelo de Exibição do Produto: 
<div class="lista-produto-single">
    <h3>Monster</h3>
    <h3 class="price-produto"><span>11,00</span></h3>
</div>
*/

//Inserindo a função map, que consegue recuperar cada valor da array.
    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map((val)=>{
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
                <h3>`+val.nome+`</h3>
                <h3 class="price-produto"><span>`+val.valor+`</span></h3>
            </div>
            `;
    });
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'Total R$'+soma;


});

document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    items = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "Total: R$0,00";
});