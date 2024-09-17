import { useMemo } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage";
import { RawNote, Tag } from "../Types/NoteForm.type";

const NoteLayout = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  const { id } = useParams();

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  const note = notesWithTags.find((note) => note.id === id);
  console.log(note);

  if (!note) return <Navigate to={"/"} replace />;
  return <Outlet context={note} />;
};

export default NoteLayout;
