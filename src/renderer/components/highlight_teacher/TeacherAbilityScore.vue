<template>
    <!-----能力得分率---->
    <div class="teacher-knowledge-score base-box">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <div id="TeacherAbilityScoreCanvas">
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import {mapActions} from "vuex"

    export default {
        name: "TeacherAbilityScore",
        props: ["req_data","req_title"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        methods: {
            ...mapActions(['changeTeacherAbilityName']),
        },
        mounted() {
            let that = this;
            Highcharts.chart('TeacherAbilityScoreCanvas', {
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
                    legend: {
                        enabled: false
                    },
                tooltip:{
                    backgroundColor: "rgba(41,34,126,0.79)",
                    borderColor: "#4248B9",
                    style: {
                        fontSize: "10px",
                        color: "#ADC3EC",
                    }
                },
                    xAxis: {
                        lineColor: "#3B4294",
                        categories: new SchoolInfo(this.req_data).getNameArr(),
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
                                    fontSize: 14,
                                }
                            },
                    },
                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        lineColor: "#3B4294",
                        min: 0,
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
                            //事件
                            events: {
                                click: function (e) {
                                    console.log(e.point.category);
                                }
                            }
                        }
                        ,
                        column: {
                            colorByPoint: true
                        },
                    },
                    series: [{
                        type: 'area',
                        data: new SchoolInfo(this.req_data).getSchoolScaleArr(),
                        pointPlacement: 'middle',
                        color: "#ED3A72",
                    }]
                },
                function (c) { // 图表渲染完毕后的回调函数
                    //默认的第一个显示高亮
                    document.querySelector("#TeacherAbilityScoreCanvas .highcharts-area").style.fill = "rgba(255,255,255,0.1)";
                    c.xAxis[0].labelGroup.element.childNodes[0].style.fill = "#EA9859";
                    that.changeTeacherAbilityName(c.xAxis[0].labelGroup.element.childNodes[0].innerHTML);
                    Highcharts.addEvent(c.xAxis[0].labelGroup.element, 'click', e => {
                        //点击的时候当前显示高亮，其他显示初始颜色
                        for (let child of c.xAxis[0].labelGroup.element.childNodes) {
                            if (child.childNodes[0].style) {
                                child.childNodes[0].style.fill = "#8AAEF1";
                            }
                            child.style.fill = "#8AAEF1";
                        }
                        e.srcElement.style.fill = "#EA9859";
                        that.changeTeacherAbilityName(e.srcElement.innerHTML);
                    });
                }
            )
        }
    }
</script>

<style scoped lang="scss">
    .teacher-knowledge-score {
        width: 473px;
        height: 339px;
    }

    #TeacherAbilityScoreCanvas {
        width: 473px;
        height: 270px;
        margin-top: 10px;
        position: relative;
        left: -10px;
    }
</style>
