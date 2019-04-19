<template>
    <!-----能力前五名教师---->
    <div class="teacher-scoring-average base-box">
        <pubTitle :req_title="req_title">
            <span class="pub-head-other">{{_abilityName}}</span>
        </pubTitle>
        <div id="TeacherAbilityAverageCanvas">
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import {mapState} from "vuex"
    import Compare from "../../utils/compare";

    export default {
        name: "TeacherAbilityAverage",
        props: ["req_data","req_title"],
        data() {
            return {
                resultArr: [],//排序完的最终数组
                initArr:[],//初始的所有数据的数组
            }
        },
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        computed: {
            ...mapState({
                _abilityName: ({highlightTeacherModules}) => highlightTeacherModules._abilityName,
            })
        },
        watch: {
            _abilityName(newData, oldData) {
                if (newData !== oldData) {
                    this.fruit(this.knowledgeFruit(newData));
                }
            }
        },
        methods: {
            //绘制图像
            drawCanvas(xAxisArr, seriesArr) {
                Highcharts.chart('TeacherAbilityAverageCanvas', {
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
                    plotOptions: {
                        bar: {
                            borderWidth: 0,
                            borderRadius: 5,
                            pointWidth: 8,
                            dataLabels: {
                                enabled: false,
                                allowOverlap: true // 允许数据标签重叠
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                    },
                    //版权表示
                    credits: {
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
                    series: [
                        {
                            data: seriesArr,
                            //渐变色
                            color: {
                                linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                                stops: [
                                    [0, '#2CA478'],
                                    [1, '#3CC292']
                                ]
                            },
                        }
                    ]
                })
            },
            //根据传入的不用知识点的数组返回最终结果
            fruit(reqArr) {
                this.resultArr = reqArr.sort(new Compare().sortDown("thisTime")).slice(0, 5);
                this.drawCanvas(new SchoolInfo(this.resultArr).getNameArr(), new SchoolInfo(this.resultArr).getThisTime());
            },
            //根据传入的知识点进行返回数组
            knowledgeFruit(abilityName) {
                for (let child of this.initArr) {
                    if (child.abilityName === abilityName) {
                        return child.teacherData;
                    }
                }
            }
        },
        mounted() {
            this.initArr = JSON.parse(JSON.stringify(this.req_data));//进行对象数组的深克隆
            this.fruit(this.initArr[0].teacherData);
        }
    }
</script>

<style scoped>
    .teacher-scoring-average {
        width: 486px;
        height: 339px;
        box-sizing: border-box;
    }

    #TeacherAbilityAverageCanvas {
        width: 100%;
        height: 270px;
        margin-top: 10px;
    }
</style>
