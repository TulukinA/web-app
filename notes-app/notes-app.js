let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    
    notes.push({
        id: id,
        title: '',
        body: '' 
    })
    saveNotes(notes)
    // new page with #afterURL with unique id
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        // Parse the new data and update notes then render new notes
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }

})