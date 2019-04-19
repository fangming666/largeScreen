<template>
    <div>
        <!--学生增值指数-->
        <div class="visiting-card-increment visiting-card-base" :class="req_judge">
            <pubTitle :req_title="req_title">
            </pubTitle>
            <div id="VisitingCardIncrementBar" class="float-left">
            </div>
            <div id="VisitingCardIncrementColumn" class="float-right">
            </div>
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";

    export default {
        name: "VisitingCardIncrement",
        props: ["req_data", "req_judge", "req_title"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        watch: {
            req_data(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas()
                }
            }
        },
        methods: {
            //绘制图像
            drawCanvas() {
                let schoolInfo = new SchoolInfo(this.req_data);
                let xAxisArr = schoolInfo.getNameArr();
                let endScoreArr = schoolInfo.getEndScore();//终点水平
                let seriesArr = schoolInfo.getSchoolScoreArr();//起点水平
                let valueAddedArr = schoolInfo.getValueAdded();//增值指数数组
                //绘制柱状图
                Highcharts.chart('VisitingCardIncrementBar', {
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
                        crosshair: true,
                        categories: xAxisArr,
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
                    tooltip: {
                        // head + 每个 point + footer 拼接成完整的 table
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat:
                            '<tr>' +
                            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                        footerFormat:
                            '</table>',
                        shared:
                            true,
                        useHTML:
                            true
                    }
                    ,
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
                            text: '',
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
                            pointWidth: 5,
                            dataLabels: {
                                enabled: false,
                                allowOverlap: true // 允许数据标签重叠
                            }
                        }
                    },
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
                        },
                    //版权表示
                    credits: {
                        enabled: false
                    }
                    ,
                    series: [
                        {
                            name: "起点水平",
                            data: seriesArr,
                            //渐变色
                            color: {
                                linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                                stops: [
                                    [0, '#F497C9'],
                                    [1, '#E97EB8']
                                ]
                            },
                        },
                        {
                            name: "终点水平",
                            data: endScoreArr,
                            //渐变色
                            color: {
                                linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                                stops: [
                                    [0, '#3DDFCF'],
                                    [1, '#13C9ED']
                                ]
                            },
                        }
                    ]
                })
                ;
                //绘制雷达图
                Highcharts.chart('VisitingCardIncrementColumn',
                    {
                        chart: {
                            polar: true,
                            type: 'line',
                            backgroundColor: "transparent",
                        },
                        title: {
                            text: ''
                        },
                        subtitle: {
                            text: ''
                        },
                        //版权表示
                        credits: {
                            enabled: false
                        },
                        //图例
                        legend: {
                            enabled: false
                        }
                        ,
                        xAxis: {
                            lineColor: "#3B4294",
                            categories: xAxisArr,
                            tickmarkPlacement: 'on',
                            lineWidth:
                                0,
                            gridLineColor:
                                '#3B4294',
                            gridLineWidth:
                                0.5,
                            labels:
                                {
                                    format: '{value}',
                                    style: {
                                        color: "#8AAEF1",
                                        fontSize: 11.3,
                                    }
                                },
                        },
                        yAxis: {
                            lineWidth: 0,
                            lineColor: "#3B4294",
                            gridLineWidth:
                                0.7,
                            gridLineColor:
                                '#3B4294',
                            tickAmount:
                                5,
                            labels: {
                                enabled: false
                            }
                        },
                        plotOptions: {
                            series: {
                                marker: {
                                    radius: 3,  //曲线点半径，默认是4
                                    symbol:
                                        'circle' //曲线点类型："square", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                                }
                                ,
                                lineWidth: 1,
                            }
                            ,
                            column: {
                                colorByPoint: true
                            },
                        },
                        series: [{
                            type: 'area',
                            data: valueAddedArr,
                            pointPlacement: 'middle',
                            color: "#00FAFF",
                        }]
                    }, function (c) {
                        //网格中间为浅蓝色
                        //当增值指数为负数的时候，则用其他样式
                        let result = false;
                        for (let child of valueAddedArr) {
                            if (child < 0) {
                                result = true;
                                break;
                            }
                        }
                        document.querySelector(".visiting-card-increment .highcharts-tracker-line").style.fill =
                            !result?'rgba(255,255,255,0)':"rgba(255,255,255,0.1)";
                        document.querySelector(".visiting-card-increment .highcharts-area").style.fill =
                            result?'rgba(255,255,255,0)':
                            "rgba(255,255,255,0.1)";
                        document.querySelector("#VisitingCardIncrementColumn .highcharts-container").style.overflow = "visible";
                        document.querySelector("#VisitingCardIncrementColumn .highcharts-root ").style.overflow = "visible";
                    }
                )
            },
        },
        mounted() {
            this.drawCanvas()
        }
    }
</script>

<style scoped lang="scss">
    .visiting-card-increment {
        width: 624px;
        height: 300px;
        margin-top: 15px;
    }

    #VisitingCardIncrementBar {
        width: 50%;
        height: 240px;
        margin-top: 10px;
        overflow: visible !important;
    }

    #VisitingCardIncrementColumn {
        @extend #VisitingCardIncrementBar;
        width: 46%;
        height: 220px;
    }
</style>
