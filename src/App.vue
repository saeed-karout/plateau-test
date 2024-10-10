<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/master/Navbar-component.vue'
import Footer from './components/master/FooterComponent.vue'

</script>

<template>
<Navbar />
  <RouterView />
<Footer />

</template>
