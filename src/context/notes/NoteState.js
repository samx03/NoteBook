import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

 //Get all notes
 const getNotes = async () => {
  //API Call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
     'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNzBmZGE2ZjdiMjk3NWE1YmVjY2JmIn0sImlhdCI6MTY1NjI0MzQ5NH0.pL5u9C_cltKGm6zNFYJBJZ8vA1Y0WfE5BBC52LjatmA'
   }
 });
 const json = await response.json();
 console.log(json);
 setNotes(json);
}


  //Add a note
  const addNote = async (title, description, tag) => {
     //API Call
     const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNzBmZGE2ZjdiMjk3NWE1YmVjY2JmIn0sImlhdCI6MTY1NjI0MzQ5NH0.pL5u9C_cltKGm6zNFYJBJZ8vA1Y0WfE5BBC52LjatmA'
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json);

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
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNzBmZGE2ZjdiMjk3NWE1YmVjY2JmIn0sImlhdCI6MTY1NjI0MzQ5NH0.pL5u9C_cltKGm6zNFYJBJZ8vA1Y0WfE5BBC52LjatmA'
      }
    });
    const json = await response.json();
    console.log(json);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNzBmZGE2ZjdiMjk3NWE1YmVjY2JmIn0sImlhdCI6MTY1NjI0MzQ5NH0.pL5u9C_cltKGm6zNFYJBJZ8vA1Y0WfE5BBC52LjatmA'
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit a note
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }
  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>{props.children}</noteContext.Provider>
  )
}

export default NoteState;