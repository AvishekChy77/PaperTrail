import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import useNote from "../../Hooks/useNote";

const Note = () => {
  const note = useNote();
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
            <Button variant="outline-danger">Delete</Button>
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
