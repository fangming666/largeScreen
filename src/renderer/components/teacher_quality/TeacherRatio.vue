<template>
    <div>
        <!-----男女比例---->
        <div class="teacher-ratio base-box" :class="req_judge">
            <pubTitle :req_title="req_title">
                  <span class="pub-head-other">
                男女比例
            </span>
            </pubTitle>
            <div id="teacherRatioCanvas">
            </div>
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";

    export default {
        name: "TeacherRatio",
        props: ["req_data", "req_title", "req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        mounted() {
            let xAxisArr = new SchoolInfo(this.req_data[0].data).getNameArr();
            Highcharts.chart('teacherRatioCanvas', {
                chart: {
                    type: 'bar',
                    backgroundColor: "transparent",
                },
                title: {
                    text: ''
                },
                xAxis: [{
                    categories: xAxisArr,
                    reversed: false,
                    lineWidth: 0,
                    lineColor: " #484AD5",//轴线颜色
                    //轴标签
                    labels: {
                        style: {
                            // fontSize: 14,
                            color: "#8AAEF1",
                        },
                        step: 1
                    }
                }],
                //版权表示
                credits: {
                    enabled: false
                },
                yAxis: {
                    title: {
                        text: '比例%',
                        align: "high",//对齐方式
                        style: {
                            fontSize: 9.6,
                            color: "#8AAEF1",
                        },
                    },
                    lineWidth: 1,
                    lineColor: "#484AD5",//轴线颜色
                    gridLineWidth: 0,
                    labels: {
                        formatter: function () {
                            return Math.abs(this.value);
                        },
                        style: {
                            // fontSize: 14,
                            color: "#8AAEF1",
                        },
                        step: 1
                    },
                    //标识线
                    plotLines: [{
                        color: 'rgba(195,229,247,0.42)',            //线的颜色，定义为红色
                        value: 0,                //定义在哪个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
                        width: 1,
                    }],
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
                        itemMarginTop: -20,
                        itemHoverStyle: {
                            color: "#8AAEF1"
                        }
                    },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    },
                    bar: {
                        borderWidth: 0,
                        pointWidth: 10
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + ', 年龄段 ' + this.point.category + '</b><br/>' +
                            '比例: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + "%";
                    },
                    backgroundColor: "rgba(41,34,126,0.79)",
                    borderColor: "#4248B9",
                    style: {
                        fontSize: "10px",
                        color: "#ADC3EC",
                    }
                },
                series: [{
                    name: this.req_data[0].name,
                    color: "#33C8FF",
                    data: new SchoolInfo(this.req_data[0].data).getLoadScore()
                }, {
                    name: this.req_data[1].name,
                    color: "#DD4992",
                    data: new SchoolInfo(this.req_data[1].data).getSchoolScoreArr()
                }]
            });
        }
    }
</script>

<style scoped>
    .teacher-ratio {
        width: 592px;
        height: 339px;
    }

    #teacherRatioCanvas {
        width: 480px;
        height: 280px;
        margin-top: 15px;
    }
</style>
