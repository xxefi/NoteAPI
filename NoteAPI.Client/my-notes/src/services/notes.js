import axios from "axios";

export const fetchNotes = async () => {
  try {
    const response = await axios.get("http://localhost:5249/Notes");
    console.log(response.data);
  } catch (e) {
    console.error(e.message);
  }
};
