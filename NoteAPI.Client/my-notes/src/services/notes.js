import axios from "axios";

export const fetchNotes = async (filter) => {
  try {
    var response = await axios.get("http://localhost:5249/Notes", {
      params: {
        search: filter?.search,
        sortItem: filter?.sortItem,
        sortOrder: filter?.sortOrder,
      },
    });
    return response.data.notes;
  } catch (e) {
    console.error(e.message);
  }
};

export const createNote = async (note) => {
  try {
    var response = await axios.post("http://localhost:5249/Notes", note);
    return response.status;
  } catch (e) {
    console.error(e.message);
  }
};
