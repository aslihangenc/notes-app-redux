import { ADD_NOTE, DELETE_NOTE, SEARCH_NOTES } from '../actionTypes';

const initialState = {
    notes: [],
    filteredNotes: [],
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            // Yeni notu mevcut notlara ekleme
            return {
                ...state,
                notes: [...state.notes, action.payload],
                filteredNotes: [...state.filteredNotes, action.payload],
            };

        case DELETE_NOTE:
            // Silinecek notu filtrelenmiş ve genel notlardan çıkarma
            const updatedNotes = state.notes.filter(note => note.id !== action.payload);
            const updatedFilteredNotes = state.filteredNotes.filter(note => note.id !== action.payload);
            return {
                ...state,
                notes: updatedNotes,
                filteredNotes: updatedFilteredNotes,
            };

        case SEARCH_NOTES:
            // Arama metnini kullanarak notları filtreleme
            const searchText = action.payload.toLowerCase();
            const filteredNotes = state.notes.filter(note => note.text.toLowerCase().includes(searchText));
            return {
                ...state,
                filteredNotes: filteredNotes,
            };

        default:
            return state;
    }
};

export default notesReducer;
