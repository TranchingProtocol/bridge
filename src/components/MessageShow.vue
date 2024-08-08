<template>
  
    <div class="note-div" >
      <img class="close" src="@/assets/images/warning.png" alt=""  />
      <span >User rejected transaction!</span>
    </div>

</template>

<script setup>



const emit = defineEmits(["close"]);
defineProps({
  note:""
});

</script>

<style lang="less" scoped>

  
  .note-div{
    position: absolute;
    top: 8%;
    right: 5%;
    background-color: white;
    
    padding: 15px 10px;
    border-radius: 5px;
    display: flex;
    // flex-direction: column;
    align-items: center;

    span{
      color: red;
      margin-left: 15px;
    }

    img{
      width: 25px;
      height: 25px;
    }
  }


@media screen and (max-width: 768px) and (min-width: 0px) {

   
  
}
</style>