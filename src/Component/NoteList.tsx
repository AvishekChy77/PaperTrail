import { useMemo, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ReactSelect from "react-select";
import { NoteCardThumbnailProps, Tag } from "../Types/NoteForm.type";
import EditTagModal from "./EditTagModal";
import NoteCard from "./NoteCard";

type NoteListProps = {
  availableTags: Tag[];
  notes: NoteCardThumbnailProps[];
  onUpdateTag: (id:string, label:string)=> void,
  onDeleteTag: (id:string)=> void,
};

const NoteList = ({ availableTags, notes, onUpdateTag, onDeleteTag }: NoteListProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");
  const [tagModalIsOpen, setTagModalIsOpen] = useState(false);

  const filteredNote = useMemo(() => {
    return notes.filter((note) => {
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) =>
            note.tags.some((noteTag) => noteTag.id === tag.id)
          ))
      );
    });
  }, [title, selectedTags, notes]);
  return (
    <>
      <Row className=" align-items-center mb-4">
        <Col>
          <h3>Notes</h3>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <NavLink to="/new">
              <Button variant="primary">Create</Button>
            </NavLink>
            <Button onClick={()=> setTagModalIsOpen(true)} variant="outline-dark">Edit Tags</Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                value={selectedTags?.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags?.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags?.map((tag) => {
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
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {filteredNote.map((note) => (
          <Col key={note.id}>
            <NoteCard id={note.id} title={note.title} tags={note.tags} />
          </Col>
        ))}
      </Row>
      {/* Edit tags modal */}
      <EditTagModal
        availableTags={availableTags}
        show={tagModalIsOpen}
        handleCLose={()=>setTagModalIsOpen(false)}
        onUpdateTag={onUpdateTag}
        onDeleteTag = {onDeleteTag}
      />
    </>
  );
};

export default NoteList;
