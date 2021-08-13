// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import table from './components/table.vue'
import navigation2 from './components/navigation2.vue'
import navigation3 from './components/navigation3.vue'
import navigation4 from './components/navigation4.vue'

Vue.config.productionTip = false
Vue.use(ElementUI);
//安装插件
Vue.use(VueRouter); //挂载属性
//创建路由对象并配置路由规则
let router1 = new VueRouter({
    routes: [
        //一个个对象
        {
            path: '/table',
            component: table
        },

        {
            path: '/navigation2',
            component: navigation2
        },
        {
            path: '/navigation3',
            component: navigation3
        },
        {
            path: '/navigation4',
            component: navigation4
        }
    ]
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    router: router1, //可以简写router
    render: c => c(App),
})