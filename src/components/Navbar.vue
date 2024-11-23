<template>
  <nav>
    <h1>PY00047_LAB</h1>
    <ul>
      <li><router-link to="/lab1">Lab1</router-link></li>
      <li><router-link to="/lab2">Lab2</router-link></li>
      <li><router-link to="/lab3">Lab3</router-link></li>
      <li><router-link to="/lab5">Lab5</router-link></li>
      <li><router-link to="/lab6">Lab6</router-link></li>
      <li><router-link to="/Bai4">Lab6.Bai4</router-link></li>
      <!-- <li><router-link to="/postdetail">PostDetail</router-link></li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* Remove extra space around navbar */
* {
  margin: 0;
  padding: 0;
}

nav {
  background-color: #f8f9fa;
  padding: 1rem;
  margin-top: -58px;
}

nav h1 {
  margin-bottom: 0.5rem; /* Adjust if needed */
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}

nav ul li a {
  text-decoration: none;
  color: #000;
}
</style>
