<template>
  <el-icon class="clickable-icon" @click="changeIcon">
    <component :is="layoutSettingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon style="top: 1px; margin: 0, 5px">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useLayoutSettingStore from '@/store/modules/setting.ts';
import { useRoute } from 'vue-router';

let layoutSettingStore = useLayoutSettingStore();
let $route = useRoute();

const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold;
};
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
};
</script>

<style scoped>
.clickable-icon {
  cursor: pointer;
  margin-right: 10px;
}
</style>
