import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './public-path';

let instance;

// 渲染方法
function render(props) {
  const { container } = props;

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// 子应用接入qiankun
// 1. 导出三个必要的生命周期钩子函数
// bootstrap 渲染之前
// mount 渲染函数
// unmount 卸载函数

export async function bootstrap() {
  console.log('subapp bootstraped');
}

export async function mount(props) {
  console.log('mount subapp');
  render(props);
}

export async function unmount() {
  console.log('unmount college app');

  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
