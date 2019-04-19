<template>
    <div class="base-box teacher-number">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <div class="content">
            <p>
                全区共{{req_data[0].teacherNum}}名教师，学生{{req_data[0].studentNum}}名。师生比{{req_data[0].teacherCompare}}:{{req_data[0].studentCompare}}师生比高于国家标准
            </p>
            <div id="teacherNumberCanvas">

            </div>
        </div>
    </div>
</template>

<script>
    // 最主要是这里模块的引入 很坑
    import Highcharts from 'highcharts/highstock';
    // 这个一定要引入 不然报错
    import HighchartsMore from 'highcharts/highcharts-more';
    import SolidGauge from 'highcharts/modules/solid-gauge.js'

    HighchartsMore(Highcharts);
    SolidGauge(Highcharts);

    export default {
        name: "TeacherNumber",
        props: ["req_data", "req_title", "req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        mounted() {
            let that = this;
            let chart = Highcharts.chart('teacherNumberCanvas', {
                chart: {
                    type: 'solidgauge',
                    marginTop: 50,
                    backgroundColor: "transparent",
                },
                title: {
                    text: '',
                },
                tooltip: {
                    enabled: false,
                    borderWidth: 0,
                    backgroundColor: "rgba(41,34,126,0.79)",
                    borderColor: "#4248B9",
                    style: {
                        fontSize: "10px",
                        color: "#ADC3EC",
                    },
                    shadow: false,
                },
                pane: {
                    startAngle: 0,
                    endAngle: 360,
                    background: [{ // Track for Move
                        outerRadius: '112%',
                        innerRadius: '88%',
                        backgroundColor: '#302984',
                        borderWidth: 0
                    }, { // Track for Exercise
                        outerRadius: '87%',
                        innerRadius: '63%',
                        backgroundColor: '#3B3493',
                        borderWidth: 0
                    }]
                },
                yAxis: {
                    min: 0,
                    max: this.req_data[0].studentCompare,
                    lineWidth: 0,
                    tickPositions: []
                },
                plotOptions: {
                    solidgauge: {
                        borderWidth: '17px',
                        dataLabels: {
                            enabled: false
                        },
                        linecap: 'round',
                        stickyTracking: false,
                    },
                    point: {
                        events: {
                            click: function (e) {
                                chart.setTitle({
                                    text: e.point.grade + '\t' + e.point.y + ' %',
                                    style: {
                                        fontSize: '16px',
                                        color: "#EA9859",
                                    },
                                })
                                ;
                            }
                        }
                    },
                },
                //版权表示
                credits: {
                    enabled: false
                },
                series: [{
                    name: '学生占比',
                    borderColor: "#1DADFF",
                    data: [{
                        radius: '100%',
                        innerRadius: '100%',
                        y: this.req_data[0].studentCompare
                    }]
                }, {
                    name: '教师占比',
                    borderColor: "#A1E335",
                    data: [{
                        radius: '75%',
                        innerRadius: '75%',
                        y: this.req_data[0].teacherCompare
                    }]
                }]
            }, function (c) {
                // 动态设置标题位置
                c.setTitle({
                    y: c.series[0].chart.chartHeight / 2 + parseInt(c.title.styles.fontSize),
                    text: `师生比${that.req_data[0].teacherCompare}:${that.req_data[0].studentCompare}`,
                    style: {
                        fontSize: 16,
                        color: "#EA9859"
                    }
                });
            });
        }
    }
</script>

<style scoped lang="scss">
    .teacher-number {
        width: 398px;
        height: 338px;
    }

    .content {
        width: 100%;
        height: 260px;
        box-sizing: border-box;
        background: #201A6D;
        padding: 10px 24px 0 20px;
        margin-top: 10px;

        p {
            font-size: 16px;
            color: #8AAEF1;
            margin: 0;
            line-height: 24px;
        }
    }

    #teacherNumberCanvas {
        width: 210px;
        height: 260px;
        margin: -45px auto 0;
    }
</style>
