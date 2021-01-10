<template>
  <v-card elevation="2" class="pa-5 mb-4" @click="handleBlogSelect(blogId)">
    <v-list-item-title class="headline mb-1">
      {{ title }}
    </v-list-item-title>
    <v-list-item-subtitle>{{ body }}</v-list-item-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    blogId: Number,
    title: String,
    body: String,
  },
  methods: {
    handleBlogSelect(blogId) {
      // Route to particular blog detail page based on user blog selectionin the list by id.
      this.$router.push({
        name: "blog-details",
        params: { blogId },
      });
    },
  },
};
</script>
