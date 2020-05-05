const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

// Get saved notes from localstorage
let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteId)

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = genreteLastEdited(note.updatedAt)

// Setup input event for title 
titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = genreteLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = genreteLastEdited(note.updatedAt)
    saveNotes(notes)
})
// Remove note and send user back to main page
removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)

        if (note === undefined) {
            location.assign('/index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = genreteLastEdited(note.updatedAt)
    }
})