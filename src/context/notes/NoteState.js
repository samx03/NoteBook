import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "62b85478cc81efda772ac3eb",
          "user": "62b70fda6f7b2975a5beccbf",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-06-26T12:43:36.845Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial);
    return (
        <noteContext.Provider value={{notes, setNotes}}>{props.children}</noteContext.Provider>
    )
}

export default NoteState;