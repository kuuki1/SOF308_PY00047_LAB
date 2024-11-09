<template>
    <div class="container">
      <!-- Thanh điều hướng với logo, menu, và dropdown -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
          <!-- Nút hiển thị trên thiết bị di động để thu gọn menu -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Các mục trong thanh điều hướng -->
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/post">
                  <i class="bi bi-list"></i> Bài viết
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-camera-video"></i> Video</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-info-circle"></i> Giới thiệu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-calendar-event"></i> Sự kiện</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-person-circle"></i> Tài khoản
                </a>
                <ul class="dropdown-menu" aria-labelledby="accountDropdown">
                  <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                  <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                  <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Tiếng Việt</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tiếng Anh</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  
    <div class="container" style="text-align: left">
      <section class="row" style="background-color: white;">
        <div class="col-8 mt-4">
          <h1 class="text-center text-info custom-font-size">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h1>
          <p>Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là phương pháp tập thể dục giúp duy trì vóc dáng, tăng cường ý chí và cải thiện sự linh hoạt, dẻo dai cho người tập. Đặc biệt, các bài tập Pilates còn có khả năng tăng cường phổi, là giải pháp hữu hiệu để phục hồi chấn thương cột sống. Sau đây hãy cùng tìm hiểu các phương pháp tập luyện này giúp phục hồi chấn thương cột sống nhanh chóng nhé!</p>
          <h4><strong>Pilates giúp phục hồi chấn thương cột sống nhanh chóng</strong></h4>
          <p>Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn phòng, đó là đau lưng, thoát vị đĩa đệm. Tuy nhiên, điều trị không đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm...</p>
          <h4><strong>Phương pháp tập Pilates Cat Cow</strong></h4>
          <p>Các bước thực hiện:</p>
          <ul>
            <li>Bắt đầu với tư thế 4 điểm: Vai và cổ tay của bạn phải thẳng hàng và vuông góc với thảm...</li>
            <li>Hít vào, vòng lưng, nâng cằm lên, mở rộng ngực.</li>
            <li>Thở ra, cong xương cụt, nâng cong lưng và đưa cằm về gần khoảng ngực.</li>
            <li>Lặp đi lặp lại động tác từ 5-7 lần.</li>
          </ul>
          <h4><strong>Lời kết</strong></h4>
          <p>Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương cột sống nhanh chóng. Để đạt được kết quả tập luyện như mong muốn, bạn cần duy trì chế độ tập luyện đều đặn, thực hiện đúng động tác...</p>
        </div>
        <div class="col-4 mt-4">
          <h5><strong>Bình luận bài viết tại đây</strong></h5>
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Nhập bình luận của bạn" v-model="newComment"></textarea>
            </div>
            <button type="submit" class="btn btn-success">Gửi bình luận</button>
          </form>
          <h5><strong>Danh sách các bình luận</strong></h5>
          <ul>
            <li v-for="comment in comments" :key="comment.id">
              <strong>{{ comment.name }}:</strong> {{ comment.text }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  
    <footer class="bg-secondary text-center text-lg-start mt-5 border-top">
      <div class="text-center p-3 bg-secondary text-white border-top">
        © Copyright by FPT Polytechnic
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "PostDetail",
    data() {
      return {
        newComment: '',
        comments: [
          { id: 1, name: 'Bình An', text: 'Bài viết rất hữu ích' },
          { id: 2, name: 'Bình An', text: 'Cảm ơn những chia sẻ bổ ích' }
        ]
      };
    },
    methods: {
      handleSubmit() {
        if (this.newComment.trim() !== '') {
          const newComment = {
            id: this.comments.length + 1,
            name: 'Người dùng',
            text: this.newComment
          };
          this.comments.push(newComment);
          this.newComment = '';  // Reset input after submit
        }
      }
    }
  };
  </script>
  
  <style>
  .custom-font-size {
    font-size: 35px !important;
  }
  </style>
  