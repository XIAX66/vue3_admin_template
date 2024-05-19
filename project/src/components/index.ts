//import all the global compements
import SvgIcon from './SvgIcon/index.vue';
//global object to register all the global components
const allGlobalComponents = {
  SvgIcon,
};

//export a plugin object
export default {
  //have to name the mathod 'install'
  install(app: any) {
    //log in all the global components
    Object.keys(allGlobalComponents).forEach((key) => {
      //@ts-ignore
      app.component(key, allGlobalComponents[key]);
    });
  },
};
