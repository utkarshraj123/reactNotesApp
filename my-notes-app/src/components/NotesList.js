import { React } from "react";
import "./noteslist.css";
import CreateNote from "./CreateNote";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { deleteNote } from "../redux/noteSlice";

function NotesList({ notes }) {
    const dispatch = useDispatch();

    return (
        <>
            <div className="note-list">
                {notes?.map((note, i) => {
                    const word = note.text;
                    return (
                        <div className="note">
                            <div className="note-text">
                                <textarea
                                    rows="8"
                                    cols="30"
                                    className="textarea-note"
                                    id={`edit${i}`}
                                >
                                    {word}
                                </textarea>
                            </div>

                            <div className="note-footer">
                                <small>{note.date}</small>
                                <AiFillDelete
                                    onClick={() =>
                                        dispatch(deleteNote(note.id))
                                    }
                                    className="del-icon"
                                />
                            </div>
                        </div>
                    );
                })}
                <CreateNote />
            </div>
        </>
    );
}

export default NotesList;
