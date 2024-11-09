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
              <!-- Mục Bài viết với biểu tượng -->
              <li class="nav-item">
                <router-link class="nav-link" to="/post">
                <i class="bi bi-list"></i> Bài viết
              </router-link>
              </li>
              <!-- Mục Video với biểu tượng -->
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-camera-video"></i> Video</a
                >
              </li>
              <!-- Mục Giới thiệu với biểu tượng -->
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-info-circle"></i> Giới thiệu</a
                >
              </li>
              <!-- Mục Sự kiện với biểu tượng -->
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-calendar-event"></i> Sự kiện</a
                >
              </li>
              <!-- Dropdown Tài khoản với các tùy chọn -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-person-circle"></i> Tài khoản
                </a>
                <ul class="dropdown-menu" aria-labelledby="accountDropdown">
                  <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                  <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Đăng ký thành viên</a>
                  </li>
                </ul>
              </li>
            </ul>
            <!-- Tùy chọn ngôn ngữ -->
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
    <div class="container mt-4">
        <div class="row">
          <!-- Về tôi section (already present) -->
          <div class="col-md-4">
            <h2 class="text-info mb-3">Về tôi</h2>
            <div class="card blog">
              <div class="card-body">
                <h5 class="card-title">Giới thiệu bản thân</h5>
                <p class="card-text">
                  TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập <br />
                  Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn
                  cách mình sẽ sống
                </p>
              </div>
            </div>
            <h3 class="text-info mt-2">Chuyên mục</h3>
            <ul class="list-group">
              <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
                <a class="nav-link text-white" href="#">Chế độ tập</a>
                <span class="badge bg-primary rounded-pill">12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
                <span class="badge bg-primary rounded-pill">15</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
                <span class="badge bg-primary rounded-pill">99</span>
              </li>
            </ul>
            <br>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Đọc nhiều</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Xem nhiều</a>
                </li>
              </ul>
              <div class="list-group mt-2">
              <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                  <div>Biết ơn đời, đời sẽ thương ta</div>
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                  <div>10 công dụng bất ngờ từ dầu dừa</div>
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                  <div>Lợi ích khi ăn rau mỗi ngày</div>
              </a>
          </div>
          </div>
      
          <!-- Blog của tôi section -->
          <div class="col-md-8">
            <h2 class="text-info mb-3">Blog của tôi</h2>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h5>
                    <p class="card-text">
                      Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp dài hơn, kéo giãn...
                    </p>
                    <p class="card-text"><small class="text-muted">16 bình luận</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div>
                  Biết ơn đời, đời sẽ thương ta
                </div>
                <span class="badge bg-secondary">30</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div>
                  9 tác dụng tuyệt vời của quả cam
                </div>
                <span class="badge bg-secondary">28</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div>
                  10 công dụng bất ngờ từ dầu dừa
                </div>
                <span class="badge bg-secondary">15</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div>
                  Lợi ích khi ăn rau mỗi ngày
                </div>
                <span class="badge bg-secondary">12</span>
              </a>
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-info text-white">Xem thêm</button>
            </div>
            <br>
            <!--Video đừng bỏ lỡ-->
            <h2 class="text-info mb-3" style="text-align: center;">VIDEO - ĐỪNG BỎ LỠ</h2>
            <div class="container text-left">
              <div class="row row-cols-2">
              <div class="col">
                <div class="card mb-3">
                  <div class="card-body">
                <h4 class="card-title">Đi xa để trưởng thành hơn</h4>
                <p class="card-text">
                      Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một ngày được bay nhảy trên những phương trời mới lạ.
                      Để rồi những cô đơn mê mải.
                    </p>
             </div>
              </div>
              </div>
              <div class="col">
                <div class="card mb-3">
                  <div class="card-body">
                <h4 class="card-title">Chút tâm tư những ngày cuối năm</h4>
                <p class="card-text">
                      Cuồng quay cuộc sống dẫu có vội vàng, dẫu có tấp nập đến đâu thì cũng nằm ngoài quy luật tự nhiên và bất biến xuân, hạ, thu, đông.
                    </p>
             </div>
              </div>
              </div>
              
              <div class="col">
                <div class="card mb-3">
                  <div class="card-body">
                <h4 class="card-title">Ước gì được trở về tuổi thơ</h4>
                <p class="card-text">
                  Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một ngày được bay nhảy trên những phương trời mới lạ.
                  Để rồi những cô đơn mê mải.
                    </p>
             </div>
              </div>
              </div>

              <div class="col">
                <div class="card mb-3">
                  <div class="card-body">
                <h4 class="card-title">Ba người thầy vĩ đại</h4>
                <p class="card-text">
                      Ta xem vạn vật là thầy. Tinh thần học hỏi của ta luôn rộng mở hơn tất cả các người.
                      Ta học hỏi tất cả mọi vật.
                    </p>
             </div>
              </div>
              </div>


            </div>
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-info text-white">Xem thêm</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
<footer class="bg-secondary text-center text-lg-start mt-5 border-top">
  <div class="text-center p-3 bg-secondary text-white border-top">
    © Copyright by FPT Polytechnic
  </div>
</footer>
</template>

<script>
export default {
    name:"LabBa"
}
</script>

<style scoped>
.dropdown-toggle::after {
  display: none;
}
.container{
    text-align: left;
}

</style>