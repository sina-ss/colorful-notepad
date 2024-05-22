import api from "./api";

export const createNote = async (noteData: any) => {
  try {
    const response = await api.post("/notes", noteData);
    return response.data;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};
