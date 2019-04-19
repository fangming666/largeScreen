<template>
    <div class="base-box review-contrast">
        <pubTitle :req_title="req_title">
            <span class="pub-head-other">{{_markSubjectName}} {{_markRubricName}}题</span>
        </pubTitle>
        <div id="ReviewContrastCanvas">
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import {mapState} from "vuex"

    export default {
        name: "ReviewContrast",
        props: ["req_data", "req_title"],
        data() {
            return {
                resultArr: [],//排序完的最终数组
                initArr: [],//初始的所有数据的数组
            }
        },
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
            _markSubjectName(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas();
                }
            },
            _markRubricArr(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas();
                }
            },
            _markRubricName(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas();
                }
            },
        },
        methods: {
            //绘制图像
            drawCanvas() {
                let schoolInfo = new SchoolInfo(this._markRubricArr);
                let resultArr = schoolInfo.getTeacherArr(this._markRubricName);
                let allAverage = schoolInfo.getAllAverag(this._markRubricName);
                let xAxisArr = new SchoolInfo(resultArr).getNameArr();
                let seriesArr = new SchoolInfo(resultArr).getAverage();
                Highcharts.chart('ReviewContrastCanvas', {
                    chart: {
                        type: 'column',
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
                            text: '平均分',
                            align: 'high',
                            style: {
                                fontSize: 9.6,
                                color: "#8AAEF1",
                            },
                        },
                        //标识线
                        plotLines: [{
                            color: '#E6A424',            //线的颜色，定义为红色
                            dashStyle: 'ShortDash',//标示线的样式，默认是solid（实线），这里定义为长虚线
                            value: allAverage,                //定义在哪个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
                            width: 1,
                            label: {
                                align: "right",
                                text: `平均分：${allAverage}`,
                                style: {
                                    fontSize: 9.6,
                                    color: "#E6A424"
                                }
                            }
                        }],
                    },
                    plotOptions: {
                        column: {
                            borderWidth: 0,
                            borderRadius: 2,
                            pointWidth: 12,
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
                            '<td style="padding:0">' + '平均分<b>{point.y:.1f}</b></td></tr>',
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
            this.drawCanvas();
        }
    }
</script>

<style scoped>
    .review-contrast {
        width: 416px;
        height: 347px;
    }

    #ReviewContrastCanvas {
        width: 100%;
        height: 290px;
        margin: 10px auto 0;
    }
</style>
