<template>
    <div class="relative w-full h-screen bg-black overflow-hidden">
      <!-- Background Stars -->
      <div class="stars"></div>
  
      <!-- Sun Container -->
      <div class="sundiv">
        <div class="sun flex justify-center items-center" >
            <img src="../../assets/logo.svg" class="" alt="">
        </div>
      </div>
  
      <!-- Earth Container -->
      <div class="earthdiv">
        <div class="earth">
          <div class="moondiv">
            <div class="moon"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  





<style scoped>
      * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  background: radial-gradient(#555, #000);
  overflow: hidden;
}
    .stars {
  width: 100%;
  height: 100%;
  background-image: url("./images/stars.png");
  animation: fading 5s linear infinite alternate,
    rotateing 10s infinite alternate;
}
.sun {
  width: 175px;
  height: 175px;
  background: radial-gradient(#EB9999, #EB2952);
  box-shadow: 0 0 50px #EB2952;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: sunshining 5s ease infinite alternate;
}
.earthdiv {
  width: 450px;
  height: 350px;
  /* border: solid 1px red; */
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: calc(-450px / 2);
  margin-top: calc(-350px / 2);
  animation: rotate 3s linear infinite;
}
.earth {
  width: 80px;
  height: 80px;
  background-image: url("images/earth.png");
  position: absolute;
  top: 50%;
  margin-top: -40px;
  left: -40px;
}
.moondiv {
  width: 150px;
  height: 150px;
  /* border: 1px red solid; */
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -35px;
  margin-left: -35px;
  animation: rotate 2s linear infinite reverse;
}
.moon {
  width: 30px;
  height: 30px;
  background: radial-gradient(#ddd, #888);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -15px;
  left: -15px;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes fading {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes sunshining {
  to {
    box-shadow: 0 0 20px #f5c91a;
  }
}
@keyframes rotateing {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(10deg);
  }
}
</style>
