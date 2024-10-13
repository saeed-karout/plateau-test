<!-- src/App.vue -->
<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/master/Navbar-component.vue'
import Footer from './components/master/FooterComponent.vue'
import SplashScreen from './components/StartedCom.vue'

const showSplash = ref(true)

const handleSplashFinished = () => {
  showSplash.value = false
}
</script>

<template class="font-league">
  <div>
    <!-- شاشة الترحيب -->
    <SplashScreen v-if="showSplash" @finished="handleSplashFinished" />

    <!-- المحتوى الرئيسي يظهر بعد انتهاء شاشة الترحيب -->
    <div v-else>
      <Navbar />
      <RouterView />
      <Footer />
    </div>
  </div>
</template>

<style>
/* يمكنك إضافة أنماط عامة هنا */
</style>
