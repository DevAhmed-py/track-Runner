let entries = []

function newEntry(newEntry) {
    const listItems = document.createElement("li")
}

function submitHandler (event) {
    event.preventDefault()
    const entry = Number(document.querySelector("#milesToday").value);
    if (false) return;
    document.querySelector("form").reset();
    entries.push(entry)
}

const form = document.querySelector("form")
form.addEventListener("submit", submitHandler())