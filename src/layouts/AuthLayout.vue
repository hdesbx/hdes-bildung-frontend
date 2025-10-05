<template>
  <div class="auth-layout d-flex flex-column min-vh-100">
    <main class="flex-grow-1 d-flex align-items-center justify-content-center p-3">
      <router-view />
    </main>
    <footer class="text-center py-3 text-muted">
      <small>&copy; 2025 HADES Bildung</small>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.auth-layout {
  background-color: #adb2b7ff;
}
</style>
