const recognition=new (window.SpeechRecognition || window.webkitSpeechRecognition)()

recognition.continuous=true
recognition.lang="en-US"

recognition.onresult=(event)=>{

let transcript=event.results[event.results.length-1][0].transcript

transcript=transcript.toLowerCase()

updateStatus("You said: "+transcript)

executeCommand(transcript)

}

function startListening(){

recognition.start()

updateStatus("Listening...")

speak("Hyper listening")

}
