<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Breadcrumb />
    </div>
    <div class="tabbar_right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/layout/tabbar/breadcrumb/index.vue';
import Setting from '@/layout/tabbar/setting/index.vue';
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
};
</script>

<style scoped lang="scss">
.tabbar {
  background: wheat;
  color: black;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  .tabbar_left {
    display: flex;
    align-items: center;
    padding-left: 20px;
    .el-icon {
      margin-right: 10px;
    }
  }
  .tabbar_right {
    display: flex;
    align-items: center;
    padding-right: 20px;
  }
}
</style>
