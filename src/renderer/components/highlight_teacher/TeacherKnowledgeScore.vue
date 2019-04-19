<template>
    <!-----知识点得分率---->
    <div class="teacher-knowledge-score base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
            <span class="pub-head-other" v-if="_classKnowledgeName&&req_judge==='school-single'">
                {{this._classKnowledgeName}}
            </span>
        </pubTitle>
        <div id="TeacherKnowledgeScoreCanvas">
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import {SchoolInfo} from "../../utils/schoolInfo";
    import {mapActions, mapState} from "vuex"

    export default {
        name: "TeacherKnowledgeScore",
        props: ["req_data", "req_title", "req_judge"],
        computed: {
            ...mapState({
                _knowledgeName: ({highlightTeacherModules}) => highlightTeacherModules._knowledgeName,
                _classKnowledgeName: ({highlightTeacherModules}) => highlightTeacherModules._classKnowledgeName,
                _className: ({highlightTeacherModules}) => highlightTeacherModules._className,
                _syllableAllArr: ({highlightTeacherModules}) => highlightTeacherModules._syllableAllArr

            })
        },
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        watch: {
            _classKnowledgeName(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas();
                    this.changeSyllableAllArr([new SchoolInfo(this.req_data).getKnowClassArr(this._classKnowledgeName), this._className]);
                }
            },
            req_data(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCanvas();
                    if (this.req_judge === "school-single") {
                        this.changeSyllableAllArr([new SchoolInfo(this.req_data).getKnowClassArr(this._classKnowledgeName), this._className]);
                    }
                }
            }

        },
        methods: {
            ...mapActions(['changeTeacherKnowledgeName', "changeClassName", "changeSyllableAllArr"]),
            drawCanvas() {
                let that = this;
                let seriesData = [];//series的数据源
                let xAxisData = new SchoolInfo(this.req_data).getNameArr();//x轴的数据
                let canvasWidth = 450, canvasHeight = 270,yAxiosMin = 0;
                let legendData = {
                    enabled: false
                };//图例的设置
                if (this.req_judge === "school-ensemble") {
                    //当为学校整体的时候
                    legendData = {
                        itemStyle: {
                            color: "#8AAEF1"
                        },
                        itemHoverStyle: {
                            color: "#8AAEF1"
                        }
                    };
                    canvasWidth = 250;
                    canvasHeight = 257;
                    yAxiosMin = 50;
                    seriesData = [
                        {
                            name: "本次",
                            type: 'area',
                            data: new SchoolInfo(this.req_data).getThisTime(),
                            pointPlacement: 'middle',
                            color: "#ED3A72",
                        },
                        {
                            name: "上次",
                            type: 'area',
                            data: new SchoolInfo(this.req_data).getLastTime(),
                            pointPlacement: 'middle',
                            color: "#FFA800",
                        }
                    ]
                } else if (this.req_judge === "school-single") {
                    //学校单科的时候
                    seriesData = [{
                        type: 'area',
                        data: new SchoolInfo(new SchoolInfo(this.req_data).getKnowClassArr(this._classKnowledgeName)).getSchoolScoreArr(),
                        pointPlacement: 'middle',
                        color: "#FFA800",
                    }];
                    canvasWidth = 500;
                    xAxisData = new SchoolInfo(new SchoolInfo(this.req_data).getKnowClassArr(this._classKnowledgeName)).getClassNameArr()
                } else {
                    seriesData = [{
                        type: 'area',
                        data: new SchoolInfo(this.req_data).getSchoolScaleArr(),
                        pointPlacement: 'middle',
                        color: "#FFA800",
                    }];
                }
                Highcharts.chart('TeacherKnowledgeScoreCanvas', {
                        chart: {
                            width: canvasWidth,
                            height: canvasHeight,
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
                        //图例
                        legend: legendData
                        ,
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
                            categories: xAxisData,
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
                            min: yAxiosMin,
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
                        series: seriesData
                    },
                    function (c) { // 图表渲染完毕后的回调函数
                        //当不是是学校整体的时候（优劣学科）
                        document.getElementsByClassName("highcharts-area")[0].style.fill = "rgba(255,255,255,0.1)";
                        if (that.req_judge === "school-ensemble") {
                            //网格中间为浅蓝色
                            document.getElementsByClassName("highcharts-area")[1].style.fill = "rgba(255,255,255,0.1)";
                            document.querySelector(".school-ensemble .highcharts-container ").style.overflow = "visible";
                            document.querySelector(".school-ensemble .highcharts-root ").style.overflow = "visible";
                        } else if (that.req_judge === "school-single") {
                            //网格中间为浅蓝色
                            //默认的第一个显示高亮
                            c.xAxis[0].labelGroup.element.childNodes[0].style.fill = "#EA9859";
                            that.changeClassName(c.xAxis[0].labelGroup.element.childNodes[0].innerHTML);
                            Highcharts.addEvent(c.xAxis[0].labelGroup.element, 'click', e => {
                                //点击的时候当前显示高亮，其他显示初始颜色
                                for (let child of c.xAxis[0].labelGroup.element.childNodes) {
                                    if (child.childNodes[0].style) {
                                        child.childNodes[0].style.fill = "#8AAEF1";
                                    }
                                    child.style.fill = "#8AAEF1";
                                }
                                e.srcElement.style.fill = "#EA9859";
                                that.changeClassName(e.srcElement.innerHTML);
                                that.changeSyllableAllArr([new SchoolInfo(that.req_data).getKnowClassArr(that._classKnowledgeName), that._className]);
                            });
                        } else {
                            //默认的第一个显示高亮
                            c.xAxis[0].labelGroup.element.childNodes[0].style.fill = "#EA9859";
                            that.changeTeacherKnowledgeName(c.xAxis[0].labelGroup.element.childNodes[0].innerHTML);
                            Highcharts.addEvent(c.xAxis[0].labelGroup.element, 'click', e => {
                                //点击的时候当前显示高亮，其他显示初始颜色
                                for (let child of c.xAxis[0].labelGroup.element.childNodes) {
                                    if (child.childNodes[0].style) {
                                        child.childNodes[0].style.fill = "#8AAEF1";
                                    }
                                    child.style.fill = "#8AAEF1";
                                }
                                e.srcElement.style.fill = "#EA9859";
                                that.changeTeacherKnowledgeName(e.srcElement.innerHTML);
                            });
                        }

                    }
                )
            }
        },
        mounted() {
            this.drawCanvas();
            if (this.req_judge === "school-single") {
                this.changeSyllableAllArr([new SchoolInfo(this.req_data).getKnowClassArr(this._classKnowledgeName), this._className]);
            }

        }
    }
</script>

<style scoped lang="scss">
    .teacher-knowledge-score {
        width: 473px;
        height: 339px;
    }

    .school-ensemble {
        width: 283px;

        #TeacherKnowledgeScoreCanvas {
            position: relative;
            top: 13px;
            left: -8px;
        }
    }

    #TeacherKnowledgeScoreCanvas {
        width: 100%;
        overflow: visible !important;
        height: 270px;
        margin-top: 10px;
        position: relative;
        left: -8px;
    }

    .school-single {
        width: 525px;
        height: 338px;

        #TeacherKnowledgeScoreCanvas {
            left: -8px;
            width: 120%;
        }
    }

    .highcharts-container {
        overflow: visible;
    }

</style>
