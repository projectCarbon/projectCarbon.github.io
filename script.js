window.onload = function() {
  Push.create('Start monitoring your battery')
};

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressBar1 = document.querySelector(".circular-progress1");
let valueContainer1 = document.querySelector(".value-container1");


let progressBar2 = document.querySelector(".circular-progress2");
let valueContainer2 = document.querySelector(".value-container2");

// call the function to update the gauge every second
setInterval(updater, 5000);

function updater(){
  // enter your api link here replace local host with the ip address of your server
let url = "http://localhost/bms/api.php"
fetch(url)
.then(res => res.json())
.then(out =>
  gauge(out))

.catch(err => console.error(err));
}



function gauge(out){
  var percentNoti = false;
  if (out.percentage == 100 && percentNoti == false){
    Push.create("Battery is fully charged")
    percentNoti = true;
  }

  if (out.temperature > 50){
    Push.create("Temperature is too high")
  }

let progressValue = 0;
let progressEndValue = out.voltage;
let speed = 0;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}V`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

let progressValue1 = 0;
let progressEndValue1 = out.percentage;
let speed1 = 0;

let progress1 = setInterval(() => {
  progressValue1++;
  valueContainer1.textContent = `${progressValue1}%`;
  progressBar1.style.background = `conic-gradient(
      #4d5bf9 ${progressValue1 * 3.6}deg,
      #cadcff ${progressValue1 * 3.6}deg
  )`;
  if (progressValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);


let progressValue2 = 0;
let progressEndValue2 = out.temperature;
let speed2 = 0;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2} °C`;
  progressBar2.style.background = `conic-gradient(
      #4d5bf9 ${progressValue2 * 3.6}deg,
      #cadcff ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);
}

