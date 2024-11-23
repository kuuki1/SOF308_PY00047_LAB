<template>
    <h3>Bài 1</h3>
   <div class="p-5">
        <p>{{ message }}</p>
        <button class="btn btn-dark" @click="updateMessage">Bấm vào đây đi</button>
    </div>
    <h3>Bài 2</h3>
    <div class="p-5">
    <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" class="form-control" />
    <p>Giá trị bạn nhập: {{ userInput }}</p>
  </div>
  <h3>Bài 3</h3>
  <div class="col-sm-8">
    <h1>Thông tin cá nhân</h1>
    <form class="FormNv">
      <!-- Nhập họ và tên -->
      <div class="mb-3">
        <label for="name">Họ và Tên:</label>
        <input 
          id="name" 
          v-model="userInfo.name" 
          type="text" 
          class="form-control" 
          placeholder="Nhập họ và tên" 
        />
      </div>

      <!-- Nhập tuổi -->
      <div class="mb-3">
        <label for="age">Tuổi:</label>
        <input 
          id="age" 
          v-model="userInfo.age" 
          type="number" 
          class="form-control" 
          placeholder="Nhập tuổi" 
        />
      </div>

      <!-- Nhập email -->
      <div class="mb-3">
        <label for="email">Email:</label>
        <input 
          id="email" 
          v-model="userInfo.email" 
          type="email" 
          class="form-control" 
          placeholder="Nhập email" 
        />
      </div>
    </form>

    <!-- Hiển thị thông tin -->
    <div class="info-display mt-4 p-3 bg-dark text-white rounded" id="HienThi">
      <h2>Thông tin đã nhập:</h2>
      <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
      <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
      <p><strong>Email:</strong> {{ userInfo.email }}</p>
    </div>
  </div>
  <br>
  <h2>Bài 4</h2>
  <div id="app">
    <CreatePost @add-post="addPost"/>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
export default {
    name:"Lab5Page",
    methods: {
    addPost(newPost) {
    this.posts.push(newPost);
    }
},
    data() {
      return {
        posts: []
      };
    }
    

};

</script>
<script setup>

import {reactive} from 'vue';
import {ref} from 'vue';
import CreatePost from './CreatePost.vue';
import PostList from './PostList.vue';
//bai4
  const posts = ref([])
  function addPost(newPost) {
  posts.value.push(newPost);
}
  

  //bai1
    // Tạo biến phản ứng `message` với giá trị mặc định
    const message = ref('Bạn xem tôi ảo thuật nè');

    // Hàm cập nhật thông điệp
    const updateMessage = () => {
    message.value = 'Bạn vừa bấm vào đây đi :>';
    };

    //bai2
    // Tạo biến phản ứng `userInput` với giá trị mặc định
    const userInput = ref('FPL');

    //bai3
    // Tạo đối tượng thông tin cá nhân sử dụng `reactive`
    const userInfo = reactive({
    name: '',
    age: null,
    email: ''
    });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.col-sm-8 {
  margin: 0 auto;
  max-width: 600px;
}

.mb-3 {
  margin-bottom: 1rem;
}

.info-display {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background-color: #343a40;
  color: #fff;
  border-radius: 8px;
}
.FormNv{
  width: 100%;
  height: 250px;
  text-align: left;
}
#HienThi{
  text-align: left;
}
</style>