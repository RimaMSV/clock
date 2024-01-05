const clockEl = document.querySelector('.clock');
let interval;
startTime();

function startTime() {
  interval = setInterval(tiktoc, 1000);
}
function tiktoc() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  // console.log(date);
  clockEl.innerHTML = `<span class="hour">${String(hour).padStart(
    2,
    0
  )} :</span>
      <span class="minute">${String(minute).padStart(2, 0)} :</span>
      <span class="seconds">${String(second).padStart(2, 0)}</span>`;
}
