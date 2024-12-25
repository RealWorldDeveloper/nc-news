import axios from "axios";
const baseUrl = 'https://mynew-nc-news.onrender.com/api'
export const apiClient = axios.create({
  baseURL: "https://mynew-nc-news.onrender.com/api",
  timeout: 1000,
  withCredentials: true
});

// Update Votes
export const updateVote = (id, like) => {
  return axios.patch(`${baseUrl}/articles/${id}`, like);
};
