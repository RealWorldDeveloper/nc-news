import axios from "axios";
const baseUrl = 'https://mynew-nc-news.onrender.com/api'
export const apiClient = axios.create({
  baseURL: "https://mynew-nc-news.onrender.com/api",
  timeout: 1000,
});

// get All Comments
export const getAllComments = (article_id) => {
  return axios
    .get(`${baseUrl}/articles/${article_id}/comments`)
    .then((res) => res.data.comment);
};
// Post a comment
export const postCommentUrl = (article_id, msg) => {
  return axios.post(`${baseUrl}/articles/${article_id}/comments`, msg);
};
// Delete a comment
export const deleteCommmentUrl = (comment_id) => {
  return axios.delete(`${baseUrl}/comments/${comment_id}`);
};
// get Topics
export const getTopics = () => {
  return axios.get(`${baseUrl}/topics`).then((res) => res.data);
};
// Update Votes
export const updateVote = (id, like) => {
  return axios.patch(`${baseUrl}/articles/${id}`, like);
};
