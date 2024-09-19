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

  const updateTag = (id: string, label: string) => {
    setTags((prevTags) => {
      return prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label };
        }
        return tag;
      });
    });
  };

  const deleteTag = (id: string) => {
    setTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id);
    });
  };

  return (
    <div>
      <h1 className="mb-4">Home</h1>
      <NoteList
        notes={notesWithTags}
        availableTags={tags}
        onUpdateTag={updateTag}
        onDeleteTag={deleteTag}
      />
    </div>
  );
};

export default Home;
