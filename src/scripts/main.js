const FormManager = require("./JournalForm")
const journalData = require("./DataManager")
const journalBuilder = require("./JournalList")

document.querySelector("#journalForm").innerHTML = FormManager.buildFormTemplate()

journalBuilder.journalLister().then(string => {
    document.querySelector("#journalEntry").innerHTML = string
})



document.querySelector("#saveEntryButton").addEventListener("click", () => {
    // Get form field values
    // Create objectfrom them
    // Add timestamp
    function dateFunction() {
        let d = new Date();
        let n = d.toString();
        return n
    }

    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: dateFunction()
    }
    // POST to API
    journalData.saveJournalEntry(newEntry)
        // Clear the form fields
        .then(() => {
            FormManager.clearForm()
        })
        // Put HTML representation on the DOM
        .then(
            location.reload()
        )
})


document.querySelector("#journalEntry").addEventListener("click", (event) => {
    let buttonId = event.target.id
    journalBuilder.deleter(buttonId)
    location.reload()
})


var d = Date(Date.now());
d.toString() // returns "Sun May 10 2015 19:50:08 GMT-0600 (MDT)"