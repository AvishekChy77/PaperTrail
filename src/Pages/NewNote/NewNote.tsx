import { v4 as uuidv4 } from "uuid";
import NoteForm from "../../Component/NoteForm";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { NoteData, RawNote, Tag } from "../../Types/NoteForm.type";

const NewNote = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  console.log(notes);
  // const notesWithTags = useMemo(() => {
  //   return notes.map((note) => {
  //     return {
  //       ...note,
  //       tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
  //     };
  //   });
  // }, [notes, tags]);

  const handleCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidv4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
    console.log(notes);
  };

  const onAddTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  return (
    <div>
      <h3 className="mb-4">New Note</h3>
      <NoteForm
        onSubmit={handleCreateNote}
        onAddTag={onAddTag}
        availableTags={tags}
      />
    </div>
  );
};

export default NewNote;
