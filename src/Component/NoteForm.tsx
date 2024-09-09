import { FormEvent, useRef } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ReactSelectCreatable from "react-select/creatable";

const NoteForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markDownRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelectCreatable isMulti />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Title</Form.Label>
          <Form.Control ref={markDownRef} required as="textarea" rows={15} />
        </Form.Group>
        <Stack direction="horizontal" gap={2}>
          <Button variant="info">Save</Button>
          <NavLink to="..">
            <Button variant="outline-dark">Cancel</Button>
          </NavLink>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
