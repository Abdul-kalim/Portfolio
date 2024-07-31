const disablekeys = ["c", "C", "x", "J", "u", "I"];

const showAlert = e => {
    e.preventDefault();
    return alert("This feature is disable!!!");
}

document.addEventListener("contextmenu", showAlert);

document.addEventListener("keydown", e => {
    if (e.ctrlKey && disablekeys.includes(e.key) || e.key === "F12"){
        showAlert(e);
    }
})