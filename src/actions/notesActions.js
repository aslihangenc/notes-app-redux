import { ADD_NOTE, DELETE_NOTE, SEARCH_NOTES } from '../actionTypes';

export const addNote = (note) => ({
    type: ADD_NOTE,
    payload: note,
});

export const deleteNote = (noteId) => ({
    type: DELETE_NOTE,
    payload: noteId,
});

export const searchNotes = (searchText) => ({
    type: SEARCH_NOTES,
    payload: searchText,
});
