<template>
    <!-----学校超均率趋势变化---->
    <div class="superaverage-trend base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <div id="superaverageTrend">
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import SuperaverageTrendInfo from "../../utils/SuperaverageTrendInfo";

    export default {
        name: "SuperaverageTrend",
        props: ["req_data", "req_title", "req_judge"],
        data() {
            return {}
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
                Highcharts.chart('superaverageTrend', {
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
                    plotOptions:{
                        series: {
                            marker: {
                                enabled: true, /*数据点是否显示*/
                                radius: 3,  /*数据点大小px*/
                            },
                        }
                    },
                    tooltip:{
                        backgroundColor: "rgba(41,34,126,0.79)",
                        borderColor: "#4248B9",
                        style: {
                            fontSize: "10px",
                            color: "#ADC3EC",
                        }
                    },
                    yAxis: {
                        allowDecimals: false,
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
                        categories: new SuperaverageTrendInfo(this.req_data).getTime(),
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
                    series: new SuperaverageTrendInfo(this.req_data).getResult(),
                })
            }
        },
        mounted() {
            this.drawCanvas()
        }
    }
</script>

<style scoped lang="scss">
    .superaverage-trend {
        width: 471px;
        height: 347px;
        margin-top: 18px;
    }

    #superaverageTrend {
        width: 100%;
        height: 290px;
        margin: 10px auto 0;
        position: relative;
        left: -20px;
    }

    .school-ensemble {
        width: 431px;
        height: 338px;

        #superaverageTrend {
            margin-top: 10px;
            width: 110%;
            left: -25px;
        }

    }
    .school-single-teacher{
        width: 594px;
        height: 347px!important;
    }
</style>
