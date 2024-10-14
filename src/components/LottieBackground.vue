<!-- src/components/LottieBackground.vue -->
<template>
  <div ref="lottieContainer" class="lottie-container"></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import lottie from 'lottie-web';

export default {
  name: 'LottieBackground',
  props: {
    animationData: {
      type: Object,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    renderer: {
      type: String,
      default: 'svg', // يمكن تغييره إلى 'canvas' أو 'html' إذا رغبت
    },
  },
  setup(props) {
    const lottieContainer = ref(null);
    let animation = null;

    const loadAnimation = () => {
      if (animation) {
        animation.destroy();
      }
      animation = lottie.loadAnimation({
        container: lottieContainer.value,
        renderer: props.renderer,
        loop: props.loop,
        autoplay: props.autoplay,
        animationData: props.animationData,
      });

      // ضبط preserveAspectRatio لضمان التناسب الصحيح
      if (props.renderer === 'svg') {
        const svgElement = animation.renderer.svgElement;
        if (svgElement) {
          svgElement.setAttribute('preserveAspectRatio', 'xMidYMid slice');
        }
      }
    };

    onMounted(() => {
      loadAnimation();
    });

    onBeforeUnmount(() => {
      if (animation) {
        animation.destroy();
      }
    });

    // مراقبة تغييرات `animationData` وإعادة تحميل الحركة
    watch(
      () => props.animationData,
      () => {
        loadAnimation();
      }
    );

    return {
      lottieContainer,
    };
  },
};
</script>

<style scoped>
.lottie-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* لضمان عدم التداخل مع محتويات السكشن */
  z-index: -1; /* لجعل الخلفية تحت المحتويات */
  overflow: hidden; /* لمنع أي تجاوز غير مرغوب فيه */
}
</style>
