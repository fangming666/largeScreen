/*
* 阅卷监控
* */

const state = {
    _markSubjectName: "", //科目名称
    _markRubricArr: [],//题目列表
    _markRubricName: "",//题目名称
};

const mutations = {
    CHANGE_MARK_SUBJECT_NAME: (state, markSubjectName) => {
        state._markSubjectName = markSubjectName
    },
    CHANGE_MARK_RUBRICARR: (state, markRubricArr) => {
        state._markRubricArr = markRubricArr
    },
    CHANGE_MARK_RUBRIC_NAME: (state, markRubricName) => {
        state._markRubricName = markRubricName
    },

};

const actions = {
    //修改科目名称
    change_mark_subject_name: async function ({commit}, markSubjectName) {
        commit('CHANGE_MARK_SUBJECT_NAME', markSubjectName);
    },
    //修改题目列表
    change_mark_rubric_arr: function ({commit}, markRubricArr) {
        commit('CHANGE_MARK_RUBRICARR', markRubricArr);
    },
    //修改题目名称
    change_mark_rubric_name: function ({commit}, markRubricName) {
        commit('CHANGE_MARK_RUBRIC_NAME', markRubricName);
    },
};


export default {
    state,
    mutations,
    actions
}
