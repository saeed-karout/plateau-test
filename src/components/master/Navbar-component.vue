<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-transparent ">
    <div class=" mx-auto px-4 sm:px-6 lg:px-16 bg-[#4C0024]">
      <div class="flex items-center justify-between h-20">
        <!-- شعار الشركة -->
        <div class="flex-shrink-0">
          <img class="h-28 w-auto" src="../../assets/logo.svg" alt="Your Company">
        </div>

        <!-- روابط التنقل الكبيرة (للشاشات الكبيرة) -->
        <div class="hidden md:flex text-white space-x-16">
          <a href="#" class="flex items-center  uppercase ">
            Home <img width="10px" src="../../assets/icon/Symbol.svg" alt="" class="ml-2">
          </a>
          <a href="#" class="flex items-center  uppercase hover:text-white">
            Services <img width="10px" src="../../assets/icon/Symbol.svg" alt="" class="ml-2">
          </a>
          <a href="#" class=" text-xl uppercase hover:text-white">
            About US
          </a>
          <a href="#" class="flex items-center  uppercase hover:text-white">
            Our Work <img width="10px" src="../../assets/icon/Symbol.svg" alt="" class="ml-2">
          </a>
          <a href="#" class="flex items-center  uppercase hover:text-white">
            Blog <img width="10px" src="../../assets/icon/Symbol.svg" alt="" class="ml-2">
          </a>
        </div>

        <!-- أيقونات إضافية -->
        <div class="hidden md:flex items-center gap-10 space-x-6">
            <div class="flex gap-3 justify-center items-center">

                <a href="#" class="text-white hover:text-gray-300 text-xs font-medium">
                  Contact Us
                </a>
                <a href="#" class="text-white hover:text-gray-300">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
            </div>

            <div class="flex gap-3">

                <a href="#" class="text-white hover:text-gray-300">
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                </a>
                <a href="#" class="text-white hover:text-gray-300">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
              <p class="border-r border-x-white opacity-50">|</p>
      
      
                <a href="#" class="text-white ">
                  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </a>
            </div>

        </div>

        <!-- زر قائمة الموبايل -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMobileMenu" type="button" class="text-gray-300 hover:text-white focus:outline-none focus:text-white">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- قائمة التنقل للموبايل -->
    <div :class="{'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen}" class="md:hidden bg-gray-800">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="flex items-center text-white px-3 py-2 rounded-md text-base font-medium">
          Home <img width="10px" src="../../assets/icon/Symbol.svg" alt="" class="ml-2">
        </a>
        <a href="#" class="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
          Services <img width="10px" src="../../assets/icon/Symbol.svg" alt="" class="ml-2">
        </a>
        <a href="#" class="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
          About US
        </a>
        <a href="#" class="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
          Our Work <img width="10px" src="../../assets/icon/Symbol.svg" alt="" class="ml-2">
        </a>
        <a href="#" class="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
          Blog <img width="10px" src="../../assets/icon/Symbol.svg" alt="" class="ml-2">
        </a>
        <a href="#" class="block text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
          Contact Us
        </a>


        <div class="flex text-white space-x-4 px-3 py-2">
          <a href="#" class="text-gray-300 hover:text-white">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>

          <a href="#" class="text-gray-300 hover:text-white">
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
          </a>

          <a href="#" class="text-gray-300 hover:text-white">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>

          <a href="#" class="text-gray-300 hover:text-white">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<style scoped>
nav {
    /* تأكد من أن خلفية شريط التنقل شفافة */
    background-color: transparent;
}

.down {
    display: flex;
    gap: 10px;
}
</style>
