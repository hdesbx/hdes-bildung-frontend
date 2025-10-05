<template>
  <div class="row">
    <div class="col-md-4 m-auto">
      <div class="card card-body text-center">
        <h1>Digitale Bildung</h1>

        <figure class="figure bild-50">
          <img :src="`${bilderServer}svg/HADES_HD_Logo_Denker_90.png`" class="img-fluid" />
          <figcaption class="figure-caption"></figcaption>
        </figure>

        <router-link to="/aufnehmen" class="btn btn-primary btn-block mb-2">Registrieren</router-link>
        <router-link to="/anmelden" class="btn btn-secondary btn-block mb-2">Anmelden</router-link>
        <router-link to="/kursAnmelden" class="btn btn-warning btn-block mb-2">Kurs starten</router-link>

        <figure class="figure bild-100">
          <img :src="`${bilderServer}anmelden.gif`" class="img-fluid" />
          <figcaption class="figure-caption"></figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    bilderServer() {
      return this.$bilderServer
    }
  }
}
</script>

<style scoped>
/* Optional: Dein CSS hier */
</style>
