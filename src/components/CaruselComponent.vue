<template>
  <div class="bg-[url('/src/assets/bg/bg-pin.png')]">
    <div class="relative flex justify-center items-center h-[300px] w-full bg-transparent overflow-hidden">
      <!-- Carousel content -->
      <div class="absolute flex w-full transition-transform duration-500" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
        <!-- Each slide takes the full width -->
        <div v-for="(text) in texts" :key="text.id" class="w-full h-full flex flex-col justify-center items-center gap-8 shrink-0">
          <!-- Quotation Icon -->
          <div>
            <img class="w-12" src="../assets/icon/qutation.svg" alt="Quotation Icon">
          </div>
          <!-- Title with Responsive Text Size -->
          <h2 class="text-xl md:text-2xl lg:text-4xl max-w-[700px] text-center text-white px-4">
            {{ text.title }}
          </h2>
          <!-- Subtitle with Responsive Font Size -->
          <p class="text-white text-xs md:text-sm lg:text-base opacity-50 text-center px-4">
            {{ text.subtitle }}
          </p>
        </div>
      </div>

      <!-- Navigation buttons -->
      <button @click="prevSlide" class="absolute left-[10vw]  text-white  opacity-30 px-3 py-1 rounded-full">
        <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-2xl md:text-4xl" />
      </button>
      <button @click="nextSlide" class="absolute right-[10vw] text-white opacity-30 px-3 py-1 rounded-full">
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-2xl md:text-4xl" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Texts to display in the carousel
const texts = ref([
  { id: 1, title: "Crazy ideas, crazy results that's how we roll at Plateau !", subtitle: "1" },
  { id: 2, title: "Crazy ideas, crazy results that's how we roll at Plateau !", subtitle: "2" },
  { id: 3, title: "Crazy ideas, crazy results that's how we roll at Plateau !", subtitle: "3" }
]);

const activeIndex = ref(0);

// Function to go to the previous slide
const prevSlide = () => {
  activeIndex.value = (activeIndex.value === 0) ? texts.value.length - 1 : activeIndex.value - 1;
};

// Function to go to the next slide
const nextSlide = () => {
  activeIndex.value = (activeIndex.value === texts.value.length - 1) ? 0 : activeIndex.value + 1;
};
</script>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 2px #EB2952; /* Colored border with 2px width */
  text-stroke: 2px #EB2952; /* Fallback for text stroke */
}

/* Responsive adjustments for text stroke on smaller screens */
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
