import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_ASSET = 'FETCH_ASSET';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'od9laogycy16';
const API_TOKEN = 'c9ea1287e9ddbf88359e44d41b62f3f0bb6a8a934e9d73a733faa183fa6170e6';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post&order=sys.createdAt`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
export function fetchPost(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}&content_type=post`);
  return {
    type: FETCH_POST,
    payload: request
  };
}
export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}
