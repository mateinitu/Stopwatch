
let seconds = document.querySelector('.seconds');
let minutes =  document.querySelector('.mintues');
let hours = document.querySelector('.hours');

let buttonStart = document.querySelector('.start-clock');
let buttonStop = document.querySelector('.stop-clock');

let intervalStartf;

localStorage.setItem(seconds,minutes,hours);

seconds =0; minutes = 0; hours = 0;

let isCounting = false;
let clockCleared= false;

function intervalStart (){
    
    intervalStartf = setInterval(function timer(){
    isCounting = true;
    if(clockCleared ==true){
      seconds=0;minutes=0;hours=0;
      clockCleared = false;
      return hours, minutes, seconds,clockCleared;
      
    }
    
    seconds++;
    if(seconds == 60){
      minutes++;
      seconds = 0;
    }
    if(minutes==60){
       hours++;
       minutes = 0;
       seconds = 0; 
    }
    watchRender();
    return hours, minutes, seconds, isCounting;
  },1000);
}

function intervalStop(){
  if(isCounting = true){
    clearInterval(intervalStartf);
    isCounting = false;
  }
}
function watchRender(){
  if (seconds>=10) 
  { document.querySelector('.seconds')
  .innerHTML = `${seconds}`;
  }else document.querySelector('.seconds')
  .innerHTML = `0${seconds}`;
  if(minutes>=10){
    document.querySelector('.minutes')
  .innerHTML = `${minutes}`;
  }else document.querySelector('.minutes')
  .innerHTML = `0${minutes}`;
  if(hours>=10)
  {document.querySelector('.hours')
  .innerHTML = `${hours}`;
  }else document.querySelector('.hours')
  .innerHTML = `0${hours}`;
}
function clearClock(){
  clockCleared = true;
  clearInterval(intervalStartf);
  isCounting = false;
  document.querySelector('.seconds').innerHTML = `00`;
  document.querySelector('.minutes').innerHTML = `00`;
  document.querySelector('.hours').innerHTML = `00`;
  return clockCleared;
}
