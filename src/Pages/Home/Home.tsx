import { useMemo } from "react";
import NoteList from "../../Component/NoteList";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { RawNote, Tag } from "../../Types/NoteForm.type";

const Home = () => {
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);
  return (
    <div>
      <h1 className="mb-4">Home</h1>
      <NoteList notes={notesWithTags} availableTags={tags} />
    </div>
  );
};

export default Home;
