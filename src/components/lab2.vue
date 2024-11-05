<template>
  <!-- <div class="d-flex justify-content-center"> -->
  <div class="table-responsive w-25">
    <h3 style="color: red">
      <strong>Bảng Thành Phần Dinh Dưỡng</strong>
    </h3>
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th
            rowspan="2"
            class="align-middle text-center"
            style="background-color: #ffd700"
          >
            Thành Phần
          </th>
          <th colspan="2" class="text-center" style="background-color: #ffd700">
            Giá Trị
          </th>
        </tr>
        <tr>
          <th class="text-center" style="background-color: #ffd700">
            Khối Lượng
          </th>
          <th class="text-center" style="background-color: #ffd700">% DV*</th>
        </tr>
      </thead>
      <tbody style="text-align: left">
        <tr>
          <td>Calories</td>
          <td>200 kcal</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Chất Béo</td>
          <td>9 g</td>
          <td>14%</td>
        </tr>
        <tr>
          <td>Chất Béo Bão Hòa</td>
          <td>4 g</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Chất Đạm</td>
          <td>8 g</td>
          <td>16%</td>
        </tr>
        <tr>
          <td>Chất Xơ</td>
          <td>5 g</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Đường</td>
          <td>12 g</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Vitamin</td>
          <td>Vitamin C</td>
          <td>25%</td>
        </tr>
        <tr>
          <td></td>
          <td>Vitamin D</td>
          <td>10%</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="container mt-3">
    <h3>Bài tập ứng dụng Modal cho Tài khoản</h3>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#myModal"
    >
      Tài khoản
    </button>
  </div>

  <!-- Modal -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">ĐĂNG NHẬP / ĐĂNG KÝ</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container mt-5" id="cochu">
            <div class="card">
              <div class="card-body">
                <!-- Tab điều hướng -->
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#register"
                      data-bs-toggle="tab"
                      >Đăng ký</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#login" data-bs-toggle="tab"
                      >Đăng nhập</a
                    >
                  </li>
                </ul>

                <!-- Nội dung của Tab -->
                <div class="tab-content">
                  <!-- Tab Đăng Ký -->
                  <div class="tab-pane fade show active" id="register">
                    <form class="mt-3">
                      <div class="form-group">
                        <label for="name">Họ và Tên</label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Nhập họ và tên"
                        />
                      </div>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Nhập email"
                        />
                      </div>
                      <div class="form-group">
                        <label for="phone">Số Điện Thoại</label>
                        <input
                          type="tel"
                          class="form-control"
                          id="phone"
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                      <div class="form-group">
                        <label for="password">Mật Khẩu</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="Nhập mật khẩu"
                        />
                      </div>
                      <div class="form-group">
                        <label for="confirmPassword">Xác Nhận Mật Khẩu</label>
                        <input
                          type="password"
                          class="form-control"
                          id="confirmPassword"
                          placeholder="Xác nhận mật khẩu"
                        />
                      </div>
                      <div class="form-group">
                        <label>Giới Tính:</label>
                        <div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gender"
                              id="male"
                              value="Nam"
                              checked
                            />
                            <label class="form-check-label" for="male"
                              >Nam</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gender"
                              id="female"
                              value="Nữ"
                            />
                            <label class="form-check-label" for="female"
                              >Nữ</label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="language">Ngôn Ngữ</label>
                        <select class="form-control" id="language">
                          <option>Tiếng Việt</option>
                          <option>English</option>
                        </select>
                      </div>
                      <div class="form-group form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="terms"
                        />
                        <label class="form-check-label" for="terms"
                          >Tôi đồng ý với các điều khoản và điều kiện</label
                        >
                      </div>
                      <button type="submit" class="btn btn-primary btn-block">
                        Đăng Ký
                      </button>
                    </form>
                  </div>

                  <!-- Tab Đăng Nhập -->
                  <div class="tab-pane fade" id="login">
                    <form class="mt-3">
                      <div class="form-group">
                        <label for="loginEmail">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="loginEmail"
                          placeholder="Nhập email"
                        />
                      </div>
                      <div class="form-group">
                        <label for="loginPassword">Mật Khẩu</label>
                        <input
                          type="password"
                          class="form-control"
                          id="loginPassword"
                          placeholder="Nhập mật khẩu"
                        />
                      </div>
                      <button type="submit" class="btn btn-primary btn-block">
                        Đăng Nhập
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutVue",
};
</script>

<style>
#cochu {
  text-align: left;
}
</style>
