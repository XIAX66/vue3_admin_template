<template>
  <div class="logo">
    <img :src="setting.logo" alt="logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting';
</script>
<script lang="ts">
export default {
  name: 'Logo',
};
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-logo-height;
  display: flex;
  align-items: center;
  top: 20px;
  img {
    width: 40px;
    height: 40px;
    padding-left: 5px;
    margin: 0 10px;
  }
  p {
    font-size: 20px;
    color: #fff;
  }
}
</style>
