<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./assets/icon.svg" alt="" height="40" class="d-inline-block align-text-center">
        PokeVite
        </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- CONTEÚDO DA APLICAÇÃO -->
  <div class="main">

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
