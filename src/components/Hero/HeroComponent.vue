<template>
    <div class="relative h-screen z-5">
        <!-- الصورة المخصصة لشاشات الكمبيوتر المكتبية والأكبر -->
        <div class="hidden md:block">
            <img src="/src/assets/bg/bg-hero.png" lazy="loading" class="absolute w-full h-full z-0 object-cover" alt="خلفية الكمبيوتر المكتبي">
        </div>

        <!-- الصورة المخصصة لشاشات الموبايل والصغيرة -->
        <div class="block md:hidden">
            <img src="/src/assets/bg/mobile-2.jpg" lazy="loading" class="absolute w-full h-full z-0 object-con" alt="خلفية الموبايل">
        </div>

        <!-- محتويات أخرى يمكن إضافتها هنا -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full">
            <h1
                class="text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 via-purple-700 to-pink bg-200% animate-gradient  md:text-6xl text-4xl font-bold">
                Welcome to our agency
            </h1>

            <div class="flex flex-col justify-center items-center mt-20 relative orbit-container">
    <!-- Rotating Orbits -->
    <div class="orbit orbit1"></div>
    <div class="orbit orbit2"></div>
    <div class="orbit orbit3"></div>
    
    <!-- Content -->
    <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EB2952] to-[#242e5e] animate-gradient">
      PLATEAU
    </span>
    <img src="/src/assets/logo.svg" width="80px" alt="Logo">
  </div>

        </div>
    </div>
</template>


<style scoped>
.orbit-container {
  position: relative;
  width: 200px;
  height: 200px;
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 3px solid transparent;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.orbit1 {
  width: 150px;
  height: 150px;
  border-top-color: #EB2952;
  animation: rotate1 4s linear infinite;
}

.orbit2 {
  width: 180px;
  height: 180px;
  border-right-color: #0D1438;
  animation: rotate2 7s linear infinite;
}

.orbit3 {
  width: 210px;
  height: 210px;
  border-bottom-color: #69CDFF;
  animation: rotate3 9s linear infinite;
}

@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotate2 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes rotate3 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.animate-gradient {
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
}

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
</style>