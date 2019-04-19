<template>
    <!--单科阅卷监控-->
    <div class="general-progress-single base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
            <span class="pub-head-other">{{_markSubjectName}}</span>
        </pubTitle>
        <div id="GeneralProgressSingleCanvas" class="float-left">
        </div>
        <div class="float-right general-progress-single-right">
            <p>
                {{_markSubjectName}}阅卷总进度
            </p>
            <div id="GeneralProgressSingleCircle">

            </div>
        </div>
    </div>
</template>

<script>
    import {SchoolInfo} from "../../utils/schoolInfo";
    import * as Highcharts from "highcharts";
    import {mapActions, mapState} from "vuex";

    export default {
        name: "GeneralProgressSingle",
        props: ["req_data", "req_title", "req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        data() {
            return {
                finishCircle: "",//圆环的已完成
                roughCircle: "",//圆环的未完成
            }
        },
        watch: {
            _markSubjectName(newData, oldData) {
                if (newData !== oldData && newData) {
                    this.changeRubric();
                    this.drawCanvas();
                }
            }
        },
        methods: {
            ...mapActions(["change_mark_rubric_arr", "change_mark_rubric_name"]),
            //修改题目列表
            changeRubric() {
                for (let child of this.req_data) {
                    if (child.name === this._markSubjectName) {
                        this.change_mark_rubric_arr(child.rubricArr);
                        this.finishCircle = child.finish;
                        this.roughCircle = child.total - child.finish;
                        break;
                    }
                }
            },
            //绘制图像
            drawCanvas() {
                let that = this;
                let schoolInfo = new SchoolInfo(this._markRubricArr);
                let xAxisArr = schoolInfo.getRubric();
                let finishScore = new SchoolInfo(schoolInfo.getFinishRough()).getFinishScore();
                let roughScore = new SchoolInfo(schoolInfo.getFinishRough()).getRoughScore();
                let finishRate = Math.round(that.finishCircle / (that.finishCircle + that.roughCircle) * 100);
                let roughRate = Math.round(that.roughCircle / (that.finishCircle + that.roughCircle) * 100);

                //配置柱状图
                Highcharts.chart('GeneralProgressSingleCanvas',
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
                                pointWidth: 14,
                                stacking: 'normal'
                            },
                            series: {
                                events: {
                                    click: function (e) {
                                        let highchartsColumnSeries = document.querySelector("#GeneralProgressSingleCanvas .highcharts-tracker").childNodes;
                                        let xaxisDom = document.querySelector("#GeneralProgressSingleCanvas .highcharts-xaxis-labels").childNodes;
                                        for (let index in xaxisDom) {
                                            if (!isNaN(index)) {
                                                if (e.point.category === xaxisDom[index].innerHTML) {
                                                    xaxisDom[index].style.fill = "#EA9859";
                                                    highchartsColumnSeries[index].style.fill = "#E96148";
                                                    that.change_mark_rubric_name(xaxisDom[index].innerHTML);
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
                        },
                        ],
                        //图例
                        legend:
                            {
                                enabled: false
                            }
                    },
                    function (c) {
                        //默认的第一个显示高亮
                        if (c.xAxis[0].labelGroup.element) {
                            c.xAxis[0].labelGroup.element.childNodes[0].style.fill = "#EA9859";
                        }
                        that.change_mark_rubric_name(c.xAxis[0].labelGroup.element.childNodes[0].innerHTML);
                        let highchartsColumnSeries = "";
                        if (document.querySelector(".general-progress-single .highcharts-tracker")) {
                            highchartsColumnSeries = document.querySelector(".general-progress-single .highcharts-tracker").childNodes;
                        }
                        Highcharts.addEvent(c.xAxis[0].labelGroup.element, 'click', e => {
                            let labelDom = c.xAxis[0].labelGroup.element.childNodes;
                            //点击的时候当前显示高亮，其他显示初始颜色
                            for (let index in labelDom) {
                                if (!isNaN(labelDom[index])) {
                                    break;
                                }
                                if (labelDom[index].innerHTML === e.srcElement.innerHTML) {
                                    e.srcElement.style.fill = "#EA9859";
                                    highchartsColumnSeries[index].style.fill = "#E96148";
                                    that.change_mark_rubric_name(e.srcElement.innerHTML);
                                } else {
                                    labelDom[index].style.fill = "#8AAEF1";
                                    highchartsColumnSeries[index].style.fill = "#0E6FCA";
                                }
                            }
                        });
                    }
                );
                let chart = Highcharts.chart("GeneralProgressSingleCircle", {
                    chart: {
                        backgroundColor: "transparent",
                    },
                    title: {
                        floating: true,
                        text: ''
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
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false,
                                backgroundColor: "transparent",
                                borderColor: "#0B88D3",
                                style: {
                                    color: '#049FFC',
                                    fontSize: "14px",
                                },
                                userHtml: true,
                                format: '<p>{point.name}</p><p>{point.percentage:.1f} %</p>',
                            },
                            borderWidth: 0,
                            point: {
                                events: {
                                    click: function (e) { // 同样的可以在点击事件里处理
                                        chart.setTitle({
                                            text: `${e.point.name} ${e.point.name === '已完成' ? finishRate : roughRate}%`,
                                            style: {
                                                fontSize: 16,
                                                color: "#F6F6F6",
                                            }
                                        })
                                        ;
                                    }
                                }
                            },
                        }
                    },
                    series: [{
                        type: 'pie',
                        innerSize: '60%',
                        data: [{
                            name: "已完成",
                            y: that.finishCircle,
                            sliced: true,
                            color: "#157C98"
                        }, {name: "未完成", y: that.roughCircle, color: "#46BFCB"}]
                    }]
                }, function (c) { // 图表初始化完毕后的回调函数
                    // 环形图圆心
                    let centerY = c.series[0].center[1],
                        titleHeight = parseInt(c.title.styles.fontSize);
                    // 动态设置标题位置
                    c.setTitle({
                        y: centerY + titleHeight / 2,
                        text: `${c.series[0].data[0].name} ${finishRate}%`,
                        style: {
                            fontSize: 16,
                            color: "#F6F6F6",
                        }
                    });
                })
            }
        },
        computed: {
            ...mapState({
                _markSubjectName: ({markExaminationModules}) => markExaminationModules._markSubjectName,
                _markRubricArr: ({markExaminationModules}) => markExaminationModules._markRubricArr,
            })
        },
        mounted() {
            if (this._markSubjectName) {
                this.changeRubric();
                this.drawCanvas();
            }
        }
    }
</script>

<style scoped lang="scss">
    .general-progress-single {
        width: 739px;
        height: 338px;
    }

    #GeneralProgressSingleCanvas {
        margin-top: 10px;
        width: 60%;
        height: 270px;
    }

    .general-progress-single-right {
        width: 40%;
        text-align: center;

        & > p {
            color: rgba(138, 174, 241, 0.8);
            background: #272179;
            border-radius: 13px;
            height: 26px;
            display: inline-block;
            line-height: 26px;
            text-align: center;
            padding: 0 12px;
            box-sizing: border-box;
            font-size: 14px;
        }

        #GeneralProgressSingleCircle {
            width: 100%;
            height: 220px;
            margin: 0 auto;
        }
    }
</style>
