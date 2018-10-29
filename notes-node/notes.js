const fs = require('fs');

getNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        let notes = JSON.parse(notesString);
        return notes;
    } catch (e) {
        return [];
    }
}

saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}


addNote = (title, body) => {
    console.log('entered addNote');
    notes = getNotes();

    let duplicateNote = notes.filter((note) => note.title === title);

    if (duplicateNote.length === 0) {
        let note = {
            title,
            body,
        };
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    console.log('finshed adding');
}

getAll = () => {
    let notes = getNotes();
    return notes;
}

readNote = (title) => {
    console.log('entering read note');
    let notes = getNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}

removeNote = (title) => {
    console.log('entered remove');
    let notes = getNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;

}

logNote = (note) => {
    console.log('title' + notes.title);
    console.log('body' + note.body);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote,
}