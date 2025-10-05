<template>
  <div class="app-layout d-flex flex-column min-vh-100">
    <Header />
    <div class="flex-grow-1 d-flex">
      <Sidebar />
      <main class="flex-grow-1 p-3">
        <!-- Hier werden deine Seiten angezeigt -->
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
</script>
