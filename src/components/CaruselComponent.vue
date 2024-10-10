<template>
  <div class="bg-[#0E1337CC]">
    <div class="relative flex justify-center items-center  h-[300px] w-full bg-transparent overflow-hidden">
      <!-- Carousel content -->
      <div class="absolute flex w-[300%] transition-transform duration-500 " :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
        <!-- تأكد من أن كل عنصر يأخذ عرض الحاوية بالكامل -->

        <div v-for="(text, index) in texts" :key="text.id" class="w-full h-full flex justify-center flex-col items-center gap-8 shrink-0">
            <div class="">
                <img class="w-12" src="../assets/icon/qutation.svg" alt="">
            </div>
          <h2 class="text-4xl  max-w-[700px]  text-center self-center text-white">{{ text.title }}</h2>
          <p class="text-white text-sm opacity-50">
            {{ text.subtitle }}
          </p>
        </div> 
      </div>

      <!-- Navigation buttons -->
      <button @click="prevSlide" class="absolute left-4  text-black px-3 py-1 rounded-full">
      <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-4xl" />
      </button>
      <button @click="nextSlide" class="absolute right-4  text-black px-3 py-1 rounded-full">
        <font-awesome-icon icon="fa-solid fa-chevron-right"  class="text-4xl" />
      </button>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';

// النصوص التي سيتم عرضها في الكاروسيل
const texts = ref([
  { id: 1, title: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis eligendi delectus tempore, illo nobis corporis " , subtitle:"123" },
  { id: 2, title: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis eligendi delectus tempore, illo nobis corporis" , subtitle:"456" },
  { id: 3, title: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis eligendi delectus tempore, illo nobis corporis" , subtitle:"789" }
]);

const activeIndex = ref(0);

// دالة للتنقل إلى الشريحة السابقة
const prevSlide = () => {
  activeIndex.value = (activeIndex.value === 0) ? texts.value.length - 1 : activeIndex.value - 1;
};

// دالة للتنقل إلى الشريحة التالية
const nextSlide = () => {
  activeIndex.value = (activeIndex.value === texts.value.length - 1) ? 0 : activeIndex.value + 1;
};
</script>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 2px #EB2952; /* حدود ملونة بعرض 2px */
  text-stroke: 2px #EB2952; /* دعم إضافي لبعض المتصفحات */
}

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
