import axiosInstance from "./index";
import { BASE_URL, TOTAL_BLOGS_PER_PAGE } from "../constants";

export default {
  getBlogsApi() {
    return axiosInstance.get(`${BASE_URL}/posts/`);
  },
  getBlogsByPageNumberApi(data) {
    return axiosInstance.get(
      `${BASE_URL}/posts?_page=${data.page}&_limit=${TOTAL_BLOGS_PER_PAGE}`
    );
  },
  getBlogsDetailsByIdApi(data) {
    return axiosInstance.get(`${BASE_URL}/posts/${data.blogId}/`);
  },
};
