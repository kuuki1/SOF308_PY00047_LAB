<template>
  <h3>Bài 1</h3>
  <div class="container">
    <h2>Nhập điểm trung bình</h2>
    <form @submit.prevent="xepLoai">
      <label for="dtb">Điểm trung bình:</label>
      <input v-model="diemTrungBinh" type="text" id="dtb" min="0" max="10" required />
      <button type="submit">Xem xếp loại</button>
    </form>

    <div v-if="xepLoaiResult" class="result">
      <h3>Xếp loại: {{ xepLoaiResult }}</h3>
    </div>
  </div>
  <br>
  <h3>Bài 2</h3>
  <div class="container">
    <h3>Nhập tháng của bạn:</h3>
    <input type="number" v-model.number="month">
    <p v-if="month < 1 || month > 12">Vui lòng nhập tháng từ 1 đến 12</p>
    <p v-else-if="month >=1 && month <=3">Mùa Xuân</p>
    <p v-else-if="month <=6">Mùa Hè</p>
    <p v-else-if="month <=9">Mùa Thu</p>
    <p v-else>Mùa đông</p>
  </div>
  <br>
  <h3>Bài 3</h3>
  <div class="container1">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(item, index) in items" :key="index">
        <div class="card h-100">
          <div class="img-wrapper">
            <img :src="item.image" :alt="item.title" class="card-img-top img-fluid" />
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text flex-grow-1">{{ item.content }}</p>
            <button class="btn btn-info mt-auto">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
</template>

<script>
import { ref } from 'vue';
// Import images
import img1 from "../img/orange_300x300.jpg";
import img2 from "../img/sesameoil_300x300.jpg";
import img3 from "../img/spinach_300x300.jpg";

export default {
  name: "Lab6Page",
  setup() {
    const diemTrungBinh = ref(null); // Điểm trung bình
    const xepLoaiResult = ref(null); // Kết quả xếp loại
    const month = ref(1);

    const items = ref([
      {
        title: "8 loại rau củ quả giàu canxi",
        content:
          "Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất...",
        image: img1,
      },
      {
        title: "Các loại gia vị tốt cho sức khỏe",
        content:
          "Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác...",
        image: img2,
      },
      {
        title: "9 loại đậu bổ dưỡng nên dùng nhiều",
        content:
          "Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất...",
        image: img3,
      },
    ]);

    const xepLoai = () => {
      // Kiểm tra xếp loại dựa trên điểm trung bình
      if (diemTrungBinh.value < 5.0) {
        xepLoaiResult.value = "Yếu";
      } else if (diemTrungBinh.value >= 5.0 && diemTrungBinh.value < 6.5) {
        xepLoaiResult.value = "Trung bình";
      } else if (diemTrungBinh.value >= 6.5 && diemTrungBinh.value < 8.0) {
        xepLoaiResult.value = "Khá";
      } else if (diemTrungBinh.value >= 8.0 && diemTrungBinh.value < 9.0) {
        xepLoaiResult.value = "Giỏi";
      } else if (diemTrungBinh.value >= 9.0) {
        xepLoaiResult.value = "Xuất sắc";
      }
    };

    return {
      diemTrungBinh,
      xepLoaiResult,
      month,
      items,
      xepLoai,
    };
  },
  //Bài 4
};
</script>

<style scoped>
.card {
  height: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.img-wrapper {
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 0.9rem;
  color: #666;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s;
}

.btn-info:hover {
  background-color: #138496;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

.result {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
