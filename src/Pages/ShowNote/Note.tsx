import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { NavLink, useNavigate } from "react-router-dom";
import useLocalStorage from "../../Hooks/useLocalStorage";
import useNote from "../../Hooks/useNote";
import { RawNote } from "../../Types/NoteForm.type";

const Note = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const note = useNote();
  const navigate = useNavigate();

  const handleDelete = () => {
    setNotes((prevNote) => {
      return prevNote.filter((n) => n.id !== note.id);
    });
    setTimeout(() => navigate("/"), 100);
  };
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncates" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <NavLink to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </NavLink>
            <Button onClick={handleDelete} variant="outline-danger">
              Delete
            </Button>
            <NavLink to="/">
              <Button variant="outline-dark">Back</Button>
            </NavLink>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
};

export default Note;
