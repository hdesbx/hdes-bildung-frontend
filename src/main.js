import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ eigenes SCSS importieren
import './assets/main.scss'

// 🔧 Umgebung automatisch erkennen
const isLocal = window.location.hostname === 'localhost'

// 🔧 Bilder-Server abhängig von Umgebung wählen
//const bilderServer = isLocal
//  ? import.meta.env.VITE_BILDERSERVER_LOCAL || "http://localhost:4000/images/"
//  : import.meta.env.VITE_BILDERSERVER_PROD || "https://hdesbx.de/images/"

const bilderServer = import.meta.env.VITE_BILDERSERVER_LOCAL || "http://localhost:4000/images/"


// ✅ App erstellen
const app = createApp(App)

// ✅ Global verfügbar machen
app.config.globalProperties.$bilderServer = bilderServer

// ✅ Router einbinden
app.use(router)

// ✅ App mounten
app.mount('#app')
