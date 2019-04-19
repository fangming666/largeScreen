<template>
    <!-----班级/知识点考察题目得分率--->
    <div class="class-syllable base-box">
        <pubTitle>
            <span>
                {{_classKnowledgeName}}考察题目得分率
            </span>
            <span class="pub-head-other">
                {{_className}}
            </span>
        </pubTitle>
       <div id="classSyllableCanvas">

       </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import {mapState} from "vuex"

    export default {
        name: "ClassSyllable",
        data() {
            return {
                syllableAllArr: [],//返回的题目得分率的对应的知识点的数组
                classSyllableArr: [],//学校单科考察题目得分率 题目数组
                classShiftArr: [],//学校单科班级得分率
                classSchoolArr: [],//学校单科校得分率
            }
        },
        computed: {
            ...mapState({
                _classKnowledgeName: ({highlightTeacherModules}) => highlightTeacherModules._classKnowledgeName,
                _className: ({highlightTeacherModules}) => highlightTeacherModules._className,
                _syllableAllArr: ({highlightTeacherModules}) => highlightTeacherModules._syllableAllArr
            })
        },
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        watch: {
            _syllableAllArr(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas()
                }
            },
        },
        methods: {
            //绘制图像
            drawCanvas() {
                let schoolInfo = new SchoolInfo();//实例化类
                let rubricArr = schoolInfo.getRubricArr(this._syllableAllArr);//返回题目数组作为X轴
                let schoolScoreArr =  schoolInfo.getSchoolScore(this._syllableAllArr);//返回校数据
                let classScoreArr = schoolInfo.getClassScore(this._syllableAllArr);//返回班级数据
                Highcharts.chart('classSyllableCanvas', {
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
                    tooltip:{
                        backgroundColor: "rgba(41,34,126,0.79)",
                        borderColor: "#4248B9",
                        style: {
                            fontSize: "10px",
                            color: "#ADC3EC",
                        }
                    },
                    xAxis: {
                        categories: rubricArr,
                        crosshair: true,
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
                            pointWidth: 6,
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
                            name:"班得分率",
                            data: classScoreArr,
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
                            name:"校得分率",
                            data: schoolScoreArr,
                            //渐变色
                            color: {
                                linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                                stops: [
                                    [0, '#00CFEA'],
                                    [1, '#0075CF']
                                ]
                            },
                        }
                    ]
                })
            }
        },
        mounted() {
            this.drawCanvas()
        }
    }
</script>

<style scoped>
    .class-syllable {
        width: 524px;
        height: 339px;
    }
    #classSyllableCanvas{
        width: 100%;
        height: 270px;
        margin-top: 10px;
    }
</style>
