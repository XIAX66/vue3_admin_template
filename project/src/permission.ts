//@ts-nocheck
//config the condition of the route permission
import router from '@/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import pinia from './store';
import useUserStore from './store/modules/user';
nprogress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  document.title = ` ${to.meta.title ? `${to.meta.title} |` : ''} Vue3 Admin`;
  nprogress.start();
  let userStore = useUserStore();
  const token = userStore.token;
  const username = userStore.username;
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      if (username) {
        next();
      } else {
        try {
          await userStore.userInfo();
          next({ ...to, replace: true });
        } catch (error) {
          await userStore.userLogout();
          next({ path: '/login', query: { redirect: to.path } });
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.path } });
    }
  }
});

router.afterEach(() => {
  //do something
  nprogress.done();
});
