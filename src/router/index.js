import Vue from "vue";
import Router from "vue-router";

// Blogs related views
import ListBlogs from "@/views/ListBlogs.vue";
import BlogDetails from "@/views/BlogDetails.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: ListBlogs,
      name: "list-blogs",
      meta: { requiresAuth: false },
    },
    {
      path: "/blog-detail/:blogId?",
      component: BlogDetails,
      name: "blog-details",
      meta: { requiresAuth: false },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // check for conditions before entering any new route here.
  // As our current app does not need much of conditions, just console logging here.
  console.log(to, from);
  next();
});

export { router };
