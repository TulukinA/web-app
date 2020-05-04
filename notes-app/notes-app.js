let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
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

// //JS date instead of timestamps for easier comparisson 
// const now = moment()
// now.add(1, 'year').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))

// const birthday = moment()
// birthday.year(1986).month(6).date(29)
// console.log(birthday.format('MMM Do, YYYY'))

