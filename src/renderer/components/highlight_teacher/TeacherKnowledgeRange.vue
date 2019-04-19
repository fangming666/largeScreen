<template>
    <!-----得分率进步幅度前五名教师---->
    <div class="teacher-knowledge-range base-box">
        <pubTitle :req_title="req_title">
            <span class="pub-head-other">{{_knowledgeName}}</span>
        </pubTitle>
        <div id="TeacherKnowledgeRangeCanvas">
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import {mapState} from "vuex"
    import Compare from "../../utils/compare";

    export default {
        name: "TeacherKnowledgeRange",
        props: ["req_data","req_title"],
        data() {
            return {
                resultArr: [],//排序完的最终数组
                initArr: [],//初始的所有数据的数组
            }
        },
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        computed: {
            ...mapState({
                _knowledgeName: ({highlightTeacherModules}) => highlightTeacherModules._knowledgeName,
            })
        },
        watch: {
            _knowledgeName(newData, oldData) {
                if (newData !== oldData) {
                    this.fruit(this.knowledgeFruit(newData));
                }
            }
        },
        methods: {
            //绘制图像
            drawCanvas(xAxisArr, thisTimeArr, lastTimeArr) {
                Highcharts.chart('TeacherKnowledgeRangeCanvas', {
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
                    tooltip:{
                        backgroundColor: "rgba(41,34,126,0.79)",
                        borderColor: "#4248B9",
                        style: {
                            fontSize: "10px",
                            color: "#ADC3EC",
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
                            rotation: 90,//旋转
                            style: {
                                fontSize: 9.6,
                                color: "#8AAEF1",
                            },
                            y: 50
                        },
                    },
                    plotOptions: {
                        column: {
                            borderWidth: 0,
                            borderRadius: 5,
                            pointWidth: 8,
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
                            name: "本次",
                            data: thisTimeArr,
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
                            name: "上次",
                            data: lastTimeArr,
                            //渐变色
                            color: {
                                linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                                stops: [
                                    [0, '#0075CF'],
                                    [1, '#00CFEA']
                                ]
                            },
                        }
                    ]
                })
            },
            //根据传入的不用知识点的数组返回最终结果
            fruit(reqArr) {
                this.resultArr = reqArr.sort(new Compare().sortDown("end")).slice(0, 5);
                this.drawCanvas(new SchoolInfo(this.resultArr).getNameArr(), new SchoolInfo(this.resultArr).getThisTime(),
                    new SchoolInfo(this.resultArr).getLastTime());
            },
            //根据传入的知识点进行返回数组
            knowledgeFruit(knowledgeName) {
                for (let child of this.initArr) {
                    if (child.knowledgeName === knowledgeName) {
                        return new SchoolInfo().getRangeAdvancement(child.teacherData);
                    }
                }
            }
        },
        mounted() {
            this.initArr = JSON.parse(JSON.stringify(this.req_data));//进行对象数组的深克隆
            this.fruit(new SchoolInfo().getRangeAdvancement(this.initArr[0].teacherData));
        }
    }
</script>

<style scoped>
    .teacher-knowledge-range {
        width: 486px;
        height: 339px;
        box-sizing: border-box;
    }

    #TeacherKnowledgeRangeCanvas {
        width: 100%;
        height: 280px;
        margin-top: 10px;
    }
</style>
