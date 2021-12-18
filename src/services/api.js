import axios from "axios";

///movie/now_playing?api_key=1be66ab6a56e86c8171ed46c9c6dd4a6&language=pt-BR&page=1

export const key = "1be66ab6a56e86c8171ed46c9c6dd4a6";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
