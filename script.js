function showTime() {
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById("msg").innerText = "Message sent successfully!";
}
