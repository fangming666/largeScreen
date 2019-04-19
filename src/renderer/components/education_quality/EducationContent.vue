<template>
    <div class="education-content clearfix" v-if="_educationList.length">
        <div v-for="item in _educationList" class="clearfix float-left"  :key="item.view" :class="item.style">
            <component :is="item.view" :req_data="item.data"
                       :req_title="item.title"
                       :req_judge="item.judge"
            >
            </component>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "EducationContent",
        data(){
            return{
                judge:"",
            }
        },
        computed: {
            ...mapState({
                _educationList: ({educationModules}) => educationModules._educationList,
            })
        },
        components: {
            //区县全科
            Summarize: () => import("./Summarize"), //概括
            SchoolAverage: () => import("./SchoolAverage"),//学校平均分
            CommonCritical: () => import("./CommonCritical"),//重点高中上线/临界生分布
            KeynoteCritical: () => import("./KeynoteCritical"),//普通高中上线/临界生分布
            SuperaverageRateTable: () => import("./SuperaverageRateTable"),//与上次考试相比——学校超均率变化
            SuperaverageTrend: () => import("./SuperaverageTrend"),//学校超均率趋势变化
            OnlineRate: () => import("./OnlineRate"),//上线率变化趋势
            //区县单科
            GradeDivision: () => import("../district_single/GradeDivision"),//学校等级划分
            GradeStandard: () => import("../district_single/GradeStandard"),//区域等级标准
            GradeChange: () => import("../district_single/GradeChange"),//学校等级变化
            //区县试卷质量评测
            SubjectiveAnalysis: () => import("../district_quality/SubjectiveAnalysis"),//主观题分析
            KnowledgeProportion: () => import("../district_quality/KnowledgeProportion"),//考察知识点分值占比
            Capacity: () => import("../district_quality/Capacity"),//考察能力分值占比
            CapacityScore: () => import("../district_quality/CapacityScore"),//考察能力得分率
            KnowledgePointScore: () => import("../district_quality/KnowledgePointScore"),//考察知识点得分率
            //科目突出教师
            TeacherKnowledgeScore: () => import("../highlight_teacher/TeacherKnowledgeScore"),//知识点得分率
            TeacherScoringAverage: () => import("../highlight_teacher/TeacherScoringAverage"),//得分率前五名教师
            TeacherKnowledgeRange: () => import("../highlight_teacher/TeacherKnowledgeRange"),//知识点进步幅度前五名
            TeacherAbilityScore: () => import("../highlight_teacher/TeacherAbilityScore"),//能力得分率
            TeacherAbilityRange: () => import("../highlight_teacher/TeacherAbilityRange"),//进步幅度
            TeacherAbilityAverage: () => import("../highlight_teacher/TeacherAbilityAverage"),//能力前五名

            //学校单科(学校概况)
            ClassAdded: () => import("../school_single/ClassAdded"),//班级增值
            ClassKnowledge: () => import("../school_single/ClassKnowledge"),//考察知识点得分率
            ClassSyllable: () => import("../school_single/ClassSyllable"),//考察题目得分率
            //学校单科（教师评比）
            TeachersTasks: () => import("../school_single/TeachersTasks"),//教师任务达标数
            TeacherOnlineRate: () => import("../school_single/TeacherOnlineRate"),//教师量化得分变化趋势


            //师资质量
            //师资概况
            TeacherNumber: () => import("../teacher_quality/TeacherNumber"),//教师数量分析
            TeacherProfessional: () => import("../teacher_quality/TeacherProfessional"),//职称分布
            TeacherCourse: () => import("../teacher_quality/TeacherCourse"),//学科结构
            TeacherAgeStructure: () => import("../teacher_quality/TeacherAgeStructure"),//年龄结构
            TeacherRatio: () => import("../teacher_quality/TeacherRatio"),//男女比例
            //教师教学特征
            TeachFeature: () => import("../teacher_quality/TeachFeature"),

            //阅卷监控
            GeneralProgressMonitoring: () => import("../mark_examination/GeneralProgressMonitoring"),//全科阅卷监控
            GeneralProgressSingle: () => import("../mark_examination/GeneralProgressSingle"),//单科阅卷监控
            QuestionReviewMonitoring: () => import("../mark_examination/QuestionReviewMonitoring"),//小题评阅监控
            ExceptionHandling: () => import("../mark_examination/ExceptionHandling"),//单科异常处理
            ReviewContrast:()=>import("../mark_examination/ReviewContrast"),//小题评阅对比
            ReviewTrend:() =>import("../mark_examination/ReviewTrend"),//小题评阅趋势变化
            Distance:() =>import("../mark_examination/Distance"),//仲裁卷
        }

    }
</script>

<style scoped>
    .education-content {
        width: 1773px;
        margin: 37px auto 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
