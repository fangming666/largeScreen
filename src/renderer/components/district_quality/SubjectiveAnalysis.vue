<template>

    <!------主观题分析----->
    <div class="subjective-analysis base-box">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <el-table
                :data="req_data"
                size="mini"
                border
                class="super-mini float-left"
                :row-class-name="tableRowClassName"
                :row-style="selectedHighlight"
                @row-click="rowClick"
                style="width: 48%">
            <el-table-column
                    prop="titleNum"
                    label="题号"

            >
            </el-table-column>
            <el-table-column
                    prop="difficulty"
                    label="难易程度"
            >
            </el-table-column>
            <el-table-column
                    prop="full"
                    label="满分"
                    width=60
            >
            </el-table-column>
            <el-table-column
                    prop="average"
                    label="平均分"
                    width=70
            >
            </el-table-column>
            <el-table-column
                    prop="scoringAverage"
                    label="得分率(%)"
            >
            </el-table-column>
            <el-table-column
                    prop="standardDeviation"
                    label="标准差"
            >
            </el-table-column>
            <el-table-column
                    prop="positive"
                    label="正答率(%)"
            >
                <template slot-scope="scope">
                    <div class="positive-td">
                       <span>
                           {{scope.row.positive}}
                       </span>
                        <img v-if="scope.row.index===getIndex" :src="rowImg" alt="rowImg">
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div class="subjective-analysis-content float-left clearfix">
            <div class="subjective-analysis-canvas float-left">
                <p>
                    试题特征曲线 <span class="float-right">区分度:{{differentiation}}</span> <span class="float-right">难度:{{difficultyNum}}</span>
                </p>
                <div id="subjectiveContentCanvas">
                </div>
            </div>
            <div class="subjective-analysis-info float-left">
                <h6>阅卷总结</h6>
                <dl>
                    <dt>答题值得肯定的地方：</dt>
                    <dd>
                        <p v-for="item in sureInfo">
                            {{item}}
                        </p>
                    </dd>
                </dl>
                <dl>
                    <dt>答题掌握不足之处及原因：</dt>
                    <dd>
                        <p v-for="item in lessThan">
                            {{item}}
                        </p>
                    </dd>
                </dl>
                <dl>
                    <dt>教学建议：</dt>
                    <dd>
                        <p v-for="item in propose">
                            {{item}}
                        </p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import rowImg from "../../static/row.svg"

    export default {
        name: "SubjectiveAnalysis",
        data() {
            return {
                xAxisArr: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],//折线图X轴数据
                difficultyNum: "",//难度
                differentiation: "",//区分度
                sureInfo: [],//值得肯定的地方
                lessThan: [],//不足以及原因
                propose: [],//建议
                getIndex: 0,//table激活的索引，默认显示第一个
                rowImg,//表格箭头的图标
            }
        },
        props: ["req_data", "req_title"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        methods: {
            selectedHighlight({row, rowIndex}) {
                if ((this.getIndex) === rowIndex) {
                    return {
                        "background-color": "#161154 !important"
                    };
                }
            },
            rowClick(row) {
                this.getIndex = row.index;
                this.difficultyNum = row.difficultyNum;
                this.difficultyNum = row.difficultyNum;
                this.differentiation = row.differentiation;
                this.sureInfo = row.sureInfo;
                this.lessThan = row.lessThan;
                this.propose = row.propose;
                this.drawCanvas(row.data);
            },
            tableRowClassName({row, rowIndex}) {
                row.index = rowIndex;
                if (rowIndex % 2) {
                    return 'normal-row';
                }
                return 'activation-row';
            },
            //进行绘制图形
            drawCanvas(reqArr) {
                Highcharts.chart('subjectiveContentCanvas', {
                    title: {
                        text: ''
                    },
                    chart: {
                        backgroundColor: "transparent",
                    },
                    subtitle: {
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
                    yAxis: {
                        allowDecimals: false,
                        gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                        lineColor: " #484AD5",//轴线颜色
                        lineWidth: 1,
                        min: 0,
                        max: 1,
                        tickInterval: 0.2,
                        title: {
                            text: '试题得分率',
                            align: "high",//对齐方式
                            rotation: 90,//旋转
                            style: {
                                fontSize: 9.6,
                                color: "#8AAEF1",
                            },
                            y: 42
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
                    //图例
                    legend:
                        {
                            enabled: false
                        },
                    xAxis: {
                        gridLineWidth: 1,
                        categories: this.xAxisArr,
                        gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                        lineColor: " #484AD5",//轴线颜色
                        //轴标签
                        labels: {
                            style: {
                                fontSize: 9.6,
                                color: "#8AAEF1",
                            }
                        },
                        title: {
                            text: '能力值(试卷得分率)',
                            align: "middle",//对齐方式
                            style: {
                                fontSize: 12,
                                color: "#8AAEF1",
                            },
                        },
                    },
                    series: [{
                        name: "能力值(试卷得分率)",
                        data: reqArr,
                        color: "#6055E6",
                        marker: {
                            fillColor: "#FC6505"
                        }
                    }],
                })
            }
        },
        mounted() {
            this.drawCanvas(this.req_data[0].data);
            this.difficultyNum = this.req_data[0].difficultyNum;
            this.difficultyNum = this.req_data[0].difficultyNum;
            this.differentiation = this.req_data[0].differentiation;
            this.sureInfo = this.req_data[0].sureInfo;
            this.lessThan = this.req_data[0].lessThan;
            this.propose = this.req_data[0].propose;
        }
    }
</script>
<style scoped lang="scss">
    .subjective-analysis {
        width: 1257px;
        height: 338px;
        box-sizing: border-box;
        margin-right: 0;

        .el-table {
            margin-top: 14px;

            .cell {
                line-height: 16px !important;
            }
        }
    }

    #subjectiveContentCanvas {
        width: 440px;
        height: 240px;

        .highcharts-root {
            width: 430px;
        }
    }

    .subjective-analysis-content {
        width: 52%;
    }

    .subjective-analysis-canvas {
        margin-top: 14px;

        & > p {
            font-size: 15px;
            color: #8AAEF1;
            margin-bottom: 6px;
            position: relative;
            padding-left: 45px;
            padding-right: 7px;
            margin-top: 0;

            &::before {
                background-image: linear-gradient(-180deg, #FDC307 0%, #FA9003 100%);
                box-shadow: 0 0 3px 0 rgba(198, 175, 134, 0.27);
                border-radius: 100px;
                display: block;
                content: "";
                width: 8px;
                height: 8px;
                position: absolute;
                left: 30px;
                top: 6px;
            }

            span {
                font-size: 14px;
                color: #8884CC;
                margin-left: 11px;
            }
        }
    }

    .subjective-analysis-info {
        box-sizing: border-box;
        padding: 0 12px;
        margin-left: 4px;
        width: 183px;
        height: 289px;
        background-image: url("../../static/subjective-analysis-info-bg.svg");
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        top: -12px;
        left: 2px;

        h6 {
            font-size: 15px;
            text-align: center;
            padding-bottom: 5px;
            margin-bottom: 0;
            color: #FC6505;
            border-bottom: 1px dashed #2D2590;
        }

        dl {
            padding: 4px 2px;
            margin: 0;
            border-bottom: 1px dashed #2D2590;

            dt {
                font-size: 12px;
                color: #8AAEF1;
                margin-bottom: 3px;
            }

            dd {
                margin: 0;

                p {
                    margin: 0;
                    font-size: 10px;
                    color: #8884CC;
                    letter-spacing: 1px;
                }
            }
        }
    }

    .positive-td {
        position: relative;
        img {
            position: absolute;
            right: -30px;
            top: 2px;
        }
    }
</style>
