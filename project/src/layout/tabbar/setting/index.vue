<template>
  <el-button
    type="primary"
    size="small"
    icon="Refresh"
    circle
    @click="updateRefsh"
  ></el-button>
  <el-button
    type="primary"
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button type="primary" size="small" icon="Setting" circle></el-button>
  <img
    :src="userStore.avatar"
    alt="headIMG"
    style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%"
  />
  <el-dropdown class="dropDown">
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">logout</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';
import { useRouter, useRoute } from 'vue-router';

let $router = useRouter();
let $route = useRoute();
let userStore = useUserStore();
let layoutSettingStore = useLayoutSettingStore();
const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh;
};
const fullScreen = () => {
  let full = document.fullscreenElement;
  if (full) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};
const logout = async () => {
  await userStore.userLogout();
  $router.push({ path: '/login', query: { redirect: $route.path } });
};
</script>
<script lang="ts">
export default {
  name: 'Setting',
};
</script>

<style scoped>
.dropDown {
  cursor: pointer;
}
</style>
