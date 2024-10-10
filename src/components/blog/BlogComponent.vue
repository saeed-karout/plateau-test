<template>
  <div class="bg-pink flex justify-center items-center  min-h-screen py-12 px-6">

    <div class="p-5 max-w-[70vw]
">

      <!-- Blog Header -->
      <h1 class="text-white text-2xl font-bold uppercase mb-6 ">Latest Blog & Article</h1>

      <hr class="divide-y-3 pt-5">
    
  
      <!-- Blog Article Card 1 -->
      <div class="flex flex-col md:flex-row items-start justify-between bg-transparent mb-8">
        <!-- Date Section -->
        <div class="text-white text-6xl font-bold mr-6">
          <div>12</div>
          <div class="text-lg uppercase">Jun</div>
          <div class="text-lg">2022</div>
        </div>
  
        <!-- Image Section -->
        <div class="mr-6">
          <img src="../../assets/images/bg1_lastSection.png" alt="Blog Image" class="w-full md:w-80 h-48 object-cover">
        </div>
  
        <!-- Article Info Section -->
        <div class="text-white flex-1">
          <div class="flex space-x-4 mb-2 text-sm text-gray-200">
            <span>Agency</span>
            <span>/</span>
            <span>Business</span>
            <span>/</span>
            <span>By Robert Helen</span>
          </div>
          <h2 class="text-xl font-bold mb-2">Worldwide Annual Spend on Digital Advertising Surpassing $325 Billion</h2>
          <p class="text-sm text-gray-300">
            We can help you channel your potential implementing your idea. We take care of our needs, crafting specific and targeted solutions.
          </p>
        </div>
      </div>
  
      <!-- Blog Article Card 2 (Replicate for other articles) -->
      <div class="flex flex-col md:flex-row items-start justify-between bg-transparent mb-8">
        <!-- Date Section -->
        <div class="text-white text-6xl font-bold mr-6">
          <div>12</div>
          <div class="text-lg uppercase">Jun</div>
          <div class="text-lg">2022</div>
        </div>
  
        <!-- Image Section -->
        <div class="mr-6">
          <img src="../../assets/images/img1.png" alt="Blog Image" class="w-full md:w-80 h-48 object-cover">
        </div>
  
        <!-- Article Info Section -->
        <div class="text-white flex-1">
          <div class="flex space-x-4 mb-2 text-sm text-gray-200">
            <span>Agency</span>
            <span>/</span>
            <span>Business</span>
            <span>/</span>
            <span>By Robert Helen</span>
          </div>
          <h2 class="text-xl font-bold mb-2">The Secret of Change is to Focus All Your Energy Not on Fighting the Old but on Building the New.</h2>
          <p class="text-sm text-gray-300">
            We can help you channel your potential implementing your idea. We take care of our needs, crafting specific and targeted solutions.
          </p>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
// No additional logic required for this static layout.
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS handles the styling */
</style>
