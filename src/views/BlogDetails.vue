<template>
  <div class="ma-5">
    <div class="d-flex justify-space-between">
      <div>
        <v-btn
          color="#1AB172"
          text
          class="mt-5 mr-4"
          @click="backToListing"
          v-if="$route.params.blogId"
        >
          <v-icon class="mr-2">mdi-chevron-left</v-icon>
          Back
        </v-btn>
      </div>
      <div>
        <h2 class="text-center mb-4 mt-5">BLOG DETAILS</h2>
      </div>
      <div></div>
    </div>

    <div class="text-center ma-5" v-if="isLoading">
      <v-progress-circular indeterminate color="green"></v-progress-circular>
    </div>
    <v-card elevation="2" class="pa-5 mb-5 mt-5" v-else>
      <h3 class="headline mb-1">
        {{ blogDetails.title }}
      </h3>
      <br />
      <p>{{ blogDetails.body }}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogDetails: {},
      isLoading: false,
    };
  },
  mounted() {
    if (this.$route.params.blogId) {
      this.getBlogDetails();
    } else {
      this.backToListing();
    }
  },
  methods: {
    getBlogDetails() {
      this.isLoading = true;
      const payload = {
        blogId: this.$route.params.blogId,
      };
      this.$store
        .dispatch("blogs/getBlogsDetailsById", payload)
        .then(() => {
          this.isLoading = false;
          const data = this.$store.state.blogs.blogDetails;
          this.blogDetails = data;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    backToListing() {
      this.$router.push({ name: "list-blogs" });
    },
  },
};
</script>