<template>
    <div class="relative h-screen z-5">
        <!-- الصورة المخصصة لشاشات الكمبيوتر المكتبية والأكبر -->
        <div class="hidden md:block">
            <img src="/src/assets/bg/3.jpg" class="absolute w-full h-full z-0 object-cover" alt="خلفية الكمبيوتر المكتبي">
        </div>

        <!-- الصورة المخصصة لشاشات الموبايل والصغيرة -->
        <div class="block md:hidden">
            <img src="/src/assets/bg/mobile-2.jpg" class="absolute w-full h-full z-0 object-con" alt="خلفية الموبايل">
        </div>

        <!-- محتويات أخرى يمكن إضافتها هنا -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full">
            <h1
                class="text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 via-purple-700 to-pink bg-200% animate-gradient text-6xl font-bold">
                Welcome to our agency
            </h1>

            <div class="flex flex-col justify-center items-center mt-20">
                 <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EB2952] to-[#0D1438] animate-gradient">
                    PLATEAU
                </span>
                <img src="/src/assets/logo.svg" width="80px" alt="">
            </div>
            
        </div>
    </div>
</template>


<style scoped>
    /* أي أنماط إضافية يمكن إضافتها هنا */
</style>
