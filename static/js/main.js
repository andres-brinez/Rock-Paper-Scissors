

const jugadas=['rock','paper','scissors']
const InformationPlay={
    rock:'./static/images/rock.png',
    paper:'./static/images/paper.png',
    scissors:'./static/images/scissors.png'
}


options.forEach(option => {
    option.addEventListener('click', () => {

        const jugadaComputer=jugadas[Math.floor(Math.random()*jugadas.length)]

        alert(` You${option.outerText} 
        pc ${jugadaComputer}`)

        winner(jugadaComputer,option.outerText)
    })
})

function winner(pc,player){

    let winner = ''

    if(pc===player){
        winner='empate'

    }

    else if(pc==='rock'){
        if(player==='paper'){
            winner= 'player'
        }else{
            winner='pc'
        }
    }

    else if(pc==='paper'){
        if(player==='scissors'){
            winner= 'player'
        }else{
            winner= 'pc'
        }
    }


    else if(pc==='scissors'){
        if(player==='rock'){
            return 'player'
        }else{
            return 'pc'
        }
    }

    showResult(winner,player,pc)


}

function showResult(winner,player,pc){
    

    wrapper.classList.add('oculto')
    Containerwinner.classList.remove('oculto')

    if (winner==='player'){
        Containerwinner.classList.add('you-win')
        winnerTitle.textContent= '🥳 You win 🥳'
        
    }
    else if (winner=='pc'){

        Containerwinner.classList.add('computer-wins')
        winnerTitle.textContent= '🤖 Computer wins 🖥️'
    }

    else{
        winnerTitle.textContent= '🙄 Empate 😯 '
    }


    winnerTitle.classList.add(winner)

    

    playerPickIMG.src=InformationPlay[player]
    playerPickIMG.attributes[1].textContent=player

    pcPickIMG.src=InformationPlay[pc]

    pcPickIMG.attributes[1].textContent=pc
    





    btnAgain.addEventListener('click',()=>{
        // recargar pagina js
        location.reload()

    })

    // const result = document.querySelector('.result')
    // result.innerHTML = `
    // <h1 class="${winner}">${winner}</h1>
    // <button class="play-again">Play Again</button>
    // `


}


