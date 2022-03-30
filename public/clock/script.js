const r = document.querySelector(':root');

const map_range = (value, low1, high1, low2, high2) => {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

const setMinute = (minute) => {
    const res = map_range(minute, 0, 60, 0, 360);
    r.style.setProperty('--minute', `${res}deg`);
}

const setHour = (hour) => {
    const res = map_range(hour, 0, 12, 0, 360);
    r.style.setProperty('--hour', `${res}deg`);
}

const setSecond = (second) => {
    const res = map_range(second, 0, 60, 0, 360);
    r.style.setProperty('--second', `${res}deg`);
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    setHour(h);
    setMinute(m);
    setSecond(s);
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }