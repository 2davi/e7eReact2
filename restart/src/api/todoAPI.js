//그저 정리방법일 뿐!
import axios from 'axios';

const serverURL = `http://localhost:8272/todos`;

const todoAPI = axios.create({
  baseURL: serverURL
})

//아래 두 개는 정리 방법의 선택사항
export const getTodos = async () => {
  const resp = await todoAPI.get("");
  return resp.data;
}
export const delTodos = async taskId => {
  const resp = await todoAPI.delete(`/${taskId}`);
  return resp.data;
}
