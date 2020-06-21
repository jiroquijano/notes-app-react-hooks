import React, {useEffect, useReducer} from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = (props) =>{
    const [notes,dispatch] = useReducer(notesReducer, [])
    
    useEffect(()=>{
      const notesData = JSON.parse(localStorage.getItem('notesArray')) || [];
      dispatch({
        type: 'POPULATE_NOTES',
        notes: notesData
      })
    },[]);
  
    useEffect(()=>{
      localStorage.setItem('notesArray', JSON.stringify(notes));
    },[notes])
  
    return (
      <NotesContext.Provider value={{notes,dispatch}}>
        <h1>Notes</h1>
        <p>Add note</p>
        <NoteList/>
        <NoteForm/>
      </NotesContext.Provider>
    );
  };

  export default NoteApp;
