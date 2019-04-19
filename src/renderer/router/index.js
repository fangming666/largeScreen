import Vue from 'vue'
import Router from 'vue-router'
import {Loading} from 'element-ui';
Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            redirect: {name: 'education_quality'}
            // component: require('@/pages/teachers_quality/teachers_quality').default

        },
        {
            path: '/education',
            name: 'education_quality',
            component: require('@/pages/education_quality/education_quality').default,
        },
        {
            path: '/examination',
            name: 'mark_examination',
            component: require('@/pages/mark_examination/mark_examination').default
        },
        {
            path: '/teachers_quality',
            name: 'teachers_quality',
            component: require('@/pages/teachers_quality/teachers_quality').default
        }

    ]
});
let loadingInstance = "";
router.beforeEach((to, from, next) => {
    loadingInstance = Loading.service({
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        customClass: "loading-warp",
        background: 'rgba(0, 0, 0, 0.7)'
    });
    next();
});
router.afterEach((to, from) => {
    loadingInstance.close();
});
export default router;
