<template>
  <div class="bg-[#e7c0b8] flex justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="p-5 max-w-7xl w-full">

      <!-- رأس المدونة -->
      <h1 class="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-6 text-center">Latest Blog & Articles</h1>

      <hr class="border-t-3 border-gray-300 mb-12">

      <!-- بطاقة المقالة الأولى -->
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between bg-transparent mb-8 space-y-6 md:space-y-0">
        <!-- قسم التاريخ -->
        <div class="text-white text-4xl sm:text-5xl md:text-6xl font-bold mr-6 flex flex-col items-center md:items-start">
          <div>12</div>
          <div class="text-lg uppercase">Jun</div>
          <div class="text-lg">2022</div>
        </div>

        <!-- قسم الصورة -->
        <div class="w-full md:w-80 flex-shrink-0">
          <img src="../../assets/images/bg1_lastSection.png" alt="Blog Image" class="w-full h-48 sm:h-60 md:h-48 object-cover rounded-lg">
        </div>

        <!-- قسم معلومات المقالة -->
        <div class="text-white flex-1 space-x-4">
          <div class="flex flex-wrap space-x-4 mb-2 text-sm text-gray-200">
            <span>Agency</span>
            <span>/</span>
            <span>Business</span>
            <span>/</span>
            <span>By Robert Helen</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold mb-2">Worldwide Annual Spend on Digital Advertising Surpassing $325 Billion</h2>
          <p class="text-sm sm:text-base text-gray-300">
            We can help you channel your potential implementing your idea. We take care of our needs, crafting specific and targeted solutions.
          </p>
        </div>
      </div>

      <!-- بطاقة المقالة الثانية (يمكن تكرارها للمقالات الأخرى) -->
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between bg-transparent mb-8 space-y-6 md:space-y-0">
        <!-- قسم التاريخ -->
        <div class="text-white text-4xl sm:text-5xl md:text-6xl font-bold mr-6 flex flex-col items-center md:items-start">
          <div>12</div>
          <div class="text-lg uppercase">Jun</div>
          <div class="text-lg">2022</div>
        </div>

        <!-- قسم الصورة -->
        <div class="w-full md:w-80 flex-shrink-0">
          <img src="../../assets/images/img1.png" alt="Blog Image" class="w-full h-48 sm:h-60 md:h-48 object-cover rounded-lg">
        </div>

        <!-- قسم معلومات المقالة -->
        <div class="text-white flex-1">
          <div class="flex flex-wrap space-x-4 mb-2 text-sm text-gray-200">
            <span>Agency</span>
            <span>/</span>
            <span>Business</span>
            <span>/</span>
            <span>By Robert Helen</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold mb-2">The Secret of Change is to Focus All Your Energy Not on Fighting the Old but on Building the New.</h2>
          <p class="text-sm sm:text-base text-gray-300">
            We can help you channel your potential implementing your idea. We take care of our needs, crafting specific and targeted solutions.
          </p>
        </div>
      </div>

      <!-- إضافة المزيد من بطاقات المقالات حسب الحاجة -->

    </div>
  </div>
</template>
<style scoped>
/* تخصيص لون الخلفية بالوردي */
.bg-pink {
  background-color: #FFC0CB; /* لون وردي فاتح يمكن تغييره حسب الرغبة */
}

/* تحسين ألوان النصوص */
.text-gray-200 {
  color: #E5E7EB; /* لون رمادي فاتح للنص */
}

.text-gray-300 {
  color: #D1D5DB; /* لون رمادي متوسط للنص */
}

/* تخصيص الخط الفاصل */
hr {
  border-top-width: 3px;
  border-color: #D1D5DB; /* لون رمادي فاتح */
}
</style>
