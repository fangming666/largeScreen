<template>
    <!------教育质量评测----->
    <div class="education">
        <div class="education-nav">
            <p class="education-district" v-if="_districtName||_yearName" @click="openSchoolModal(true)">
                <span>{{_districtName}}</span>{{_yearName}}
            </p>
            <p class="education-subject" v-if="_subjectName" @click="openSubjectModal(true)">
                {{_subjectName}}
            </p>
            <!--当学校整体的时候显示学情跟踪-->
            <div @click="openShell" class="single-branch" v-if="_subjectName==='整体'&&schoolId!==-1">
                <div class="single-branch-item float-left">
                    <a href="javascript:;">学情跟踪</a>
                </div>
            </div>
            <!--当有多个导航的时候进行显示-->
            <div v-if="educationNameArr.length>1" class="single-branch clearfix">
                <div class="single-branch-item float-left"
                     @click="changeSingleBranch(index)"
                     :class="singleBranchIndex===index?'single-branch-item-active':''"
                     v-for="(item,index) in educationNameArr">
                    <a href="javascript:;">
                        {{item}}
                    </a>
                </div>
            </div>
        </div>
        <EducationContent :class="educationNameArr.length>1?'single-branch-warp':''">
        </EducationContent>
        <modalSchool :districtList="_districtList"
                     :yearId="yearId"
                     :schoolId="schoolId"
                     :countyId="countyId"
                     :yearName="_yearName"
                     :districtName="_districtName"
                     @parentCheck="check"
                     @parentCloseModal="openSchoolModal" v-if="modalSchoolSwitch&&_districtList.length">
        </modalSchool>
        <modalSubject
                :subjectList="_subjectList"
                :subjectId="subjectId"
                v-if="modalSubjectSwitch&&_subjectList.length"
                @parentCheck="subjectCheck"
                @parentCloseModal="openSubjectModal"
        >
        </modalSubject>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";
    import EducationName from "../../utils/EducationName"
    import {shell} from 'electron'

    export default {
        name: "education_quality",
        data() {
            return {
                yearId: -1,//年份区县ID
                schoolId: -1,//学校的ID
                subjectId: -1,//科目ID
                countyId: -1,//区的ID
                educationNameArr: [],//组件大标题的数组
                singleBranchIndex: 0,//大标题激活的index
                allDataArr: [],//返回的所有数据的数组
                modalSchoolSwitch: false,//选择学校模态框的开关
                modalSubjectSwitch: false,//选择科目模态框的开关
                shellLink: "http://home.yuandingbang.cn/report/demo/kw?index=3",//学情跟踪链接
            }
        },
        components: {
            EducationContent: () => import("../../components/education_quality/EducationContent"),
            modalSchool: () => import("../../components/modalSchool/modalSchool"),
            modalSubject: () => import("../../components/modalSubject/modalSubject"),
        },
        computed: {
            ...mapState({
                _districtList: ({educationModules}) => educationModules._districtList,
                _districtName: ({educationModules}) => educationModules._districtName,
                _yearName: ({educationModules}) => educationModules._yearName,
                _subjectName: ({educationModules}) => educationModules._subjectName,
                _subjectList: ({educationModules}) => educationModules._subjectList,
                _educationList: ({educationModules}) => educationModules._educationList,
            })
        },
        methods: {
            ...mapActions([
                'query_district', 'change_districtName', 'change_yearName', "query_subject", "change_subjectName", "query_education", "change_education"
            ]),
            //获取区县年份以及科目
            async queryDistrict(ownName, yearName) {
                try {
                    this.change_districtName(ownName);
                    this.change_yearName(yearName);
                    await this.query_subject({yearId: this.yearId, schoolId: this.schoolId, countyId: this.countyId});
                    this.subjectCheck({
                        subjectName: this._subjectList[0].name,
                        subjectId: this._subjectList[0].subjectId
                    });
                } catch (e) {

                }
            },

            //修改子项的标题及内容
            changeSingleBranch(index) {
                this.singleBranchIndex = index;
                if (this.allDataArr.length) {
                    this.change_education(this.allDataArr[index].data);
                }
            },

            //关闭/打开选择学校的模态框
            openSchoolModal(result) {
                this.modalSchoolSwitch = result;
            },

            //点击学校模态框的查看按钮
            async check(obj) {
                try {
                    this.yearId = obj.yearId;
                    this.schoolId = obj.schoolId;
                    this.countyId = obj.countyId;
                    this.singleBranchIndex = 0;
                    this.queryDistrict(obj.ownName, obj.yearName);
                } catch (err) {

                }
            },

            //关闭/打开选择科目的模态框
            openSubjectModal(result) {
                this.modalSubjectSwitch = result;
            },

            //点击科目的模态框查看按钮
            async subjectCheck(obj) {
                this.singleBranchIndex = 0;
                this.change_subjectName(obj.subjectName);
                this.subjectId = obj.subjectId;
                this.allDataArr = await this.query_education({
                    yearId: this.yearId,
                    subjectId: this.subjectId,
                    countyId: this.countyId,
                    schoolId: this.schoolId
                });
                this.educationNameArr = new EducationName(this.allDataArr).getNameArr();
            },

            //打开外部链接（学期跟踪）
            openShell() {
                shell.openExternal(this.shellLink)
            }
        },
        async mounted() {
            try {
                await this.query_district();
                this.yearId = this._districtList[0].yearId;
                this.countyId = this._districtList[0].countyList[0].countyId;
                this.queryDistrict(this._districtList[0].countyList[0].county, this._districtList[0].year);
            } catch (err) {

            }

        }
    }
</script>

<style scoped lang="scss">
    @import "./education_quality.scss";
</style>
