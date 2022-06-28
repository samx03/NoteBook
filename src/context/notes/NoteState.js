import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "62b85478cc81efda772ac3eb1",
      "user": "62b70fda6f7b2975a5beccbf",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-06-26T12:43:36.845Z",
      "__v": 0
    },
    {
      "_id": "62b9f2373312c0148c9762172",
      "user": "62b70fda6f7b2975a5beccbf",
      "title": "New Title",
      "description": "This is my new title",
      "tag": "personal",
      "date": "2022-06-27T18:08:55.270Z",
      "__v": 0
    },
    {
      "_id": "62b9f2373312c0148c9762173",
      "user": "62b70fda6f7b2975a5beccbf",
      "title": "New Title",
      "description": "This is my new title",
      "tag": "personal",
      "date": "2022-06-27T18:08:55.270Z",
      "__v": 0
    },
    {
      "_id": "62b9f2373312c0148c9762174",
      "user": "62b70fda6f7b2975a5beccbf",
      "title": "New Title",
      "description": "This is my new title",
      "tag": "personal",
      "date": "2022-06-27T18:08:55.270Z",
      "__v": 0
    },
    {
      "_id": "62b9f2373312c0148c9762175",
      "user": "62b70fda6f7b2975a5beccbf",
      "title": "New Title",
      "description": "This is my new title",
      "tag": "personal",
      "date": "2022-06-27T18:08:55.270Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description, tag) => {
    const note = [
      {
        "_id": "62b9f2373312c0148c9762178",
        "user": "62b70fda6f7b2975a5beccbf",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-06-27T18:08:55.270Z",
        "__v": 0
      }];
    setNotes(notes.concat(note));
  }

  //Delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  //Edit a note
  const editNote = () => {

  }
  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>{props.children}</noteContext.Provider>
  )
}

export default NoteState;