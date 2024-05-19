//router model
//@ts-ignore
import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRoute } from './routers';

let router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
