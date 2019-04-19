const state = {
    _knowledgeName: "",//知识点名称
    _abilityName: "",//能力名称
    _classKnowledgeName: "",//学校单科知识点
    _className: "",//学校单科班级的名称
    _syllableAllArr: [],//返回的题目得分率的对应的知识点的数组
};
const mutations = {
    CHANGE_TEACHER_KNOWLEDGE_NAME: (state, knowledgeName) => {
        state._knowledgeName = knowledgeName
    },
    CHANGE_TEACHER_ABILITY_NAME: (state, abilityName) => {
        state._abilityName = abilityName
    },
    CHANGE_CLASS_KNOWLEDGE_NAME: (state, knowledgeName) => {
        state._classKnowledgeName = knowledgeName
    },
    CHANGE_CLASS_NAME: (state, className) => {
        state._className = className
    },
    CHANGE_SYLLABLE_ALL_ARR: (state, arr) => {
        state._syllableAllArr = arr;
    },
};
const actions = {
    //修改知识点名称
    changeTeacherKnowledgeName: ({commit}, knowledgeName) => {
        commit("CHANGE_TEACHER_KNOWLEDGE_NAME", knowledgeName)

    },
    //修改能力名称
    changeTeacherAbilityName: ({commit}, abilityName) => {
        commit("CHANGE_TEACHER_ABILITY_NAME", abilityName)
    },
    //修改学校单科知识点
    changeClassKnowledgeName: ({commit}, knowledgeName) => {
        commit("CHANGE_CLASS_KNOWLEDGE_NAME", knowledgeName)
    },
    //修改学校班级的名称
    changeClassName: ({commit}, className) => {
        commit("CHANGE_CLASS_NAME", className)
    },

    //修改学校单科班级得分率
    changeSyllableAllArr: ({commit}, pages) => {
        let [initArr, judge] = pages;
        for (let child of initArr) {
            if (child.className === judge) {
                commit("CHANGE_SYLLABLE_ALL_ARR", child.rubricArr);
                break;
            }
        }
    }
};
export default {
    state,
    mutations,
    actions
}
