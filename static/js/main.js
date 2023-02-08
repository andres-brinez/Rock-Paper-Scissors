const jugadas=['Rock','Paper','Scissors']
const InformationPlay={
    Rock:'./static/images/rock.png',
    Paper:'./static/images/paper.png',
    Scissors:'./static/images/scissors.png'
}


// Cuando se de click  sobre algína opción
options.forEach(option => {
    option.addEventListener('click', () => {

        const jugadaComputer=jugadas[Math.floor(Math.random()*jugadas.length)]

        // Cuando la página se traduce tambien lo hace el texto de outerText, lo que hace que genere errores  
        Selectwinner(jugadaComputer,option.outerText)

    })
})

function Selectwinner(pc,player){

    let winner = 'pc' /* se selecciona  por defecto como ganador el pc  porque si entra en la condición de ganar el jugador cambia el ganador y así se escribe menos código */

    if(pc===player){
        winner='empate'
    }

    else if(pc==='Rock'){
        if(player==='Paper'){
            winner='player'
        }
    }

    else if(pc==='Paper'){
        if(player==='Scissors'){
            winner='Player'
        }
    }

    else if(pc==='Scissors'){
        if(player==='Rock'){
            winner= 'player'
        }
    }

    showResult(winner,player,pc)


}

function showResult(winner,player,pc){
    
    // Ocultar el wrapper y mostrar el contenedor del ganador
    wrapper.classList.add('oculto')
    Containerwinner.classList.remove('oculto')

    // cambiar el titullo
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

    // Agrega las  imágenes

    console.log(InformationPlay[player])
    playerPickIMG.src=InformationPlay[player]
    playerPickIMG.attributes[1].textContent=player

    pcPickIMG.src=InformationPlay[pc]
    pcPickIMG.attributes[1].textContent=pc
    


    btnAgain.addEventListener('click',()=>{
        // recargar pagina js
        location.reload()

    })
    
}


