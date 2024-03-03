import axios from "axios";
const urls = "http://localhost:2000/exam-question";
const urlsPost = "http://localhost:2000/exam-user";
const urlsUserResults = "http://localhost:2000/user-results";
const urlsUsersResult = "http://localhost:2000/users-result";
export async function getQuestion() {
  const res = await axios.get(urls);
  return res;
}
export async function postExamUser(exam) {
  const res = await axios.post(urlsPost, {
    params: { exam },
  });
  return res.data;
}
export async function postUserResults(userResults) {
  const res = await axios.post(urlsUserResults, {
    params: { userResults },
  });
  return res.data;
}
export async function getUsersResults() {
  const res = await axios.get(urlsUsersResult);
  return res.data;
}
