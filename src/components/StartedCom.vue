<!-- src/components/StartedCom.vue -->
<template>
  <div v-if="showSplash" class="animated-gradient fixed inset-0 flex items-center justify-center z-50">
    <transition name="fade" mode="out-in">
      <div v-if="showLogo" key="logo" class="flex flex-col items-center">
        <!-- استبدل 'logo.svg' بمسار اللوغو الخاص بك -->
        <!-- <img src="../assets/logo.svg" alt="Logo" class="w-32 h-32 mb-4 animate-pulse"> -->

        <CirclePlateau class="w-32 h-32 mb-4 animate-pulse" />
      </div>
      <div v-else-if="showText" key="text" class="text-center">
        <!-- النص الذي يحتوي على رابط الموقع -->
        <p class="text-2xl font-semibold text-white">
          www.plateau.media
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CirclePlateau from './mix/CirclePlateau.vue';

// تعريف الأحداث المصدرة
const emit = defineEmits(['finished'])

const showSplash = ref(true)
const showLogo = ref(true)
const showText = ref(false)

onMounted(() => {
  // تحقق مما إذا كانت شاشة الترحيب قد ظهرت سابقًا في الجلسة الحالية
  if (sessionStorage.getItem('splashShown')) {
    showSplash.value = false
    emit('finished')
  } else {
    // عرض اللوغو لمدة 2 ثانية
    setTimeout(() => {
      showLogo.value = false
      showText.value = true
    }, 2000)

    // عرض النص لمدة 2 ثانية إضافية ثم إخفاء شاشة الترحيب
    setTimeout(() => {
      showSplash.value = false
      sessionStorage.setItem('splashShown', 'true')
      emit('finished')
    }, 4000)
  }
})
</script>

<style scoped>
/* تعريف تدرج لوني متحرك */
.animated-gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

/* تعريف keyframes للأنيميشن */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* تأثيرات الانتقال */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
