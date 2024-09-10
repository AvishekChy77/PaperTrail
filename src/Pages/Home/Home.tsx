import useLocalStorage from "../../Hooks/useLocalStorage";
import { RawNote, Tag } from "../../Types/NoteForm.type";

const Home = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
