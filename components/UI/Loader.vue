<template>
  <span class="loader"></span>
</template>
<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 2px solid #59be29;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  -webkit-animation: rotation 1s linear infinite;
  animation: rotation 1s linear infinite;
}
.loader:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  background: #ff3d00;
  width: 3px;
  height: 24px;
  transform: translateX(-50%);
}

@-webkit-keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
