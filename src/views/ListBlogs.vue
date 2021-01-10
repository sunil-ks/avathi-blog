<template>
  <div class="listing-page-section">
    <div class="ma-5">
      <h2 class="text-center mb-4">BLOGS</h2>
      <div class="blog-listings mb-5" v-if="blogs.length">
        <v-row class="mt-4">
          <v-col
            cols="12"
            sm="12"
            md="6"
            v-for="(item, index) in blogs"
            :key="index"
            class="cursor-pointer"
          >
            <BlogListingCard
              :blogId="item.id"
              :title="item.title"
              :body="item.body"
            />
          </v-col>
        </v-row>
      </div>
      <div class="text-center" v-if="isLoading">
        <!-- Display loading indicator till we got the data from the server. -->
        <v-progress-circular
          class="mt-5"
          indeterminate
          color="green"
        ></v-progress-circular>
      </div>

      <!-- Pagination component start -->
      <div class="text-center ma-5">
        <v-pagination
          v-model="page"
          :length="totalPages"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          color="success"
        ></v-pagination>
        <!-- Pagination component end -->
      </div>
    </div>
  </div>
</template>

<script>
import BlogListingCard from "@/components/BlogListingCard.vue";

export default {
  name: "list-blogs",
  data() {
    return {
      blogs: [],
      limit: 10,
      page: 1,
      totalPages: 0,
      isLoading: false,
    };
  },
  components: {
    BlogListingCard,
  },
  mounted() {
    this.getBlogs();
    // Here we check if the user was in any of the pages in blogs list and navigated to blog detail page.
    // (PAGINATION PERSIST)
    if (this.$store.state.blogs.blogPageNumber) {
      this.page = this.$store.state.blogs.blogPageNumber;
    }
    this.getBlogsByPageNumber();
  },
  watch: {
    page() {
      this.$store.dispatch("blogs/setBlogPageNumber", this.page);
      this.getBlogsByPageNumber();
    },
  },
  methods: {
    getBlogs() {
      // Calling this API to get the count of posts for our pagination total pages.
      this.$store
        .dispatch("blogs/getBlogs")
        .then(() => {
          const data = this.$store.state.blogs.allBlogs;
          this.totalPages = data.length / 10;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBlogsByPageNumber() {
      // Get posts by pagination
      this.isLoading = true;
      const payload = {
        page: this.page,
      };
      this.$store
        .dispatch("blogs/getBlogsByPageNumber", payload)
        .then(() => {
          this.isLoading = false;
          const data = this.$store.state.blogs.blogsByPgNumber;
          this.blogs = data;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

.listing-page-section {
  background: $pale-green;
}
@media screen and (min-width: 768px) {
  .blog-listings {
    padding-left: 1%;
    padding-right: 5%;
    padding-bottom: 5%;
    height: calc(100vh - 150px);
    overflow: auto !important;
  }
}
</style>