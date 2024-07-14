import { Input, Select } from "@chakra-ui/react";
import CreateNoteForm from "./components/CreateNoteForm";
import Note from "./components/Note.jsx";
import Filters from "./components/Filters.jsx";
import { useEffect } from "react";
import { fetchNotes } from "./services/notes.js";

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      await fetchNotes();
    };
    fetchData();
  }, []);
  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/2 gap-10">
        <CreateNoteForm />
        <Filters />
      </div>
      <ul className="flex flex-col gap-5 w-1/2">
        <li>
          <Note />
        </li>
      </ul>
    </section>
  );
}
