<!-- src/components/BackgroundSection.vue -->
<template>
  <div class="relative  h-screen z-5">
    <!-- إضافة حركة Lottie كخلفية -->
    <LottieBackground
      :animationData="currentAnimationData"
      :autoplay="true"
      :loop="true"
    />

    <!-- محتويات أخرى يمكن إضافتها هنا -->
    <div class="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <h1
        class="text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 via-white to-pink animate-gradient md:text-6xl text-4xl font-bold"
      >
        Welcome to our agency
      </h1>

    </div>
  </div>
</template>

<script>
import LottieBackground from '@/components/LottieBackground.vue';
import animationDataDesktop from '@/assets/hero.json';
import animationDataMobile from '@/assets/hero_mob.json';

export default {
  name: 'BackgroundSection',
  components: {
    LottieBackground,
  },
  data() {
    return {
      isDesktop: window.innerWidth >= 768, // تحديد حجم الشاشة
      currentAnimationData: null, // البيانات الحالية للحركة
      animationDataDesktop, // بيانات الحركة للكمبيوتر المكتبي
      animationDataMobile, // بيانات الحركة للموبايل
    };
  },
  methods: {
    handleResize() {
      const wasDesktop = this.isDesktop;
      this.isDesktop = window.innerWidth >= 768;
      if (wasDesktop !== this.isDesktop) {
        this.currentAnimationData = this.isDesktop ? this.animationDataDesktop : this.animationDataMobile;
      }
    },
  },
  mounted() {
    // تعيين البيانات الحالية بناءً على حجم الشاشة
    this.currentAnimationData = this.isDesktop ? this.animationDataDesktop : this.animationDataMobile;
    // إضافة مستمع لتغيير حجم النافذة
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    // إزالة المستمع عند إلغاء تحميل المكون
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>



<style  scoped>


.animate-gradient {
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
}

@keyframes gradientAnimation {
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
</style>