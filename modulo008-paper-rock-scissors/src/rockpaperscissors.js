var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');
//Validações:
    //Papel:
    if(playerOpt == "paper"){
        if(inimigoOpt == "paper"){
            //Empate
            vencedor.innerHTML = "Empate!"
        }else if(inimigoOpt == "scissor"){
            //Inimigo ganhou
            vencedor.innerHTML = "Você Perdeu!"
        }else if(inimigoOpt == "rock"){
            //Player Ganhou
            vencedor.innerHTML = "Você Ganhou!!"
        }
    }

    //Tesoura:
    if(playerOpt == "scissor"){
        if(inimigoOpt == "paper"){
            //Player Ganhou
            vencedor.innerHTML = "Você Ganhou!!"
        }else if(inimigoOpt == "scissor"){
            //Empate 
            vencedor.innerHTML = "Empate!"
        }else if(inimigoOpt == "rock"){
            //Player Perdeu
            vencedor.innerHTML = "Você Perdeu!"
        }
    }

    //Pedra:
    if(playerOpt == "rock"){
        if(inimigoOpt == "paper"){
            //Player Perdeu
            vencedor.innerHTML = "Você Perdeu!"
        }else if(inimigoOpt == "scissor"){
            //Player Ganhou
            vencedor.innerHTML = "Você Ganhou!!"
        }else if(inimigoOpt == "rock"){
            //Empate 
            vencedor.innerHTML = "Empate!"
        }
    }
}

function resetOpacityPlayer(){
    for(var i = 0; i< elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i< elementos.length; i++){
    elementos[i].addEventListener('click',(t)=>{
        resetOpacityPlayer();
        t.target.style.opacity=1;
        playerOpt = t.target.getAttribute('opt');
        inimigoJogar();
    });
}

function resetOpacityEnemy(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;

    }
}


function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetOpacityEnemy();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i== rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();

}




