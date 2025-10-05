<template>
  <div class="row mt-5">
    <div class="col-md-3 m-auto">
      <div class="card card-body">

        <figure class="figure bild-50">
          <img :src="`${bilderServer}svg/HADES_HD_Logo_Denker_90.png`" class="img-fluid" />
          <figcaption class="figure-caption"></figcaption>
        </figure>  

        <h1 class="text-center mb-3">
          <i class="fas fa-sign-in-alt"></i> Anmeldung
        </h1>

        <form @submit.prevent="anmelden">
          <div class="form-group row">
            <label for="email" class="col-sm-4 col-form-label"></label>
            <input 
              type="email"
              id="email"
              v-model="email"
              class="form-control col-sm-8"
              placeholder="E-Mail eingeben"
              required
              autocomplete="email"
            />
          </div>

          <div class="form-group row">
            <label for="passwort" class="col-sm-4 col-form-label"></label>
            <input 
              type="password"
              id="passwort"
              v-model="passwort"
              class="form-control col-sm-8"
              placeholder="Passwort eingeben"
              required
              autocomplete="current-password"
            />
          </div>

          <br>
          <button type="submit" class="btn btn-primary btn-block">Jetzt anmelden</button>
        </form>

        <br>
        <p class="lead mt-4">
          Kein Mitglied? <router-link to="/aufnehmen">Jetzt Mitglied werden</router-link>
        </p>
        <p class="lead mt-4">
          Passwort vergessen? <router-link to="/passwortZuruecksetzen">Neues Passwort anfordern</router-link>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      passwort: ''
    }
  },
  computed: {
    bilderServer() {
      return this.$bilderServer
    }
  },
  methods: {
    anmelden() {
      fetch('/anmelden', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, passwort: this.passwort })
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
    }
  }
}
</script>

<style scoped>
/* Optional: Dein CSS hier */
</style>
