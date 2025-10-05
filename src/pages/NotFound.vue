<template>
  <div class="not-found-container text-center d-flex flex-column justify-content-center align-items-center vh-100">
    <div class="not-found-content">
      <h1 class="display-1 fw-bold text-primary">404</h1>
      <h2 class="mb-3">Seite nicht gefunden</h2>
      <p class="text-muted mb-4">
        Die angeforderte Seite existiert nicht oder wurde verschoben.<br>
        Überprüfe bitte die URL oder gehe zurück zur Startseite.
      </p>

      <router-link to="/" class="btn btn-primary btn-lg">
        <i class="bi bi-house-door-fill me-2"></i> Zur Startseite
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped lang="scss">
.not-found-container {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.not-found-content {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
