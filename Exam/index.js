var index = 1;

function jump(index) {
    window.location.href = 'http://127.0.0.1:3000/report/' + index + "/";
}

function add_button() {
    var para = document.createElement("li");
    var button = document.createElement("button");
    button.className = "exam1-button";
    button.innerText = index;
    button.onclick = function () {
        jump(index - 1)
    };
    index += 1;
    para.appendChild(button);
    var element = document.getElementById("button-list");
    element.appendChild(para);
}