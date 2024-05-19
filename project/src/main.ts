import { createApp } from 'vue';
import App from '@/App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
//svg插件需要配置的代码
import 'virtual:svg-icons-register';
//引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components';
//引入模板的全局样式
import '@/styles/index.scss';
// import axios from 'axios';
import router from './router';
import pinia from './store';

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

//安装自定义插件
app.use(globalComponent);

// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin1',
//     password: '111111',
//   },
// });

app.use(router);

app.use(pinia);

//将应用挂载到挂载点上
app.mount('#app');
