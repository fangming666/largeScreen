import Vue from 'vue'
import Vuex from 'vuex'

import educationModules from './modules/education'
import highlightTeacherModules from "./modules/highlight_teacher"
import markExaminationModules from "./modules/mark_examination"
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        educationModules,
        highlightTeacherModules,
        markExaminationModules
    },

    strict: process.env.NODE_ENV !== 'production'
})
