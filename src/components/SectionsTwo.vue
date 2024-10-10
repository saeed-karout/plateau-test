<template>
  <div
    class="bg-[url('/src/assets/images/bg-2.png')] bg-cover bg-center bg-[#0D1438] bg-opacity-50 h-[70vh] flex flex-col items-center justify-center px-6 md:px-28">
    
    <div class="flex flex-col md:flex-row flex-wrap justify-around items-center gap-10 lg:gap-20 w-full">
      
      <!-- Left Section: Text -->
      <div class="flex flex-col items-center md:items-start flex-1 min-w-[200px] text-center md:text-left">
        <p class="uppercase text-transparent text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          We build
        </p>
        <div class="uppercase font-bold text-transparent text-stroke text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg mt-2 relative left-16">
          Brands
        </div>
      </div>
      
      <!-- Right Section: Interactive Elements -->
      <div class="flex flex-col text-white justify-center items-center md:items-start flex-1 min-w-[200px] gap-4">
        <div class="flex items-center justify-between w-full border-b-2 border-[#707070] py-2">
          <img class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" src="../assets/icon/icon1.png" alt="Icon 1">
          <p class="uppercase font-semibold text-base sm:text-lg md:text-xl flex-1 text-left px-4 sm:px-6">
            Branding & Art
          </p>
          <a href="#">
            <img class="w-8 sm:w-10 md:w-12" src="../assets/icon/go.png" alt="Go">
          </a>
        </div>
        <div class="flex items-center justify-between w-full border-b-2 border-[#707070] py-2">
          <img class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" src="../assets/icon/icon2.png" alt="Icon 2">
          <p class="uppercase text-base sm:text-lg md:text-xl font-semibold flex-1 text-left px-4 sm:px-6">
            Design & Development
          </p>
          <a href="#">
            <img class="w-8 sm:w-10 md:w-12" src="../assets/icon/go.png" alt="Go">
          </a>
        </div>
        <div class="flex items-center justify-between w-full border-b-2 border-[#707070] py-2">
          <img class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" src="../assets/icon/icon3.png" alt="Icon 3">
          <p class="uppercase text-base sm:text-lg md:text-xl font-semibold flex-1 text-left px-4 sm:px-6">
            Marketing Solutions
          </p>
          <a href="#">
            <img class="w-8 sm:w-10 md:w-12" src="../assets/icon/go.png" alt="Go">
          </a>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script setup>
// No additional script needed for this layout.
</script>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 2px #EB2952; /* Red stroke with 2px width */
  text-stroke: 2px #EB2952; /* Fallback for browsers */
}

/* Reduce stroke width for smaller screens */
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
