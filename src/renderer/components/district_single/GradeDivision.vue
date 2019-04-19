<template>
    <!-------学校等级划分----->
    <div class="grade-division base-box">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <gradeNav :gradeArr="gradeArr" @parentChangeGrade="changeGrade">
        </gradeNav>
        <div id="gradeDivision"></div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import GradeDivisionInfo from "../../utils/gradeDivisionInfo";

    export default {
        name: "gradeDivision",
        props: ["req_data","req_title"],
        data() {
            return {
                schoolNameArr: [],//学校的名称
                schoolCoreArr: [],//学校比例
                gradeArr: [],//等级的arr
                allDataArr: [],//返回的所有数据的集合
                gradeJudge :false
            }
        },
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
            gradeNav: () => import("../gradeNav/gradeNav"),
        },
        mounted() {
            this.schoolNameArr = new SchoolInfo(this.req_data[0].data).getSchoolNameArr();
            this.allDataArr = new GradeDivisionInfo(this.req_data).getCore();
            this.gradeArr = new GradeDivisionInfo(this.allDataArr).getGradeArr();
            this.schoolCoreArr = new GradeDivisionInfo(this.allDataArr).getGradeCore(this.gradeArr, this.schoolCoreArr);
            //配置柱状图
            this.drawCanvas(this.schoolCoreArr);
        },
        methods: {
            //绘制图形
            drawCanvas(reqArr) {
                //配置柱状图
                Highcharts.chart('gradeDivision',
                    {
                        chart: {
                            type: 'column',
                            backgroundColor: "transparent",
                        },
                        //渐变色
                        color: {
                            linearGradient: {x1: 0, x2: 1, y1: 0, y2: 1},
                            stops: [
                                [0, '#00CFEA'],
                                [1, '#0075CF']
                            ]
                        },
                        //标题
                        title: {
                            text: ''
                        },
                        //版权表示
                        credits: {
                            enabled: false
                        },
                        //x轴
                        xAxis: {
                            categories: this.schoolNameArr,
                            crosshair: true,
                            lineColor: " #484AD5",//轴线颜色
                            //轴标签
                            labels: {
                                style: {
                                    // fontSize: 14,
                                    color: "#8AAEF1",
                                }
                            }
                        },
                        //Y轴
                        yAxis: {
                            min: 0,
                            allowDecimals: false,
                            max: 100,
                            minRange: 30,
                            gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                            title: {
                                text: '比 例 %',
                                align: "high",//对齐方式
                                rotation: 90,//旋转
                                style: {
                                    fontSize: 9.6,
                                    color: "#8AAEF1",
                                },
                                y: 35
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
                        tooltip: {
                            // head + 每个 point + footer 拼接成完整的 table
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat:
                                '<tr>' +
                                '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
                            footerFormat:
                                '</table>',
                            shared:
                                true,
                            useHTML:
                                true,
                            backgroundColor: "rgba(41,34,126,0.79)",
                            borderColor: "#4248B9",
                            style: {
                                fontSize: "10px",
                                color: "#ADC3EC",
                            }
                        }
                        ,
                        plotOptions: {
                            column: {
                                borderWidth: 0,
                                pointWidth: 16,
                                stacking: 'normal'
                            }
                        }
                        ,
                        //数据
                        series: reqArr,
                        //图例
                        legend:
                            {
                                squareSymbol: true,
                                symbolRadius: 0,
                                symbolWidth: 11,
                                symbolHeight: 9,
                                itemStyle: {
                                    color: "#8AAEF1"
                                },
                                itemHoverStyle: {
                                    color: "#8AAEF1"
                                }
                            }
                    }
                )
            },
            //更改科目的时候
            changeGrade(gradeName) {
                let gradeDivisionInfo = new GradeDivisionInfo(this.gradeArr, gradeName);
                this.gradeArr = gradeDivisionInfo.changeGradeArr();
                this.gradeJudge = gradeDivisionInfo.getGradeJudge();
                this.schoolCoreArr =
                    new GradeDivisionInfo(this.allDataArr, gradeName).getGradeCore(this.gradeArr, this.schoolCoreArr, this.gradeJudge);

                this.drawCanvas(this.schoolCoreArr);
            }
        }
    }
</script>

<style scoped lang="scss">
    .grade-division {
        width: 390px;
        height: 338px;
        position: relative;

        .grade-nav {
            position: absolute;
            right: 27px;
            height: 43px;
        }
    }

    #gradeDivision {
        width: 380px;
        height: 280px;
        margin: 15px auto 0;
        position: relative;
        top: 5px;
        left: -28px;
    }
</style>
