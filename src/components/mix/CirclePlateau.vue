<template>
     <div class="flex flex-col justify-center items-center mt-20 relative orbit-container">
        <!-- Rotating Orbits -->
        <div class="orbit orbit1"></div>
        <div class="orbit orbit2"></div>
        <div class="orbit orbit3"></div>

        <!-- Content -->
        <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EB2952] to-[#242e5e] animate-gradient">
          PLATEAU
        </span>
        <img :src="logo" class="w-32 h-32" alt="Logo">
      </div>
</template>



<script setup>
    import logo from '@/assets/logo.svg'
</script>


<style scoped>
     .orbit-container {
  position: relative;
  width: 400px;
  height: 400px;
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
  width: 200px;
  height: 200px;
  border-top-color: #EB2952;
  animation: rotate1 6s linear infinite;
}

.orbit2 {
  width: 230px;
  height: 230px;
  border-right-color: #0D1438;
  animation: rotate2 7s linear infinite;
}

.orbit3 {
  width: 260px;
  height: 260px;
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