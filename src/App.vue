<script>

</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="./assets/icon.svg" alt="" height="40" class="d-inline-block align-text-center">
        PokeVite
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- CONTEÚDO DA APLICAÇÃO -->
  <div class="main">
    <router-view></router-view>
  </div>
  <!-- -->

  <footer class="bg-primary text-light py-3 text-center">
    <div>
      <span>&copy 2022</span>
    </div>
  </footer>
</template>

<style>
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
