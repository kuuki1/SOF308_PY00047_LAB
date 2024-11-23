<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Tạo bài viết mới</h2>
    <div class="mb-3">
      <label for="title" class=" form-label">Tiêu đề bài viết</label>
      <input v-model="title" type="text" id="title" class="form-control text-start" placeholder="Tiêu đề bài viết">
    </div>
    <div class="mb-3">
      <label for="author" class="form-label">Tác giả</label>
      <input v-model="author" type="text" id="author" class="form-control text-start" placeholder="Tác giả">
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">Nội dung bài viết</label>
      <textarea v-model="content" id="content" class="form-control text-start" rows="5" placeholder="Nội dung bài viết"></textarea>
    </div>
    <button @click="submitPost" class="btn btn-primary">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

// Sử dụng defineEmits để emit sự kiện
const emit = defineEmits(['add-post']);
const title = ref('');
const content = ref('');
const author = ref('');

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
    };

    // Gửi sự kiện 'add-post' với dữ liệu của bài viết
    emit('add-post', newPost);

    // Reset các trường nhập liệu
    title.value = '';
    content.value = '';
    author.value = '';
  }
}
</script>
<style>
.container{
  text-align: left;
}
</style>
