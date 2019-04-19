<template>
    <!--小题评阅趋势变化-->
    <div class="base-box review-trend">
        <pubTitle :req_title="req_title">
            <span class="pub-head-other">{{_markSubjectName}} {{_markRubricName}}题</span>
        </pubTitle>
        <div id="ReviewTrendCanvas">
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import {mapState} from "vuex"

    export default {
        name: "ReviewTrend",
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
                if (newData !== oldData && this._markRubricArr.length) {
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
            }
        },
        methods: {
            //绘制图像
            drawCanvas() {
                let schoolInfo = new SchoolInfo(this._markRubricArr);
                let resultArr = schoolInfo.getTeacherArr(this._markRubricName);
                if (!resultArr.length) {
                    return
                }
                let xAxisArr = new SchoolInfo(resultArr[0].trend).getTimeArr();
                let seriesArr = new SchoolInfo(resultArr).getTrend();
                let ensembleAverage = schoolInfo.getEnsembleAverage(seriesArr);
                Highcharts.chart('ReviewTrendCanvas', {
                    chart: {
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
                        lineColor: "#484AD5",//轴线颜色
                        tickWidth: 1,
                        tickColor: "#484AD5",
                        //轴标签
                        labels: {
                            style: {
                                // fontSize: 14,
                                color: "#8AAEF1",
                            }
                        }
                    },
                    yAxis: {
                        // min: 0,
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
                    },
                    plotOptions: {
                        column: {
                            borderWidth: 0,
                            borderRadius: 3,
                            pointWidth: 12,
                            dataLabels: {
                                enabled: false,
                                allowOverlap: true // 允许数据标签重叠
                            }
                        },
                        series: {
                            marker: {
                                enabled: true, /*数据点是否显示*/
                                radius: 3,  /*数据点大小px*/
                            },
                        }
                    },
                    tooltip: {
                        // head + 每个 point + footer 拼接成完整的 table
                        headerFormat: '<span style="font-size:12px">{point.key}</span><table>',
                        pointFormat:
                            '<tr>' +
                            '<td style="padding:0">' + '{point.series.name}<b>{point.y:.1f}</b></td></tr>',
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
                    //图例
                    legend:
                        {
                            y: -10,
                            margin: 5,
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
                        },
                    //版权表示
                    credits: {
                        enabled: false
                    },
                    series: [...seriesArr, {
                        name: "总体平均",
                        color: "#FFFFFF",
                        data: ensembleAverage,
                        dashStyle: "ShortDash"
                    }]
                })
            },
        },
        mounted() {
            this.drawCanvas();
        }
    }
</script>

<style scoped>
    .review-trend {
        width: 530px;
        height: 347px;
    }

    #ReviewTrendCanvas {
        width: 100%;
        height: 290px;
        margin: 10px auto 0;
    }
</style>
