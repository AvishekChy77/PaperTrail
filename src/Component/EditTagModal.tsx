import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import { Tag } from "../Types/NoteForm.type";

type EditTagModal = {
  availableTags: Tag[];
  show: boolean;
  handleCLose: () => void;
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTag: (id: string) => void;
};

const EditTagModal = ({
  availableTags,
  show,
  handleCLose,
  onUpdateTag,
  onDeleteTag,
}: EditTagModal) => {
  return (
    <Modal show={show} onHide={handleCLose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type="text"
                    value={tag.label}
                    onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    onClick={() => onDeleteTag(tag.id)}
                    variant="outline-danger"
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTagModal;
