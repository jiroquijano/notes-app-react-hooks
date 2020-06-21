import React, {useState, useContext} from 'react';
import NotesContext from '../context/notes-context';

const NoteForm = ()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const {dispatch} = useContext(NotesContext);

    const addNote = (e)=>{
        e.preventDefault();
        dispatch({
          type: 'ADD_NOTE',
          newNote: {title,body}
        });
        setTitle('');
        setBody('');
    }

    return (
    <form onSubmit={addNote}>
          <input 
            value={title}
            name="inputtext"
            type="text"
            placeholder="enter note title"
            onChange={(e)=>setTitle(e.target.value)}
          />
          <textarea 
            placeholder="enter note body"
            onChange = {(e)=>setBody(e.target.value)}
            value = {body}
          />
          <button>Add</button>
    </form>
);
};

export default NoteForm;