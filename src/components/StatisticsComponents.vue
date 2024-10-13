<template>
  <div class="bg-[url(/src/assets/images/bgNumber.png)] text-white py-12 flex flex-wrap justify-center items-center gap-8">
    <div class="flex flex-col md:flex-row items-center py-8 space-y-8 md:space-y-0 md:space-x-14">
      <div v-for="(stat, index) in stats" :key="index" class="flex flex-col items-center space-y-2" :ref="el => numberElements[index] = el">
        <!-- Incrementing number with text-stroke -->
        <div class="text-5xl md:text-7xl font-bold text-transparent text-stroke flex items-center space-x-1">
          <span>{{ displayedNumbers[index] }}</span>
          <span v-if="stat.plusSign"><sup>+</sup></span>
          <span v-if="stat.k">k</span>
        </div>

        <!-- Label under the number -->
        <p class="text-sm md:text-base text-center">{{ stat.label }}</p>
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
const numberElements = ref([]); // Store the refs for each number element

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

// Intersection Observer callback to start incrementing when visible
const startIncrementWhenVisible = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = entry.target.getAttribute('data-index');
      incrementNumber(index, stats[index].value);
      observer.unobserve(entry.target); // Stop observing once increment starts
    }
  });
};

// Create IntersectionObserver instance
let observer;

onMounted(() => {
  observer = new IntersectionObserver(startIncrementWhenVisible, { threshold: 0.5 }); // Adjust threshold as needed
  numberElements.value.forEach((el, index) => {
    el.setAttribute('data-index', index);
    observer.observe(el); // Start observing each element
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
