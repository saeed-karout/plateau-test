<script setup >
import SectionOne from '@/components/about/SectionOne.vue';
import SectionThree from '@/components/about/SectionThree.vue';
 import SectionTwo from '@/components/about/SectionTwo.vue';
</script>

<template>
  <div class="bg-[#0d1438] flex flex-col items-center text-center min-h-screen p-4">
    <!--! Section 1 -->
    <SectionOne />

    <!--! Section 2  -->
    <SectionTwo />

    <!--! Section 3 -->
    <SectionThree />
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
