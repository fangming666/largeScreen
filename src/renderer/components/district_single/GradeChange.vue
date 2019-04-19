<template>
    <!-------学校等级划分----->
    <div class="grade-division base-box">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <gradeNav :gradeArr="gradeArr" @parentChangeGrade="changeGrade">
        </gradeNav>
        <div id="gradeChange"></div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import GradeDivisionInfo from "../../utils/gradeDivisionInfo";
    import SuperaverageTrendInfo from "../../utils/SuperaverageTrendInfo";

    export default {
        name: "GradeChange",
        props: ["req_data","req_title"],
        data() {
            return {
                schoolCoreArr: [],//学校超均率
                gradeArr: [],//等级的arr
                allDataArr: [],//返回的所有数据的集合
                gradeJudge: false
            }
        },
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
            gradeNav: () => import("../gradeNav/gradeNav"),
        },
        mounted() {
            this.allDataArr = new GradeDivisionInfo(this.req_data).getRate();
            this.gradeArr = new GradeDivisionInfo(this.allDataArr).getGradeArr();
            this.schoolCoreArr = new GradeDivisionInfo(this.allDataArr).getGradeRate(this.gradeArr, this.schoolCoreArr);
            //配置折线图
            this.drawCanvas(this.schoolCoreArr);
        },
        methods: {
            //绘制图形
            drawCanvas(reqArr) {
                //配置折线图
                Highcharts.chart('gradeChange', {
                    title: {
                        text: ''
                    },
                    chart: {
                        backgroundColor: "transparent",
                    },
                    subtitle: {
                        text: ''
                    },
                    //版权表示
                    credits: {
                        enabled: false
                    },
                    tooltip:{
                        backgroundColor: "rgba(41,34,126,0.79)",
                        borderColor: "#4248B9",
                        style: {
                            fontSize: "10px",
                            color: "#ADC3EC",
                        }
                    },
                    plotOptions:{
                        series: {
                            marker: {
                                enabled: true, /*数据点是否显示*/
                                radius: 3,  /*数据点大小px*/
                            },
                        }
                    },
                    yAxis: {
                        allowDecimals: false,
                        max: 100,
                        gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                        title: {
                            text: '超 均 率 ％',
                            align: "high",//对齐方式
                            rotation: 90,//旋转
                            style: {
                                fontSize: 9.6,
                                color: "#8AAEF1",
                            },
                            y: 42
                        },
                        //轴标签
                        labels: {
                            padding: 2,
                            style: {
                                fontSize: 9.6,
                                color: "#8AAEF1",
                            }
                        },
                    },
                    //图例
                    legend:
                        {
                            itemStyle: {
                                color: "#8AAEF1"
                            },
                            itemHoverStyle: {
                                color: "#8AAEF1"
                            }
                        },
                    xAxis: {
                        categories: new SuperaverageTrendInfo(this.req_data[0].data).getTime(),
                        crosshair: true,
                        tickWidth:1,
                        tickColor:"#484AD5",
                        lineColor: " #484AD5",//轴线颜色
                        //轴标签
                        labels: {
                            style: {
                                // fontSize: 14,
                                color: "#8AAEF1",
                            }
                        }
                    },
                    series: reqArr
                })
            },
            //更改科目的时候
            changeGrade(gradeName) {
                let gradeDivisionInfo = new GradeDivisionInfo(this.gradeArr, gradeName);
                this.gradeArr = gradeDivisionInfo.changeGradeArr();
                this.gradeJudge = gradeDivisionInfo.getGradeJudge();
                this.schoolCoreArr =
                    new GradeDivisionInfo(this.allDataArr, gradeName).getGradeRate(this.gradeArr, this.schoolCoreArr, this.gradeJudge);

                this.drawCanvas(this.schoolCoreArr);
            }
        }
    }
</script>

<style scoped lang="scss">
    .grade-division {
        width: 410px;
        height: 338px;
        position: relative;

        .grade-nav {
            position: absolute;
            right: 27px;
            height: 43px;
        }
    }

    #gradeChange {
        width: 400px;
        height: 280px;
        margin: 15px auto 0;
        position: relative;
        top: 5px;
        left: -20px;
    }
</style>
