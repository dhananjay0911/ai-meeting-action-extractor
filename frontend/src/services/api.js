import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1"
});

export const uploadTranscript = async (file) => {

  const formData = new FormData();
  formData.append("file", file);

  const response = await API.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  return response.data;
};

export const getTasks = async (transcriptId) => {

  const response = await API.get(`/tasks/${transcriptId}`);

  return response.data;
};

export const updateTask = async (taskId, updates) => {

  const response = await API.put(`/tasks/${taskId}`, updates);

  return response.data;
};