<template>
    <div class="wrapper">
        <!-- <Header></Header> -->
        <div class="scroll js-scroll">
            <RouterView />
            <!-- <Footer></Footer> -->
        </div>
    </div>
</template>

<script setup>
// @ is an alias to /src
import { RouterView} from 'vue-router';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<style lang="less"></style>
