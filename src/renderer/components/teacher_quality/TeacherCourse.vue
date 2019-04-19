<template>
    <!-----区域等级标准---->
    <div class="grade-standard base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
            <span class="pub-head-other">
                学科分布
            </span>
        </pubTitle>
        <div id="TeacherCourseCanvas">
        </div>
        <div class="grade-standard-info">
            <div class="grade-standard-item" v-for="item in req_data">
                <span :style="{background:item.color}"></span> {{item.grade}}
                <span class="teacher-summary-info">{{item.y}}%</span>
            </div>
        </div>
    </div>
</template>
<script>
    import * as Highcharts from "highcharts";

    export default {
        name: "TeacherCourse",
        props: ["req_data", "req_title", "req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        methods: {
            drawCanvas() {
                let resultArr = [], that = this, canvasWidth = 230;
                resultArr = this.req_data.reduce((initArr, item,index) => {
                    initArr = [...initArr, {
                        ...item,
                        sliced: !index,
                        selected: !index
                    }];
                    return initArr;
                }, []);
                let chart = Highcharts.chart("TeacherCourseCanvas", {
                    chart: {
                        // spacing : [40, 0 , 40, 0],
                        backgroundColor: "transparent",
                        width: canvasWidth
                    },
                    title: {
                        floating: true,
                        text: ''
                    },
                    //版权表示
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: '{point.grade}: <b>{point.percentage:.1f}%</b>',
                        backgroundColor: "rgba(41,34,126,0.79)",
                        borderColor: "#4248B9",
                        style: {
                            fontSize: "10px",
                            color: "#ADC3EC",
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false,
                                distance: -10,
                                style: {
                                    color: 'white',
                                }
                            },
                            borderWidth: 0,
                            point: {
                                events: {
                                    click: function (e) { // 同样的可以在点击事件里处理
                                        chart.setTitle({
                                            text: `<span class="teacher-summary-point">${e.point.grade}` + e.point.y + '%  ' + '</br>' + e.point.number + '人</span>'


                                        })
                                        ;
                                    }
                                }
                            },
                        }
                    },
                    series: [{
                        type: 'pie',
                        innerSize: '65%',
                        data: resultArr
                    }]
                }, function (c) { // 图表初始化完毕后的回调函数
                    // 环形图圆心
                    let centerY = c.series[0].center[1],
                        titleHeight = parseInt(c.title.styles.fontSize);
                    // 动态设置标题位置
                    c.setTitle({
                        y: centerY + titleHeight / 2 - 20 ,
                        useHTML:true,
                        text:
                            `<span class="teacher-summary-point">${c.series[0].data[0].grade}` + '</br>' + c.series[0].data[0].y + '%  ' + ' \n ' + c.series[0].data[0].number + '人</span>'
                    });
                })
            }
        },
        watch: {
            req_data(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas();
                }
            }
        },
        mounted() {
            this.drawCanvas();
        }

    }
</script>

<style scoped lang="scss">
    .grade-standard {
        width: 570px;
        height: 338px;
        position: relative;
    }

    #TeacherCourseCanvas {
        width: 230px;
        height: 270px;
        position: relative;
        left: 20px;
    }

    .grade-standard-info {
        background-image: url("../../static/grade-standard-bg.svg");
        width:230px;
        height: 260px;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        position: absolute;
        right: 34px;
        top: 48px;
        padding: 30px 15px 0 15px;
        box-sizing: border-box;
    }

    .grade-standard-item {
        width: 50%;
        float: left;
        border-bottom: 1px solid rgba(122, 164, 239, 0.20);
        padding-top:20px;
        padding-left: 12px;
        padding-bottom: 4px;
        box-sizing: border-box;
        font-size: 13px;
        color: #8AAEF1;
        letter-spacing: 1px;

        span {
            &:first-child {
                width: 8px;
                height: 8px;
                display: inline-block;
                border-radius: 50%;
                margin-right: 3px;
            }

            &:last-child {
                margin-left: 24px;
            }
        }
    }


    .teacher-summary-info {
        margin-left: 1px !important;
    }

</style>
