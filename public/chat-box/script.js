const chatList = document.querySelector("#chat-list");
const minimizeButton = document.querySelector("#minimize");
const maximizeButton = document.querySelector("#maximize");
const chatto = document.querySelector("#chatto");

if (window.localStorage.getItem("chat") === "1") {
    chatList.classList.add("minimize");
}

chatto.innerHTML += `
    ${Object.keys(chatListDict).map((key) => {
        return `<button class="user" onclick='addThread("${key}", "${chatListDict[key].name}", "${chatListDict[key].avatar}")'><img src="${chatListDict[key].avatar}" alt="Avatar" /><p>${chatListDict[key].name}</p></button>`;
    }).join("")}
`;

const closechat = () => {
    chatList.style.display = "none";
    document.querySelector("#show-chat ").style.visibility = "visible";
    document.querySelector("#show-chat ").style.opacity = "1";
}

const showChat = () => {
    chatList.style.display = "grid";
    document.querySelector("#show-chat ").style.visibility = "hidden";
    document.querySelector("#show-chat ").style.opacity = "0";
}

const minimize = () => {
    chatList.classList.toggle("minimize");
    const chatStore = window.localStorage.getItem("chat");
    if (chatStore === null || chatStore === "0") {
        window.localStorage.setItem("chat", "1");
    } else {
        window.localStorage.setItem("chat","0");
    }
}

const minimizeThread = (thread) => {
    document.querySelector(`#${thread}`).classList.add("minimizeThread")
}

const maximizeThread = (thread) => {
    document.querySelector(`#${thread}`).classList.remove("minimizeThread")
}

const closeThread = (thread) => {
    document.querySelector(`#${thread}`).remove();
}

const addThread = (threadid, threadName, threadPic) => {
    if (document.querySelector(`#${threadid}`) !== null) {
        return;
    }
    document.querySelector("#chatStreamBox").innerHTML += 
    `
    <section class="chatStream" id="${threadid}">
        <div class="header">
            <div class="name">
                <img src="${threadPic}" alt="Avatar">
                <p>${threadName}</p>
            </div>
            <div class="buttons">
                <button id="maximize" title="Maximize" onclick="maximizeThread('${threadid}')">&#8250;</button>
                <button id="minimize" title="Minimize" onclick="minimizeThread('${threadid}')">&#8250;</button>
                <button title="Close" onclick="closeThread('${threadid}')">&times;</button>
            </div>
        </div>
        <div class="main-chat">
            ${chatListDict[threadid].chat.map((i) => {
                if (i["them"]) {
                    return `<div class="bubble"><div class="them">${i.them}</div></div>`;
                } else {
                    return `<div class="bubble"><div class="me">${i.me}</div></div>`;
                }
            }).join("")}
        </div>
        <div class="input-send">
            <input type="text" placeholder="Message">
            <button title="Send"><img src="./send.svg" alt="Send"></button>
        </div>
    </section>`;

}