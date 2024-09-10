import { useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag } from "../Types/NoteForm.type";

type NoteListProps = {
  availableTags: Tag[];
};

const NoteList = ({ availableTags }: NoteListProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  return (
    <>
      <Row>
        <Col>
          <h3>Notes</h3>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <NavLink to="/new">
              <Button className="primary">Create</Button>
            </NavLink>
            <Button className="outline-dark">Edit Tags</Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default NoteList;
