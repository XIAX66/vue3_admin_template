import { defineStore } from 'pinia';
import { ref } from 'vue';

let useLayoutSettingStore = defineStore('settingStore', () => {
  let fold = ref(false);
  let refsh = ref(false);

  return { fold, refsh };
});

export default useLayoutSettingStore;
