//@ts-nocheck
import { defineStore } from 'pinia';
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user';

import { ref, reactive } from 'vue';
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token';
// import constantRoute
import { constantRoute } from '@/router/routers';

let useUserStore = defineStore('user', () => {
  let token = ref(GET_TOKEN());
  let sliderRoutes = reactive(constantRoute);
  let username = ref('');
  let avatar = ref('');

  const userLogin = async (data: any) => {
    let result: any = await reqLogin(data);
    //success200 -> token
    //fail201 -> fail massage
    if (result.code === 200) {
      token.value = result.data;
      //local storage the token
      SET_TOKEN(result.data);
      return 'ok';
    } else {
      return Promise.reject(new Error(result.data));
    }
  };

  const userInfo = async () => {
    let result = await reqUserInfo();

    if (result.code === 200) {
      username.value = result.data.name;
      avatar.value = result.data.avatar;
    } else {
      return Promise.reject(new Error(result.message));
    }
  };

  const userLogout = async () => {
    let result = await reqLogout();
    if (result.code === 200) {
      token.value = '';
      username.value = '';
      avatar.value = '';
      REMOVE_TOKEN();
      return 'ok';
    } else {
      return Promise.reject(new Error(result.message));
    }
  };

  return {
    token,
    userInfo,
    userLogin,
    sliderRoutes,
    username,
    avatar,
    userLogout,
  };
});
export default useUserStore;
