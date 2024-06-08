<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>Welcome back to the system</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
              placeholder="Please input username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              v-model="loginForm.password"
              type="password"
              placeholder="Please input password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              login in
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { ref, reactive } from 'vue';
import useUserStore from '@/store/modules/user';
import { useRouter, useRoute } from 'vue-router';
import { ElNotification } from 'element-plus';

const time = new Date();
let timePeriod =
  time.getHours() >= 18 || time.getHours() < 6
    ? 'Night'
    : time.getHours() < 12
      ? 'Morning'
      : 'Afternoon';
let loading = ref(false);
let $router = useRouter();
let $route = useRoute();
let useStore = useUserStore();
let loginForms = ref();
const loginForm = reactive({
  username: 'admin',
  password: '111111',
});

const login = async () => {
  await loginForms.value.validate();
  loading.value = true;
  useStore
    .userLogin(loginForm)
    .then(() => {
      loading.value = false;
      const redirect = $route.query.redirect as string;
      $router.push({ path: redirect || '/' });
      ElNotification({
        type: 'success',
        message: `Good ${timePeriod}`,
        title: `Hi, ${loginForm.username}`,
      });
    })
    .catch((error: Error) => {
      loading.value = false;
      console.log(error.message);
      ElNotification({
        type: 'error',
        message: error.message,
      });
    });
};

const rules = reactive({
  username: [
    //{ required: true, message: 'username cannot be empty', trigger: 'change' },
    // {
    //   trigger: 'change',
    //   validator: (_rule: any, value: any, callback: any) => {
    //     if (/^\d{5,10}$/.test(value)) {
    //       callback();
    //     } else {
    //       callback(new Error('username must be a number'));
    //     }
    //   },
    // },
    {
      min: 5,
      message: 'username length cannot be less than 5 bits',
      trigger: 'blur',
    },
    {
      max: 20,
      message: 'username length cannot be greater than 20 bits',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: 'password cannot be empty', trigger: 'blur' },
    {
      min: 6,
      message: 'password length cannot be less than 6 bits',
      trigger: 'blur',
    },
    {
      max: 20,
      message: 'password length cannot be greater than 20 bits',
      trigger: 'blur',
    },
  ],
});
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 40px;
  h1 {
    color: white;
    font-size: 40px;
  }
  h2 {
    color: white;
    font-size: 20px;
    margin: 20px 0;
  }
  .login_btn {
    width: 100%;
  }
}
</style>
