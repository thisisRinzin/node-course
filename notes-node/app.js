console.log('starting app');

const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

var command = process.argv[2];
const argvs = yargs.argv;

console.log('entered main');
if(command === 'add'){
    let note = notes.addNote(argvs.title, argvs.body);
    if(note){
        console.log('Note added');
        console.log(note.title, note.body);
    }else{
        console.log('notes deplicate');
    }

}else if(command === 'list'){
    let allNotes = notes.getAll();
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
}else if(command === 'read'){

    let note = notes.readNote(argvs.title);
    if(note){
        console.log(note.title, note.body);
    }else{
        console.log('note not found');
    }

}else if(command === 'remove'){
    let noteDeleted = notes.removeNote(argvs.title);
    var message = noteDeleted ? 'Note deleted': 'note not deleted';
    console.log(message);
}else{
    console.log('Sorry, not found');
}