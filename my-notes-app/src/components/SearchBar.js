import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./noteslist.css";

function SearchBar({ handleChange }) {
    return (
        <div>
            <div className="search">
                <AiOutlineSearch className="search-icon" />
                <input
                    onChange={(e) => handleChange(e.target.value)}
                    type="text"
                    placeholder="Search for a note"
                />
            </div>
        </div>
    );
}

export default SearchBar;
