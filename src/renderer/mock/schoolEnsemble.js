export default {
  data:{
      msg: "",
      code: 200,
      data: [{
          name: "学校评比",
          data: [{
              view: "Summarize", //概括
              title: "考试概况",
              data: {
                  style: 2,
                  examName: "第一学期期末考试", //考试名称
                  subjectlNum: 5, //学校数
                  peopleNum: 2659, //人数
                  full: 760, //满分
                  average: 432.47, //平均分
                  equipartition: 38.75, //均分差
                  superAverageRate: 8.96, //超均率
                  superAverageRateMatch: 0.9, //与上次相比
                  rank: 1, //排名
                  schoolNum: 5, //学校数量
                  rankMacth: 0, //排名与上次相比
                  keynote: 31.2, //重点高中上线率
                  keynoteMatch: 1.1, //重点高中上线率上次上升
                  common: 61.7, //普通高中上线率
                  commonMacth: 1.6, //普通高中上线率比上次上升
              }
          },
              {
                  view: "TeacherKnowledgeScore", //优劣学科
                  title: "优劣学科",
                  judge: "school-ensemble", //组件的判断
                  data: [{
                      name: "语文", //科目
                      thisTime: 59.23, //本次
                      lastTime: 60.28 //上次
                  }, {
                      name: "数学", //科目
                      thisTime: 73.4, //本次
                      lastTime: 78.28 //上次
                  }, {
                      name: "英语", //科目
                      thisTime: 61.54, //本次
                      lastTime: 61.72 //上次
                  }, {
                      name: "物理", //科目
                      thisTime: 68.5, //本次
                      lastTime: 72.09 //上次
                  }, {
                      name: "化学", //科目
                      thisTime: 67.8, //本次
                      lastTime: 61.74 //上次
                  }, {
                      name: "生物", //科目
                      thisTime: 61.43, //本次
                      lastTime: 66.57 //上次
                  }, {
                      name: "地理", //科目
                      thisTime: 56.39, //本次
                      lastTime: 55.18 //上次
                  }, {
                      name: "历史", //科目
                      thisTime: 60.18, //本次
                      lastTime: 54.43 //上次
                  },
                      {
                          name: "政治", //科目
                          thisTime: 61.93, //本次
                          lastTime: 60.46 //上次
                      }
                  ]
              },
              {
                  view: "SchoolAverage", //班级平均分
                  title: "班级平均分",
                  judge: "school-ensemble", //组件的判断
                  data: {
                      college: 469.53, //学校平均分
                      classArray: [{
                          name: "4班", //班级名称
                          score: 475.35, //分数
                      },
                          {
                              name: "1班", //班级名称
                              score: 471.17, //分数
                          }, {
                              name: "2班", //班级名称
                              score: 470.61, //分数
                          }, {
                              name: "3班", //班级名称
                              score: 469.44, //分数
                          }, {
                              name: "5班", //班级名称
                              score: 465.73, //分数
                          },
                          {
                              name: "6班", //班级名称
                              score: 461.03, //分数
                          }
                      ]
                  }
              },
              {
                  view: "OnlineRate", //班级上线率变化趋势
                  title: "班级上线率变化趋势",
                  judge: "school-ensemble", //组件的判断
                  style: "m-r-0 m-t-0",
                  data: [{
                      name: "重点高中",
                      data: [{
                          name: "4班", //班级名称
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: 28.8, //上线率
                          }, {
                              time: "18.05.04", //时间
                              rate: 28.3, //上线率
                          }, {
                              time: "18.06.26", //时间
                              rate: 26.5, //上线率
                          }, {
                              time: "18.10.24", //时间
                              rate: 29.1, //上线率
                          }, {
                              time: "19.01.18", //时间
                              rate: 31.2, //上线率
                          }],
                      },
                          {
                              name: "1班", //班级名称
                              //超均率数组
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 24.6, //超均率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 26.8, //超均率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 25.9, //超均率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 27.8, //超均率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 30.8, //超均率
                              }], //超均率
                          },
                          {
                              name: "2班", //班级名称
                              //超均率数组
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 14.1, //超均率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 17.5, //超均率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 18.4, //超均率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 13.8, //超均率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 16.4, //超均率
                              }], //超均率
                          },
                          {
                              name: "3班", //班级名称
                              //超均率数组
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 18.2, //超均率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 16.8, //超均率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 17.3, //超均率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 16.6, //超均率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 14.2, //超均率
                              }], //超均率
                          },
                          {
                              name: "5班", //班级名称
                              //超均率数组
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 11.3, //超均率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 12.6, //超均率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 9.8, //超均率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 10.2, //超均率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 10.5, //超均率
                              }], //超均率
                          }, {
                              name: "6班", //班级名称
                              //超均率数组
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 6.9, //超均率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 8.3, //超均率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 10.21, //超均率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 10.5, //超均率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 10.8, //超均率
                              }], //超均率
                          }
                      ]
                  },
                      {
                          name: "普通高中",
                          data: [{
                              name: "4班", //班级名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 65.2, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 59.9, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 62.6, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 64.1, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 68.7, //上线率
                              }],
                          },
                              {
                                  name: "1班", //班级名称
                                  //超均率数组
                                  rateArr: [{
                                      time: "18.02.16", //时间
                                      rate: 56.3, //超均率
                                  }, {
                                      time: "18.05.04", //时间
                                      rate: 56.4, //超均率
                                  }, {
                                      time: "18.06.26", //时间
                                      rate: 56.7, //超均率
                                  }, {
                                      time: "18.10.24", //时间
                                      rate: 57.3, //超均率
                                  }, {
                                      time: "19.01.18", //时间
                                      rate: 59.8, //超均率
                                  }], //超均率
                              },
                              {
                                  name: "2班", //学校名称
                                  //超均率数组
                                  rateArr: [{
                                      time: "18.02.16", //时间
                                      rate: 44.8, //超均率
                                  }, {
                                      time: "18.05.04", //时间
                                      rate: 46.6, //超均率
                                  }, {
                                      time: "18.06.26", //时间
                                      rate: 48.8, //超均率
                                  }, {
                                      time: "18.10.24", //时间
                                      rate: 59.5, //超均率
                                  }, {
                                      time: "19.01.18", //时间
                                      rate: 53.8, //超均率
                                  }], //超均率
                              },
                              {
                                  name: "3班", //学校名称
                                  //超均率数组
                                  rateArr: [{
                                      time: "18.02.16", //时间
                                      rate: 46.5, //超均率
                                  }, {
                                      time: "18.05.04", //时间
                                      rate: 47.8, //超均率
                                  }, {
                                      time: "18.06.26", //时间
                                      rate: 51.3, //超均率
                                  }, {
                                      time: "18.10.24", //时间
                                      rate: 52.8, //超均率
                                  }, {
                                      time: "19.01.18", //时间
                                      rate: 54.4, //超均率
                                  }], //超均率
                              },
                              {
                                  name: "5班", //学校名称
                                  //超均率数组
                                  rateArr: [{
                                      time: "18.02.16", //时间
                                      rate: 43.1, //超均率
                                  }, {
                                      time: "18.05.04", //时间
                                      rate: 45.5, //超均率
                                  }, {
                                      time: "18.06.26", //时间
                                      rate: 48.3, //超均率
                                  }, {
                                      time: "18.10.24", //时间
                                      rate: 46.6, //超均率
                                  }, {
                                      time: "19.01.18", //时间
                                      rate: 49.8, //超均率
                                  }], //超均率
                              },
                              {
                                  name: "6班", //学校名称
                                  //超均率数组
                                  rateArr: [{
                                      time: "18.02.16", //时间
                                      rate: 36.1, //超均率
                                  }, {
                                      time: "18.05.04", //时间
                                      rate: 40.5, //超均率
                                  }, {
                                      time: "18.06.26", //时间
                                      rate: 42.3, //超均率
                                  }, {
                                      time: "18.10.24", //时间
                                      rate: 46.6, //超均率
                                  }, {
                                      time: "19.01.18", //时间
                                      rate: 48.2, //超均率
                                  }], //超均率
                              }
                          ]
                      }
                  ]


              },
              {
                  view: "SuperaverageRateTable", //与上次考试相比——班级超均率变化
                  title: "与上次考试相比——班级超均率变化",
                  judge: "school-ensemble", //组件的判断
                  data: [{
                      name: "4班", //班级名称
                      superaverageRate: 0.16, //与上次考试相比超均率变化
                      thisSuperaverage: 1.24, //本次超均率变化
                      lastSuperaverage: 1.08, //上次超均率变化
                      ranking: 0, //名次变化
                      thisRanking: 1, //本次名次变化
                      lastRanking: 1, //上次名次变化
                  }, {
                      name: "1班", //班级名称
                      superaverageRate: -1.09, //与上次考试相比超均率变化
                      thisSuperaverage: 0.35, //本次超均率变化
                      lastSuperaverage: 1.44, //上次超均率变化
                      ranking: 1, //名次变化
                      thisRanking: 2, //本次名次变化
                      lastRanking: 3, //上次名次变化
                  },
                      {
                          name: "2班", //班级名称
                          superaverageRate: -0.52, //与上次考试相比超均率变化
                          thisSuperaverage: 0.13, //本次超均率变化
                          lastSuperaverage: 0.75, //上次超均率变化
                          ranking: -1, //名次变化
                          thisRanking: 3, //本次名次变化
                          lastRanking: 2, //上次名次变化
                      },
                      {
                          name: "3班", //班级名称
                          superaverageRate: 1.07, //与上次考试相比超均率变化
                          thisSuperaverage: -0.02, //本次超均率变化
                          lastSuperaverage: -1.09, //上次超均率变化
                          ranking: 0, //名次变化
                          thisRanking: 4, //本次名次变化
                          lastRanking: 4, //上次名次变化
                      }, {
                          name: "5班", //班级名称
                          superaverageRate: 0.45, //与上次考试相比超均率变化
                          thisSuperaverage: -0.81, //本次超均率变化
                          lastSuperaverage: -1.26, //上次超均率变化
                          ranking: 0, //名次变化
                          thisRanking: 5, //本次名次变化
                          lastRanking: 5, //上次名次变化
                      },
                      {
                          name: "6班", //班级名称
                          superaverageRate: 0.66, //与上次考试相比超均率变化
                          thisSuperaverage: -1.81, //本次超均率变化
                          lastSuperaverage: -2.47, //上次超均率变化
                          ranking: 0, //名次变化
                          thisRanking: 6, //本次名次变化
                          lastRanking: 6, //上次名次变化
                      }
                  ]
              },
              {
                  view: "SuperaverageTrend", //班级超均率变化趋势
                  title: "班级超均率变化趋势",
                  judge: "school-ensemble", //组件的判断
                  data: [{
                      name: "4班", //班级名称
                      //超均率数组
                      rateArr: [{
                          time: "18.02.16", //时间
                          rate: 2.16, //超均率
                      }, {
                          time: "18.05.04", //时间
                          rate: 2.28, //超均率
                      }, {
                          time: "18.06.26", //时间
                          rate: 2.44, //超均率
                      }, {
                          time: "18.10.24", //时间
                          rate: 1.08, //超均率
                      }, {
                          time: "19.01.18", //时间
                          rate: 1.24, //超均率
                      }], //超均率
                  },
                      {
                          name: "1班", //学校名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: 3.19, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: 2.23, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: 2.09, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: 1.44, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: 0.35, //超均率
                          }], //超均率
                      },
                      {
                          name: "2班", //学校名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: -0.12, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: 0.98, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: 0.77, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: 0.75, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: 0.23, //超均率
                          }], //超均率
                      },
                      {
                          name: "3班", //学校名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: 1.02, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: 0.43, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: -0.08, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: -1.09, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: -0.02, //超均率
                          }], //超均率
                      },
                      {
                          name: "5班", //学校名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: -1.87, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: 1.49, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: -2.57, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: -1.26, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: -0.81, //超均率
                          }], //超均率
                      },
                      {
                          name: "6班", //学校名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: -3.33, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: -3.29, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: -2.18, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: -2.47, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: -1.81, //超均率
                          }], //超均率
                      }
                  ]
              },
              {
                  view: "KeynoteCritical", //重点高中上线生/临界生
                  title: "重点高中上线/临界生分布",
                  judge: "school-ensemble", //组件的判断
                  style: "m-t-1",
                  data: {
                      onlineStudent: [{
                          schoolName: "4班", //班级名称
                          scale: 31.2 //比例
                      },
                          {
                              schoolName: "1班", //学校名称
                              scale: 29.8 //比例
                          }, {
                              schoolName: "2班", //学校名称
                              scale: 16.4 //比例
                          }, {
                              schoolName: "3班", //学校名称
                              scale: 14.2 //比例
                          }, {
                              schoolName: "5班", //学校名称
                              scale: 10.5 //比例
                          }, {
                              schoolName: "6班", //学校名称
                              scale: 10.8 //比例
                          }
                      ], //上线生
                      criticalGrowth: [{
                          schoolName: "4班", //学校名称
                          scale: 7.6 //比例
                      },
                          {
                              schoolName: "1班", //学校名称
                              scale: 6.9 //比例
                          }, {
                              schoolName: "2班", //学校名称
                              scale: 8.7 //比例
                          }, {
                              schoolName: "3班", //学校名称
                              scale: 9.2 //比例
                          }, {
                              schoolName: "5班", //学校名称
                              scale: 8.1 //比例
                          }, {
                              schoolName: "6班", //学校名称
                              scale: 8.2 //比例
                          }
                      ]
                  }
              },
              {
                  view: "CommonCritical", //普通高中上线生/临界生
                  title: "普通高中上线/临界生",
                  judge: "school-ensemble", //组件的判断
                  style: "m-t-1 m-r-0",
                  data: {
                      onlineStudent: [{
                          schoolName: "4班", //班级名称
                          scale: 68.7 //比例
                      },
                          {
                              schoolName: "1班", //学校名称
                              scale: 59.8 //比例
                          }, {
                              schoolName: "2班", //学校名称
                              scale: 53.8 //比例
                          }, {
                              schoolName: "3班", //学校名称
                              scale: 53.8 //比例
                          }, {
                              schoolName: "5班", //学校名称
                              scale: 54.4 //比例
                          }, {
                              schoolName: "6班", //学校名称
                              scale: 48.2 //比例
                          }
                      ], //上线生
                      criticalGrowth: [{
                          schoolName: "4班", //学校名称
                          scale: 30.3 //比例
                      },
                          {
                              schoolName: "1班", //学校名称
                              scale: 37.6 //比例
                          }, {
                              schoolName: "2班", //学校名称
                              scale: 40.8 //比例
                          }, {
                              schoolName: "3班", //学校名称
                              scale: 41.6 //比例
                          }, {
                              schoolName: "5班", //学校名称
                              scale: 40.9 //比例
                          }, {
                              schoolName: "6班", //学校名称
                              scale: 46.8 //比例
                          }
                      ]
                  }

              }
          ]

      }]
  }
}
