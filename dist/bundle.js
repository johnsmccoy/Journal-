(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let journalData = {}


journalData.saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(response => response.json())
}
journalData.loadJournalEntry = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
}
journalData.deleteEntry = (lookupId) => {
    return fetch(`http://localhost:8088/entries/${lookupId}`, {
        method: "DELETE",
    })
}

module.exports = journalData
},{}],2:[function(require,module,exports){
const FormManager = Object.create(null, {


    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = ""
            document.querySelector("#entryContent").value = ""
        }
    },

    buildFormTemplate: {
        value: () => {
            return `
            <fieldset>
            <label for="entryTitle">Title:</label>
            <input required type="text" id="entryTitle">
            </fieldset>
            <fieldset>
            <label for="entryContent">Deep Thought</label>
            <input required type="text" id="entryContent">
            </fieldset>
            <button id="saveEntryButton">Save Journal Entry</button>      
            `
        }
    }
})
module.exports = FormManager

},{}],3:[function(require,module,exports){
const journalEntry = (result) => {


    return `<fieldset class="entryField">
        <h3 class="entryTitle">${result.title}</h3>
        <p class="entryContent">${result.content}</p>
        <label>${result.date}</label>
        <button id=${result.id} class="deleteButton">Delete</button>
    </fieldset>
`
}
module.exports = journalEntry
},{}],4:[function(require,module,exports){
const journalEntry = require("./JournalLayout")
const journalData = require("./DataManager")

const journalBuilder = Object.create(null, {
    journalLister: {
        value: () => {
            return journalData.loadJournalEntry()
                .then((result) => {
                    result.reverse()
                    let string = ""
                    for (let i = 0; i < result.length; i++) {
                        const element = result[i]
                        string += journalEntry(element)
                    }
                    return string
                })
        }
    },
    deleter: {
        value: (buttonId) => {
            journalData.deleteEntry(buttonId)
        }
    },
    reloadEntries: {
        value: () => {
            document.querySelector("#journalEntry").value = ""
        }
    }
})


module.exports = journalBuilder
},{"./DataManager":1,"./JournalLayout":3}],5:[function(require,module,exports){
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
},{"./DataManager":1,"./JournalForm":2,"./JournalList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9Kb3VybmFsRm9ybS5qcyIsIi4uL3NjcmlwdHMvSm91cm5hbExheW91dC5qcyIsIi4uL3NjcmlwdHMvSm91cm5hbExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgam91cm5hbERhdGEgPSB7fVxyXG5cclxuXHJcbmpvdXJuYWxEYXRhLnNhdmVKb3VybmFsRW50cnkgPSAoZW50cnkpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudHJ5KVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbn1cclxuam91cm5hbERhdGEubG9hZEpvdXJuYWxFbnRyeSA9ICgpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG59XHJcbmpvdXJuYWxEYXRhLmRlbGV0ZUVudHJ5ID0gKGxvb2t1cElkKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzLyR7bG9va3VwSWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgIH0pXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gam91cm5hbERhdGEiLCJjb25zdCBGb3JtTWFuYWdlciA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xyXG5cclxuXHJcbiAgICBjbGVhckZvcm06IHtcclxuICAgICAgICB2YWx1ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50cnlDb250ZW50XCIpLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYnVpbGRGb3JtVGVtcGxhdGU6IHtcclxuICAgICAgICB2YWx1ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbnRyeVRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbnRyeVRpdGxlXCI+XHJcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVudHJ5Q29udGVudFwiPkRlZXAgVGhvdWdodDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwiZW50cnlDb250ZW50XCI+XHJcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzYXZlRW50cnlCdXR0b25cIj5TYXZlIEpvdXJuYWwgRW50cnk8L2J1dHRvbj4gICAgICBcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSBGb3JtTWFuYWdlclxyXG4iLCJjb25zdCBqb3VybmFsRW50cnkgPSAocmVzdWx0KSA9PiB7XHJcblxyXG5cclxuICAgIHJldHVybiBgPGZpZWxkc2V0IGNsYXNzPVwiZW50cnlGaWVsZFwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cImVudHJ5VGl0bGVcIj4ke3Jlc3VsdC50aXRsZX08L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZW50cnlDb250ZW50XCI+JHtyZXN1bHQuY29udGVudH08L3A+XHJcbiAgICAgICAgPGxhYmVsPiR7cmVzdWx0LmRhdGV9PC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGlkPSR7cmVzdWx0LmlkfSBjbGFzcz1cImRlbGV0ZUJ1dHRvblwiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgPC9maWVsZHNldD5cclxuYFxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gam91cm5hbEVudHJ5IiwiY29uc3Qgam91cm5hbEVudHJ5ID0gcmVxdWlyZShcIi4vSm91cm5hbExheW91dFwiKVxyXG5jb25zdCBqb3VybmFsRGF0YSA9IHJlcXVpcmUoXCIuL0RhdGFNYW5hZ2VyXCIpXHJcblxyXG5jb25zdCBqb3VybmFsQnVpbGRlciA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xyXG4gICAgam91cm5hbExpc3Rlcjoge1xyXG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBqb3VybmFsRGF0YS5sb2FkSm91cm5hbEVudHJ5KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0cmluZyA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0W2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBqb3VybmFsRW50cnkoZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlcjoge1xyXG4gICAgICAgIHZhbHVlOiAoYnV0dG9uSWQpID0+IHtcclxuICAgICAgICAgICAgam91cm5hbERhdGEuZGVsZXRlRW50cnkoYnV0dG9uSWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbG9hZEVudHJpZXM6IHtcclxuICAgICAgICB2YWx1ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvdXJuYWxFbnRyeVwiKS52YWx1ZSA9IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBqb3VybmFsQnVpbGRlciIsImNvbnN0IEZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vSm91cm5hbEZvcm1cIilcclxuY29uc3Qgam91cm5hbERhdGEgPSByZXF1aXJlKFwiLi9EYXRhTWFuYWdlclwiKVxyXG5jb25zdCBqb3VybmFsQnVpbGRlciA9IHJlcXVpcmUoXCIuL0pvdXJuYWxMaXN0XCIpXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvdXJuYWxGb3JtXCIpLmlubmVySFRNTCA9IEZvcm1NYW5hZ2VyLmJ1aWxkRm9ybVRlbXBsYXRlKClcclxuXHJcbmpvdXJuYWxCdWlsZGVyLmpvdXJuYWxMaXN0ZXIoKS50aGVuKHN0cmluZyA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvdXJuYWxFbnRyeVwiKS5pbm5lckhUTUwgPSBzdHJpbmdcclxufSlcclxuXHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlRW50cnlCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vIEdldCBmb3JtIGZpZWxkIHZhbHVlc1xyXG4gICAgLy8gQ3JlYXRlIG9iamVjdGZyb20gdGhlbVxyXG4gICAgLy8gQWRkIHRpbWVzdGFtcFxyXG4gICAgZnVuY3Rpb24gZGF0ZUZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgbiA9IGQudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld0VudHJ5ID0ge1xyXG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudHJ5VGl0bGVcIikudmFsdWUsXHJcbiAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRyeUNvbnRlbnRcIikudmFsdWUsXHJcbiAgICAgICAgZGF0ZTogZGF0ZUZ1bmN0aW9uKClcclxuICAgIH1cclxuICAgIC8vIFBPU1QgdG8gQVBJXHJcbiAgICBqb3VybmFsRGF0YS5zYXZlSm91cm5hbEVudHJ5KG5ld0VudHJ5KVxyXG4gICAgICAgIC8vIENsZWFyIHRoZSBmb3JtIGZpZWxkc1xyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgRm9ybU1hbmFnZXIuY2xlYXJGb3JtKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIFB1dCBIVE1MIHJlcHJlc2VudGF0aW9uIG9uIHRoZSBET01cclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICApXHJcbn0pXHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb3VybmFsRW50cnlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgbGV0IGJ1dHRvbklkID0gZXZlbnQudGFyZ2V0LmlkXHJcbiAgICBqb3VybmFsQnVpbGRlci5kZWxldGVyKGJ1dHRvbklkKVxyXG4gICAgbG9jYXRpb24ucmVsb2FkKClcclxufSlcclxuXHJcblxyXG52YXIgZCA9IERhdGUoRGF0ZS5ub3coKSk7XHJcbmQudG9TdHJpbmcoKSAvLyByZXR1cm5zIFwiU3VuIE1heSAxMCAyMDE1IDE5OjUwOjA4IEdNVC0wNjAwIChNRFQpXCIiXX0=
