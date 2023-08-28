import "./App.css";
import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { useSelector } from "react-redux";

function App() {
    const notes = useSelector((state) => state.noteReducer.note);
    const [key, setKey] = useState("");
    const [prevState, setPrevState] = useState(false);

    return (
        <div className={`${prevState && "dark-mode"}`}>
            <div className="App ">
                <Navigation state={setPrevState} />
                <SearchBar handleChange={setKey} />
                <NotesList
                    notes={notes.filter((note) =>
                        note.text
                            .trim()
                            .toLowerCase()
                            .includes(key.toLowerCase())
                    )}
                />
            </div>
        </div>
    );
}

export default App;
