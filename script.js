//load score (which is JSON string) & convert it back into object 
let score = JSON.parse(localStorage.getItem('score')) 
|| 
{
    wins: 0,
    losses: 0,
    ties: 0
};


updateScoreElement();

function pickComptMove(){
    let compMove = '';
    const randomNum = Math.random();

    if(randomNum >= 0 && randomNum < (1/3)){
        compMove = 'rock';
    }
    else if(randomNum >= (1/3) && randomNum < (2/3)){
        compMove = 'paper';
    }
    else{
        compMove = 'scissors';
    }

    return compMove;
}



function playGame(player_move){
    const compMove = pickComptMove();
    let result = '';
    
    if(player_move === 'scissors'){
        if(compMove === 'rock'){
            result = 'You lose !';
        }
        else if(compMove === 'paper'){
            result = 'You win !';
        }
        else if(compMove === 'scissors'){
            result = 'Tie';
        }

    }
    else if(player_move === 'rock'){
        if(compMove === 'rock'){
            result = 'Tie';
        }
        else if(compMove === 'paper'){
            result = 'You lose !';
        }
        else if(compMove === 'scissors'){
            result = 'You win !';
        }

    }
    else if(player_move === 'paper'){
        if(compMove === 'rock'){
            result = 'You win !';
        }
        else if(compMove === 'paper'){
            result = 'Tie';
        }
        else if(compMove === 'scissors'){
            result = 'You lose !';
        }

    }

    if(result == 'You win !'){
        score.wins ++;
    }else if(result == 'You lose !'){
        score.losses ++;
    }else if(result == 'Tie'){
        score.ties ++;
    }

    //localStorage only stores string
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    

    document.querySelector('.js-result')
        .innerHTML = result;


    document.querySelector('.js-moves')
    .innerHTML = `You 
    <img src="images/${player_move}-emoji.png" class="move-icon">
    <img src="images/${compMove}-emoji.png" class="move-icon">  
    Computer`;
    
}


function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


}