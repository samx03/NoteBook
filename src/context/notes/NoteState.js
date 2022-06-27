import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "Sameer",
        "class": "5b"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Ameer",
                "class": "6b"
            });
        }, 1000);
    }
    return (
        <noteContext.Provider value={{state, update}}>{props.children}</noteContext.Provider>
    )
}

export default NoteState;