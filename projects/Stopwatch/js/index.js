const timerShown = document.getElementById("timer")
const pausePlayBtn = document.getElementById("pause-play-button")
const stopBtn = document.getElementById("stop-button")

let seconds = 0
let minutes = 0
let hours = 0
let timerStarted = false
let placeHolderSeconds = "00"
let placeHolderMinutes = "00"
let placeHolderHours = "00"
let stopWatch;

function updateTime(){
    if(timerStarted === true){
        seconds ++

        if(seconds < 10){
            placeHolderSeconds = "0" + String(seconds)
        }else{
            placeHolderSeconds = String(seconds)
            
            if(seconds === 60){
                seconds = 0
                placeHolderSeconds = "00"
                minutes ++
            }
        }

        if(minutes < 10){
            placeHolderMinutes = "0" + String(minutes)
        }else{
            placeHolderMinutes = String(minutes)
            
            if(minutes === 60){
                minutes = 0
                placeHolderMinutes = "00"
                hours ++
            }
        }

        if(hours < 10){
            placeHolderHours = "0" + String(hours)
        }else{
            placeHolderHours = String(hours)
        }
    }
}

function startStopWatch(){
    if(timerStarted === false){
        timerStarted = true;

        pausePlayBtn.innerHTML = `
        <img src="img/icons/video-pause-button.png" alt="PAUSE" title="Pause Button" width="512" height="512" loading="lazy">
        `
        
        stopWatch = window.setInterval(updateTime, 1000);

        window.setInterval(() => {
            timerShown.textContent = `
            ${placeHolderHours} : ${placeHolderMinutes} : ${placeHolderSeconds
            }`
        }, 1000)

    }else{
        timerStarted = false;
        clearInterval(stopWatch);

        pausePlayBtn.innerHTML = `
        <img src="img/icons/play-button.png" alt="PLAY" title="Play Button" width="512" height="512" loading="lazy"></img>
        `
        
        timerShown.textContent = `
        ${placeHolderHours} : ${placeHolderMinutes} : ${placeHolderSeconds}
        `
    }
}

function stopStopWatch(){
    window.clearInterval(stopWatch);
    stopWatch = null;
    timerStarted = false;

    pausePlayBtn.innerHTML = `
    <img src="img/icons/play-button.png" alt="PLAY" title="Play Button" width="512" height="512" loading="lazy"></img>
    `
    
    seconds = 0
    minutes = 0
    hours = 0

    placeHolderHours = "00"
    placeHolderMinutes = "00"
    placeHolderSeconds = "00"

    timerShown.textContent = `${placeHolderHours} : ${placeHolderMinutes} : ${placeHolderSeconds}`
}

pausePlayBtn.addEventListener("click", () => {
    startStopWatch()
})

stopBtn.addEventListener("click", () => {
    stopStopWatch()
})