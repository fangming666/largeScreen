<template>
    <!--重点高中上线/临界生分布-->
    <div class="keynote-critical base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <div id="keynoteCanvas">
        </div>
    </div>
</template>

<script>
    import {SchoolInfo} from "../../utils/schoolInfo";
    import * as Highcharts from "highcharts";

    export default {
        name: "Critical",
        data() {
            return {
                schoolNameArr: [],//学校的名称
                onlineStudentArr: [],//上线生比例数组
                criticalGrowthArr: [],//临界生比例数组
            }
        },
        props: ["req_data", "req_title", "req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        watch:{
          req_data(newData,oldData){
              if(newData !== oldData){
                  this.drawCanvas();
              }
          }
        },
        methods:{
          drawCanvas(){
              this.schoolNameArr = new SchoolInfo(this.req_data.onlineStudent).getSchoolNameArr();
              this.onlineStudentArr = new SchoolInfo(this.req_data.onlineStudent).getSchoolScaleArr();
              this.criticalGrowthArr = new SchoolInfo(this.req_data.criticalGrowth).getSchoolScaleArr();
              //配置柱状图

              Highcharts.chart('keynoteCanvas',
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
                          categories: this.schoolNameArr,
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
                              text: '比例（%）',
                              align: "high",//对齐方式
                              rotation: 90,//旋转
                              style: {
                                  fontSize: 9.6,
                                  color: "#8AAEF1",
                              },
                              y: 38
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
                              '<td style="padding:0"><b>{point.y:.1f}分</b></td></tr>',
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
                              pointWidth: 16,
                              stacking: 'normal'
                          }
                      }
                      ,
                      //数据
                      series: [
                          {
                              name: '临界生',
                              data: this.criticalGrowthArr,
                              //渐变色
                              color: {
                                  linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                                  stops: [
                                      [0, '#EA9859'],
                                      [1, '#EA6D59']
                                  ]
                              },
                              stack: 'male' // stack 值相同的为同一组
                          }, {
                              name: '上线生',
                              data: this.onlineStudentArr,
                              //渐变色
                              color: {
                                  linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                                  stops: [
                                      [0, '#0E6FCA'],
                                      [1, '#0070EA']
                                  ]
                              },
                              stack: 'male'
                          },
                      ],
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
                          }
                  }
              )
          }
        },
        mounted() {
            this.drawCanvas();
        },
    }
</script>

<style scoped lang="scss">
    .keynote-critical {
        width: 410px;
        height: 338px;
        box-sizing: border-box;

    }

    #keynoteCanvas {
        width: 380px;
        height: 280px;
        margin: 15px auto 0;
        position: relative;
        left: -20px;
    }
    .school-ensemble{
        width: 345px;
        #keynoteCanvas{
            width: 110%;
        }
    }
</style>
