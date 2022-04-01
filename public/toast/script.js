let notam = 1;

function showNotification() {
    const node = document.createElement("div");
    const textnode = document.createTextNode(`Notification ${notam}`);
    notam++;
    node.appendChild(textnode);
    node.className = "notification";
    document.getElementById("notification-box").appendChild(node);
    console.log(document.querySelector("#notification-box"));
}