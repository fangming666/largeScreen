<template>
    <!--单科异常处理-->
    <div class="exception-handling base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
            <span class="pub-head-other">{{_markSubjectName}}</span>
        </pubTitle>
        <div id="ExceptionHandlingCanvas">
        </div>
    </div>
</template>

<script>
    import {SchoolInfo} from "../../utils/schoolInfo";
    import * as Highcharts from "highcharts";
    import {mapState} from "vuex";

    export default {
        name: "ExceptionHandling",
        props: ["req_data", "req_title", "req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        watch: {
            _markSubjectName(newData, oldData) {
                if (newData !== oldData && newData) {
                    this.drawCanvas();
                }
            },
            _markRubricArr(newData, oldData) {
                if (newData !== oldData && newData) {
                    this.drawCanvas();
                }
            },
            _markRubricName(newData, oldData) {
                if (newData !== oldData && newData) {
                    this.drawCanvas();
                }
            },
        },
        computed: {
            ...mapState({
                _markSubjectName: ({markExaminationModules}) => markExaminationModules._markSubjectName,
                _markRubricArr: ({markExaminationModules}) => markExaminationModules._markRubricArr,
                _markRubricName: ({markExaminationModules}) => markExaminationModules._markRubricName

            })
        },
        methods: {
            drawCanvas() {
                let schoolInfo = new SchoolInfo(this._markRubricArr);
                let xAxisArr = schoolInfo.getRubric();
                let finishScore = schoolInfo.getHandle();
                let roughScore = schoolInfo.getUntreated();
                //配置柱状图
                Highcharts.chart('ExceptionHandlingCanvas',
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
                            categories: xAxisArr,
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
                            gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                            title: {
                                text: '数量',
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
                        },
                        tooltip: {
                            // head + 每个 point + footer 拼接成完整的 table
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat:
                                '<tr>' +
                                '<td style="padding:0">' + '{series.name}<b>{point.y:.1f}份</b></td></tr>',
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
                            },
                        }
                        ,
                        //数据
                        series: [
                            {
                                name: '未处理',
                                data: roughScore,
                                //渐变色
                                color: {
                                    linearGradient: {x1: 0, x2: 1, y1: 0, y2: 1},
                                    stops: [
                                        [0, '#FF6BD2'],
                                        [1, '#EA59E1']
                                    ]
                                },
                                stack: 'male' // stack 值相同的为同一组
                            }, {
                                name: '已处理',
                                data: finishScore,
                                //渐变色
                                color: "#049FFC",
                                stack: 'male'
                            },
                        ],
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
                            }
                    },
                )
            }
        },
        mounted() {
            this.drawCanvas()
        },

    }
</script>

<style scoped lang="scss">
    .exception-handling {
        width: 392px;
        height: 347px;
    }

    #ExceptionHandlingCanvas {
        width: 110%;
        height: 300px;
        margin: 10px auto 0;
        position: relative;
        left: -25px;
    }
</style>
