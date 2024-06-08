<template>
  <div>
    <!-- <h1>SVG testing</h1>
    <svg-icon name="home" color="green" height="30px" width="30px"></svg-icon>
    <h1>test axios secondary installnation</h1>
    <div>{{ content }}</div> -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// import { Plus } from '@element-plus/icons-vue';
// import request from '@/utils/request.ts';
// import { ref, onMounted } from 'vue';

// let content = ref('123');

// onMounted(() => {
//   request({
//     url: '/user/login',
//     method: 'post',
//     data: {
//       username: 'admin',
//       password: '111111',
//     },
//   }).then((res) => {
//     content = res;
//   });
// });
// import { onMounted } from 'vue';
// import { reqLogin } from './api/user';
// onMounted(() => {
//   reqLogin({ username: 'admin', password: '111111' });
// });
</script>

<style lang="scss" scoped>
h1 {
}
</style>
