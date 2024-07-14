import { Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function CreateNoteForm({ onCreate }) {
  const [note, setNote] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setNote(null);
    onCreate(note);
  };

  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
          <h3 className="font-bold text-xl">Создание заметки</h3>
          <Input
            placeholder="Название заметки..."
            value={note?.title ?? ""}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <Textarea
            placeholder="Описание"
            value={note?.description ?? ""}
            onChange={(e) => setNote({ ...note, description: e.target.value })}
          />
          <Button type="submit" colorScheme="teal">
            Создать
          </Button>
        </form>
      </div>
    </section>
  );
}
