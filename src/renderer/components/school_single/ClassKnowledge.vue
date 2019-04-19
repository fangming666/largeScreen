<template>
    <!--与考察知识点得分率-->
    <div class="class-knowledge base-box">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <div id="classKnowledgeCanvas">
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import {mapActions} from "vuex"

    export default {
        name: "ClassKnowledge",
        props: ["req_data", "req_title"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        methods: {
            ...mapActions(["changeClassKnowledgeName"])
        },
        mounted() {
            let schoolInfo = new SchoolInfo(this.req_data), that = this;
            Highcharts.chart('classKnowledgeCanvas', {
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
                        crosshair: true,
                        categories: schoolInfo.getNameArr(),
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
                            text: '得分率（%）',
                            align: 'high',
                            style: {
                                fontSize: 9.6,
                                color: "#8AAEF1",
                            },
                        },
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
                            y: -10,
                            itemHoverStyle: {
                                color: "#8AAEF1"
                            }
                        },

                    //版权表示
                    credits: {
                        enabled: false
                    },
                    series: [
                        {
                            name: "本校",
                            data: schoolInfo.getSchoolScoreArr(),
                            //渐变色
                            color: {
                                linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                                stops: [
                                    [0, '#EA9859'],
                                    [1, '#EA6D59']
                                ]
                            },
                        },
                        {
                            name: "联考",
                            data: schoolInfo.getSchoolScoreArr(),
                            //渐变色
                            color: {
                                linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                                stops: [
                                    [0, '#00CFEA'],
                                    [1, '#0075CF']
                                ]
                            },
                        }
                    ],
                    tooltip: {
                        backgroundColor: "rgba(41,34,126,0.79)",
                        borderColor: "#4248B9",
                        style: {
                            fontSize: "10px",
                            color: "#ADC3EC",
                        }
                    },
                    plotOptions: {
                        column: {
                            borderWidth: 0,
                            borderRadius: 2,
                            pointWidth: 8,
                            dataLabels: {
                                enabled: false,
                                allowOverlap: true // 允许数据标签重叠
                            }
                        },
                        series: {
                            events: {
                                click: function (e) {
                                    for (let child of document.querySelector(".class-knowledge .highcharts-xaxis-labels").childNodes) {
                                        if (e.point.category === child.innerHTML) {
                                            child.style.fill = "#EA9859";
                                            continue;
                                        }
                                        if (child.childNodes[0].style) {
                                            child.childNodes[0].style.fill = "#8AAEF1";
                                        }
                                        child.style.fill = "#8AAEF1";
                                    }
                                    that.changeClassKnowledgeName(e.point.category);
                                }
                            },
                        }
                    },
                },
                function (c) {
                    //默认的第一个显示高亮
                    c.xAxis[0].labelGroup.element.childNodes[0].style.fill = "#EA9859";
                    that.changeClassKnowledgeName(c.xAxis[0].labelGroup.element.childNodes[0].innerHTML);
                    Highcharts.addEvent(c.xAxis[0].labelGroup.element, 'click', e => {
                        //点击的时候当前显示高亮，其他显示初始颜色
                        for (let child of c.xAxis[0].labelGroup.element.childNodes) {
                            if (child.childNodes[0].style) {
                                child.childNodes[0].style.fill = "#8AAEF1";
                            }
                            child.style.fill = "#8AAEF1";
                        }
                        e.srcElement.style.fill = "#EA9859";
                        that.changeClassKnowledgeName(e.srcElement.innerHTML);
                    });
                })
        }
    }
</script>

<style scoped>
    .class-knowledge {
        width: 686px;
        height: 345px;
        margin-top: 18px;
    }

    #classKnowledgeCanvas {
        margin-top: 10px;
        width: 100%;
        height: 300px;
    }
</style>
