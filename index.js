const countMin = document.querySelector("#countMin");
const countSec = document.querySelector("#countSec");

let count = 0;
let timerId =0;
function countingStart(){
  if (timerId !== 0) return;
  timerId = setInterval(function(){
    count ++;
    updateText(count);
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