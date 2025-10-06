<template>
  <div class="row mt-5">
    <div class="col-md-3 m-auto">
      <div class="card card-body">

        <!-- Logo -->
        <figure class="figure bild-50">
          <img :src="`${bilderServer}svg/HADES_HD_Logo_Denker_90.png`" class="img-fluid" />
          <figcaption class="figure-caption"></figcaption>
        </figure>

        <h1 class="text-center mb-3">
          <i class="fas fa-sign-in-alt"></i> Anmeldung
        </h1>

        <!-- Formular -->
        <form @submit.prevent="anmelden">
          <div class="form-group row">
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="E-Mail eingeben"
              required
              autocomplete="email"
            />
          </div>

          <div class="form-group row mt-2">
            <input
              v-model="passwort"
              type="password"
              class="form-control"
              placeholder="Passwort eingeben"
              required
              autocomplete="current-password"
            />
          </div>

          <button type="submit" class="btn btn-primary btn-block mt-3">
            Jetzt anmelden
          </button>
        </form>

        <!-- Links -->
        <p class="lead mt-4">
          Kein Mitglied?
          <router-link to="/registrieren">Jetzt Mitglied werden</router-link>
        </p>
        <p class="lead mt-4">
          Passwort vergessen?
          <router-link to="/passwortZuruecksetzen">Neues Passwort anfordern</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'

// ✅ Zugriff auf globale Property aus main.js
const { appContext } = getCurrentInstance()
const bilderServer = computed(() => appContext.config.globalProperties.$bilderServer)

const router = useRouter()
const email = ref('')
const passwort = ref('')

const anmelden = async () => {
  const payload = {
    email: email.value,
    passwort: passwort.value
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/anmelden`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'include'
    })

    const data = await res.json()

    if (res.ok) {
      alert('Anmeldung erfolgreich!')
      router.push('/dashboard') // ggf. anpassen
    } else {
      alert(`Fehler: ${data.message || 'Ungültige Anmeldedaten'}`)
    }
  } catch (err) {
    console.error('Login-Fehler:', err)
    alert('Serverfehler. Bitte später erneut versuchen.')
  }
}
</script>


<style scoped>
/* Optional – für spätere UI-Anpassungen */
</style>
