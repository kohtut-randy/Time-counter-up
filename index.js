const countMin = document.querySelector("#countMin");
const countSec = document.querySelector("#countSec");
const alarmAudio = document.querySelector(".alarmAudio");
alarmAudio.style.display = "none";

let count = 0;
let timerId =0;
function countingStart(){
  if (timerId !== 0) return;
  timerId = setInterval(function(){
    count ++;
    updateText(count)
    if(count % 60 === 0) {
      playAlarm();
  };
  },1000);
  console.log("timer",timerId)
  
}

function countingStop(){
  countSec.innerText = "00";
  clearInterval(timerId);
  timerId=0;
  count=0;
  updateText(count);
}
function updateText(timer){
  const min =Math.floor(timer/60);
  const sec = timer %60;
  countMin.innerText = min<10 ?   `0${min}`:min;
  countSec.innerText = sec <10 ?  `0${sec}`:sec;
}
function playAlarm(){
  alarmAudio.play();
}
function pauseAlarm(){
  alarmAudio.pause();
}