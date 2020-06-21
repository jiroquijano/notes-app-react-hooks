import React, {useContext} from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({note}) => {

    const {dispatch} = useContext(NotesContext);
    const position = useMousePosition();

    const removeNote = (title) => {
        dispatch({
          type: 'REMOVE_NOTE',
          title
        })
    }

    return(
      <div>
        <p>{note.title}</p>
        <p>{note.body}</p>
        <p> {position.x}, {position.y}</p>
        <button onClick={()=>removeNote(note.title)}>
          Remove note
        </button>
      </div>
    )
};

export default Note;