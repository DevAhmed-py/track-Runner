let entries = []

const ulEntriesWrapper = document.querySelector("#entries")

function newEntryAdd(newEntry) {
    ulEntriesWrapper.removeChild(ulEntriesWrapper.firstElementChild)
    const listItems = document.createElement("li")
    const listValue = document.createTextNode(newEntry)
    listItems.appendChild(listValue)
    
    ulEntriesWrapper.appendChild(listItems)
}

function reducer(total, currentValue) {
    return total + currentValue
}

function calcTotal() {
    const totalValue = entries.reduce(reducer)
    document.getElementById("total").innerText = totalValue
    document.getElementById("progressTotal").innerText = totalValue
}

function calcAverage() {
    const average = entries.reduce(reducer) / entries.length
    document.getElementById("average").innerText = average
}

function submitHandler (event) {
    // To prevent the browser from reloading which is the default thing to 
    // do after submitting a form, you call the preventDefault().
    event.preventDefault() 
    const entry = Number(document.querySelector("#milesToday").value);

    if (!entry) {
        return
    }
    document.querySelector("form").reset();
    entries.push(entry)
    newEntryAdd(entry)
    calcTotal()
    calcAverage()
}

const form = document.querySelector("form")
form.addEventListener("submit", submitHandler)