import CreateNoteForm from "./components/CreateNoteForm";
import Note from "./components/Note.jsx";
import Filters from "./components/Filters.jsx";
import { useEffect, useState } from "react";
import { createNote, fetchNotes } from "./services/notes.js";
import { Text } from "@chakra-ui/react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc",
  });

  useEffect(() => {
    const fetchData = async () => {
      let notes = await fetchNotes(filter);
      setNotes(notes);
    };
    fetchData();
  }, [filter]);

  const onCreate = async (note) => {
    await createNote(note);
    let notes = await fetchNotes(filter);
    setNotes(notes);
  };

  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/2 gap-10">
        <CreateNoteForm onCreate={onCreate} />
        <Filters filter={filter} setFilter={setFilter} />
      </div>
      <ul className="flex flex-col gap-5 w-1/2">
        {notes.length ? (
          notes.map((n) => (
            <li key={n.id}>
              <Note
                title={n.title}
                description={n.description}
                createdAt={n.createdAt}
              />
            </li>
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Заметки пуст
          </p>
        )}
      </ul>
    </section>
  );
}
