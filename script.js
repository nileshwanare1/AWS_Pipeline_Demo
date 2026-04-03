// Add task function
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = function () {
        this.style.textDecoration = "line-through";
    };

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

// Contact form function
function sendMessage(event) {
    event.preventDefault();
    document.getElementById("msg").innerText = "Message sent successfully!";
}
