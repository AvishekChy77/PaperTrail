export type Tag = {
  id: string;
  label: string;
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Note = NoteData & {
  id: string;
};

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type RawNote = RawNoteData & {
  id: string;
};
