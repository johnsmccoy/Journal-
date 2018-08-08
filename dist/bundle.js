(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
}

module.exports = saveJournalEntry
},{}],2:[function(require,module,exports){
const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = ""
            document.querySelector("#entryTitle").value = ""
        }
    },
})

const clearForm = () => {
    document.querySelector("#entryTitle").value = ""
    document.querySelector("#entryTitle").value = ""
}

const renderEntryForm = () => {
    return `
        <fieldset>
            <label for="entryTitle">Title:</label>
            <input required type="text" id="entryTitle">
        </fieldset>
        <fieldset>
            <label for="entryContent">Deep thoughts:</label>
            <textarea id="entryContent"></textarea>
        </fieldset>
        <button id="saveEntryButton">Save Journal Entry</button>
    `
}

module.exports = renderEntryForm


},{}],3:[function(require,module,exports){
const renderEntryForm = require("./JournalForm")
const saveEntryButton = require("./DataManager")

document.querySelector("#journalForm").innerHTML = renderEntryForm()

document.querySelector("#saveEntryButton").addEventListener("click", () => {

    // document.querySelector("#entryTitle").value
    // document.querySelector("#entryContent").value

    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()

    }
    saveJournalEntry(newEntry).then(() => {

    })
})

},{"./DataManager":1,"./JournalForm":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9Kb3VybmFsRm9ybS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3Qgc2F2ZUpvdXJuYWxFbnRyeSA9IChlbnRyeSkgPT4ge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50cnkpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2F2ZUpvdXJuYWxFbnRyeSIsImNvbnN0IEZvcm1NYW5hZ2VyID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgY2xlYXJGb3JtOiB7XG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWUgPSBcIlwiXG4gICAgICAgIH1cbiAgICB9LFxufSlcblxuY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlUaXRsZVwiKS52YWx1ZSA9IFwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWUgPSBcIlwiXG59XG5cbmNvbnN0IHJlbmRlckVudHJ5Rm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW50cnlUaXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cImVudHJ5VGl0bGVcIj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVudHJ5Q29udGVudFwiPkRlZXAgdGhvdWdodHM6PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImVudHJ5Q29udGVudFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDxidXR0b24gaWQ9XCJzYXZlRW50cnlCdXR0b25cIj5TYXZlIEpvdXJuYWwgRW50cnk8L2J1dHRvbj5cbiAgICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVuZGVyRW50cnlGb3JtXG5cbiIsImNvbnN0IHJlbmRlckVudHJ5Rm9ybSA9IHJlcXVpcmUoXCIuL0pvdXJuYWxGb3JtXCIpXG5jb25zdCBzYXZlRW50cnlCdXR0b24gPSByZXF1aXJlKFwiLi9EYXRhTWFuYWdlclwiKVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvdXJuYWxGb3JtXCIpLmlubmVySFRNTCA9IHJlbmRlckVudHJ5Rm9ybSgpXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZUVudHJ5QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWVcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5Q29udGVudFwiKS52YWx1ZVxuXG4gICAgY29uc3QgbmV3RW50cnkgPSB7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWUsXG4gICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlDb250ZW50XCIpLnZhbHVlLFxuICAgICAgICBkYXRlOiBEYXRlLm5vdygpXG5cbiAgICB9XG4gICAgc2F2ZUpvdXJuYWxFbnRyeShuZXdFbnRyeSkudGhlbigoKSA9PiB7XG5cbiAgICB9KVxufSlcbiJdfQ==
