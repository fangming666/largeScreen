<template>
    <!-------班级增值------>
    <div class="class-added base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <div id="ClassAddedCanvas"></div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";

    export default {
        name: "ClassAdded",
        props: ["req_data", "req_title", "req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        data() {
            return {
                classNameArr: [],
                classCoreArr: []
            }
        },
        mounted() {
            //学校整体
            this.classNameArr = new SchoolInfo(this.req_data.classArray).getNameArr();
            this.classCoreArr = new SchoolInfo(this.req_data.classArray).getAddedScoreArr();
            //配置柱状图

            Highcharts.chart('ClassAddedCanvas',
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
                        categories: this.classNameArr,
                        crosshair: true,
                        lineColor: "rgba(122,164,239,0.20)",//轴线颜色
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
                        gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                        //标识线
                        plotLines: [{
                            color: '#484AD5',            //线的颜色，定义为红色
                            value: 0,                //定义在哪个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
                            width: 1,

                        }],
                        title: {
                            text: '分数',
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
                            pointWidth: 10
                        }
                    }
                    ,
                    //数据
                    series: [{
                        data:this.classCoreArr
                    }],
                    //图例
                    legend:
                        {
                            enabled: false
                        }
                }
            )
        },
    }
</script>

<style scoped>
    .class-added {
        width: 525px;
        height: 338px;
    }

    #ClassAddedCanvas {
        width: 100%;
        height: 270px;
        margin-top: 10px;
    }
</style>
