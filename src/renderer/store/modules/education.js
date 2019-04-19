import * as server from "../../utils/server";
import {
    districtApi,
    subjectApi,
    educationApi,
    singleApi,
    schoolEnsembleApi,
    schoolSingleApi,
    teachersQualityApi,
    markExaminationApi
} from "../../utils/api"

const state = {
    _districtList: [], // 区县年份
    _subjectList: [],// 科目列表
    _yearName: '',//年份名称
    _districtName: "",//区县名称
    _subjectName: "", //科目名称
    _educationList: [],//组件数组
};

const mutations = {
    CHANGE_DISTRICT: (state, districtList) => {
        state._districtList = districtList
    },
    CHANGE_DISTRICTNAME: (state, districtName) => {
        state._districtName = districtName
    },
    CHANGE_YEARNAME: (state, yearName) => {
        state._yearName = yearName
    },
    CHANGE_SUBJECT: (state, subjectList) => {
        state._subjectList = subjectList
    },
    CHANGE_SUBJECTNAME: (state, subjectName) => {
        state._subjectName = subjectName
    },
    CHANGE_EDUCATION: (state, educationList) => {
        state._educationList = educationList
    }
};

const actions = {
    //获取区县年份的数组
    query_district: async function ({commit}) {
        try {
            let result = await server._askAxios({url: districtApi});
            commit('CHANGE_DISTRICT', result.data.data);
        } catch (e) {

        }

    },
    //改变年纪名称
    change_districtName: function ({commit}, districtName) {
        commit("CHANGE_DISTRICTNAME", districtName)
    },
    //改变年份名称
    change_yearName: function ({commit}, yearName) {
        commit("CHANGE_YEARNAME", yearName)
    },

    //获取科目
    query_subject: async function ({commit}, pages) {
        try {
            let result = await server._askAxios({url: subjectApi, data: pages});
            commit("CHANGE_SUBJECT", result.data.data)
        } catch (e) {

        }
    },
    //修改科目名称
    change_subjectName: function ({commit}, subjectName) {
        commit("CHANGE_SUBJECTNAME", subjectName)
    },

    //获取组件内容
    query_education: async function ({commit}, pages) {
        try {
            let result = "";
            //test:根据不同的参数进行调用不同的接口（全科/单科）
            //区县的时候
            if (pages.countyId !== -1) {
                if (!pages.subjectId) {
                    //全科
                    result = await server._askAxios({url: educationApi, data: pages});
                } else {
                    //单科
                    result = await server._askAxios({url: singleApi, data: pages});
                }
            } else {
                //学校的时候
                if (!pages.subjectId) {
                    //全科
                    result = await server._askAxios({url: schoolEnsembleApi, data: pages});
                } else {
                    //单科
                    result = await server._askAxios({url: schoolSingleApi, data: pages});
                }
            }
            commit("CHANGE_EDUCATION", result.data.data[0].data);
            return result.data.data;
        } catch (err) {
            console.log("err is", err)
        }
    },
    //改变组件的内容
    change_education: function ({commit}, pages) {
        commit("CHANGE_EDUCATION", pages);
    },
    //获取师资质量组件内容
    query_teachers_quality: async function ({commit}, pages) {
        let result = await server._askAxios({url: teachersQualityApi, data: pages});
        commit("CHANGE_EDUCATION", result.data.data[0].data);
        return result.data.data;
    },
    //获取阅卷监控组件内容
    query_mark_examination: async function ({commit}, pages) {
        let result = await server._askAxios({url: markExaminationApi, data: pages});
        commit("CHANGE_EDUCATION", result.data.data.data);
        return result.data.data;
    },
};


export default {
    state,
    mutations,
    actions
}
