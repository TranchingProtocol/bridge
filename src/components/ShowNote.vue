<template>
  <div class="modal-content">
    <div class="note-div" >
      <img class="close" src="@/assets/images/close.png" alt=""  @click="() => {  emit('close') }"/>
      <span style="margin-top: 20px">{{ note}}</span>
    </div>
  </div>
</template>

<script setup>



const emit = defineEmits(["close"]);
defineProps({
  note:""
});

</script>

<style lang="less" scoped>
.modal-content {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
  
  .note-div{
    position: absolute;
    top: 35%;
    left: 50%;
    background-color: #0f0f0f;
    width: 450px;
    transform: translate(-50%, -50%);
    padding: 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 25px;
      height: 25px;
   
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 768px) and (min-width: 0px) {
  .modal-content {
    .note-div{
      width: 300px;
    }
  }
}
</style>