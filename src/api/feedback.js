import axios from "axios";
const urls = "http://localhost:2000/post-feedback";
const urlsGet = "http://localhost:2000/user-feedback";
export async function getFeedback() {
  const res = await axios.get(urlsGet);
  return res;
}
export async function postFeedbackUser(feedback) {
  const res = await axios.post(urls, {
    params: { feedback },
  });
  return res.data;
}

