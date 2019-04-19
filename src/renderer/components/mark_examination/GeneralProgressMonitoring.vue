<template>
    <!--全科阅卷监控-->
    <div class="general-progress-monitoring base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <div id="GeneralProgressMonitoringCanvas">
        </div>
    </div>
</template>

<script>
    import {SchoolInfo} from "../../utils/schoolInfo";
    import * as Highcharts from "highcharts";
    import {mapActions} from "vuex";

    export default {
        name: "GeneralProgressMonitoring",
        props: ["req_data", "req_title", "req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        methods: {
            ...mapActions(["change_mark_subject_name", "change_mark_rubric_arr"]),
            drawCanvas() {
                let xAxisArr = new SchoolInfo(this.req_data).getNameArr();
                let finishScore = new SchoolInfo(this.req_data).getFinishScore();
                let roughScore = new SchoolInfo(this.req_data).getRoughScore();
                let that = this;
                //配置柱状图
                Highcharts.chart('GeneralProgressMonitoringCanvas',
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
                            max: 100,
                            minRange: 30,
                            gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                            title: {
                                text: '阅 卷 进 度 %',
                                align: "high",//对齐方式
                                rotation: 90,//旋转
                                style: {
                                    fontSize: 9.6,
                                    color: "#8AAEF1",
                                },
                                y: 52
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
                                '<td style="padding:0">' + '{series.name}<b>{point.y:.1f}%</b></td></tr>',
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
                                pointWidth: 20,
                                stacking: 'normal'
                            },
                            series: {
                                events: {
                                    click: function (e) {
                                        let highchartsColumnSeries = document.querySelector(".general-progress-monitoring .highcharts-tracker").childNodes;
                                        let xaxisDom = document.querySelector(".general-progress-monitoring .highcharts-xaxis-labels").childNodes;
                                        for (let index in xaxisDom) {
                                            if (!isNaN(index)) {
                                                if (e.point.category === xaxisDom[index].innerHTML) {
                                                    xaxisDom[index].style.fill = "#EA9859";
                                                    highchartsColumnSeries[index].style.fill = "#E96148";
                                                    that.change_mark_subject_name(xaxisDom[index].innerHTML);
                                                    continue;
                                                }
                                                xaxisDom[index].style.fill = "#8AAEF1";
                                                highchartsColumnSeries[index].style.fill = "#0E6FCA";
                                            }
                                        }
                                    }
                                },
                            }
                        }
                        ,
                        //数据
                        series: [{
                                name: '已完成',
                                data: finishScore,
                                //渐变色
                                stack: 'male'
                            }
                        ],
                        //图例
                        legend:
                            {
                                enabled: false
                            }
                    },
                    function (c) {
                        //默认的第一个显示高亮

                        if (c.xAxis[0].labelGroup.element.childNodes[0]) {
                            c.xAxis[0].labelGroup.element.childNodes[0].style.fill = "#EA9859";

                        }
                        that.change_mark_subject_name(c.xAxis[0].labelGroup.element.childNodes[0].innerHTML);
                        let highchartsColumnSeries = '';
                        if (document.querySelector(".general-progress-monitoring .highcharts-tracker")) {
                            highchartsColumnSeries = document.querySelector(".general-progress-monitoring .highcharts-tracker").childNodes;
                        }

                        Highcharts.addEvent(c.xAxis[0].labelGroup.element, 'click', e => {
                            let labelDom = c.xAxis[0].labelGroup.element.childNodes;
                            //点击的时候当前显示高亮，其他显示初始颜色
                            for (let index in labelDom) {
                                if (labelDom[index].innerHTML === e.srcElement.innerHTML) {
                                    e.srcElement.style.fill = "#EA9859";
                                    highchartsColumnSeries[index].style.fill = "#E96148";
                                    that.change_mark_subject_name(e.srcElement.innerHTML);
                                } else {
                                    if (labelDom[index].childNodes[0].style) {
                                        labelDom[index].childNodes[0].style.fill = "#8AAEF1";
                                    }
                                    labelDom[index].style.fill = "#8AAEF1";
                                    highchartsColumnSeries[index].style.fill = "#0E6FCA";
                                }
                            }

                        });
                    }
                )
            }
        },
        mounted() {
            this.drawCanvas()
        },

    }
</script>

<style scoped lang="scss">
    .general-progress-monitoring {
        width: 582px;
        height: 338px;
    }

    #GeneralProgressMonitoringCanvas {
        width: 100%;
        height: 280px;
        margin: 10px auto 0;
    }
</style>
