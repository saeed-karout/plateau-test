<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-28">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-[url('src/assets/bg/bg-carousl-about.jpg')] loading bg-cover bg-center"></div>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>
    
    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl text-center px-4">
      <div class="flex justify-center mb-4">
        <img src="../../assets/images/title-bg.png" lazy="loading" class="w-48 sm:w-72 md:w-96 lg:w-[600px]" alt="Title Background">
      </div>
      <div>
        <p class="text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-xl sm:max-w-2xl">
          Your brand's digital boost! From viral campaigns and SEO to IT solutions, photography, app development, and real estate marketing – we bring bold ideas and big results.
        </p>
      </div>
    </div>

    <!-- Carousel -->
    <div 
      class="relative flex justify-center items-center w-full mt-8 px-4" 
      @mouseenter="pauseCarousel" 
      @mouseleave="startCarousel"
    >
      <div class="relative flex justify-center items-center h-72 sm:h-80 md:h-96 w-full bg-transparent overflow-hidden">
        <!-- Carousel content with transition -->
        <transition name="slide" mode="out-in">
          <div 
            :key="texts[activeIndex].id" 
            class="w-full h-full flex flex-col justify-center items-center gap-6 sm:gap-8 px-4"
          >
            <!-- Quotation Icon -->
            <div>
              <img class="w-8 sm:w-12" :src="quotationIconSrc" alt="Quotation Icon">
            </div>
            <!-- Title with Responsive Text Size -->
            <h2 class="text-lg sm:text-xl md:text-2xl lg:text-4xl max-w-md sm:max-w-2xl text-center text-white">
              {{ texts[activeIndex].title }}
            </h2>
            <!-- Subtitle with Responsive Font Size -->
            <p class="text-white text-xs sm:text-sm md:text-base opacity-50 text-center max-w-sm sm:max-w-lg">
              {{ texts[activeIndex].subtitle }}
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import quotationIconSrc from '../../assets/icon/qutation.svg';

// النصوص التي ستظهر في الكاروسيل
const texts = ref([
  { id: 1, title: "Crazy ideas, crazy results that's how we roll at Plateau!", subtitle: "1" },
  { id: 2, title: "Creativity that clicks, results that stick", subtitle: "2" },
  { id: 3, title: "Your success is our strategy.", subtitle: "3" }
]);

const activeIndex = ref(0);
let carouselInterval = null;

// دالة للانتقال إلى الشريحة التالية
const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % texts.value.length;
};

// بدء الكاروسيل التلقائي
const startCarousel = () => {
  if (carouselInterval) return;
  carouselInterval = setInterval(() => {
    nextSlide();
  }, 3000); // التبديل كل 5 ثوانٍ
};

// إيقاف الكاروسيل التلقائي
const pauseCarousel = () => {
  clearInterval(carouselInterval);
  carouselInterval = null;
};

// بدء الكاروسيل عند تحميل المكون
onMounted(() => {
  startCarousel();
});

// تنظيف الكاروسيل عند تدمير المكون
onBeforeUnmount(() => {
  pauseCarousel();
});
</script>

<style scoped>
/* تعريف تأثيرات الانتقال باستخدام التحويل (Transform) */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* تأثيرات أخرى يمكنك إضافتها إذا رغبت */
.text-stroke {
  -webkit-text-stroke: 2px #EB2952; /* حدود ملونة بعرض 2px */
  text-stroke: 2px #EB2952; /* نسخة احتياطية لحدود النص */
}

/* تعديلات استجابة للحدود على الشاشات الصغيرة */
@media (max-width: 640px) {
  .text-stroke {
    -webkit-text-stroke: 1.5px #EB2952;
    text-stroke: 1.5px #EB2952;
  }
}

@media (max-width: 480px) {
  .text-stroke {
    -webkit-text-stroke: 1px #EB2952;
    text-stroke: 1px #EB2952;
  }
}
</style>
