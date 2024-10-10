<template>
  <div
    class="bg-[url('/src/assets/images/bg-2.png')] bg-cover bg-center bg-[#0D1438] bg-opacity-50 h-[50vh] flex flex-col items-center justify-center   px-28">
    
    <div class="flex flex-wrap justify-around items-center gap-10 lg:gap-20 w-full ">
      
      <!-- القسم الأيسر: النصوص -->
      <div class="flex flex-col items-center lg:items-start flex-1 min-w-[200px]">
        <p class="uppercase text-transparent text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
          We build
        </p>
        <div class="uppercase font-bold text-transparent text-stroke text-4xl sm:text-5xl lg:text-6xl drop-shadow-lg mt-2 relative left-24">
          Brands
        </div>
      </div>
      
      <!-- القسم الأيمن: العناصر التفاعلية -->
      <div class="flex flex-col text-white justify-center items-start flex-1 min-w-[200px] gap-4">
        <div class="flex items-center justify-between w-full border-b-2 border-[#707070] py-2">
          <img class="w-16 h-16 sm:w-20 sm:h-20" src="../assets/icon/icon1.png" alt="Icon 1">
          <p class="uppercase font-semibold text-xl flex-1 text-left px-4 sm:px-6 ">
            Branding & Art
          </p>
          <a href="#">
            <img class="w-12" src="../assets/icon/go.png" alt="Go">
          </a>
        </div>
        <div class="flex items-center justify-between w-full border-b-2 border-[#707070] py-2">
          <img class="w-16 h-16 sm:w-20 sm:h-20" src="../assets/icon/icon2.png" alt="Icon 2">
          <p class="uppercase flex-1 text-left px-4 sm:px-6 text-xl font-semibold ">
            Design & Development
          </p>
          <a href="#">
            <img class="w-12" src="../assets/icon/go.png" alt="Go">
          </a>
        </div>
        <div class="flex items-center justify-between w-full border-b-2 border-[#707070] py-2">
          <img class="w-16 h-16 sm:w-20 sm:h-20" src="../assets/icon/icon3.png" alt="Icon 3">
          <p class="uppercase flex-1 text-left px-4 sm:px-6 text-xl font-semibold">
            Marketing Solutions
          </p>
          <a href="#">
            <img class="w-12" src="../assets/icon/go.png" alt="Go">
          </a>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script setup>
  // لا حاجة لسكريبت إضافي لهذه الأجزاء
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
