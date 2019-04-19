export default {
  data:{
      msg: "",
      code: 200,
      data: [{
          name: "学校概况",
          data: [{
              view: "Summarize", //概括
              title: "考试概况",
              judge: "school-single",
              data: {
                  style: 2,
                  examName: "第一学期期末考试", //考试名称
                  full: 120, //满分
                  peopleNum: 197, //人数
                  average: 73.96, //平均分
                  equipartition: 7.54, //均分差
                  superAverageRate: 13.89, //超均率
                  superAverageRateMatch: 2.58, //与上次相比
                  rank: 1, //排名
                  schoolNum: 5, //学校数量
                  rankMacth: 1, //排名与上次相比
              }
          }, {
              view: "SchoolAverage", //班级平均分
              title: "班级平均分",
              style: "m-t-0",
              judge: "school-single", //组件的判断
              data: {
                  college: 73.96, //学校平均分
                  classArray: [{
                      name: "4班", //班级名称
                      score: 76.68, //分数
                  },
                      {
                          name: "1班", //班级名称
                          score: 82.97, //分数
                      }, {
                          name: "2班", //班级名称
                          score: 75.18, //分数
                      }, {
                          name: "3班", //班级名称
                          score: 71.17, //分数
                      }, {
                          name: "5班", //班级名称
                          score: 68.47, //分数
                      },
                      {
                          name: "6班", //班级名称
                          score: 70.26, //分数
                      }
                  ]
              }
          },
              {
                  view: "ClassAdded", //班级增值
                  title: "班级增值",
                  style: "m-r-0",
                  judge: "school-single", //组件的判断
                  data: {
                      classArray: [{
                          name: "4班", //班级名称
                          score: 0.96, //分数
                      },
                          {
                              name: "4班", //班级名称
                              score: -4.11, //分数
                          }, {
                              name: "2班", //班级名称
                              score: 2.46, //分数
                          }, {
                              name: "3班", //班级名称
                              score: -1.4, //分数
                          }, {
                              name: "5班", //班级名称
                              score: 2.31, //分数
                          },
                          {
                              name: "6班", //班级名称
                              score: -0.2, //分数
                          }
                      ]
                  }
              },
              {
                  view: "ClassKnowledge", //考察知识点得分率
                  title: "考察知识点得分率",
                  data: [{
                      name: "圆", //知识点名称
                      score: 70.21, //校得分率
                      collegeScore: 60.94, //联考得分率
                  }, {
                      name: "二次函数", //知识点名称
                      score: 61.26, //校得分率
                      collegeScore: 50.89, //联考得分率
                  }, {
                      name: "图形的相似", //知识点名称
                      score: 73.13, //校得分率
                      collegeScore: 69.18, //联考得分率
                  }, {
                      name: "概率", //知识点名称
                      score: 95.00, //校得分率
                      collegeScore: 82.088, //联考得分率
                  }, {
                      name: "数据收集与处理", //知识点名称
                      score: 71.00, //校得分率
                      collegeScore: 70.44, //联考得分率
                  }, {
                      name: "反比例函数", //知识点名称
                      score: 47.00, //校得分率
                      collegeScore: 52.50, //联考得分率
                  }]
              },
              {
                  view: "TeacherKnowledgeScore", //各班级得分率
                  title: "各班级得分率",
                  style: "m-t-1",
                  judge: "school-single", //组件的判断
                  data: [{
                      name: "圆", //知识点名称
                      //班级数组
                      classArr: [{
                          className: "1班", //班级名称
                          score: 73.82,
                          rubricArr: [{
                              rubricName: "选择题-4", //题目名称
                              schoolScore: 90, //校得分率
                              classScore: 86.67 //班得分率
                          },
                              {
                                  rubricName: "选择题-11", //题目名称
                                  schoolScore: 76.67, //校得分率
                                  classScore: 83.33 //班得分率
                              },
                              {
                                  rubricName: "解答题-19", //题目名称
                                  schoolScore: 78.75, //校得分率
                                  classScore: 82.5 //班得分率
                              },
                              {
                                  rubricName: "解答题-22", //题目名称
                                  schoolScore: 54.56, //校得分率
                                  classScore: 68.89 //班得分率
                              }
                          ]
                      },
                          {
                              className: "2班", //班级名称
                              score: 79.68,
                              rubricArr: [{
                                  rubricName: "选择题-4", //题目名称
                                  schoolScore: 90, //校得分率
                                  classScore: 93.33 //班得分率
                              },
                                  {
                                      rubricName: "选择题-11", //题目名称
                                      schoolScore: 76.67, //校得分率
                                      classScore: 76.67 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-19", //题目名称
                                      schoolScore: 78.75, //校得分率
                                      classScore: 85 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-22", //题目名称
                                      schoolScore: 54.56, //校得分率
                                      classScore: 72.22 //班得分率
                                  }
                              ]
                          },
                          {
                              className: "3班", //班级名称
                              score: 66.89,
                              rubricArr: [{
                                  rubricName: "选择题-4", //题目名称
                                  schoolScore: 90, //校得分率
                                  classScore: 90 //班得分率
                              },
                                  {
                                      rubricName: "选择题-11", //题目名称
                                      schoolScore: 76.67, //校得分率
                                      classScore: 73.33 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-19", //题目名称
                                      schoolScore: 78.75, //校得分率
                                      classScore: 80 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-22", //题目名称
                                      schoolScore: 54.56, //校得分率
                                      classScore: 64.89 //班得分率
                                  }
                              ]
                          },
                          {
                              className: "4班", //班级名称
                              score: 69.17,
                              rubricArr: [{
                                  rubricName: "选择题-4", //题目名称
                                  schoolScore: 90, //校得分率
                                  classScore: 96.67 //班得分率
                              },
                                  {
                                      rubricName: "选择题-11", //题目名称
                                      schoolScore: 76.67, //校得分率
                                      classScore: 73.33 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-19", //题目名称
                                      schoolScore: 78.75, //校得分率
                                      classScore: 83.75 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-22", //题目名称
                                      schoolScore: 54.56, //校得分率
                                      classScore: 66.67 //班得分率
                                  }
                              ]
                          },
                          {
                              className: "5班", //班级名称
                              score: 72.68,
                              rubricArr: [{
                                  rubricName: "选择题-4", //题目名称
                                  schoolScore: 90, //校得分率
                                  classScore: 90 //班得分率
                              },
                                  {
                                      rubricName: "选择题-11", //题目名称
                                      schoolScore: 76.67, //校得分率
                                      classScore: 73.33 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-19", //题目名称
                                      schoolScore: 78.75, //校得分率
                                      classScore: 70 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-22", //题目名称
                                      schoolScore: 54.56, //校得分率
                                      classScore: 68.89 //班得分率
                                  }
                              ]
                          },
                          {
                              className: "6班", //班级名称
                              score: 62.19,
                              rubricArr: [{
                                  rubricName: "选择题-4", //题目名称
                                  schoolScore: 90, //校得分率
                                  classScore: 86.67 //班得分率
                              },
                                  {
                                      rubricName: "选择题-11", //题目名称
                                      schoolScore: 76.67, //校得分率
                                      classScore: 76.67 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-19", //题目名称
                                      schoolScore: 78.75, //校得分率
                                      classScore: 73.75 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-22", //题目名称
                                      schoolScore: 54.56, //校得分率
                                      classScore: 53.33 //班得分率
                                  }
                              ]
                          }
                      ]
                  },
                      {
                          name: "图形的相似",
                          classArr: [{
                              className: "1班", //班级名称
                              score: 74.19,
                              rubricArr: [{
                                  rubricName: "选择题-1", //题目名称
                                  schoolScore: 88.38, //校得分率
                                  classScore: 86.67 //班得分率
                              },
                                  {
                                      rubricName: "选择题-6", //题目名称
                                      schoolScore: 76.67, //校得分率
                                      classScore: 80 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-21", //题目名称
                                      schoolScore: 71.11, //校得分率
                                      classScore: 73.33 //班得分率
                                  }
                              ]
                          },
                              {
                                  className: "2班", //班级名称
                                  score: 80.41,
                                  rubricArr: [{
                                      rubricName: "选择题-1", //题目名称
                                      schoolScore: 88.38, //校得分率
                                      classScore: 86.67 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-6", //题目名称
                                          schoolScore: 76.67, //校得分率
                                          classScore: 80 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-21", //题目名称
                                          schoolScore: 71.11, //校得分率
                                          classScore: 78.89 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "3班", //班级名称
                                  score: 75.28,
                                  rubricArr: [{
                                      rubricName: "选择题-1", //题目名称
                                      schoolScore: 88.38, //校得分率
                                      classScore: 81.43 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-6", //题目名称
                                          schoolScore: 76.67, //校得分率
                                          classScore: 76.67 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-21", //题目名称
                                          schoolScore: 71.11, //校得分率
                                          classScore: 74.44 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "4班", //班级名称
                                  score: 73.16,
                                  rubricArr: [{
                                      rubricName: "选择题-1", //题目名称
                                      schoolScore: 88.38, //校得分率
                                      classScore: 90.42 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-6", //题目名称
                                          schoolScore: 76.67, //校得分率
                                          classScore: 76.67 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-21", //题目名称
                                          schoolScore: 71.11, //校得分率
                                          classScore: 71.11 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "5班", //班级名称
                                  score: 66.13,
                                  rubricArr: [{
                                      rubricName: "选择题-1", //题目名称
                                      schoolScore: 88.38, //校得分率
                                      classScore: 92.67 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-6", //题目名称
                                          schoolScore: 76.67, //校得分率
                                          classScore: 73.33 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-21", //题目名称
                                          schoolScore: 71.11, //校得分率
                                          classScore: 64.44 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "6班", //班级名称
                                  score: 68.26,
                                  rubricArr: [{
                                      rubricName: "选择题-1", //题目名称
                                      schoolScore: 88.38, //校得分率
                                      classScore: 90 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-6", //题目名称
                                          schoolScore: 76.67, //校得分率
                                          classScore: 76.67 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-21", //题目名称
                                          schoolScore: 71.11, //校得分率
                                          classScore: 65.56 //班得分率
                                      }
                                  ]
                              },
                          ]
                      },
                      {
                          name: "概率",
                          classArr: [{
                              className: "1班", //班级名称
                              score: 94.33,
                              rubricArr: [{
                                  rubricName: "选择题-2", //题目名称
                                  schoolScore: 96.67, //校得分率
                                  classScore: 96.67 //班得分率
                              },
                                  {
                                      rubricName: "选择题-5", //题目名称
                                      schoolScore: 93.33, //校得分率
                                      classScore: 93.33 //班得分率
                                  }

                              ]
                          },
                              {
                                  className: "2班", //班级名称
                                  score: 96.16,
                                  rubricArr: [{
                                      rubricName: "选择题-2", //题目名称
                                      schoolScore: 96.67, //校得分率
                                      classScore: 100 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-5", //题目名称
                                          schoolScore: 93.33, //校得分率
                                          classScore: 93.33 //班得分率
                                      }

                                  ]
                              },
                              {
                                  className: "3班", //班级名称
                                  score: 95,
                                  rubricArr: [{
                                      rubricName: "选择题-2", //题目名称
                                      schoolScore: 96.67, //校得分率
                                      classScore: 100 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-5", //题目名称
                                          schoolScore: 93.33, //校得分率
                                          classScore: 90 //班得分率
                                      }

                                  ]
                              },
                              {
                                  className: "4班", //班级名称
                                  score: 96.67,
                                  rubricArr: [{
                                      rubricName: "选择题-2", //题目名称
                                      schoolScore: 96.67, //校得分率
                                      classScore: 96.67 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-5", //题目名称
                                          schoolScore: 93.33, //校得分率
                                          classScore: 96.67 //班得分率
                                      }

                                  ]
                              },
                              {
                                  className: "5班", //班级名称
                                  score: 93.33,
                                  rubricArr: [{
                                      rubricName: "选择题-2", //题目名称
                                      schoolScore: 96.67, //校得分率
                                      classScore: 96.67 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-5", //题目名称
                                          schoolScore: 93.33, //校得分率
                                          classScore: 90 //班得分率
                                      }

                                  ]
                              },
                              {
                                  className: "6班", //班级名称
                                  score: 93.33,
                                  rubricArr: [{
                                      rubricName: "选择题-2", //题目名称
                                      schoolScore: 96.67, //校得分率
                                      classScore: 93.33 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-5", //题目名称
                                          schoolScore: 93.33, //校得分率
                                          classScore: 93.33 //班得分率
                                      }

                                  ]
                              },
                          ]
                      },
                      {
                          name: "数据收集与处理",
                          classArr: [{
                              className: "1班", //班级名称
                              score: 76.17,
                              rubricArr: [{
                                  rubricName: "选择题-3", //题目名称
                                  schoolScore: 86.67, //校得分率
                                  classScore: 83.33 //班得分率
                              },
                                  {
                                      rubricName: "选择题-9", //题目名称
                                      schoolScore: 63.33, //校得分率
                                      classScore: 70 //班得分率
                                  }
                              ]
                          },
                              {
                                  className: "2班", //班级名称
                                  score: 70,
                                  rubricArr: [{
                                      rubricName: "选择题-3", //题目名称
                                      schoolScore: 86.67, //校得分率
                                      classScore: 86.67 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-9", //题目名称
                                          schoolScore: 63.33, //校得分率
                                          classScore: 53.33 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "3班", //班级名称
                                  score: 65,
                                  rubricArr: [{
                                      rubricName: "选择题-3", //题目名称
                                      schoolScore: 86.67, //校得分率
                                      classScore: 76.67 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-9", //题目名称
                                          schoolScore: 63.33, //校得分率
                                          classScore: 53.33 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "4班", //班级名称
                                  score: 85,
                                  rubricArr: [{
                                      rubricName: "选择题-3", //题目名称
                                      schoolScore: 86.67, //校得分率
                                      classScore: 93.33 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-9", //题目名称
                                          schoolScore: 63.33, //校得分率
                                          classScore: 76.67 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "5班", //班级名称
                                  score: 75,
                                  rubricArr: [{
                                      rubricName: "选择题-3", //题目名称
                                      schoolScore: 86.67, //校得分率
                                      classScore: 90 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-9", //题目名称
                                          schoolScore: 63.33, //校得分率
                                          classScore: 60 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "6班", //班级名称
                                  score: 73.33,
                                  rubricArr: [{
                                      rubricName: "选择题-3", //题目名称
                                      schoolScore: 86.67, //校得分率
                                      classScore: 80 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-9", //题目名称
                                          schoolScore: 63.33, //校得分率
                                          classScore: 66.67 //班得分率
                                      }
                                  ]
                              },
                          ]
                      },
                      {
                          name: "反比例函数",
                          classArr: [{
                              className: "1班", //班级名称
                              score: 44.44,
                              rubricArr: [{
                                  rubricName: "选择题-8", //题目名称
                                  schoolScore: 40, //校得分率
                                  classScore: 43.33 //班得分率
                              },
                                  {
                                      rubricName: "选择题-10", //题目名称
                                      schoolScore: 36.67, //校得分率
                                      classScore: 26.67 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-23", //题目名称
                                      schoolScore: 56, //校得分率
                                      classScore: 52 //班得分率
                                  }
                              ]
                          },
                              {
                                  className: "2班", //班级名称
                                  score: 48.84,
                                  rubricArr: [{
                                      rubricName: "选择题-8", //题目名称
                                      schoolScore: 40, //校得分率
                                      classScore: 33.33 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-10", //题目名称
                                          schoolScore: 36.67, //校得分率
                                          classScore: 36.67 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-23", //题目名称
                                          schoolScore: 56, //校得分率
                                          classScore: 59 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "3班", //班级名称
                                  score: 43.24,
                                  rubricArr: [{
                                      rubricName: "选择题-8", //题目名称
                                      schoolScore: 40, //校得分率
                                      classScore: 36.67 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-10", //题目名称
                                          schoolScore: 36.67, //校得分率
                                          classScore: 40 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-23", //题目名称
                                          schoolScore: 56, //校得分率
                                          classScore: 50 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "4班", //班级名称
                                  score: 45.28,
                                  rubricArr: [{
                                      rubricName: "选择题-8", //题目名称
                                      schoolScore: 40, //校得分率
                                      classScore: 33.33 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-10", //题目名称
                                          schoolScore: 36.67, //校得分率
                                          classScore: 30 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-23", //题目名称
                                          schoolScore: 56, //校得分率
                                          classScore: 58 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "5班", //班级名称
                                  score: 51.84,
                                  rubricArr: [{
                                      rubricName: "选择题-8", //题目名称
                                      schoolScore: 40, //校得分率
                                      classScore: 56.67 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-10", //题目名称
                                          schoolScore: 36.67, //校得分率
                                          classScore: 56.67 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-23", //题目名称
                                          schoolScore: 56, //校得分率
                                          classScore: 59 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "6班", //班级名称
                                  score: 49.18,
                                  rubricArr: [{
                                      rubricName: "选择题-8", //题目名称
                                      schoolScore: 40, //校得分率
                                      classScore: 46.67 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-10", //题目名称
                                          schoolScore: 36.67, //校得分率
                                          classScore: 30 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-23", //题目名称
                                          schoolScore: 56, //校得分率
                                          classScore: 59 //班得分率
                                      }
                                  ]
                              },

                          ]
                      },
                      {
                          name: "二次函数",
                          classArr: [{
                              className: "1班", //班级名称
                              score: 67.33,
                              rubricArr: [{
                                  rubricName: "选择题-7", //题目名称
                                  schoolScore: 90, //校得分率
                                  classScore: 96.67 //班得分率
                              },
                                  {
                                      rubricName: "选择题-11", //题目名称
                                      schoolScore: 76.67, //校得分率
                                      classScore: 83.33 //班得分率
                                  },
                                  {
                                      rubricName: "填空题", //题目名称
                                      schoolScore: 58.89, //校得分率
                                      classScore: 62.78 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-20", //题目名称
                                      schoolScore: 81.25, //校得分率
                                      classScore: 68.89 //班得分率
                                  },
                                  {
                                      rubricName: "解答题-24", //题目名称
                                      schoolScore: 58, //校得分率
                                      classScore: 59 //班得分率
                                  }
                              ]
                          },
                              {
                                  className: "2班", //班级名称
                                  score: 67.74,
                                  rubricArr: [{
                                      rubricName: "选择题-7", //题目名称
                                      schoolScore: 90, //校得分率
                                      classScore: 90 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-11", //题目名称
                                          schoolScore: 76.67, //校得分率
                                          classScore: 46.67 //班得分率
                                      },
                                      {
                                          rubricName: "填空题", //题目名称
                                          schoolScore: 58.89, //校得分率
                                          classScore: 65.56 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-20", //题目名称
                                          schoolScore: 81.25, //校得分率
                                          classScore: 85 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-24", //题目名称
                                          schoolScore: 58, //校得分率
                                          classScore: 64 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "3班", //班级名称
                                  score: 58.7,
                                  rubricArr: [{
                                      rubricName: "选择题-7", //题目名称
                                      schoolScore: 90, //校得分率
                                      classScore: 80 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-11", //题目名称
                                          schoolScore: 76.67, //校得分率
                                          classScore: 63.33 //班得分率
                                      },
                                      {
                                          rubricName: "填空题", //题目名称
                                          schoolScore: 58.89, //校得分率
                                          classScore: 51.11 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-20", //题目名称
                                          schoolScore: 81.25, //校得分率
                                          classScore: 81.25 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-24", //题目名称
                                          schoolScore: 58, //校得分率
                                          classScore: 55 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "4班", //班级名称
                                  score: 66.78,
                                  rubricArr: [{
                                      rubricName: "选择题-7", //题目名称
                                      schoolScore: 90, //校得分率
                                      classScore: 90 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-11", //题目名称
                                          schoolScore: 76.67, //校得分率
                                          classScore: 66.67 //班得分率
                                      },
                                      {
                                          rubricName: "填空题", //题目名称
                                          schoolScore: 58.89, //校得分率
                                          classScore: 61.11 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-20", //题目名称
                                          schoolScore: 81.25, //校得分率
                                          classScore: 81.25 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-24", //题目名称
                                          schoolScore: 58, //校得分率
                                          classScore: 58 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "5班", //班级名称
                                  score: 61.52,
                                  rubricArr: [{
                                      rubricName: "选择题-7", //题目名称
                                      schoolScore: 90, //校得分率
                                      classScore: 93.33 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-11", //题目名称
                                          schoolScore: 76.67, //校得分率
                                          classScore: 53.67 //班得分率
                                      },
                                      {
                                          rubricName: "填空题", //题目名称
                                          schoolScore: 58.89, //校得分率
                                          classScore: 57.78 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-20", //题目名称
                                          schoolScore: 81.25, //校得分率
                                          classScore: 75 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-24", //题目名称
                                          schoolScore: 58, //校得分率
                                          classScore: 57 //班得分率
                                      }
                                  ]
                              },
                              {
                                  className: "6班", //班级名称
                                  score: 60.69,
                                  rubricArr: [{
                                      rubricName: "选择题-7", //题目名称
                                      schoolScore: 90, //校得分率
                                      classScore: 83.33 //班得分率
                                  },
                                      {
                                          rubricName: "选择题-11", //题目名称
                                          schoolScore: 76.67, //校得分率
                                          classScore: 60 //班得分率
                                      },
                                      {
                                          rubricName: "填空题", //题目名称
                                          schoolScore: 58.89, //校得分率
                                          classScore: 54.44 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-20", //题目名称
                                          schoolScore: 81.25, //校得分率
                                          classScore: 76.25 //班得分率
                                      },
                                      {
                                          rubricName: "解答题-24", //题目名称
                                          schoolScore: 58, //校得分率
                                          classScore: 55 //班得分率
                                      }
                                  ]
                              },

                          ]
                      }
                  ]
              },
              {
                  view: "ClassSyllable", //考察题目得分率
                  style: "m-r-0 m-t-1",

              }
          ]
      },
          {
              name: "教师评比",
              data: [{
                  view: "SchoolAverage", //平均分
                  title: "平均分对比",
                  style: "m-t-0",
                  judge: "school-single-teacher", //组件的判断
                  data: {
                      college: 73.96, //学校平均分
                      classArray: [{
                          name: "陈强", //教师名称
                          score: 76.68, //分数
                      },
                          {
                              name: "陈冰", //教师名称
                              score: 82.97, //分数
                          }, {
                              name: "徐玉宇", //教师名称
                              score: 75.18, //分数
                          }, {
                              name: "王玉华", //教师名称
                              score: 68.43, //分数
                          },
                      ]
                  }
              },
                  {
                      view: "TeachersTasks", //教师任务达标数
                      title: "教师任务达标数",
                      judge: "school-single-teacher", //组件的判断
                      data: [{
                          name: "陈强", //教师名称
                          data: [{
                              rank: "1-20", //名次范围
                              score: "[114.0,120.0]", //分数范围
                              tasks: 5, //任务数
                              people: 5, //达标数
                              gap: 0 //差距
                          },
                              {
                                  rank: "1-50", //名次范围
                                  score: "[100.0,120.0]", //分数范围
                                  tasks: 14, //任务数
                                  people: 16, //达标数
                                  gap: 2 //差距
                              },
                              {
                                  rank: "1-100", //名次范围
                                  score: "[77.0,120.0]", //分数范围
                                  tasks: 36, //任务数
                                  people: 35, //达标数
                                  gap: -1 //差距
                              }
                          ]
                      }, {
                          name: "陈冰", //教师名称
                          data: [{
                              rank: "1-20", //名次范围
                              score: "[114.0,120.0]", //分数范围
                              tasks: 6, //任务数
                              people: 8, //达标数
                              gap: 2 //差距
                          },
                              {
                                  rank: "1-50", //名次范围
                                  score: "[100.0,120.0]", //分数范围
                                  tasks: 16, //任务数
                                  people: 14, //达标数
                                  gap: -2 //差距
                              },
                              {
                                  rank: "1-100", //名次范围
                                  score: "[77.0,120.0]", //分数范围
                                  tasks: 32, //任务数
                                  people: 28, //达标数
                                  gap: -4 //差距
                              }
                          ]
                      }, {
                          name: "徐玉宇", //教师名称
                          data: [{
                              rank: "1-20", //名次范围
                              score: "[114.0,120.0]", //分数范围
                              tasks: 6, //任务数
                              people: 4, //达标数
                              gap: -2 //差距
                          },
                              {
                                  rank: "1-50", //名次范围
                                  score: "[100.0,120.0]", //分数范围
                                  tasks: 12, //任务数
                                  people: 11, //达标数
                                  gap: -1 //差距
                              },
                              {
                                  rank: "1-100", //名次范围
                                  score: "[77.0,120.0]", //分数范围
                                  tasks: 20, //任务数
                                  people: 23, //达标数
                                  gap: 3 //差距
                              }
                          ]
                      }, {
                          name: "陈强", //教师名称
                          data: [{
                              rank: "1-20", //名次范围
                              score: "[114.0,120.0]", //分数范围
                              tasks: 3, //任务数
                              people: 3, //达标数
                              gap: 0 //差距
                          },
                              {
                                  rank: "1-50", //名次范围
                                  score: "[100.0,120.0]", //分数范围
                                  tasks: 8, //任务数
                                  people: 9, //达标数
                                  gap: 1 //差距
                              },
                              {
                                  rank: "1-100", //名次范围
                                  score: "[77.0,120.0]", //分数范围
                                  tasks: 16, //任务数
                                  people: 18, //达标数
                                  gap: 2 //差距
                              }
                          ]
                      }],
                  }, {
                      title: "教师任务达标情况趋势变化",
                      view: "OnlineRate",
                      style: "m-r-0 m-t-0",
                      judge: "school-single-teacher", //组件的判断
                      data: [{
                          name: "前20名",
                          data: [{
                              name: "陈强", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 3, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 2, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 0, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: -1, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 0, //上线率
                              }],
                          }, {
                              name: "陈冰", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 2, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 2, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 2, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 2, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 2, //上线率
                              }],
                          }, {
                              name: "徐玉宇", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: -4, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: -4, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: -3, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: -3, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: -2, //上线率
                              }],
                          }, {
                              name: "王玉华", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: -1, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 0, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 1, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 2, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 0, //上线率
                              }],
                          }, ]
                      }, {
                          name: "前50名",
                          data: [{
                              name: "陈强", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 0, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 1, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 2, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 3, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 2, //上线率
                              }],
                          }, {
                              name: "陈冰", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: -1, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: -2, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: -1, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 0, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: -2, //上线率
                              }],
                          }, {
                              name: "徐玉宇", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: -2, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: -2, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: -1, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: -2, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: -1, //上线率
                              }],
                          }, {
                              name: "王玉华", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 3, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 3, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 0, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: -1, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 1, //上线率
                              }],
                          }, ]
                      }, {
                          name: "前100名",
                          data: [{
                              name: "陈强", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: -1, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: -2, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: -2, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 1, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: -1, //上线率
                              }],
                          }, {
                              name: "陈冰", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: -4, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: -6, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: -5, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: -5, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: -4, //上线率
                              }],
                          }, {
                              name: "徐玉宇", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 2, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 4, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 4, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 2, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 3, //上线率
                              }],
                          }, {
                              name: "王玉华", //教师名称
                              rateArr: [{
                                  time: "18.02.16", //时间
                                  rate: 3, //上线率
                              }, {
                                  time: "18.05.04", //时间
                                  rate: 4, //上线率
                              }, {
                                  time: "18.06.26", //时间
                                  rate: 3, //上线率
                              }, {
                                  time: "18.10.24", //时间
                                  rate: 2, //上线率
                              }, {
                                  time: "19.01.18", //时间
                                  rate: 2, //上线率
                              }],
                          }]
                      }]
                  }, {
                      view: "SuperaverageTrend", //教师教学质量趋势变化
                      title: "任课教师超均率趋势变化",
                      judge: "school-single-teacher", //组件的判断
                      style: "m-r-1",
                      data: [{
                          name: "陈强", //教师名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: 1.16, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: 1.23, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: 1.87, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: 1.48, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: 0.03, //超均率
                          }], //超均率
                      }, {
                          name: "陈冰", //教师名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: 1.49, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: 1.03, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: 1.01, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: -0.18, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: -0.14, //超均率
                          }], //超均率
                      }, {
                          name: "徐玉宇", //教师名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: -2.32, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: -2.08, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: -1.09, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: 0.65, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: 0.13, //超均率
                          }], //超均率
                      }, {
                          name: "王玉华", //教师名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: -0.02, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: -1.34, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: -1.08, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: -1.09, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: -0.07, //超均率
                          }], //超均率
                      }]
                  },
                  {

                      view: "KnowledgeProportion", //教师量化得分
                      title: "教师量化得分",
                      style: "m-t-1",
                      judge: "school-single-teacher", //组件的判断
                      data: [{
                          name: "陈强", //教师姓名
                          scale: 95.26,
                      }, {
                          name: "陈冰", //教师姓名
                          scale: 84.32,
                      }, {
                          name: "徐玉宇", //教师姓名
                          scale: 80.14,
                      }, {
                          name: "王玉华", //教师姓名
                          scale: 76.03,
                      }]
                  },
                  {
                      view: "TeacherOnlineRate", //教师教学质量趋势变化
                      title: "教师量化得分变化趋势",
                      style: "m-t-1 m-r-0",
                      judge: "school-single-teacher", //组件的判断
                      data: [{
                          name: "陈强", //教师名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: 99.32, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: 94.33, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: 92.62, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: 94.77, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: 95.26, //超均率
                          }], //超均率
                      }, {
                          name: "陈冰", //教师名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: 88.36, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: 89.04, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: 87.88, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: 83.62, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: 79.32, //超均率
                          }], //超均率
                      }, {
                          name: "徐玉宇", //教师名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: 72.60, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: 76.71, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: 78.77, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: 79.14, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: 80.14, //超均率
                          }], //超均率
                      }, {
                          name: "王玉华", //教师名称
                          //超均率数组
                          rateArr: [{
                              time: "18.02.16", //时间
                              rate: 69.18, //超均率
                          }, {
                              time: "18.05.04", //时间
                              rate: 68.39, //超均率
                          }, {
                              time: "18.06.26", //时间
                              rate: 70.18, //超均率
                          }, {
                              time: "18.10.24", //时间
                              rate: 72.88, //超均率
                          }, {
                              time: "19.01.18", //时间
                              rate: 76.03, //超均率
                          }], //超均率
                      }]
                  }
              ]
          }
      ]
  }
}
