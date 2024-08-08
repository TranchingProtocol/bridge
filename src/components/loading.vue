<template>
  <div class="load-div" :style="{ 'background-color': color,'margin': margin }">

  </div>
  
</template>
<script setup>
defineProps({
  color: "",
  margin: ""
});
</script>
<style scoped lang="less">
.load-div {
  display: inline-flex;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  
  border: 3px solid rgba(55, 65, 81,0.25);
  border-top: 3px solid rgb(55, 65, 81);
  animation: load 1s linear infinite;
 
}

@keyframes load {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>