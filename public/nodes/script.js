let rendered = {};
red = 0;
const render = () => {
    const ip = `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
    const num = red+1;
    const id = num;
    const info = {ip, id}
    red++;
    document.querySelector("#nodeGrid").innerHTML += `<button onclick="show(${num})" class="node">
    <img src="../display.svg" alt="Display Icon"><h2>${num}</h2></button>
    `;
    rendered[num] = info;
}

const spam = (amount) => {
    for (let i=0; i<amount; i++) render();
}

const show = (num) => {
    let ipAdd = document.querySelector("#ipAdd");
    let idNum = document.querySelector("#idNum");
    ipAdd.innerText = rendered[num].ip;
    idNum.innerText = rendered[num].id;
    document.querySelector("#showit").style.display = "flex";
}
const showBox = document.querySelector("#showit");
const showitBox = document.querySelector("#showitBox");

document.querySelector("#showit").addEventListener('click', (e) => {
    const boxStats = {
        width: showitBox.offsetWidth,
        height: showitBox.offsetHeight,
        y: showitBox.getBoundingClientRect().top,
        x: showitBox.getBoundingClientRect().left,
        cX: e.pageX,
        cY: e.pageY
    }
    if (!(boxStats.cY >= boxStats.y && boxStats.cY <= boxStats.y+boxStats.height && boxStats.cX >= boxStats.x && boxStats.cX <= boxStats.x+boxStats.width)) {
        document.querySelector("#showit").style.display = "none";
    }
});

const minimize = (event) => {
    console.log(event);
}