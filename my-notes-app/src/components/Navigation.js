import React from "react";
import "./noteslist.css";

function Navigation({ state }) {
    return (
        <nav className="navigation">
            <h1>Notes</h1>
            <button
                onClick={() => state((prevState) => !prevState)}
                className="toggle save"
            >
                Toggle
            </button>
        </nav>
    );
}

export default Navigation;
