<template>
    <!-----师资力量----->
    <div class="teachers_quality">
        <div class="education-nav">
            <!--当有多个导航的时候进行显示-->
            <div class="single-branch clearfix">
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
        <EducationContent>
        </EducationContent>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import EducationName from "../../utils/EducationName"

    export default {
        name: "teachers_quality",
        data() {
            return {
                educationNameArr: [],//组件大标题的数组
                singleBranchIndex: 0,//大标题激活的index
                allDataArr: [],//所有数据
                imgActive: "",//被激活的标题的文字内容，方便做teachFeatureSideImg的显示隐藏

            }
        },
        components: {
            EducationContent: () => import("../../components/education_quality/EducationContent"),
        },
        methods: {
            ...mapActions(["query_teachers_quality", "change_education"]),
            //修改子项的标题及内容
            changeSingleBranch(index) {
                this.singleBranchIndex = index;
                this.change_education(this.allDataArr[index].data);
            },
        },
        async mounted() {
            this.allDataArr = await this.query_teachers_quality();
            this.educationNameArr = new EducationName(this.allDataArr).getNameArr();
            this.activeName = this.educationNameArr[0];
        }
    }
</script>

<style scoped lang="scss">
    @import "./../education_quality/education_quality.scss";

    .teachers_quality {
        position: relative;
    }

    .single-branch {
        margin-left: 0;

        &::before {
            display: none;
        }
    }

</style>
