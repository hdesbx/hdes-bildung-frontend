<template>
  <div class="row mt-5">
    <div class="col m-auto">
      <div class="card card-body">
        <figure class="figure bild-50">
          <img :src="`${bilderServer}svg/HADES_HD_Logo_Denker_90.png`" class="img-fluid" />
          <figcaption class="figure-caption"></figcaption>
        </figure>

        <h1 class="text-center mb-3">
          <i class="fas fa-user-plus"></i> Registrieren
        </h1>

        <form @submit.prevent="registrieren">
          <div class="form-group row">
            <input v-model="schule" class="form-control" placeholder="Aufnahmekennung 1 eingeben" />
          </div>

          <div class="form-group row">
            <input v-model="klasse" class="form-control" placeholder="Aufnahmekennung 2 eingeben" />
          </div>

          <div class="form-group row">
            <input v-model="vorname" class="form-control" placeholder="Vornamen eingeben" />
          </div>

          <div class="form-group row">
            <input v-model="nachname" class="form-control" placeholder="Nachnamen eingeben" />
          </div>

          <div class="form-group row">
            <input v-model="email" type="email" class="form-control" placeholder="Email eingeben" />
          </div>

          <button type="submit" class="btn btn-primary btn-block mt-3">
            Jetzt registrieren
          </button>
        </form>

        <p class="lead mt-4">
          Sie sind bereits registriert?
          <router-link to="/anmelden">Zur Anmeldung</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { bilderServer } from '@/config/constants.js';
import { ref } from 'vue'


const schule = ref('')
const klasse = ref('')
const vorname = ref('')
const nachname = ref('')
const email = ref('')

const registrieren = async () => {
  const payload = {
    schule: schule.value,
    klasse: klasse.value,
    vorname: vorname.value,
    nachname: nachname.value,
    email: email.value,
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/aufnehmen`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (res.ok) {
      alert('Registrierung erfolgreich!')
      // z.B. weiterleiten
      // router.push('/anmelden')
    } else {
      alert(`Fehler: ${data.message}`)
    }
  } catch (err) {
    console.error(err)
    alert('Serverfehler.')
  }
}
</script>

<style scoped>
/* Dein Styling hier */
</style>
