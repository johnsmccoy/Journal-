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
            document.querySelector("#entryContent").value = ""
        }
    },
    renderEntryForm: {
        value: () => {
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
    }
    })

module.exports = FormManager

},{}],3:[function(require,module,exports){
const FormManager = require("./JournalForm")
const saveJournalEntry = require("./DataManager")

document.querySelector("#journalForm").innerHTML = FormManager.renderEntryForm()

document.querySelector("#saveEntryButton").addEventListener("click", () => {

    // document.querySelector("#entryTitle").value
    // document.querySelector("#entryContent").value

    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()

    }

    saveJournalEntry (newEntry)
        .then(() => {
            FormManager.clearForm()

        })

})
},{"./DataManager":1,"./JournalForm":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9Kb3VybmFsRm9ybS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBzYXZlSm91cm5hbEVudHJ5ID0gKGVudHJ5KSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZW50cmllc1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRyeSlcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2F2ZUpvdXJuYWxFbnRyeSIsImNvbnN0IEZvcm1NYW5hZ2VyID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XHJcbiAgICBjbGVhckZvcm06IHtcclxuICAgICAgICB2YWx1ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlDb250ZW50XCIpLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW5kZXJFbnRyeUZvcm06IHtcclxuICAgICAgICB2YWx1ZTogKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbnRyeVRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbnRyeVRpdGxlXCI+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbnRyeUNvbnRlbnRcIj5EZWVwIHRob3VnaHRzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImVudHJ5Q29udGVudFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8YnV0dG9uIGlkPVwic2F2ZUVudHJ5QnV0dG9uXCI+U2F2ZSBKb3VybmFsIEVudHJ5PC9idXR0b24+XHJcbiAgICBgXHJcbn1cclxuICAgIH1cclxuICAgIH0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1NYW5hZ2VyXHJcbiIsImNvbnN0IEZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vSm91cm5hbEZvcm1cIilcclxuY29uc3Qgc2F2ZUpvdXJuYWxFbnRyeSA9IHJlcXVpcmUoXCIuL0RhdGFNYW5hZ2VyXCIpXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvdXJuYWxGb3JtXCIpLmlubmVySFRNTCA9IEZvcm1NYW5hZ2VyLnJlbmRlckVudHJ5Rm9ybSgpXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVFbnRyeUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlUaXRsZVwiKS52YWx1ZVxyXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeUNvbnRlbnRcIikudmFsdWVcclxuXHJcbiAgICBjb25zdCBuZXdFbnRyeSA9IHtcclxuICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeVRpdGxlXCIpLnZhbHVlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlDb250ZW50XCIpLnZhbHVlLFxyXG4gICAgICAgIGRhdGU6IERhdGUubm93KClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUpvdXJuYWxFbnRyeSAobmV3RW50cnkpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBGb3JtTWFuYWdlci5jbGVhckZvcm0oKVxyXG5cclxuICAgICAgICB9KVxyXG5cclxufSkiXX0=
