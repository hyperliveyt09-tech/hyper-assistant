function executeCommand(cmd){

if(cmd.includes("hyper")){

speak("Yes I am here")

}

if(cmd.includes("open youtube")){

speak("Opening YouTube")

window.open("https://youtube.com")

}

if(cmd.includes("open google")){

speak("Opening Google")

window.open("https://google.com")

}

if(cmd.includes("time")){

let t=new Date().toLocaleTimeString()

speak("Current time is "+t)

}

if(cmd.includes("call")){

let number=cmd.replace("call","")

window.open("tel:"+number)

speak("Calling "+number)

}

}
