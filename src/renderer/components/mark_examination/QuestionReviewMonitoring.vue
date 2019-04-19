<template>
    <!-----小题评阅监控---->
    <div class="question-review-monitoring base-box">
        <pubTitle :req_title="req_title">
            <span class="pub-head-other">{{_markSubjectName}} {{_markRubricName}}题</span>
        </pubTitle>
        <div id="QuestionReviewMonitoringCanvas">
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import {mapState} from "vuex"

    export default {
        name: "QuestionReviewMonitoring",
        props: ["req_data", "req_title"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        computed: {
            ...mapState({
                _markSubjectName: ({markExaminationModules}) => markExaminationModules._markSubjectName,
                _markRubricArr: ({markExaminationModules}) => markExaminationModules._markRubricArr,
                _markRubricName: ({markExaminationModules}) => markExaminationModules._markRubricName
            })
        },
        watch: {
            _markRubricArr(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas()
                }
            },
            _markRubricName(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas()
                }
            },
            _markSubjectName(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas()
                }
            },
        },
        methods: {
            //绘制图像
            drawCanvas() {
                let schoolInfo = new SchoolInfo(this._markRubricArr);
                let resultArr = schoolInfo.getTeacherArr(this._markRubricName);
                let xAxisArr = new SchoolInfo(resultArr).getNameArr();
                let seriesArr = new SchoolInfo(resultArr).getFinish();
                if (!resultArr.length) {
                    return;
                }
                let maxNum = resultArr[0].total;
                Highcharts.chart('QuestionReviewMonitoringCanvas', {
                    chart: {
                        type: 'bar',
                        backgroundColor: "transparent"
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: xAxisArr,
                        crosshair: true,
                        title: {
                            text: null
                        },
                        lineColor: " #484AD5",//轴线颜色
                        //轴标签
                        labels: {
                            style: {
                                // fontSize: 14,
                                color: "#8AAEF1",
                            }
                        }
                    },
                    yAxis: {
                        min: 0,
                        max: maxNum,

                        gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                        //轴标签
                        labels: {
                            padding: 2,
                            style: {
                                fontSize: 9.6,
                                color: "#8AAEF1",
                            }
                        },
                        title: {
                            text: '评阅量',
                            align: 'high',
                            style: {
                                fontSize: 9.6,
                                color: "#8AAEF1",
                            },
                        },
                    },
                    plotOptions: {
                        bar: {
                            borderWidth: 0,
                            borderRadius: 5,
                            pointWidth: 8,
                            dataLabels: {
                                enabled: false,
                                allowOverlap: true // 允许数据标签重叠
                            }
                        }
                    },
                    tooltip: {
                        // head + 每个 point + footer 拼接成完整的 table
                        headerFormat: '<span style="font-size:12px">{point.key}</span><table>',
                        pointFormat:
                            '<tr>' +
                            '<td style="padding:0">' + '已完成<b>{point.y:.1f}</b></td></tr>',
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
                    legend: {
                        enabled: false,
                    },
                    //版权表示
                    credits: {
                        enabled: false
                    },
                    series: [
                        {
                            data: seriesArr,

                        }
                    ]
                })
            },

        },
        mounted() {
            this.drawCanvas()
        }
    }
</script>

<style scoped>
    .question-review-monitoring {
        width: 423px;
        height: 338px;
        box-sizing: border-box;
    }

    #QuestionReviewMonitoringCanvas {
        width: 100%;
        height: 270px;
        margin-top: 10px;
    }
</style>
