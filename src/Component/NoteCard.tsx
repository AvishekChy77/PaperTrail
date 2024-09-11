import { Badge, Card, CardBody, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../Styles/NoteList.module.css";
import { NoteCardThumbnailProps } from "../Types/NoteForm.type";

const NoteCard = ({ id, title, tags }: NoteCardThumbnailProps) => {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-decoration-none text-reset ${styles.card}`}
    >
      <CardBody>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5">{title}</span>
          {tags.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {tags.map((tag) => (
                <Badge className="text-truncates" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default NoteCard;
