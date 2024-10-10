<template>
  <div class="bg-[url(/src/assets/images/bgNumber.png)] text-white py-12 flex flex-wrap justify-center items-center gap-8">
    <div class="flex flex-col md:flex-row items-center py-8 space-y-8 md:space-y-0 md:space-x-14">
      <div v-for="(stat, index) in stats" :key="index" class="flex flex-col items-center space-y-2">
        <!-- Incrementing number with text-stroke -->
        <div class="text-5xl md:text-7xl font-bold text-transparent text-stroke flex items-center space-x-1">
          <span>{{ displayedNumbers[index] }}</span>
          <span v-if="stat.plusSign"><sup>+</sup></span>
          <span v-if="stat.k">k</span>
        </div>

        <!-- Label under the number -->
        <p class="text-sm md:text-base text-center">{{ stat.label }}</p>

        <!-- Circular dot between items (only shows between items, not after the last one) -->
        <!-- <div v-if="index < stats.length - 1" class="flex items-center justify-center w-full">
          <div class="w-3 h-3 bg-white rounded-full mx-6 md:mx-20"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const stats = [
  { value: 20, label: 'Completed Projects', plusSign: false, k: true },
  { value: 10, label: 'Years Of Experience', plusSign: true, k: false },
  { value: 124, label: 'Employees Worldwide', plusSign: true, k: false },
  { value: 29, label: 'Top Agency Awards', plusSign: true, k: false },
];

// Create an array to hold the incremented numbers
const displayedNumbers = ref(stats.map(() => 0));

// Function to increment the number gradually
const incrementNumber = (index, targetValue) => {
  let currentValue = displayedNumbers.value[index];
  const increment = Math.ceil(targetValue / 100); // Adjust speed

  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= targetValue) {
      displayedNumbers.value[index] = targetValue; // Stop at target value
      clearInterval(interval);
    } else {
      displayedNumbers.value[index] = currentValue;
    }
  }, 50); // Update every 50ms
};

// Start incrementing numbers when the page loads
onMounted(() => {
  stats.forEach((stat, index) => {
    incrementNumber(index, stat.value);
  });
});
</script>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 2px #EB2952; /* Red border with 2px width */
  text-stroke: 2px #EB2952; /* Fallback for browsers */
}

/* Adjust text-stroke for smaller screens */
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
