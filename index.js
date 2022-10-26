let entries = []
let goal = 25

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
    const totalValue = entries.reduce(reducer).toFixed(1)
    document.getElementById("total").innerText = totalValue
    document.getElementById("progressTotal").innerText = totalValue
}

function calcAverage() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1)
    document.getElementById("average").innerText = average
}

function weekHigh() {
    const high = Math.max(...entries)
    document.getElementById("high").innerText = high
}

function calcProgress() {
    const totalValue = entries.reduce(reducer).toFixed(1)
    const percent = (totalValue / goal) * 100
    const progressCircle = document.querySelector(".progressCircle")
    if (percent > 100) {
        percent === 100
    }
    progressCircle.style.background = `conic-gradient(#70db70 ${percent}%, #2d3740 ${percent}%)`
}

function submitHandler(event) {
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
    weekHigh()
    calcProgress()
}

const form = document.querySelector("form")
form.addEventListener("submit", submitHandler)