import React, {useContext} from 'react';
import Note from './Note';
import NotesContext from '../context/notes-context';

const NoteList = () => {
    const {notes} = useContext(NotesContext);

    return (
        <div>
            {notes.map((note,index)=>(
                <Note
                    key={index}
                    note={note}
                />
            ))}
        </div>
    );
};

export default NoteList;