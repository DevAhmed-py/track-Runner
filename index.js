let entries = []

const entriesWrapper = document.querySelector("entries")

function newEntry(newEntry) {
//     entriesWrapper.removeChild(entriesWrapper.firstElementChild)
    const listItems = document.createElement("li")
    const listValue = document.createTextNode(newEntry)
    listItems.appendChild(listValue)
    
    entriesWrapper.appendChild(listItems)
}

function submitHandler (event) {
    // To prevent the browser from reloading which is the default thing to 
    // do after submitting a form, you call the preventDefault().
    event.preventDefault() 
    const entry = Number(document.querySelector("#milesToday").value);

    if (!entry) return;
    document.querySelector("form").reset();
    entries.push(entry)
    newEntry(entry)
}

const form = document.querySelector("form")
form.addEventListener("submit", submitHandler)