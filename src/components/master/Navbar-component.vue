<template>
  <nav :class="navClasses">
    <div class="mx-auto px-4 sm:px-6 lg:px-16 shadow-md">
      <div class="flex items-center justify-between h-20">
        <!-- Logo with Text for Mobile and Desktop -->
        <div class="flex items-center gap-2">
          <!-- Image Logo -->
          <img class="w-20" src="../../assets/logo.svg" alt="Your Company Logo">
          <!-- Gradient Text Logo -->
          <span class="md:hidden text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EB2952] to-[#0D1438]">
            PLATEAU
          </span>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex text-white space-x-8 lg:space-x-16">
          <a href="#" class="flex items-center uppercase hover:text-gray-300">
            <h2>Home</h2>    
            <font-awesome-icon  :icon="['fas', 'house']" class="ml-2 md:hidden sm:block" />
          </a>
          <a href="#" class="flex items-center uppercase hover:text-gray-300">
            <h2>Services</h2> 
            <font-awesome-icon :icon="['fas', 'gears']" class="ml-2 md:hidden sm:block" />
          </a>
          <a href="#" class="text-xl uppercase hover:text-gray-300">
            <h2>About Us</h2> 
          </a>
          <a href="#" class="flex items-center uppercase hover:text-gray-300">
            <h2>Our Work</h2>
            <font-awesome-icon :icon="['fas', 'network-wired']" class="ml-2 md:hidden sm:block" />
          </a>
          <a href="#" class="flex items-center uppercase hover:text-gray-300">
            <h2>Blog</h2>
            <font-awesome-icon :icon="['fas', 'cubes-stacked']" class="ml-2 md:hidden sm:block" />
          </a>
        </div>

        <!-- Additional Icons (Desktop) -->
        <div class="hidden md:flex items-center gap-6 space-x-4 lg:space-x-8">
          <a href="#" class="text-white hover:text-gray-300 text-xs font-medium">Contact Us</a>
          <div class="flex space-x-3">
            <a href="#" class="text-white hover:text-gray-300">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <div class="border-l border-white opacity-50 mx-2"></div>
            <a href="#" class="text-white hover:text-gray-300">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </a>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center opacity-50">
          <button @click="toggleMobileMenu" type="button" class="text-white focus:outline-none" ref="menuButton">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div :class="mobileMenuClasses" ref="mobileMenu">
      <div class="flex flex-col justify-between h-full px-4 pt-6 pb-8 space-y-4">
        
        <!-- Navigation Links -->
        <div class="space-y-6 flex flex-col items-start justify-center text-center gap-1">
          <a href="#" @click="closeMobileMenu" class="flex justify-between items-center w-full text-white py-2 uppercase hover:text-gray-300">
            <h2>Home</h2>
            <font-awesome-icon :icon="['fas', 'house']" />
          </a>
          <a href="#" @click="closeMobileMenu" class="flex justify-between items-center w-full text-white py-2 uppercase hover:text-gray-300">
            <h2>Services</h2>
            <font-awesome-icon :icon="['fas', 'gears']" />
          </a>
          <a href="#" @click="closeMobileMenu" class="flex justify-between items-center w-full text-white py-2 uppercase hover:text-gray-300">
            <h2>About Us</h2>
            <font-awesome-icon :icon="['far', 'address-card']" />
          </a>
          <a href="#" @click="closeMobileMenu" class="flex justify-between items-center w-full text-white py-2 uppercase hover:text-gray-300">
            <h2>Our Work</h2>
            <font-awesome-icon :icon="['fas', 'network-wired']" />
          </a>
          <a href="#" @click="closeMobileMenu" class="flex justify-between items-center w-full text-white py-2 uppercase hover:text-gray-300">
            <h2>Blog</h2>
            <font-awesome-icon :icon="['fas', 'cubes-stacked']" />
          </a>
          <a href="#" @click="closeMobileMenu" class="flex justify-between items-center w-full text-white py-2 uppercase hover:text-gray-300">
            <h2>Contact Us</h2>
            <font-awesome-icon :icon="['far', 'comment-dots']" />
          </a>
        </div>

        <!-- Social Media Links -->
        <div class="border-t border-gray-600 pt-4">
          <div class="flex space-x-8 justify-center">
            <a href="#" class="text-white hover:text-gray-300">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </a>
          </div>
        </div>
      </div>
    </div>
    
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// المراجع لعناصر DOM
const isMobileMenuOpen = ref(false);
const hasScrolled = ref(false);
const mobileMenu = ref(null);
const menuButton = ref(null);

// دالة لتبديل حالة القائمة على الموبايل
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // إضافة أو إزالة 'overflow-hidden' من body لمنع التمرير عند فتح القائمة
  if (isMobileMenuOpen.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
}

// دالة لإغلاق القائمة
function closeMobileMenu() {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
    document.body.classList.remove('overflow-hidden');
  }
}

// حساب الصفوف الخاصة بشريط التنقل بناءً على الحالات المختلفة
const navClasses = computed(() => {
  return [
    'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
    {
      'bg-[#4C0024]/50 backdrop-blur-md': hasScrolled.value && !isMobileMenuOpen.value,
      'bg-transparent': !hasScrolled.value && !isMobileMenuOpen.value,
      // الخلفية المتدرجة المتحركة عند فتح القائمة
      // 'animated-gradient': isMobileMenuOpen.value,
    },
  ];
});

// حساب الصفوف الخاصة بقائمة الموبايل بناءً على حالة الفتح
const mobileMenuClasses = computed(() => {
  return [
    'md:hidden fixed top-0 right-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out animated-gradient',
    {
      'translate-x-0': isMobileMenuOpen.value,
      'translate-x-full': !isMobileMenuOpen.value,
    },
  ];
});

// دالة للتعامل مع حدث التمرير
function handleScroll() {
  if (!isMobileMenuOpen.value) { // فقط عند عدم فتح القائمة
    hasScrolled.value = window.scrollY > 100;
  }
}

// دالة للتعامل مع النقرات الخارجية
function handleClickOutside(event) {
  if (isMobileMenuOpen.value) {
    // التحقق مما إذا كان النقر خارج القائمة وزر القائمة
    if (
      mobileMenu.value &&
      !mobileMenu.value.contains(event.target) &&
      menuButton.value &&
      !menuButton.value.contains(event.target)
    ) {
      closeMobileMenu();
    }
  }
}

// إضافة مستمعي الأحداث عند تحميل المكون
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

// إزالة مستمعي الأحداث عند إزالة المكون
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* يمكن إضافة أي أنماط إضافية هنا إذا لزم الأمر */

/* التأكد من أن الخلفية شفافة بشكل افتراضي */
nav {
  background-color: transparent;
}

/* إضافة انتقال سلس لتغيير لون النص في زر القائمة على الموبايل */
nav .md:hidden button {
  transition: color 0.3s ease;
}

/* تعريف الأنيميشن للتدرج */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient {
  background: linear-gradient(45deg, #EB2952, #0D1438, #69CDFF);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
}

</style>
