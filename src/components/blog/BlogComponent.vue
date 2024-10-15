<template>
  <div class="relative flex justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- فيديو الخلفية -->
    <video
      autoplay
      muted
      loop
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="../../assets/video/video.mp4" type="video/mp4" />
      متصفحك لا يدعم تشغيل الفيديو.
    </video>

    <!-- طبقة التراكب لتغيير اللون -->
    <div
      :class="['absolute top-0 left-0 w-full h-full z-10 transition-colors duration-1000']"
      :style="{ backgroundColor: overlayColor }"
    ></div>

    <!-- المحتوى الرئيسي -->
    <div class="relative z-20 uppercase text-white font-bold text-7xl">
      BOLG
    </div>

   
  </div>
</template>

<script>
export default {
  name: 'BackgroundVideo',
  data() {
    return {
      overlayColor: 'rgba(6, 2, 31, 0.5)', // اللون الافتراضي للتراكب
    };
  },

};
</script>

<style scoped>
/* التأكد من أن الفيديو يغطي كامل الخلفية */
video {
  object-fit: cover;
}
</style>
