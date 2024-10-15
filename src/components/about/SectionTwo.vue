<script setup >
import icon1 from './icon/1.png';
import icon2 from './icon/2.png';
import icon3 from './icon/3.png';
import icon4 from './icon/4.png';
import icon5 from './icon/5.png';
import icon6 from './icon/6.png';

const cards = [
  {
    title: 'Design & Development',
    icon: icon1
  },
  {
    title: 'Graphic Design & Branding',
    icon: icon2
  },
  {
    title: 'Social Media Marketing',
    icon: icon3
  },
  {
    title: 'Video Editing',
    icon: icon4
  },
  {
    title: 'Production',
    icon: icon5
  },
  {
    title: 'UI/UX',
    icon: icon6
  }
];
</script>

<template>
  <section class="flex flex-col justify-center items-center min-h-screen px-4 py-20 ">
    <!-- Section Title -->
    <h2 class="uppercase text-4xl sm:text-6xl lg:text-8xl text-white font-extrabold mb-16">
      Interests
    </h2>

    <!-- Card Grid -->
    <div class="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div v-for="(card, index) in cards" :key="index"
           class="bg-[#293056] text-white h-[200px] rounded-xl p-8 flex items-center justify-start gap-4 hover:bg-pink hover:text-white transition duration-300 ease-in-out cursor-pointer">
        <img :src="card.icon" :alt="card.title + ' Icon'" class="w-14" />
        <h3 class="font-bold text-xl uppercase">{{ card.title }}</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
span {
  color: #EB2952;
}
</style>
