

const jugadas=['Rock','Paper','Scissors']
const InformationPlay={
    Rock:'./static/images/rock.png',
    Paper:'./static/images/paper.png',
    Scissors:'./static/images/scissors.png'
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

    else if(pc==='Rock'){
        if(player==='Paper'){
            winner= 'player'
        }else{
            winner='pc'
        }
    }

    else if(pc==='Paper'){
        if(player==='Scissors'){
            winner= 'Player'
        }else{
            winner= 'pc'
        }
    }


    else if(pc==='Scissors'){
        if(player==='Rock'){
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



    console.log(player)
    console.log(InformationPlay[player])

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


