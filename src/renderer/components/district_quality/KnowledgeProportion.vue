<template>
    <!--考察知识点分值占比-->
    <div class="knowledge-proportion base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <div id="KnowledgeProportionCanvas"></div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";

    export default {
        name: "KnowledgeProportion",
        props: ["req_data", "req_title", "req_judge"],
        data() {
            return {
                NameArr: [],//学校的名称
                CoreArr: [],//学校分数
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
                this.NameArr = new SchoolInfo(this.req_data).getNameArr();
                this.CoreArr = new SchoolInfo(this.req_data).getSchoolScaleArr();
                //配置柱状图
                let yAxisTitle = "比例（%）", yAxisDistance = 32, pointWidth = 10;
                if (this.req_judge === "school-single-teacher") {
                    yAxisTitle = "分数";
                    yAxisDistance = 12;
                    pointWidth = 15;
                }
                Highcharts.chart('KnowledgeProportionCanvas',
                    {
                        chart: {
                            type: 'column',
                            backgroundColor: "transparent",
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
                            categories: this.NameArr,
                            crosshair: true,
                            lineColor: " #484AD5",//轴线颜色
                            //轴标签
                            labels: {
                                style: {
                                    fontSize: 12,
                                    color: "#8AAEF1",
                                }
                            }
                        },
                        //Y轴
                        yAxis: {
                            min: 0,
                            gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                            title: {
                                text: yAxisTitle,
                                align: "high",//对齐方式
                                rotation: 90,//旋转
                                style: {
                                    fontSize: 9.6,
                                    color: "#8AAEF1",
                                },
                                y: yAxisDistance
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
                                '<td style="padding:0"><b>{point.y:.1f}分</b></td></tr>',
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
                                pointWidth: pointWidth
                            }
                        }
                        ,
                        //数据
                        series: [{
                            data: this.CoreArr,
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

<style scoped>
    .knowledge-proportion {
        width: 433px;
        height: 338px;
    }

    #KnowledgeProportionCanvas {
        width: 100%;
        height: 280px;
        margin: 15px auto 0;
        position: relative;
        left: -20px;
    }

    .school-single-teacher {
        width: 553px;
        height: 347px;
    }
</style>
