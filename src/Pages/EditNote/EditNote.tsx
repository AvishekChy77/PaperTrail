import NoteForm from "../../Component/NoteForm";
import useLocalStorage from "../../Hooks/useLocalStorage";
import useNote from "../../Hooks/useNote";
import { NoteData, RawNote, Tag } from "../../Types/NoteForm.type";

const EditNote = () => {
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

  const handleUpdateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
        } else {
          return note;
        }
      });
    });
    console.log(notes);
  };

  const onAddTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  const note = useNote();

  return (
    <div>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => handleUpdateNote(note.id, data)}
        onAddTag={onAddTag}
        availableTags={tags}
      />
    </div>
  );
};

export default EditNote;
