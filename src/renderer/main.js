import Vue from 'vue'
import axios from 'axios'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import App from './App'
import router from './router'
import store from './store'
import {Loading} from 'element-ui';
//引进font-awesome字体图标
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {fas} from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText}
//     from '@fortawesome/vue-fontawesome'
//
// library.add(fas)
//highcharts的引入
import * as Highcharts from "highcharts";
import HighchartsMore from 'highcharts/highcharts-more';

import "./glocal.scss";

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;


HighchartsMore(Highcharts);
Vue.use(ElementUI);
Vue.use(Highcharts);

// Vue.component('font-awesome-icon', FontAwesomeIcon);
console.log("document.body.height is", document.body.offsetHeight);
 if (document.body.offsetHeight > 1080||document.body.offsetHeight <= 768) {
    let devInnerHeight = 1080;// 开发时的InnerHeight
    let devDevicePixelRatio = 1.0;// 开发时的devicepixelratio
    let devScaleFactor = 1; // 开发时的ScaleFactor
    let scaleFactor = require('electron').screen.getPrimaryDisplay().scaleFactor;
    let zoomFactor = (window.innerHeight / devInnerHeight) * (window.devicePixelRatio / devDevicePixelRatio) * (devScaleFactor / scaleFactor);
    require('electron').webFrame.setZoomFactor(zoomFactor);
}
let loadingInstance = "";
//axios拦截器
axios.interceptors.request.use(function (config) {
    loadingInstance = Loading.service({
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        customClass: "loading-warp",
        background: 'rgba(0, 0, 0, 0.7)'
    });
    return config;
});
axios.interceptors.response.use(function (response) {
    loadingInstance.close();
    return response;
}, function (error) {
    loadingInstance.close();
    return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    store,
    template: '<App/>',
    methods: {
        moreChart() {
            var options = this.getMoreOptions(this.type);

            if (this.chart) {
                this.chart.destroy();
            }
            // 初始化 Highcharts 图表
            this.chart = new Highcharts.Chart('highcharts-more', options);
        }
    }
}).$mount('#app')
