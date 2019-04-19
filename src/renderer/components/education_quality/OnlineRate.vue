<template>
    <!-----上线率趋势变化---->
    <div class="online-rate base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <div id="onlineRate">
        </div>
        <p class="clearfix online-rate-select" v-if="selectArr.length">
            <a href="javascript:;" class="float-left" v-for="(item,index) in selectArr" :key="item"
               :class="activeSwitch===index?'active':''"
               @click="changeOnline(index)">
                {{item}}
            </a>

        </p>
    </div>
</template>

<script>
    import * as Highcharts from "highcharts";
    import SuperaverageTrendInfo from "../../utils/SuperaverageTrendInfo";
    import {SchoolInfo} from "../../utils/schoolInfo";

    export default {
        name: "OnlineRate",
        props: ["req_data", "req_title", "req_judge"],
        data() {
            return {
                activeSwitch: 0,//选项按钮
                selectArr: [],//选择的数组
            }
        },
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        watch: {
            req_data(newData, oldData) {
                if (newData !== oldData) {
                    this.drawCharts(this.req_data[0].data)
                }
            }
        },
        methods: {
            //绘制折线图
            drawCharts(reqArr) {
                this.selectArr = new SchoolInfo(this.req_data).getNameArr();
                Highcharts.chart('onlineRate', {
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
                    plotOptions:{
                        series: {
                            marker: {
                                enabled: true, /*数据点是否显示*/
                                radius: 3,  /*数据点大小px*/
                            },
                        }
                    },
                    yAxis: {
                        allowDecimals: false,
                        gridLineColor: 'rgba(122,164,239,0.20)',//网格线颜色
                        title: {
                            text: this.req_judge==="school-single-teacher"?'超 均 率 ％':'上 线 率 ％',
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
                            itemStyle: {
                                color: "#8AAEF1"
                            },
                            itemHoverStyle: {
                                color: "#8AAEF1"
                            }
                        },
                    xAxis: {
                        categories: new SuperaverageTrendInfo(reqArr).getTime(),
                        crosshair: true,
                        tickWidth:1,
                        tickColor:"#484AD5",
                        lineColor: " #484AD5",//轴线颜色
                        //轴标签
                        labels: {
                            style: {
                                // fontSize: 14,
                                color: "#8AAEF1",
                            }
                        }
                    },
                    series: new SuperaverageTrendInfo(reqArr).getResult(),
                })
            },
            //更改重点高中/普通高中
            changeOnline(index) {
                this.activeSwitch = index;
                this.drawCharts(this.req_data[index].data)
            }
        },
        mounted() {
            //初始的时候显示重点高中
            this.drawCharts(this.req_data[0].data)
        }
    }
</script>

<style scoped lang="scss">
    .online-rate {
        width: 471px;
        height: 347px;
        margin-top: 18px;
        margin-right: 0;
        position: relative;
    }

    #onlineRate {
        width: 450px;
        height: 290px;
        margin: 15px auto 0;
        position: relative;
        left: -20px;
    }

    .school-ensemble {
        width: 452px;
        height: 338px;

        #onlineRate {
            width: 110%;
            height: 280px;
        }
    }

    .online-rate-select {
        position: absolute;
        right: 36px;
        top: 34px;
        font-size: 0;
        border: 1px solid #2B2581;
        border-radius: 100px;

        a {
            width: 70px;
            text-decoration: none;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            color: #8AAEF1;
            &:first-child{
                border-radius: 100px 0 0 100px;
            }

            &:last-child {
                border-radius: 0 100px 100px 0;
            }

            &.active {
                color: #8AAEF1;
                background: #0B68C9;
                border-color: #0B68C9;
            }
        }
    }

    .school-single-teacher {
        height: 339px;

        .online-rate-select {
            top: 57px;
        }
        #onlineRate {
            margin-top: 40px;
            height: 250px;
        }
    }
</style>
