const btn = document.querySelector("#icon-click")
const msgUsuario = document.querySelector("#imsg-usuario")
const msgBot = document.querySelector("#msg-bot")
const textoEsperado = "bom dia"
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
// ---------------------------------------------------------


    btn.addEventListener("click",()=> {
        Ouvir();
    })



//-----------------------------------------------------------


function MostrarMensagemUsuario(texto){
    msgUsuario.innerText = texto;
}

function MostrarMensagemBot(texto){
    msgBot.innerText = texto;
}


function Falar(texto){
    const fala = new SpeechSynthesisUtterance(texto)

    fala.lang = "pt-BR"
    fala.rate = 1
    window.speechSynthesis.speak(fala)
}


function Ouvir () {
    if (!SpeechRecognition) {
        Falar("Reconhecimento de voz não suportado neste navegador.")
        return
    }

   
    btn.classList.add("pulse")
        
    const ouvir = new SpeechRecognition()
    ouvir.lang = "pt-BR"
    ouvir.start()

    MostrarMensagemBot("Escutando ... ")

    ouvir.onresult = e => { 
        const texto = e.results[0][0].transcript.toLowerCase()
          btn.classList.remove("pulse")
        
        if(texto.includes(textoEsperado)){
            Falar("bom como vc esta ?")
        }else{
            Falar("nao entendi")
            MostrarMensagemBot("Nao entindi ? ")
        }
    }


    
}