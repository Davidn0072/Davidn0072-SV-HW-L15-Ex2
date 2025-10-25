let timeoutId=0;

const time = new Date();

function tick() {
  time.setSeconds(time.getSeconds() - 1);
  document.getElementById("main-box").innerHTML = time.toLocaleTimeString('he-IL', { hour12: false });
  
  if (time.getHours() === 0 && time.getMinutes() === 0 && time.getSeconds() === 0) 
    document.getElementById("main-box").innerHTML = "Timer finished!"
  else  
    timerId = setTimeout(tick, 1000); 
}
function StartTimer()
{
  let [hours, minutes, seconds] = document.getElementById("Timer").value.split(':').map(Number);
  time.setHours(hours);
  time.setMinutes(minutes);
  time.setSeconds(seconds);
  tick();
}



