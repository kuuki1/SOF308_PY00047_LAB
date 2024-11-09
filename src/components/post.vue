<template>
 <div class="container">
      <!-- Thanh điều hướng với logo, menu, và dropdown -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom  ">
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
                <a class="nav-link active" href="#"
                  ><i class="bi bi-list"></i> Bài viết</a
                >
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
  <div class="container" style="text-align: left">
    <div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-4">
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
            <div class="card">
            <div class="card-header">
                <h3 class="text-info mt-2">Bài viết nổi bật</h3>
            </div>
            <div class="card-body">
    <div class="d-flex align-items-start mb-4">
        <div>
            <h5 class="card-title">Lợi ích khi ăn rau mỗi ngày</h5>
            <p class="card-text">Tiêu thụ rau xanh hằng ngày sẽ giúp tăng cường thị lực, kiểm soát cân nặng, ngăn ngừa ung thư...</p>
        </div>
    </div>
    
    <div class="d-flex align-items-start mb-4">
        <div>
            <h5 class="card-title">9 tác dụng tuyệt vời của quả cam</h5>
            <p class="card-text">Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng chất chống oxy hóa cao...</p>
        </div>
    </div>
    
    <div class="d-flex align-items-start mb-4">
        <div>
            <h5 class="card-title">10 công dụng bất ngờ từ dầu dừa</h5>
            <p class="card-text">Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể, giúp việc sản xuất collagen trong các tế bào...</p>
        </div>
    </div>
</div>

            </div>
    </div>
    <div class="col-md-8">
        <h3 class="text-info mt-2">Tất cả bài viết</h3>
        <div class="container overflow-hidden text-center">
        <div class="row row-cols-2">
            <div class="col-6">
            <div class="p-3">
                <router-link class="nav-link" to="/postdetail" >
                    <div class="card">
                    <h5 class="card-header" style="text-align: left;">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống <i class="bi bi-chat-square"></i> 16</h5>
                    <p class="card-text" style="text-align: left; padding: 8px">
                        Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai, 
                        các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi chấn thương cột sống.
                    </p>
                </div>
                </router-link>
            </div>
            </div>

            <div class="col-6">
            <div class="p-3">
                <div class="card">
                    <h5 class="card-header" style="text-align: left;">Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của bạn <i class="bi bi-chat-square"></i> 8</h5>
                    <p class="card-text" style="text-align: left; padding: 8px">
                        Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn, bài tập này đã trở thành một cái tên quen thuộc nhờ có rất nhiều người nổi tiếng theo dõi.
                    </p>
                </div>
            </div>
            </div>

            <div class="col-6">
            <div class="p-3">
                <div class="card">
                    <h5 class="card-header" style="text-align: left;">Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn <i class="bi bi-chat-square"></i> 5</h5>
                    <p class="card-text" style="text-align: left; padding: 8px">
                        Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và linh hoạt mà còn có nhiều lợi ích cho sức khỏe tim mạch. 
                        Bài viết này sẽ tìm hiểu sâu hơn về tác động tích cực của việc tập Pilates đối với sức khỏe tim mạch.
                    </p>
                </div>
            </div>
            </div>

            <div class="col-6">
            <div class="p-3">
                <div class="card">
                    <h5 class="card-header" style="text-align: left;">EAT CLEAN: Nên Và Không Nên Ăn Thực Phẩm Nào? <i class="bi bi-chat-square"></i> 3</h5>
                    <p class="card-text" style="text-align: left; padding: 8px">
                        Chúng ta luôn chú trọng lựa chọn thực phẩm sạch và duy trì lối sống lành mạnh. 
                        Vậy chế độ ăn Eat clean nên và không nên ăn gì trong thực đơn hằng ngày để cân bằng tháp dinh dưỡng cho cơ thể?
                    </p>
                </div>
            </div>
            </div>
        </div>
        </div>
        
    </div>

</div>
</div>
<div class="container mt-5">
        <!-- Pagination Control -->
        <ul class="pagination justify-content-center">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </div>
    <footer class="bg-secondary text-center text-lg-start mt-5 border-top">
  <div class="text-center p-3 bg-secondary text-white border-top">
    © Copyright by FPT Polytechnic
  </div>
</footer>
</template>

<script>
export default {
    name:"PostVue"
}
</script>

<style>
.navbar-nav .nav-link.active {
  color: #28a745; /* Bootstrap's green color */
  border-bottom: 3px solid #28a745;
}
</style>