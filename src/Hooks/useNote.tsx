import { useOutletContext } from "react-router-dom";
import { Note } from "../Types/NoteForm.type";

const useNote = () => {
  return useOutletContext<Note>();
};

export default useNote;
