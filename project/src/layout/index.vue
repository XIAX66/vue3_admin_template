<template>
  <div class="layout_container">
    <div class="layout_slider" :class="{ fold: layoutSettingStore.fold }">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          background-color="#001529"
          text-color="white"
          :collapse="layoutSettingStore.fold"
        >
          <Slider :sliderList="userStore.sliderRoutes"></Slider>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold }">
      <Tabbar />
    </div>
    <div class="layout_main" :class="{ fold: layoutSettingStore.fold }">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Logo from '@/layout/logo/index.vue';
import Slider from '@/layout/slider/index.vue';
import Tabbar from '@/layout/tabbar/index.vue';
import useUserStore from '@/store/modules/user';
import Main from '@/layout/main/index.vue';
import useLayoutSettingStore from '@/store/modules/setting';

let $route = useRoute();
let userStore = useUserStore();
let layoutSettingStore = useLayoutSettingStore();
</script>

<script lang="ts">
export default {
  name: 'Layout',
};
</script>

<style scoped lang="scss">
.layout_container {
  display: flex;
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    background: $base-menu-background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-logo-height);
      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: 49px;
    }
  }
  .layout_tabbar {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0%;
    left: $base-menu-width;
    background: $base-tabbar-background;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - 49px);
      left: 49px;
    }
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    top: $base-tabbar-height;
    left: $base-menu-width;
    background: $base-content-background;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - 49px);
      left: 49px;
    }
  }
}
</style>
