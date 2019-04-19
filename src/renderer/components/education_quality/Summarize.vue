<template>
    <!-----考试概括---->
    <div class="summarize base-box" :class="[req_data.style===2?'summarize-big':'',req_judge]" v-if="req_data">
        <pubTitle :req_title="req_title">
            <span class="pub-head-other">{{req_data.examName}}</span>
        </pubTitle>
        <div class="clearfix school-people">
            <dl class="clearfix float-left" v-if="req_data.schoolNum&&req_data.style!== 2">
                <dt class="float-left">
                    参考学校
                </dt>
                <dd class="float-left">
                    {{req_data.schoolNum}}所
                </dd>
            </dl>
            <dl class="clearfix float-left" v-if="req_data.peopleNum">
                <dt class="float-left">
                    参考人数
                </dt>
                <dd class="float-left">
                    {{req_data.peopleNum}}人
                </dd>
            </dl>
            <dl class="clearfix float-left" v-if="req_data.subjectlNum">
                <dt class="float-left">
                    参考科目
                </dt>
                <dd class="float-left">
                    {{req_data.subjectlNum}}科
                </dd>
            </dl>
        </div>
        <img :src="summarizeTopImg" alt="summarize-top" v-if="req_data.style !==2">
        <!-----学校评比---->
        <div class="summarize-content clearfix" v-if="!req_data.style">
            <dl class="summarize-average float-left">
                <dt>
                    <img :src="summarizeAverage1" alt="summarizeAverage">
                    <img :src="summarizeAverage2" alt="summarizeAverage" class="my-rotate-1">
                    <img :src="summarizeAverage3" alt="summarizeAverage">
                    <img :src="summarizeAverage4" alt="summarizeAverage">
                    <img :src="summarizeAverage5" alt="summarizeAverage" class="my-rotate-2">
                    <img :src="summarizeAverage6" alt="summarizeAverage">
                    <img :src="summarizeAverage7" alt="summarizeAverage">
                    {{req_data.average}}
                </dt>
                <dd>
                    平均分
                </dd>
            </dl>
            <dl class="summarize-high float-left">
                <dt>
                    <img :src="summarizeHigh1" alt="summarizeHigh">
                    <img :src="summarizeHigh2" alt="summarizeHigh" class="my-rotate-3">
                    <img :src="summarizeHigh3" alt="summarizeHigh">
                    <img :src="summarizeHigh4" alt="summarizeHigh">
                    <img :src="summarizeHigh5" alt="summarizeHigh" class="my-rotate-4">
                    {{req_data.median}}
                </dt>
                <dd>
                    中位数
                </dd>
            </dl>
            <div class="float-right">
                <p class="summarize-item">
                    满分：{{req_data.full}}分
                </p>
                <p class="summarize-item">
                    最高分：{{req_data.high}}分
                </p>
                <p class="summarize-item">
                    最低分：{{req_data.lowest}}分
                </p>
            </div>
        </div>
        <!-----试卷质量检测---->
        <div v-else-if="req_data.style === 1" class="paper-quality">
            <dl class="summarize-average float-left">
                <dt>
                    <img :src="summarizeAverage1" alt="summarizeAverage">
                    <img :src="summarizeAverage2" alt="summarizeAverage" class="my-rotate-1">
                    <img :src="summarizeAverage3" alt="summarizeAverage">
                    <img :src="summarizeAverage4" alt="summarizeAverage">
                    <img :src="summarizeAverage5" alt="summarizeAverage" class="my-rotate-2">
                    <img :src="summarizeAverage6" alt="summarizeAverage">
                    <img :src="summarizeAverage7" alt="summarizeAverage">
                    <div>
                        <p>
                            {{req_data.difficulty}}
                        </p>
                        {{req_data.difficultyInfo}}
                    </div>
                </dt>
                <dd>
                    难度
                </dd>
            </dl>
            <dl class="summarize-high float-left">
                <dt>
                    <img :src="summarizeHigh1" alt="summarizeHigh">
                    <img :src="summarizeHigh2" alt="summarizeHigh" class="my-rotate-3">
                    <img :src="summarizeHigh3" alt="summarizeHigh">
                    <img :src="summarizeHigh4" alt="summarizeHigh">
                    <img :src="summarizeHigh5" alt="summarizeHigh" class="my-rotate-4">
                    <div>
                        <p>
                            {{req_data.division}}
                        </p>
                        {{req_data.divisionInfo}}
                    </div>
                </dt>
                <dd>
                    区分度
                </dd>
            </dl>
            <dl class="summarize-high float-left">
                <dt>
                    <img :src="summarizeHigh1" alt="summarizeHigh">
                    <img :src="summarizeHigh2" alt="summarizeHigh" class="my-rotate-3">
                    <img :src="summarizeHigh3" alt="summarizeHigh">
                    <img :src="summarizeHigh4" alt="summarizeHigh">
                    <img :src="summarizeHigh5" alt="summarizeHigh" class="my-rotate-4">
                    <div>
                        <p>
                            {{req_data.reliability}}
                        </p>
                        {{req_data.reliabilityInfo}}
                    </div>
                </dt>
                <dd>
                    信度
                </dd>
            </dl>
            <div>
                <p class="summarize-item float-left">
                    满分：{{req_data.full}}分
                </p>
                <p class="summarize-item float-left">
                    主客观分值占比：{{req_data.sbjectiveObjectiveRatio}}
                </p>
                <p class="summarize-item float-left">
                    试题数量：{{req_data.questionsNumd}}
                </p>
            </div>
        </div>

        <!----学校整体---->
        <div v-else-if="req_data.style=== 2" class="school-quality clearfix">
            <div class="school-quality-left float-left">
                <img :src="summarizeTopImg" alt="summarize-top" v-if="req_data.style ===2">
                <div class="school-quality-content">
                    <dl class="summarize-average float-left">
                        <dt>
                            <img :src="summarizeAverage1" alt="summarizeAverage">
                            <img :src="summarizeAverage2" alt="summarizeAverage" class="my-rotate-1">
                            <img :src="summarizeAverage3" alt="summarizeAverage">
                            <img :src="summarizeAverage4" alt="summarizeAverage">
                            <img :src="summarizeAverage5" alt="summarizeAverage" class="my-rotate-2">
                            <img :src="summarizeAverage6" alt="summarizeAverage">
                            <img :src="summarizeAverage7" alt="summarizeAverage">
                            <div>
                                {{req_data.average}}
                            </div>
                        </dt>
                        <dd>
                            校平均分
                        </dd>
                    </dl>
                    <dl class="summarize-high float-left">
                        <dt>
                            <img :src="summarizeHigh1" alt="summarizeHigh">
                            <img :src="summarizeHigh2" alt="summarizeHigh" class="my-rotate-3">
                            <img :src="summarizeHigh3" alt="summarizeHigh">
                            <img :src="summarizeHigh4" alt="summarizeHigh">
                            <img :src="summarizeHigh5" alt="summarizeHigh" class="my-rotate-4">
                            <div>
                                {{req_data.equipartition}}
                            </div>
                        </dt>
                        <dd>
                            均分差
                        </dd>
                    </dl>
                    <dl class="summarize-high float-left">
                        <dt>
                            <img :src="superAverageRate1" alt="superAverageRate">
                            <img :src="superAverageRate2" alt="superAverageRate">
                            <div>
                                <p>
                                    {{req_data.superAverageRate}}%
                                </p>
                                <p>
                                    与上次考试相比
                                </p>
                                <p :class="req_data.superAverageRateMatch?
                                   req_data.superAverageRateMatch>0?'text-success'
                                   :'text-danger'
                                   :'text-warning'">
                                    <i class="fa"
                                       :class="getIconClass(req_data.superAverageRateMatch)"></i>
                                    {{req_data.superAverageRateMatch}}%
                                </p>
                            </div>
                        </dt>
                        <dd>
                            超均率(%)
                        </dd>
                    </dl>
                </div>
            </div>

            <div class="school-quality-right float-left">
                <div class="summarize-item">
                    满分：{{req_data.full}}分
                </div>
                <div class="summarize-item">排名：第{{req_data.rank}}<i class="fa"
                                                                    :class="getIconClass(req_data.rank)"></i><span
                        class="rankMacth">{{req_data.rankMacth?`${req_data.rankMacth}名`:'不变'}}</span><span>(共{{req_data.schoolNum}}所)</span>
                </div>
                <div class="summarize-item" v-if="req_data.keynote||req_data.keynoteMatch">
                    <p>重点高中上线率<span>{{req_data.keynote}}</span></p>
                    <p>与上次考试相比<span><i class="fa"
                                       :class="getIconClass(req_data.keynoteMatch)"></i>{{req_data.keynoteMatch}}%</span>
                    </p>
                </div>
                <div class="summarize-item" v-if="req_data.common||req_data.commonMatch">
                    <p>普通高中上线率<span>{{req_data.common}}</span></p>
                    <p>与上次考试相比<span><i class="fa"
                                       :class="getIconClass(req_data.commonMacth)"></i>{{req_data.commonMacth}}%</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dropImg from "../../static/drop.png";//形状为点的图片
    import summarizeTopImg from "../../static/summarize-top.png";//内容区域上面的图片
    import summarizeAverage1 from "../../static/summarize-average1.png";//平均分的图片1
    import summarizeAverage2 from "../../static/summarize-average2.png";//平均分的图片2
    import summarizeAverage3 from "../../static/summarize-average3.png";//平均分的图片3
    import summarizeAverage4 from "../../static/summarize-average4.png";//平均分的图片4
    import summarizeAverage5 from "../../static/summarize-average5.png";//平均分的图片5
    import summarizeAverage6 from "../../static/summarize-average6.png";//平均分的图片6
    import summarizeAverage7 from "../../static/summarize-average7.png";//平均分的图片7
    import summarizeHigh1 from "../../static/summarize-high1.png";//最高分的图片1
    import summarizeHigh2 from "../../static/summarize-high2.png";//最高分的图片1
    import summarizeHigh3 from "../../static/summarize-high3.png";//最高分的图片1
    import summarizeHigh4 from "../../static/summarize-high4.png";//最高分的图片1
    import summarizeHigh5 from "../../static/summarize-high5.png";//最高分的图片1
    import superAverageRate1 from "../../static/super-average-rate.svg";//超均率的图片1
    import superAverageRate2 from "../../static/super-average-rate2.svg";//超均率的图片2

    export default {
        name: "Summarize",
        data() {
            return {
                dropImg,
                summarizeTopImg,
                summarizeAverage1,
                summarizeAverage2,
                summarizeAverage3,
                summarizeAverage4,
                summarizeAverage5,
                summarizeAverage6,
                summarizeAverage7,
                summarizeHigh1,
                summarizeHigh2,
                summarizeHigh3,
                summarizeHigh4,
                summarizeHigh5,
                superAverageRate1,
                superAverageRate2
            }
        },
        props: ["req_data", "req_title", "req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        methods: {
            //返回icon的类名
            getIconClass(result) {
                return result ?
                    (result > 0 ? 'fa-arrow-alt-circle-up text-success'
                        : 'fa-arrow-alt-circle-down text-danger')
                    : 'fa-arrows-alt-h text-warning'
            }
        },

    }
</script>

<style scoped lang="scss">
    .summarize {
        width: 501px;
        height: 338px;
    }

    .drop-img {
        vertical-align: middle;
        position: relative;
        top: -3px;
    }

    .exam-name {
        font-size: 17px;
        color: rgba(164, 160, 233, 0.8);
    }

    .school-people {
        margin-top: 9px;
        font-size: 16px;
        color: #8AAEF1;

        dl {
            margin: 0 33px 0 0;

            dt {
                margin-right: 12px;
                font-weight: normal;
            }

            dd {
                margin-left: 0;
            }
        }
    }

    .summarize-content {
        box-sizing: border-box;
        background-image: url("../../static/summarize-content.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 223px;
        padding: 40px 20px 0 24px;
    }

    .summarize-item {
        width: 130px;
        height: 40px;
        line-height: 43px;
        padding-left: 8px;
        box-sizing: border-box;
        font-size: 15px;
        color: #9092E6;
        margin-top: 0;
        margin-bottom: 15px;
        background-image: url("../../static/summarize-item.png");
        background-size: 100% 100%;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .summarize-average {
        margin: 0 23px 0 0;
        width: 114px;
        height: 114px;

        dt {
            color: #EA9859;
            font-size: 15px;
            font-weight: normal;
            margin-bottom: 10px;
            position: relative;
            width: 112px;
            height: 112px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                position: absolute;
                left: 0;
                top: 0;
            }
        }

        dd {
            font-size: 15px;
            color: rgba(138, 174, 241, 0.8);
            width: 110px;
            text-align: center;
            margin: 0;
        }
    }

    .summarize-high {
        @extend .summarize-average;
        width: 110px;
        height: 110px;
        margin-right: 0;
    }

    .paper-quality {
        @extend .summarize-content;
        padding-top: 24px;
        position: relative;

        .summarize-average {
            margin-right: 23px;

            dt {
                text-align: center;
                font-size: 12px;
                margin-bottom: 4px;

                p {
                    margin: 0;
                    font-size: 17px;
                }
            }

            dd {
                background: #1A155D;
                border-radius: 13px;
                font-size: 15px;
                color: #8AAEF1;
                width: 84px;
                height: 26px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
            }
        }

        .summarize-high {
            margin-right: 23px;

            &:last-child {
                margin-right: 0;
            }
        }

        & > div {
            width: 100%;
            margin: 0;
            position: absolute;
            left: 0;
            bottom: 7px;
            display: flex;
            justify-content: center;

            .summarize-item {
                margin-bottom: 0;
                margin-right: 9px;
                width: 119px;
                padding-left: 15px;

                &:last-child {
                    margin-right: 0;
                }

                &:nth-child(2) {
                    padding-left: 8px;
                    width: 156px;
                }
            }
        }
    }

    .summarize-big {
        width: 653px;
        padding: 23px 18px;
        .summarize-item{
            width: 172px;
            padding-left: 9px;
            background-image: url("../../static/summarize-item-one.png");
            &:nth-child(3),&:nth-child(4){
                background-image: url("../../static/summarize-item-two.png");
            }
        }
    }

    .school-quality-left {
        width: 427px;
        margin-right: 16px;

        img {
            max-width: 100%;
        }

        .school-quality-content {
            margin-top: -5px;
            box-sizing: border-box;
            background-image: url("../../static/summarize-content.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            height: 233px;
            padding: 40px 20px 0 24px;

            .summarize-average {
                margin-right: 23px;

                dt {
                    margin-bottom: 18px;
                }

                dd {
                    background: #1A155D;
                    border-radius: 13px;
                    font-size: 15px;
                    color: #8AAEF1;
                    width: 84px;
                    height: 26px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                }
            }

            .summarize-high {
                &:last-child {
                    margin-right: 0;

                    p {
                        margin: 0;
                        text-align: center;

                        &:first-child {
                            font-size: 17px;
                        }

                        &:nth-child(2) {
                            font-size: 11px;
                            color: #839EE3;
                            margin: 3px 0;
                        }

                        &:last-child {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }

    .school-quality-right {
        .summarize-item {
            width: 170px;
            padding-left: 9px;
            font-size: 15px;
            color: #9092E6;
            margin-bottom: 11px;

            i {
                font-size: 12px;
            }

            &:nth-child(2) {
                span:not(.rankMacth) {
                    font-size: 12px;
                    color: #9092E6;
                }

                .rankMacth {
                    font-size: 13px;
                }
            }

            &:nth-child(3), &:nth-child(4) {
                height: 60px;
                padding-top: 11px;

                p {
                    line-height: normal;
                    margin: 0;

                    span {
                        margin-left: 5px;
                        font-size: 15px;
                        color: #9092E6;
                        letter-spacing: -0.24px;

                        i {
                            margin-right: 1px;
                        }
                    }

                    &:last-child {
                        margin-top: 4px;
                    }
                }
            }
        }
    }

    .school-single {
        width: 685px;
    }
    .my-rotate-1{
        animation: myRotate 25s linear infinite;
    }
    .my-rotate-2{
        animation: myRotate 16s linear infinite;
    }
    .my-rotate-3{
        animation: myRotate 23s linear infinite;
    }
    .my-rotate-4{
        animation: myRotate 17s linear infinite;
    }
    @keyframes myRotate {
        from{
            transform: rotate(360deg);
        }
    }
</style>
