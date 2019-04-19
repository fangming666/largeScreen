<template>
    <!-------学校平均分----->
    <div class="school-average base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <div id="schoolAverage"></div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";

    export default {
        name: "SchoolAverage",
        props: ["req_data", "req_title", "req_judge"],
        data() {
            return {
                schoolNameArr: [],//学校的名称
                schoolCoreArr: [],//学校分数
            }
        },
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        watch: {
            req_data(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas();
                }
            }
        },
        methods: {
            drawCanvas() {
                let canvasWidth = 380, canvasHeight = 270, yAxisTitle = "分数", labelText = "联考平均分",yAxisMin=0 ;
                if (this.req_judge === "school-ensemble" || this.req_judge === "school-single" || this.req_judge === "school-single-teacher") {
                    //学校整体
                    labelText = "学校平均分";
                    this.schoolNameArr = new SchoolInfo(this.req_data.classArray).getNameArr();
                    this.schoolCoreArr = new SchoolInfo(this.req_data.classArray).getSchoolScoreArr();
                    if (this.req_judge === "school-single") {
                        canvasWidth = 470;
                        canvasHeight = 270;
                    } else if (this.req_judge === "school-single-teacher") {
                        canvasWidth = 370;
                    } else if(this.req_judge === "school-ensemble"){
                        canvasWidth = 331;
                        canvasHeight = 250;
                        yAxisMin = 450;
                    }
                } else {
                    //区县整体
                    this.schoolNameArr = new SchoolInfo(this.req_data.schoolArray).getSchoolNameArr();
                    this.schoolCoreArr = new SchoolInfo(this.req_data.schoolArray).getSchoolScoreArr();
                    if(this.req_judge==="education"){
                        yAxisMin= 200
                    }
                    if (this.req_judge === "teacher-summary") {
                        //师资质量
                        canvasWidth = 380;
                        canvasHeight = 270;
                        yAxisTitle = "比例";
                        labelText = "平均"
                    }
                }
                //配置柱状图

                Highcharts.chart('schoolAverage',
                    {
                        chart: {
                            type: 'column',
                            backgroundColor: "transparent",
                            width: canvasWidth,
                            height: canvasHeight
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
                            min: yAxisMin,
                            gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                            title: {
                                text: yAxisTitle,
                                align: "high",//对齐方式
                                rotation: 90,//旋转
                                style: {
                                    fontSize: 9.6,
                                    color: "#8AAEF1",
                                },
                                y: 12
                            },
                            //轴标签
                            labels: {
                                padding: 2,
                                style: {
                                    fontSize: 9.6,
                                    color: "#8AAEF1",
                                }
                            },
                            //标识线
                            plotLines: [{
                                color: '#E6A424',            //线的颜色，定义为红色
                                dashStyle: 'ShortDash',//标示线的样式，默认是solid（实线），这里定义为长虚线
                                value: this.req_data.college,                //定义在哪个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
                                width: 1,
                                zIndex: 10,
                                label: {
                                    align: "right",
                                    text: `${labelText}：${this.req_data.college}`,
                                    style: {
                                        fontSize: 9.6,
                                        color: "#E6A424"
                                    }
                                }
                            }],
                        },
                        tooltip: {
                            // head + 每个 point + footer 拼接成完整的 table
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat:
                                '<tr>' +
                                '<td style="padding:0"><b>{point.y:.1f}{this.req_judge !== "teacher-summary"分}</b></td></tr>',
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
                                borderRadius: 2,
                                pointWidth: this.req_judge === "school-ensemble" || this.req_judge === "school-single" ? 10 : 20
                            }
                        }
                        ,
                        //数据
                        series: [{
                            data: this.schoolCoreArr,
                            //渐变色
                            color: {
                                linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                                stops: [
                                    [0, '#00CFEA'],
                                    [1, '#0075CF']
                                ]
                            },
                        }],
                        //图例
                        legend:
                            {
                                enabled: false
                            }
                    }
                )
            }
        },
        mounted() {
            this.drawCanvas();
        },

    }
</script>

<style scoped lang="scss">
    .school-average {
        width: 410px;
        height: 338px;
    }

    #schoolAverage {
        width: 380px;
        height: 270px;
        margin: 15px auto 0;
        position: relative;
        left: -20px;
    }

    .school-ensemble {
        width: 341px;

        #schoolAverage {
            width: 331px;
            height: 250px;
            left: -35px;
        }

    }

    .school-single {
        width: 528px;

        #schoolAverage {
            width: 100%;
        }
    }

    .school-single-teacher {
        width: 415px;
    }

    .teacher-summary {
        width: 440px;
    }
</style>
