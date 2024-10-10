<template>
  <div
    class="bg-[#0D1438] text-white py-12 flex flex-wrap justify-center items-center gap-8">
    <div class="flex items-center py-8 space-x-14">
      <div v-for="(stat, index) in stats" :key="index" class="flex  items-center">
        <!-- الرقم المتصاعد مع تأثير text-stroke -->
        <div class="text-7xl font-bold text-transparent text-stroke flex  items-center space-x-1">
          <span>{{ displayedNumbers[index] }}</span>
          <span v-if="stat.plusSign"><sup>+</sup></span>
          <span v-if="stat.k">k</span>
        </div>

        <!-- النقطة الدائرية -->
        <div v-if="index < stats.length - 1" class="w-3 h-3  bg-white rounded-full ml-20"></div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const stats = [
  { value: 20, label: 'Completed Projects', plusSign: false ,k:true},
  { value: 5, label: 'Years Of Experience', plusSign: true , k:false },
  { value: 124, label: 'Employees On Worldwide', plusSign: true , k:false },
  { value: 29, label: 'Top Agency Awards', plusSign: true , k:false },
];

// إنشاء مصفوفة لحفظ الأرقام المتزايدة
const displayedNumbers = ref(stats.map(() => 0));

// دالة لزيادة الرقم تدريجيا
const incrementNumber = (index, targetValue) => {
  let currentValue = displayedNumbers.value[index];
  const increment = Math.ceil(targetValue / 100); // تقليل السرعة حسب الحاجة

  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= targetValue) {
      displayedNumbers.value[index] = targetValue; // الوصول للرقم النهائي
      clearInterval(interval);
    } else {
      displayedNumbers.value[index] = currentValue;
    }
  }, 50); // كل 50 ميلي ثانية تحديث الرقم
};

// استدعاء الدالة عند تحميل الصفحة
onMounted(() => {
  stats.forEach((stat, index) => {
    incrementNumber(index, stat.value);
  });
});
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
