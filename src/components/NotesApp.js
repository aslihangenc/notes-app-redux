import React from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote, searchNotes } from '../actions/notesActions';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import NoteSearch from './NoteSearch';

class NotesApp extends React.Component {
    // Yeni bir not eklemek için NoteEditor bileşeninden çağrılacak işlev.
    handleNoteAdd = (newNote) => {
        this.props.onNoteAdd(newNote);
    };

    // Bir notu silmek için NotesGrid bileşeninden çağrılacak işlev.
    handleNoteDelete = (note) => {
        this.props.onNoteDelete(note.id);
    };

    // Notları aramak için NoteSearch bileşeninden çağrılacak işlev.
    handleSearch = (text) => {
        this.props.onSearch(text);
    };

    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                {/* Arama işlevini içeren bileşen */}
                <NoteSearch onSearch={this.handleSearch} />
                {/* Yeni not eklemek için NoteEditor bileşeni */}
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                {/* Notları gösteren bileşen */}
                <NotesGrid notes={this.props.filteredNotes} onNoteDelete={this.handleNoteDelete} />
            </div>
        );
    }
}

// Redux store ile bileşeni bağlayın
const mapStateToProps = (state) => ({
    notes: state.notes.notes,                   // Tüm notlar
    filteredNotes: state.notes.filteredNotes,   // Filtrelenmiş notlar (arama sonuçları)
});

const mapDispatchToProps = {
    onNoteAdd: addNote,                         // Yeni not ekleme işlevi
    onNoteDelete: deleteNote,                   // Not silme işlevi
    onSearch: searchNotes,                      // Notları arama işlevi
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesApp);
