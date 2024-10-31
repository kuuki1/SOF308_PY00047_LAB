<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Health Journey
        </a>
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
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="#">Articles</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Events</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
              <ul class="dropdown-menu" aria-labelledby="accountDropdown">
                <li><a class="dropdown-item" href="#">Login</a></li>
                <li><a class="dropdown-item" href="#">Forgot Password</a></li>
                <li><a class="dropdown-item" href="#">Register</a></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">English</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Vietnamese</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Content Section -->
    <div class="container mt-4">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-4">
          <h2 class="text-info mb-3">About Me</h2>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Dr. Alex Tran</h5>
              <p class="card-text">
                Independent Health Consultant<br />
                Motto: "Life is not about finding yourself. Life is about creating yourself."
              </p>
            </div>
          </div>
          <h3 class="text-info mt-3">Categories</h3>
          <ul class="list-group">
            <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
              <a class="nav-link text-white" href="#">Exercise Routines</a>
              <span class="badge bg-primary rounded-pill">12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a class="nav-link" href="#">Nutrition Plans</a>
              <span class="badge bg-primary rounded-pill">15</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a class="nav-link" href="#">Wellness Tips</a>
              <span class="badge bg-primary rounded-pill">99</span>
            </li>
          </ul>
        </div>

        <!-- Blog Section -->
        <div class="col-md-8">
          <h2 class="text-info mb-3">My Blog</h2>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4 bg-light d-flex justify-content-center align-items-center">
                <img src="https://via.placeholder.com/150" class="img-fluid rounded-start" alt="Pilates for spine recovery">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Pilates for Spine Recovery</h5>
                  <p class="card-text">
                    Beyond just staying in shape, Pilates helps improve flexibility, muscle endurance, and overall wellness...
                  </p>
                  <p class="card-text"><small class="text-muted">16 comments</small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div>Gratitude is the best attitude</div>
              <span class="badge bg-secondary">30</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div>9 Surprising Benefits of Oranges</div>
              <span class="badge bg-secondary">28</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div>10 Amazing Uses of Coconut Oil</div>
              <span class="badge bg-secondary">15</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div>Why Eating Vegetables Daily is Essential</div>
              <span class="badge bg-secondary">12</span>
            </a>
          </div>
          <div class="text-center mt-3">
            <button class="btn btn-info text-white">View More</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-secondary text-center text-lg-start mt-5 border-top">
      <div class="text-center p-3 bg-secondary text-white border-top">
        © 2024 Health Journey
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Remove default dropdown indicator */
.dropdown-toggle::after {
  display: none;
}
</style>
