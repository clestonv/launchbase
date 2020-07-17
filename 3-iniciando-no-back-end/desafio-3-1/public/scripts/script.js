const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')
const closeM = document.querySelector('.close-modal')
const minM = document.querySelector('.minimize-modal')
const maxM = document.querySelector('.maximize-modal')

for (let card of cards) {
    card.addEventListener("click", function() {
        const cursoId = card.getAttribute('id')

        if ( cursoId == 'starter') {                    
            closeM.style.color = "#000" 
            minM.style.color = "#000"
            maxM.style.color = "#000"
            modal.style.backgroundColor = "#FFF"          
            modalOverlay.classList.add('active')
            modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cursoId}`
        } else if ( cursoId == 'launchbase'){
            closeM.style.color = "#FFF" 
            minM.style.color = "#FFF"
            maxM.style.color = "#FFF"         
            modal.style.backgroundColor = "#100f12"
            modalOverlay.classList.add('active')
            modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cursoId}`
        } else if ( cursoId == 'gostack'){            
            closeM.style.color = "#FFF" 
            minM.style.color = "#FFF"
            maxM.style.color = "#FFF" 
            modal.style.backgroundColor = "#0b0a0d"
            modalOverlay.classList.add('active')
            modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cursoId}`
        }
        
    })
}

closeM.addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
    modal.classList.add('minimize')   
    modalOverlay.querySelector('iframe').src = ''
})

maxM.addEventListener('click', function() {
    modal.classList.remove('minimize')
    modal.classList.add('maximize')
})

minM.addEventListener('click', function() {
    modal.classList.add('minimize')
    modal.classList.remove('maximize')
})