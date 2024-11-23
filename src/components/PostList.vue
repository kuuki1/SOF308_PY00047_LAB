<template>
  <div>
    <h2 class="text-center mb-4">Danh sách bài viết</h2>
    <div 
      v-for="(post, index) in posts" 
      :key="index" 
      :class="{ 'highlighted': post.title.length > 20 }"
      :style="{ backgroundColor: post.backgroundColor, color: post.textColor }" 
      class="post card shadow-sm mb-3"
    >
      <div class="card-body">
        <h3 class="card-title text-success">{{ post.title }}</h3>
        <h4 class="card-subtitle text-danger">{{ post.author }}</h4>
        <p class="card-text">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.post {
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
}

.highlighted {
  border: 2px solid lightgray;
}
</style>
