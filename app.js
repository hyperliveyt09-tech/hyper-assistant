const mic=document.getElementById("micButton")
const statusText=document.getElementById("status")

mic.onclick=()=>{

startListening()

}

function speak(text){

let speech=new SpeechSynthesisUtterance(text)

speech.lang="en-US"

speechSynthesis.speak(speech)

}

function updateStatus(t){

statusText.innerText=t

}
