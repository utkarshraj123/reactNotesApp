import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../redux/noteSlice";
import { nanoid } from "@reduxjs/toolkit";
import "./noteslist.css";

function CreateNote() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const date = new Date();
    const totalCount = 200;
    function handleChange(e) {
        if (totalCount - e.target.value.length >= 0) {
            setText(e.target.value);
        }
    }

    function handleSave() {
        if (text.trim().length > 0) {
            dispatch(
                createNote({
                    id: nanoid(5),
                    text,
                    date: date.toLocaleDateString(),
                })
            );

            const textArea = document.getElementById("text-area");
            textArea.value = "";
            setText("");
        }
    }
    function handleKeydown(e) {
        if (e.keyCode === 13) {
            handleSave();
        }
    }
    return (
        <div className="note create">
            <textarea
                id="text-area"
                onChange={handleChange}
                onKeyDown={handleKeydown}
                className="textarea"
                cols="30"
                rows="8"
                placeholder="Type here to create a note..."
            ></textarea>
            <div className="create-note-footer">
                <small>{totalCount - text.length} remaining</small>
                <button onClick={handleSave} className="save">
                    Save
                </button>
            </div>
        </div>
    );
}

export default CreateNote;
