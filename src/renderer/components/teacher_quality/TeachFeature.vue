<template>
    <!-------教师教学特征---->
    <div class="teach-feature">
        <img :src="teachFeatureSideImg" v-if="imgActive" alt="teachFeatureSideImg" class="left-img">
        <img :src="teachFeatureSideImg" v-if="imgActive" alt="teachFeatureSideImg" class="right-img">
        <div class="teach-feature-nav-warp"
             :class="[!packOneSwitch&&'teach-feature-nav-none-warp',packTwoSwitch?'teach-feature-nav-warp-two':'teach-feature-nav-warp-one',]"
        >
            <div class="top-info clearfix" :class="!assemblySwitch&&'top-info-other'" v-if="!packOneSwitch">
                <dl class="float-left clearfix" v-if="subjectOutcomeArr.length">
                    <dt class="float-left">科目：</dt>
                    <dd class="float-left" v-for="item in subjectOutcomeArr">{{item}}</dd>
                </dl>
                <dl class="float-left clearfix" v-if="schoolOutcomeArr.length">
                    <dt class="float-left">学校：</dt>
                    <dd class="float-left" v-for="item in schoolOutcomeArr">{{item}}</dd>
                </dl>
                <dl class="float-left clearfix" v-if="gradeOutcomeArr.length">
                    <dt class="float-left">年级：</dt>
                    <dd class="float-left" v-for="item in gradeOutcomeArr">{{item}}</dd>
                </dl>
                <dl class="float-left clearfix" v-if="academicOutcomeArr.length">
                    <dt class="float-left">职称：</dt>
                    <dd class="float-left" v-for="item in academicOutcomeArr">{{item}}</dd>
                </dl>
                <dl class="float-left clearfix" v-if="educationalOutcomeArr.length">
                    <dt class="float-left">学历：</dt>
                    <dd class="float-left" v-for="item in educationalOutcomeArr">{{item}}</dd>
                </dl>
                <dl class="float-left clearfix" v-if="sexOutcomeArr.length">
                    <dt class="float-left">性别：</dt>
                    <dd class="float-left" v-for="item in sexOutcomeArr">{{item}}</dd>
                </dl>
            </div>
            <a href="javascript:;" class="pack-one-text" @click="() =>{
            this.packOneSwitch = !this.packOneSwitch;
            this.imgActive = this.packOneSwitch;
            }
">
                {{packOneSwitch?'收起筛选':'展开筛选条件'}}
            </a>
            <a href="javascript:;" class="pack-two-text" @click="() =>this.packTwoSwitch = !this.packTwoSwitch">
                {{packTwoSwitch?'收起更多筛选':'更多筛选'}}
            </a>
            <TeachFeatureNav
                    v-if="NavArr.length"
                    v-for="(item,index) in NavArr"
                    :key="index"
                    @parChooseNav="chooseNav"
                    @changeField="changeField"
                    :nav_data="item"
            >
            </TeachFeatureNav>
        </div>
        <!-----科目为整体的时候---->
        <div class="teach-feature-ensemble-warp" :class="!packOneSwitch&&'teach-feature-ensemble-warp-other'"
             v-if="assemblySwitch">
            <TeachFeatureEnsemble :teacherArr="outcomeArr" @parOpenVisiting="openVisiting" v-if="outcomeArr.length">
            </TeachFeatureEnsemble>
        </div>
        <!-------科目为单科的时候----->
        <div class="teach-feature-solely-warp" v-else :class="!packOneSwitch&&'teach-feature-solely-warp-other'">
            <TeachFeatureSolely @parOpenVisiting="openVisiting" :subjectOutcomeArr="subjectOutcomeArr"
                                :teacherArr="outcomeArr" v-if="outcomeArr.length">
            </TeachFeatureSolely>
        </div>
        <!-----教师名片---->
        <VisitingCard v-show="visitingCardSwitch&&JSON.stringify(visitingCardJson)!=='{}'"
                      @parCloseVisiting="closeVisiting"
                      :visitingCardJson="visitingCardJson">
        </VisitingCard>
    </div>
</template>

<script>
    import TeachFeatureNav from "../teachFeature/TeachFeatureNav";
    import TeachFeatureEnsemble from "../teachFeature/teachFeatureEnsemble";
    import TeachFeatureSolely from "../teachFeature/teachFeatureSolely";
    import VisitingCard from "../teachFeature/VisitingCard"
    import teachFeatureSideImg from "../../static/teach-feature-side.png";

    let manImgArr = [], womanImgArr = [];
    for (let i = 0; i < 20; i++) {
        manImgArr = [...manImgArr, require(`../../static/man${i}.png`)];
        womanImgArr = [...womanImgArr, require(`../../static/woman${i}.png`)]
    }
    export default {
        name: "TeachFeature",
        components: {TeachFeatureNav, TeachFeatureEnsemble, TeachFeatureSolely, VisitingCard},
        data() {
            return {
                outcomeArr: [],//筛选的最终数组
                subjectOutcomeArr: [],//筛选科目的字段
                schoolOutcomeArr: [],//筛选学校的字段
                gradeOutcomeArr: [],//筛选年级的字段
                academicOutcomeArr: [],//筛选职称的字段
                educationalOutcomeArr: [],//筛选学历的字段
                sexOutcomeArr: [],//筛选性别的字段
                NavArr: [],//导航数组
                visitingCardSwitch: false,//教师名片的开关
                visitingCardJson: {},//教师名片的json
                assemblySwitch: true,//橱窗（true，科目为整体）|表格（false,科目为单科）
                subjectArr: [],//科目
                schoolArr: [],//学校
                gradeArr: [],//年级
                academicArr: [],//职称
                educationalArr: [],//学历
                sexArr: [],//性别;
                filterSwitch: false,//筛选的开关
                packOneSwitch: true,//第一层开关,默认打开
                packTwoSwitch: false,//第二层收起开关，默认关闭
                teachFeatureSideImg: teachFeatureSideImg,//两边图像
                imgActive: true,//两边图像显示开关
                manImgArr,//男生头像的集合
                womanImgArr,//女生头像的集合
            }
        },
        props: ["req_data"],
        methods: {
            //修改要筛选的字段对应的数组（filterSwitch{true：增加字段，false:删除字段}）
            changeField(content, field, number) {
                switch (field) {
                    case "subject":
                        this.subjectArr = this.changeArrActive(this.subjectArr, number, field);
                        if (this.filterSwitch) {
                            this.subjectOutcomeArr = [content];
                        } else {
                            this.subjectOutcomeArr.splice(this.subjectOutcomeArr.findIndex(item => item === content), 1);
                        }
                        break;
                    case "school":
                        this.schoolArr = this.changeArrActive(this.schoolArr, number);
                        if (this.filterSwitch) {
                            this.schoolOutcomeArr = [...this.schoolOutcomeArr, content];
                        } else {
                            this.schoolOutcomeArr.splice(this.schoolOutcomeArr.findIndex(item => item === content), 1);
                        }
                        break;
                    case "grade":
                        this.gradeArr = this.changeArrActive(this.gradeArr, number);
                        if (this.filterSwitch) {
                            this.gradeOutcomeArr = [...this.gradeOutcomeArr, content];
                        } else {
                            this.gradeOutcomeArr.splice(this.gradeOutcomeArr.findIndex(item => item === content), 1);
                        }
                        break;
                    case "academic":
                        this.academicArr = this.changeArrActive(this.academicArr, number);
                        if (this.filterSwitch) {
                            this.academicOutcomeArr = [...this.academicOutcomeArr, content];
                        } else {
                            this.academicOutcomeArr.splice(this.academicOutcomeArr.findIndex(item => item === content), 1);
                        }
                        break;
                    case "educational":
                        this.educationalArr = this.changeArrActive(this.educationalArr, number);
                        if (this.filterSwitch) {
                            this.educationalOutcomeArr = [...this.educationalOutcomeArr, content];
                        } else {
                            this.educationalOutcomeArr.splice(this.educationalOutcomeArr.findIndex(item => item === content), 1);
                        }
                        break;
                    case "sex":
                        this.sexArr = this.changeArrActive(this.sexArr, number);
                        if (this.filterSwitch) {
                            this.sexOutcomeArr = [...this.sexOutcomeArr, content];
                        } else {
                            this.sexOutcomeArr.splice(this.sexOutcomeArr.findIndex(item => item === content), 1);
                        }
                        break;
                }
                this.initNavArr();
            },
            //修改函数的active参数
            changeArrActive(initArr, number, field = "other") {
                let arr = initArr;
                for (let index in initArr) {
                    if (field !== "subject") {
                        if (+index === number) {
                            initArr[index].active = !initArr[index].active;
                            this.filterSwitch = initArr[index].active;
                            break;
                        }
                    } else {
                        if (+index === number) {
                            initArr[index].active = !initArr[index].active;
                            this.filterSwitch = initArr[index].active;
                        } else {
                            initArr[index].active = false;
                        }
                    }
                }
                return arr;
            },
            //选项进行点击筛选的事件
            chooseNav(content, field) {
                if (field === "subject") {
                    this.assemblySwitch = !this.subjectOutcomeArr.length;
                }
                let subjectArr = this.circulate(this.subjectOutcomeArr, this.req_data, "subject");
                let schoolArr = this.circulate(this.schoolOutcomeArr, subjectArr, "school");
                let gradeArr = this.circulate(this.gradeOutcomeArr, schoolArr, "grade");
                let academicArr = this.circulate(this.academicOutcomeArr, gradeArr, "academic");
                let educationalArr = this.circulate(this.educationalOutcomeArr, academicArr, "educational");
                this.outcomeArr = this.circulate(this.sexOutcomeArr, educationalArr, "sex");

            },
            //打开教师名片
            openVisiting(id) {
                for (let child of this.outcomeArr) {
                    if (child.teacherId === id) {
                        this.visitingCardJson = child;
                        break;
                    }
                }
                this.visitingCardSwitch = true;
            },
            //关闭教师名片
            closeVisiting() {
                this.visitingCardSwitch = false;
                this.visitingCardJson = {};
            },
            //初始化nav数组
            initNavArr() {
                let subjectData = {title: "科目", data: this.subjectArr, field: "subject"},//科目
                    schoolData = {title: "学校", data: this.schoolArr, field: "school"},//学校
                    gradeData = {title: "年级", data: this.gradeArr, field: "grade"},//年级
                    academicData = {title: "职称", data: this.academicArr, field: "academic"},//职称
                    educationalData = {title: "学历", data: this.educationalArr, field: "educational"},//学历
                    sexData = {title: "性别", data: this.sexArr, field: "sex"};//性别
                this.NavArr = [subjectData, schoolData, gradeData, academicData, educationalData, sexData];
            },
            //使用reduce实现对象数组去重
            reduceWeight(initArr) {
                let hash = {};
                return initArr.reduce((item, next) => {
                    hash[next.content] ? "" : hash[next.content] = true && item.push(next);
                    return item
                }, []);
            },
            //循环数组
            circulate(initArr, allArr, field) {
                if (!initArr.length) {
                    return allArr;
                }
                let arr = [];
                for (let child of allArr) {
                    for (let initChild of initArr) {
                        if (initChild === child[field]) {
                            arr = [...arr, child];
                        }
                    }
                }
                return arr;
            }
        },
        mounted() {
            let resultArr = [];
            for (let child of this.req_data) {
                this.schoolArr = [...this.schoolArr, {active: false, content: child.school}];
                this.gradeArr = [...this.gradeArr, {active: false, content: child.grade}];
                this.academicArr = [...this.academicArr, {active: false, content: child.academic}];
                this.educationalArr = [...this.educationalArr, {active: false, content: child.educational}];
                this.sexArr = [...this.sexArr, {active: false, content: child.sex}];
                let changeChild = child;
                changeChild["imgHref"] = `${child.sex === "男" ? this.manImgArr[(Math.floor(Math.random() * 20 + 1) - 1)] :
                    this.womanImgArr[(Math.floor(Math.random() * 20 + 1) - 1)]}`;
                resultArr = [...resultArr, changeChild]
            }
            this.subjectArr = [{active: false, content: "数学"}, {active: false, content: "语文"}, {
                active: false,
                content: "英语"
            }, {active: false, content: "生物"}
                , {active: false, content: "历史"}, {active: false, content: "地理"}, {active: false, content: "道德与法治"}];
            this.schoolArr = this.reduceWeight(this.schoolArr);
            this.gradeArr = this.reduceWeight(this.gradeArr);
            this.academicArr = this.reduceWeight(this.academicArr);
            this.educationalArr = this.reduceWeight(this.educationalArr);
            this.sexArr = this.reduceWeight(this.sexArr);
            this.initNavArr();
            this.outcomeArr = JSON.parse(JSON.stringify(this.req_data));
        }
    }
</script>

<style scoped lang="scss">
    .teach-feature {
        position: relative;
        width: 100%;
        /*background-image: url("../../static/teach-feature-bg.png");*/
    }

    .left-img {
        position: absolute;
        left: -108px;
        top: -20px
    }

    .right-img {
        position: absolute;
        right: -108px;
        top: -20px;
        transform: rotateY(180deg);
    }

    .teach-feature-nav-warp {
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        box-sizing: border-box;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        width: 1155px;

        .top-info {
            color: rgba(68, 197, 255, 0.8);
            font-size: 14px;
            letter-spacing: -0.22px;
            width: 1160px;
            position: absolute;
            left: -202px;
            top: -20px;

            dl {
                margin-right: 40px;

                dt {
                    font-weight: normal;
                    margin-right: 0;
                }

                dd {
                    margin-right: 6px;
                    margin-left: 0;
                }
            }

            &.top-info-other {
                left: -90px;
            }
        }

        .pack-one-text, .pack-two-text {
            font-size: 12px;
            color: rgba(68, 197, 255, 0.8);
            position: absolute;
            text-decoration: none;
        }

        &.teach-feature-nav-warp-one {
            height: 144px;
            margin: 0 auto;
            padding-top: 20px;
            background-image: url("../../static/feature-nav-bg-sm.png");

            .pack-one-text {
                right: 55px;
                top: 25px
            }

            .pack-two-text {
                right: 125px;
                bottom: 15px;
            }

        }

        &.teach-feature-nav-warp-two {
            height: 274px;
            background-image: url("../../static/feature-nav-bg-big.png");

            .pack-one-text {
                right: 55px;
                top: 25px
            }

            padding-top: 20px;

            .pack-two-text {
                right: 155px;
                bottom: 15px;
            }
        }

        &.teach-feature-nav-none-warp {
            height: 0;
            padding: 0;
            overflow: visible;

            .pack-one-text {
                right: 55px;
                top: -10px;
            }

            .teach-feature-nav, .pack-two-text {
                display: none;
            }
        }
    }

    .teach-feature-nav {
        &:last-child {
            margin-bottom: 0;
        }
    }

    .teach-feature-ensemble-warp-other, .teach-feature-solely-warp-other {
        position: relative;
        top: 30px;
    }
</style>
