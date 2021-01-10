import api from "@/api/blogs";

function defaultState() {
  return {
    allBlogs: [],
    blogsByPgNumber: [],
    blogDetails: {},
    blogPageNumber: null,
    errorObj: {},
  };
}

export default {
  namespaced: true,
  state: defaultState(),

  getters: {},

  mutations: {
    SET_ALL_BLOGS: (state, allBlogs) => (state.allBlogs = allBlogs),
    SET_BLOGS_BY_PAGE_NUM: (state, blogsByPgNumber) =>
      (state.blogsByPgNumber = blogsByPgNumber),
    SET_BLOG_DETAILS_BY_BLOG_ID: (state, blogDetails) =>
      (state.blogDetails = blogDetails),
    SET_BLOG_CURRENT_PAGE_NUMBER: (state, blogPageNumber) =>
      (state.blogPageNumber = blogPageNumber),
    ERR_MSG: (state, err) => (state.errorObj = err),
  },
  actions: {
    getBlogs: ({ commit }) =>
      new Promise((resolve, reject) => {
        api
          .getBlogsApi()
          .then((response) => {
            commit("SET_ALL_BLOGS", response.data);
            resolve(response);
          })
          .catch((error) => {
            commit("ERR_MSG", error.response.data);
            reject(error);
          });
      }),
    getBlogsByPageNumber: ({ commit }, data) =>
      new Promise((resolve, reject) => {
        api
          .getBlogsByPageNumberApi(data)
          .then((response) => {
            commit("SET_BLOGS_BY_PAGE_NUM", response.data);
            resolve(response);
          })
          .catch((error) => {
            commit("ERR_MSG", error.response.data);
            reject(error);
          });
      }),
    getBlogsDetailsById: ({ commit }, data) =>
      new Promise((resolve, reject) => {
        api
          .getBlogsDetailsByIdApi(data)
          .then((response) => {
            commit("SET_BLOG_DETAILS_BY_BLOG_ID", response.data);
            resolve(response);
          })
          .catch((error) => {
            commit("ERR_MSG", error.response.data);
            reject(error);
          });
      }),
    setBlogPageNumber: ({ commit }, data) =>
      commit("SET_BLOG_CURRENT_PAGE_NUMBER", data),
  },
};
