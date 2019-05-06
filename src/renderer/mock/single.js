export default {
    data: {
        msg: "",
        code: 200,
        "data": [{
            name: "学校评比",
            data: [{
                view: "Summarize", //概括
                style: "", //样式
                title: "考试概况",
                data: {
                    examName: "第一学期期末考试", //考试名称
                    schoolNum: 5, //学校数
                    peopleNum: 2659, //人数
                    full: 120, //满分
                    average: 66.42, //平均分
                    median: 71.5, //中位数
                    high: 115.5, //最高分
                    lowest: 10, //最低分
                    style: 0, //根据这个字段进行组件不同样式的更改
                }
            },
                {
                    view: "GradeStandard", //区域等级标准
                    style: "",
                    title: "区域等级标准",
                    data: [{
                        grade: "A", //等级
                        y: 15.13, //比例
                        color: "#FFA843", //颜色
                        scope: "[82.5 , 120]", //人数
                    },
                        {
                            grade: "B", //等级
                            y: 20.53, //比例
                            color: "#37C3C3", //颜色
                            scope: "[74.5 , 82.5)", //范围
                        },
                        {
                            grade: "C", //等级
                            y: 30.22, //比例
                            color: "#0478FD", //颜色
                            scope: "[63.0 , 74.5)", //范围
                        },
                        {
                            grade: "D", //等级
                            y: 20.32, //比例
                            color: "#5A66F7", //颜色
                            scope: "[50.0 , 63.0)", //范围
                        }, {
                            grade: "E", //等级
                            y: 13.8, //比例
                            color: "#DD4992", //颜色
                            scope: "[0 , 50.0)", //范围
                        }
                    ]
                },
                {
                    view: "gradeDivision", //学校等级划分
                    style: "",
                    title: "学校等级划分",
                    data: [{
                        name: 'A',
                        color: "#0478FD",
                        data: [{
                            schoolName: "实验中学", //学校名称
                            scale: 27.2 //比例
                        },
                            {
                                schoolName: "一中", //学校名称
                                scale: 22.4 //比例
                            },
                            {
                                schoolName: "二中", //学校名称
                                scale: 14.5 //比例
                            },
                            {
                                schoolName: "三中", //学校名称
                                scale: 4.2 //比例
                            }, {
                                schoolName: "五中", //学校名称
                                scale: 4.7 //比例
                            }
                        ],
                        stack: 'gradeDivision' // stack 值相同的为同一组
                    }, {
                        name: 'B',
                        color: "#049FFC",
                        data: [{
                            schoolName: "实验中学", //学校名称
                            scale: 23.1 //比例
                        },
                            {
                                schoolName: "一中", //学校名称
                                scale: 30.2 //比例
                            },
                            {
                                schoolName: "二中", //学校名称
                                scale: 20.3 //比例
                            },
                            {
                                schoolName: "三中", //学校名称
                                scale: 6.7 //比例
                            }, {
                                schoolName: "五中", //学校名称
                                scale: 7.8 //比例
                            }
                        ],
                        stack: 'gradeDivision' // stack 值相同的为同一组
                    }, {
                        name: 'C',
                        color: "#08E0FC",
                        data: [{
                            schoolName: "实验中学", //学校名称
                            scale: 35.9 //比例
                        },
                            {
                                schoolName: "一中", //学校名称
                                scale: 32.5 //比例
                            },
                            {
                                schoolName: "二中", //学校名称
                                scale: 31.4 //比例
                            },
                            {
                                schoolName: "三中", //学校名称
                                scale: 26.1 //比例
                            }, {
                                schoolName: "五中", //学校名称
                                scale: 27.6 //比例
                            }
                        ],
                        stack: 'gradeDivision' // stack 值相同的为同一组
                    }, {
                        name: 'D',
                        color: "#67E5F6",
                        data: [{
                            schoolName: "实验中学", //学校名称
                            scale: 11.2 //比例
                        },
                            {
                                schoolName: "一中", //学校名称
                                scale: 12.7 //比例
                            },
                            {
                                schoolName: "二中", //学校名称
                                scale: 21.1 //比例
                            },
                            {
                                schoolName: "三中", //学校名称
                                scale: 33.6 //比例
                            }, {
                                schoolName: "五中", //学校名称
                                scale: 27.1 //比例
                            }
                        ],
                        stack: 'gradeDivision' // stack 值相同的为同一组
                    }, {
                        name: 'E',
                        color: "#A5F4FF",
                        data: [{
                            schoolName: "实验中学", //学校名称
                            scale: 2.6 //比例
                        },
                            {
                                schoolName: "一中", //学校名称
                                scale: 2.2 //比例
                            },
                            {
                                schoolName: "二中", //学校名称
                                scale: 12.7 //比例
                            },
                            {
                                schoolName: "三中", //学校名称
                                scale: 29.4 //比例
                            }, {
                                schoolName: "五中", //学校名称
                                scale: 32.8 //比例
                            }
                        ],
                        stack: 'gradeDivision' // stack 值相同的为同一组
                    }]
                },
                {
                    view: "GradeChange", //学校等级变化
                    style: "m-r-0",
                    title: "学校等级变化",
                    data: [{
                        name: 'A',

                        data: [{
                            schoolName: "实验中学", //学校名称
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: 22.2, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: 17.2, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: 14.3, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: 22.8, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: 27.2, //超均率
                            }], //超均率
                        },
                            {
                                schoolName: "一中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 23.7, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 28.5, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 29.5, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 25, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 22.4, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "二中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 15.3, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 13.5, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 12.1, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 13.3, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 14.5, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "三中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 3.4, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 0.8, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 3.4, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 3.3, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 4.2, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "五中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 2.4 //均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 2.1, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 5.1, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 4.1, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 4.7, //超均率
                                }], //超均率
                            }
                        ]
                    }, {
                        name: 'B',

                        data: [{
                            schoolName: "实验中学", //学校名称
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: 28.5, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: 34.3, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: 31, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: 32.5, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: 23.1, //超均率
                            }], //超均率
                        },
                            {
                                schoolName: "一中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 32.3, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 33.3, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 33, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 31.4, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 30.2, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "二中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 18.6, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 18, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 17.9, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 20.1, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 20.3, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "三中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 7.6, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 7.5, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 5.8, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 10.9, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 6.7, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "五中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 11.7 //均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 5.1, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 6.1, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 4.1, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 7.8, //超均率
                                }], //超均率
                            }
                        ]
                    }, {
                        name: 'C',

                        data: [{
                            schoolName: "实验中学", //学校名称
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: 22.2, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: 17.2, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: 38, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: 31, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: 35.9, //超均率
                            }], //超均率
                        },
                            {
                                schoolName: "一中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 23.7, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 28.5, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 26.6, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 29, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 31.9, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "二中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 32.7, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 35.3, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 34, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 31.5, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 26.1, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "三中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 25.4, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 30, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 37, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 30, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 26.1, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "五中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 16.9 //均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 30.7, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 28.9, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 31.3, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 27.6, //超均率
                                }], //超均率
                            }
                        ]
                    }, {
                        name: 'D',

                        data: [{
                            schoolName: "实验中学", //学校名称
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: 15.7, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: 14.7, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: 14.2, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: 11.2, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: 11.2, //超均率
                            }], //超均率
                        },
                            {
                                schoolName: "一中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 10.1, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 8, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 9.4, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 10.6, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 12.7, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "二中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 22, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 21.8, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 23.3, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 22.2, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 21.1, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "三中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 39, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 35, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 33.6, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 37.5, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 33.6, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "五中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 26.8 //均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 32.9, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 32, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 30.2, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 27.1, //超均率
                                }], //超均率
                            }
                        ]
                    }, {
                        name: 'E',

                        data: [{
                            schoolName: "实验中学", //学校名称
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: 2.5, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: 3.9, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: 2.5, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: 2.5, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: 2.6, //超均率
                            }], //超均率
                        },
                            {
                                schoolName: "一中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 2.2, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 1.2, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 1.5, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 1.2, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 2, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "二中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 11.4, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 11.4, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 12.7, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 12.9, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 12.7, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "三中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 24.6, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 26.7, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 20.2, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 18.3, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 29.4, //超均率
                                }], //超均率
                            },
                            {
                                schoolName: "五中", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 32.2 //均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 29.2, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 27.9, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 30.3, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 21.8, //超均率
                                }], //超均率
                            }
                        ]
                    }]
                },
                {
                    view: "SchoolAverage", //学校平均分
                    style: "m-r-1", //样式
                    title: "学校平均分",
                    data: {
                        college: 66.42,
                        schoolArray: [{
                            schoolName: "实验中学", //学校名称
                            score: 73.7, //分数
                        },
                            {
                                schoolName: "一中", //学校名称
                                score: 73.96, //分数
                            }, {
                                schoolName: "二中", //学校名称
                                score: 66.3, //分数
                            }, {
                                schoolName: "三中", //学校名称
                                score: 56.48, //分数
                            }, {
                                schoolName: "五中", //学校名称
                                score: 57.38, //分数
                            }
                        ]
                    }
                },
                {
                    view: "SuperaverageRateTable", //与上次考试相比超均率变化
                    style: "", //样式
                    title: "与上次考试相比——学校超均率变化",
                    data: [{
                        name: "实验中学", //学校名称
                        superaverageRate: -0.96, //与上次考试相比超均率变化
                        thisSuperaverage: 10.96, //本次超均率变化
                        lastSuperaverage: 11.92, //上次超均率变化
                        ranking: 0, //名次变化
                        thisRanking: 2, //本次名次变化
                        lastRanking: 2, //上次名次变化
                    }, {
                        name: "一中", //学校名称
                        superaverageRate: -2.58, //与上次考试相比超均率变化
                        thisSuperaverage: 11.35, //本次超均率变化
                        lastSuperaverage: 13.93, //上次超均率变化
                        ranking: 0, //名次变化
                        thisRanking: 1, //本次名次变化
                        lastRanking: 1, //上次名次变化
                    },
                        {
                            name: "二中", //学校名称
                            superaverageRate: 1.56, //与上次考试相比超均率变化
                            thisSuperaverage: -0.18, //本次超均率变化
                            lastSuperaverage: -1.74, //上次超均率变化
                            ranking: 0, //名次变化
                            thisRanking: 3, //本次名次变化
                            lastRanking: 3, //上次名次变化
                        },
                        {
                            name: "三中", //学校名称
                            superaverageRate: -3.12, //与上次考试相比超均率变化
                            thisSuperaverage: -13.61, //本次超均率变化
                            lastSuperaverage: -10.49, //上次超均率变化
                            ranking: 0, //名次变化
                            thisRanking: 4, //本次名次变化
                            lastRanking: 4, //上次名次变化
                        }, {
                            name: "五中", //学校名称
                            superaverageRate: 2.78, //与上次考试相比超均率变化
                            thisSuperaverage: -14.97, //本次超均率变化
                            lastSuperaverage: -17.75, //上次超均率变化
                            ranking: 0, //名次变化
                            thisRanking: 5, //本次名次变化
                            lastRanking: 5, //上次名次变化
                        }
                    ]
                },

                {
                    view: "SuperaverageTrend", //学校超均率变化趋势
                    title: "学校超均率趋势变化",
                    data: [{
                        name: "实验中学", //学校名称
                        //超均率数组
                        rateArr: [{
                            time: "18.02.16", //时间
                            rate: 7.78, //超均率
                        }, {
                            time: "18.05.04", //时间
                            rate: 8.57, //超均率
                        }, {
                            time: "18.06.26", //时间
                            rate: 7.01, //超均率
                        }, {
                            time: "18.10.24", //时间
                            rate: 11.92, //超均率
                        }, {
                            time: "19.01.18", //时间
                            rate: 10.96, //超均率
                        }], //超均率
                    },
                        {
                            name: "一中", //学校名称
                            //超均率数组
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: 9.51, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: 13.97, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: 12.4, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: 13.93, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: 11.35, //超均率
                            }], //超均率
                        },
                        {
                            name: "二中", //学校名称
                            //超均率数组
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: -0.04, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: -1.27, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: -2.8, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: -1.74, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: -0.18, //超均率
                            }], //超均率
                        },
                        {
                            name: "三中", //学校名称
                            //超均率数组
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: -10.94, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: -15.21, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: -10, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: -10.49, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: -13.61, //超均率
                            }], //超均率
                        },
                        {
                            name: "五中", //学校名称
                            //超均率数组
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: -13.66, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: -17.25, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: -12.97, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: -17.75, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: -14.97, //超均率
                            }], //超均率
                        }
                    ]
                },
            ],
        }, {
            name: "试卷质量测评",
            data: [{
                view: "Summarize", //概括
                style: "", //样式
                title: "考试概况",
                data: {
                    examName: "第一学期期末考试", //考试名称
                    sbjectiveObjectiveRatio: "7:3", //主客观分值对比
                    schoolNum: 5, //学校数
                    peopleNum: 2659, //人数
                    questionsNumd: 25, //试题数量
                    full: 120, //满分
                    difficulty: 0.45, //难度
                    difficultyInfo: "适中", //难度的描述
                    division: 0.3, //区分度
                    divisionInfo: "优秀", //区分度的描述
                    reliability: 0.98, //信度
                    reliabilityInfo: "优秀", //信度的描述
                    style: 1, //根据这个字段进行组件不同样式的更改
                }
            }, {
                view: "SubjectiveAnalysis", //主观题分析
                style: "",
                title: "主观题分析",
                //主观题的数组
                data: [{
                    titleNum: "13-18", //题号
                    difficulty: "难题", //难易程度
                    difficultyNum: 0.45, //难度
                    differentiation: 0.73, //区分度
                    full: 18, //满分
                    average: 8.09, //平均分
                    scoringAverage: 44.94, //得分率
                    standardDeviation: 5.82, //标准差
                    positive: 8.52, //正答率
                    //试题特征曲线
                    data: [0, 0, 0.06, 0.11, 0.13, 0.16, 0.2, 0.26, 0.31, 0.68, 0.82],
                    sureInfo: ["学生对二次函数解析式的求法以及最大面积问题掌握不错"], //值得肯定的地方
                    lessThan: ["在第二问求最大面积时，有大批的学生只求出了PM的最大值，对于问什么PM最大时面积最大没有做出说明。"], //不足以及原因
                    propose: ["加强训练量，.重视对基础知识的掌握和应用。", "规范答题思路。"], //建议
                },
                    {
                        titleNum: "19", //题号
                        difficulty: "较难题", //难易程度
                        difficultyNum: 0.63, //难度
                        differentiation: 0.81, //区分度
                        full: 8, //满分
                        average: 5.04, //平均分
                        scoringAverage: 63, //得分率
                        standardDeviation: 3.29, //标准差
                        positive: 48.01, //正答率
                        //试题特征曲线
                        data: [0, 0, 0.09, 0.25, 0.36, 0.46, 0.65, 0.75, 0.83, 0.9, 0.99],
                        sureInfo: ["绝大部分学生掌握的很好，思路清晰，步骤完整，书写规范，答案正确。"], //值得肯定的地方
                        lessThan: ["卷面乱涂乱划现象严重不按要求做题，第一题要求用配方法，很多同学使用其他方法，导致本题不得分。"], //不足以及原因
                        propose: ["作为一道基础的解方程的题目，正确率不高，值得我们深思。 "], //建议
                    },

                    {
                        titleNum: "20", //题号
                        difficulty: "较难题", //难易程度
                        difficultyNum: 0.60, //难度
                        differentiation: 0.85, //区分度
                        full: 8, //满分
                        average: 4.81, //平均分
                        scoringAverage: 60.13, //得分率
                        standardDeviation: 3.18, //标准差
                        positive: 37.02, //正答率
                        //试题特征曲线
                        data: [0, 0, 0.04, 0.19, 0.37, 0.49, 0.72, 0.81, 0.89, 0.94, 0.97],
                        sureInfo: ["学生能用解方程组或由图象法求得两图象交点坐标，解方程组掌握较好"], //值得肯定的地方
                        lessThan: ["利用数形结合的方法直接写出不等式的解集部分学生掌握不牢固，书写不规范。"], //不足以及原因
                        propose: ["进一步加强数形结合思想的巩固对于利用图像求不等式的解集知识点加强练习。"], //建议
                    },
                    {
                        titleNum: "21", //题号
                        difficulty: "难题", //难易程度
                        difficultyNum: 0.57, //难度
                        differentiation: 0.7, //区分度
                        full: 9, //满分
                        average: 5.17, //平均分
                        scoringAverage: 57.44, //得分率
                        standardDeviation: 3.25, //标准差
                        positive: 22.63, //正答率
                        //试题特征曲线
                        data: [0, 0.02, 0.14, 0.31, 0.44, 0.52, 0.63, 0.73, 0.81, 0.86, 0.93],
                        sureInfo: ["书写认真，字迹清晰", "思路清楚，步骤调理", "空题率较低"], //值得肯定的地方
                        lessThan: ["字迹潦草，不在规定区域答题。", "运算能力有待提高 ", "答题过程不完整，缺少必要的步骤支撑"], //不足以及原因
                        propose: ["在教学中，狠抓双基，加强示范，训练。", "提高数学阅读能力、理解力。"], //建议
                    },
                    {
                        titleNum: "22", //题号
                        difficulty: "难题", //难易程度
                        difficultyNum: 0.48, //难度
                        differentiation: 0.92, //区分度
                        full: 9, //满分
                        average: 4.35, //平均分
                        scoringAverage: 48.33, //得分率
                        standardDeviation: 3.98, //标准差
                        positive: 27.45, //正答率
                        //试题特征曲线
                        data: [0, 0, 0.01, 0.03, 0.09, 0.22, 0.39, 0.71, 0.86, 0.93, 0.98],
                        sureInfo: ["大部分同学对坡度、三角比等概念掌握地比较扎实；过程条理，步骤规范，基本运算正确。"], //值得肯定的地方
                        lessThan: ["没有按要求取近似值，少部分同学书写潦草，过程太简单，缺少逻辑关系。"], //不足以及原因
                        propose: ["在教学的过程中，应注意让学生把问题的求解过程落到实处，注重对学生解题的规范性的培养。"], //建议
                    },
                    {
                        titleNum: "23", //题号
                        difficulty: "难题", //难易程度
                        difficultyNum: 0.34, //难度
                        differentiation: 0.81, //区分度
                        full: 10, //满分
                        average: 4.32, //平均分
                        scoringAverage: 43.2, //得分率
                        standardDeviation: 3.87, //标准差
                        positive: 11.68, //正答率
                        //试题特征曲线
                        data: [0, 0, 0.01, 0.03, 0.12, 0.25, 0.42, 0.59, 0.75, 0.82, 0.92],
                        sureInfo: ["学生做此类题时思路清晰", "空题的较少，多数学生做的较好，得分率较高"], //值得肯定的地方
                        lessThan: ["待定系数法步骤不规范。", "取值范围不准确或忘写"], //不足以及原因
                        propose: ["进一步规范过程", "加强审题训练，找准题眼", "强调增减性应用时的说明。"], //建议
                    },
                    {
                        titleNum: "24", //题号
                        difficulty: "难题", //难易程度
                        difficultyNum: 0.29, //难度
                        differentiation: 0.65, //区分度
                        full: 10, //满分
                        average: 4.54, //平均分
                        scoringAverage: 45.44, //得分率
                        standardDeviation: 3.58, //标准差
                        positive: 14.48, //正答率
                        //试题特征曲线
                        data: [0, 0, 0.02, 0.1, 0.11, 0.27, 0.5, 0.59, 0.64, 0.86, 0.91],
                        sureInfo: ["圆的切线的判定掌握的好，使用规范"], //值得肯定的地方
                        lessThan: ["相似的对应关系不清晰；数字角的标注不规范。"], //不足以及原因
                        propose: ["加强对定理的使用规范的联系；", "关注几何语言细节。"], //建议
                    }

                ]
            }, {
                view: "KnowledgeProportion", //考察知识点分值占比
                style: "m-t-1",
                title: "考察知识点分值占比",
                data: [{
                    name: "圆",
                    scale: 28.33
                }, {
                    name: "二次函数",
                    scale: 22.5
                }, {
                    name: "图形的相似",
                    scale: 17.5
                }, {
                    name: "概率",
                    scale: 8
                }, {
                    name: "数据收集与处理",
                    scale: 6.17
                }, {
                    name: "反比例函数",
                    scale: 17.5
                }]
            }, {
                view: "Capacity", //考察能力分值占比
                title: "考察能力分值占比",
                style: "m-t-1",
                data: [{
                    name: "数形结合",
                    scale: 45
                }, {
                    name: "推理能力",
                    scale: 13.33
                }, {
                    name: "运算能力",
                    scale: 29.17
                }, {
                    name: "空间观念",
                    scale: 20.5
                }, {
                    name: "思想方法",
                    scale: 10.8
                }, {
                    name: "创新意识",
                    scale: 17.5
                }]
            }, {
                view: "KnowledgePointScore", //考察知识点得分率
                style: "m-t-1",
                title: "考察知识点得分率",
                data: [{
                    name: "圆",
                    scale: 60.94
                }, {
                    name: "二次函数",
                    scale: 50.89
                }, {
                    name: "图形的相似",
                    scale: 69.18
                }, {
                    name: "概率",
                    scale: 82.08
                }, {
                    name: "数据收集与处理",
                    scale: 70.44
                }, {
                    name: "反比例函数",
                    scale: 52.50
                }]
            }, {
                view: "CapacityScore", //考察能力得分率
                style: "m-t-1 m-r-0",
                title: "考察能力得分率",
                data: [{
                    name: "数形结合",
                    scale: 62.59
                }, {
                    name: "推理能力",
                    scale: 47.33
                }, {
                    name: "运算能力",
                    scale: 49.94
                }, {
                    name: "空间观念",
                    scale: 50.41
                }, {
                    name: "思想方法",
                    scale: 46.82
                }, {
                    name: "创新意识",
                    scale: 39.98
                }]
            }]
        },
            {
                name: "科目突出教师",
                data: [{
                    view: "TeacherKnowledgeScore", //考察知识点得分率
                    style: "",
                    title: "知识点得分率",
                    data: [{
                        name: "圆",
                        scale: 49.94
                    },
                        {
                            name: "二次函数",
                            scale: 61.89
                        }, {
                            name: "图形的相似",
                            scale: 50
                        }, {
                            name: "概率",
                            scale: 66.08
                        }, {
                            name: "数据收集与处理",
                            scale: 57.44
                        },
                        {
                            name: "反比例函数",
                            scale: 52.5
                        }

                    ]
                },
                    {
                        view: "TeacherScoringAverage", //知识点得分率前五名
                        style: "",
                        title: "得分率前五名教师",
                        data: [{
                            knowledgeName: "圆", //知识点名称
                            teacherData: [{
                                name: "赵燕", //教师姓名
                                thisTime: 35.64, //本次得分率
                                lastTime: 29.38, //上次得分率
                            },
                                {
                                    name: "宫惠", //教师姓名
                                    thisTime: 37.64, //本次得分率
                                    lastTime: 31.85, //上次得分率
                                }, {
                                    name: "王志恩", //教师姓名
                                    thisTime: 36.6, //本次得分率
                                    lastTime: 30.38, //上次得分率
                                }, {
                                    name: "陈莹", //教师姓名
                                    thisTime: 42.6, //本次得分率
                                    lastTime: 46.92, //上次得分率
                                }, {
                                    name: "李超", //教师姓名
                                    thisTime: 50.84, //本次得分率
                                    lastTime: 47.39, //上次得分率
                                }, {
                                    name: "吕文新", //教师姓名
                                    thisTime: 51.64, //本次得分率
                                    lastTime: 48.54, //上次得分率
                                }, {
                                    name: "李玉浩", //教师姓名
                                    thisTime: 38.64, //本次得分率
                                    lastTime: 32.38, //上次得分率
                                }
                            ]
                        },
                            {
                                knowledgeName: "二次函数", //知识点名称
                                teacherData: [{
                                    name: "赵燕", //教师姓名
                                    thisTime: 51.37, //本次得分率
                                    lastTime: 43.66, //上次得分率
                                },
                                    {
                                        name: "宫惠", //教师姓名
                                        thisTime: 32.89, //本次得分率
                                        lastTime: 36.6, //上次得分率
                                    }, {
                                        name: "王志恩", //教师姓名
                                        thisTime: 30.72, //本次得分率
                                        lastTime: 30.38, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 23.65, //本次得分率
                                        lastTime: 71.28, //上次得分率
                                    }, {
                                        name: "李超", //教师姓名
                                        thisTime: 54.47, //本次得分率
                                        lastTime: 49.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 78.65, //本次得分率
                                        lastTime: 473.28, //上次得分率
                                    }, {
                                        name: "李玉浩", //教师姓名
                                        thisTime: 61.37, //本次得分率
                                        lastTime: 58.81, //上次得分率
                                    }
                                ]
                            },
                            {
                                knowledgeName: "反比例函数", //知识点名称
                                teacherData: [{
                                    name: "赵燕", //教师姓名
                                    thisTime: 29.72, //次得分率
                                    lastTime: 29.38, //上次得分率
                                },
                                    {
                                        name: "宫惠", //教师姓名
                                        thisTime: 30.72, //次得分率
                                        lastTime: 30.38, //上次得分率
                                    }, {
                                        name: "王志恩", //教师姓名
                                        thisTime: 41.26, //次得分率
                                        lastTime: 46.38, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 42.26, //本次得分率
                                        lastTime: 47.38, //上次得分率
                                    }, {
                                        name: "李超", //教师姓名
                                        thisTime: 59.83, //本次得分率
                                        lastTime: 42.6, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 51.64, //本次得分率
                                        lastTime: 48.54, //上次得分率
                                    }, {
                                        name: "李玉浩", //教师姓名
                                        thisTime: 62.83, //本次得分率
                                        lastTime: 37.64, //上次得分率
                                    }
                                ]
                            },
                            {
                                knowledgeName: "图形的相似", //知识点名称
                                teacherData: [{
                                    name: "赵燕", //教师姓名
                                    thisTime: 45.34, //本次得分率
                                    lastTime: 60.28, //上次得分率
                                },
                                    {
                                        name: "宫惠", //教师姓名
                                        thisTime: 54.22, //本次得分率
                                        lastTime: 28.66, //上次得分率
                                    }, {
                                        name: "王志恩", //教师姓名
                                        thisTime: 40.5, //本次得分率
                                        lastTime: 45.6, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 48.8, //本次得分率
                                        lastTime: 46.9, //上次得分率
                                    }, {
                                        name: "李超", //教师姓名
                                        thisTime: 50.84, //本次得分率
                                        lastTime: 42.36, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 55.67, //本次得分率
                                        lastTime: 47.54, //上次得分率
                                    }, {
                                        name: "李玉浩", //教师姓名
                                        thisTime: 48.64, //本次得分率
                                        lastTime: 32.38, //上次得分率
                                    }
                                ]
                            }, {
                                knowledgeName: "数据收集与处理", //知识点名称
                                teacherData: [{
                                    name: "赵燕", //教师姓名
                                    thisTime: 52.63, //本次得分率
                                    lastTime: 35.45, //上次得分率
                                },
                                    {
                                        name: "宫惠", //教师姓名
                                        thisTime: 57.89, //本次得分率
                                        lastTime: 41.85, //上次得分率
                                    }, {
                                        name: "王志恩", //教师姓名
                                        thisTime: 60.5, //本次得分率
                                        lastTime: 40.38, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 52.6, //本次得分率
                                        lastTime: 56.92, //上次得分率
                                    }, {
                                        name: "李超", //教师姓名
                                        thisTime: 55.84, //本次得分率
                                        lastTime: 49.39, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 51.64, //本次得分率
                                        lastTime: 58.54, //上次得分率
                                    }, {
                                        name: "李玉浩", //教师姓名
                                        thisTime: 58.64, //本次得分率
                                        lastTime: 42.38, //上次得分率
                                    }
                                ]
                            }, {
                                knowledgeName: "概率", //知识点名称
                                teacherData: [{
                                    name: "赵燕", //教师姓名
                                    thisTime: 67.64, //本次得分率
                                    lastTime: 59.38, //上次得分率
                                },
                                    {
                                        name: "宫惠", //教师姓名
                                        thisTime: 70.34, //本次得分率
                                        lastTime: 45.85, //上次得分率
                                    }, {
                                        name: "王志恩", //教师姓名
                                        thisTime: 63.6, //本次得分率
                                        lastTime: 70.38, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 69.6, //本次得分率
                                        lastTime: 76.92, //上次得分率
                                    }, {
                                        name: "李超", //教师姓名
                                        thisTime: 60.84, //本次得分率
                                        lastTime: 47.39, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 69.64, //本次得分率
                                        lastTime: 58.54, //上次得分率
                                    }, {
                                        name: "李玉浩", //教师姓名
                                        thisTime: 68.64, //本次得分率
                                        lastTime: 62.38, //上次得分率
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        view: "TeacherKnowledgeRange", //知识点进步幅度
                        style: "m-r-0",
                        title: "进步幅度前五名教师",
                        data: [{
                            knowledgeName: "圆", //知识点名称
                            teacherData: [{
                                name: "赵燕", //教师姓名
                                thisTime: 35.64, //本次得分率
                                lastTime: 29.38, //上次得分率
                            },
                                {
                                    name: "宫惠", //教师姓名
                                    thisTime: 37.64, //本次得分率
                                    lastTime: 31.85, //上次得分率
                                }, {
                                    name: "王志恩", //教师姓名
                                    thisTime: 36.6, //本次得分率
                                    lastTime: 30.38, //上次得分率
                                }, {
                                    name: "陈莹", //教师姓名
                                    thisTime: 42.6, //本次得分率
                                    lastTime: 46.92, //上次得分率
                                }, {
                                    name: "李超", //教师姓名
                                    thisTime: 50.84, //本次得分率
                                    lastTime: 47.39, //上次得分率
                                }, {
                                    name: "吕文新", //教师姓名
                                    thisTime: 51.64, //本次得分率
                                    lastTime: 48.54, //上次得分率
                                }, {
                                    name: "李玉浩", //教师姓名
                                    thisTime: 38.64, //本次得分率
                                    lastTime: 32.38, //上次得分率
                                }
                            ]
                        },
                            {
                                knowledgeName: "二次函数", //知识点名称
                                teacherData: [{
                                    name: "赵燕", //教师姓名
                                    thisTime: 51.37, //本次得分率
                                    lastTime: 43.66, //上次得分率
                                },
                                    {
                                        name: "宫惠", //教师姓名
                                        thisTime: 32.89, //本次得分率
                                        lastTime: 36.6, //上次得分率
                                    }, {
                                        name: "王志恩", //教师姓名
                                        thisTime: 30.72, //本次得分率
                                        lastTime: 30.38, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 23.65, //本次得分率
                                        lastTime: 71.28, //上次得分率
                                    }, {
                                        name: "李超", //教师姓名
                                        thisTime: 54.47, //本次得分率
                                        lastTime: 49.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 78.65, //本次得分率
                                        lastTime: 473.28, //上次得分率
                                    }, {
                                        name: "李玉浩", //教师姓名
                                        thisTime: 61.37, //本次得分率
                                        lastTime: 58.81, //上次得分率
                                    }
                                ]
                            },
                            {
                                knowledgeName: "反比例函数", //知识点名称
                                teacherData: [{
                                    name: "赵燕", //教师姓名
                                    thisTime: 29.72, //次得分率
                                    lastTime: 29.38, //上次得分率
                                },
                                    {
                                        name: "宫惠", //教师姓名
                                        thisTime: 30.72, //次得分率
                                        lastTime: 30.38, //上次得分率
                                    }, {
                                        name: "王志恩", //教师姓名
                                        thisTime: 41.26, //次得分率
                                        lastTime: 46.38, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 42.26, //本次得分率
                                        lastTime: 47.38, //上次得分率
                                    }, {
                                        name: "李超", //教师姓名
                                        thisTime: 59.83, //本次得分率
                                        lastTime: 42.6, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 51.64, //本次得分率
                                        lastTime: 48.54, //上次得分率
                                    }, {
                                        name: "李玉浩", //教师姓名
                                        thisTime: 62.83, //本次得分率
                                        lastTime: 37.64, //上次得分率
                                    }
                                ]
                            },
                            {
                                knowledgeName: "图形的相似", //知识点名称
                                teacherData: [{
                                    name: "赵燕", //教师姓名
                                    thisTime: 45.34, //本次得分率
                                    lastTime: 60.28, //上次得分率
                                },
                                    {
                                        name: "宫惠", //教师姓名
                                        thisTime: 54.22, //本次得分率
                                        lastTime: 28.66, //上次得分率
                                    }, {
                                        name: "王志恩", //教师姓名
                                        thisTime: 40.5, //本次得分率
                                        lastTime: 45.6, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 48.8, //本次得分率
                                        lastTime: 46.9, //上次得分率
                                    }, {
                                        name: "李超", //教师姓名
                                        thisTime: 50.84, //本次得分率
                                        lastTime: 42.36, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 55.67, //本次得分率
                                        lastTime: 47.54, //上次得分率
                                    }, {
                                        name: "李玉浩", //教师姓名
                                        thisTime: 48.64, //本次得分率
                                        lastTime: 32.38, //上次得分率
                                    }
                                ]
                            }, {
                                knowledgeName: "数据收集与处理", //知识点名称
                                teacherData: [{
                                    name: "赵燕", //教师姓名
                                    thisTime: 52.63, //本次得分率
                                    lastTime: 35.45, //上次得分率
                                },
                                    {
                                        name: "宫惠", //教师姓名
                                        thisTime: 57.89, //本次得分率
                                        lastTime: 41.85, //上次得分率
                                    }, {
                                        name: "王志恩", //教师姓名
                                        thisTime: 60.5, //本次得分率
                                        lastTime: 40.38, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 52.6, //本次得分率
                                        lastTime: 56.92, //上次得分率
                                    }, {
                                        name: "李超", //教师姓名
                                        thisTime: 55.84, //本次得分率
                                        lastTime: 49.39, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 51.64, //本次得分率
                                        lastTime: 58.54, //上次得分率
                                    }, {
                                        name: "李玉浩", //教师姓名
                                        thisTime: 58.64, //本次得分率
                                        lastTime: 42.38, //上次得分率
                                    }
                                ]
                            }, {
                                knowledgeName: "概率", //知识点名称
                                teacherData: [{
                                    name: "赵燕", //教师姓名
                                    thisTime: 67.64, //本次得分率
                                    lastTime: 59.38, //上次得分率
                                },
                                    {
                                        name: "宫惠", //教师姓名
                                        thisTime: 70.34, //本次得分率
                                        lastTime: 45.85, //上次得分率
                                    }, {
                                        name: "王志恩", //教师姓名
                                        thisTime: 63.6, //本次得分率
                                        lastTime: 70.38, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 69.6, //本次得分率
                                        lastTime: 76.92, //上次得分率
                                    }, {
                                        name: "李超", //教师姓名
                                        thisTime: 60.84, //本次得分率
                                        lastTime: 47.39, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 69.64, //本次得分率
                                        lastTime: 58.54, //上次得分率
                                    }, {
                                        name: "李玉浩", //教师姓名
                                        thisTime: 68.64, //本次得分率
                                        lastTime: 62.38, //上次得分率
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        view: "TeacherAbilityScore", //能力得分率
                        style: "m-t-1",
                        title: "能力得分率",
                        data: [{
                            name: "数形结合",
                            scale: 62.59,
                        },
                            {
                                name: "推理能力",
                                scale: 47.33,
                            },
                            {
                                name: "运算能力",
                                scale: 49.94,
                            },
                            {
                                name: "空间观念",
                                scale: 50.41
                            }, {
                                name: "思想方法",
                                scale: 46.82
                            }, {
                                name: "创新意识",
                                scale: 39.98
                            }
                        ]
                    },
                    {
                        view: "TeacherAbilityAverage", //能力前五名
                        style: "m-t-1",
                        title: "能力前五名教师",
                        data: [{
                            abilityName: "数形结合", //能力名称
                            teacherData: [{
                                name: "李超", //教师姓名
                                thisTime: 66.5, //本次得分率
                                lastTime: 58.54, //上次得分率
                            },
                                {
                                    name: "王旭", //教师姓名
                                    thisTime: 54.68, //本次得分率
                                    lastTime: 45.6, //上次得分率
                                }, {
                                    name: "王立鹏", //教师姓名
                                    thisTime: 70.5, //本次得分率
                                    lastTime: 50.23, //上次得分率
                                }, {
                                    name: "陈莹", //教师姓名
                                    thisTime: 58.63, //本次得分率
                                    lastTime: 59.2, //上次得分率
                                }, {
                                    name: "吕文新", //教师姓名
                                    thisTime: 76.64, //本次得分率
                                    lastTime: 73.84, //上次得分率
                                }, {
                                    name: "宫惠", //教师姓名
                                    thisTime: 58.63, //本次得分率
                                    lastTime: 41.5, //上次得分率
                                }, {
                                    name: "张文文", //教师姓名
                                    thisTime: 47.6, //本次得分率
                                    lastTime: 72.4, //上次得分率
                                }
                            ]
                        },
                            {
                                abilityName: "推理能力", //能力名称
                                teacherData: [{
                                    name: "李超", //教师姓名
                                    thisTime: 47.3, //本次得分率
                                    lastTime: 40.63, //上次得分率
                                },
                                    {
                                        name: "王旭", //教师姓名
                                        thisTime: 52.96, //本次得分率
                                        lastTime: 59.6, //上次得分率
                                    }, {
                                        name: "王立鹏", //教师姓名
                                        thisTime: 40.5, //本次得分率
                                        lastTime: 30.23, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 48.63, //本次得分率
                                        lastTime: 59.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 56.6, //本次得分率
                                        lastTime: 43.84, //上次得分率
                                    }, {
                                        name: "宫惠", //教师姓名
                                        thisTime: 58.63, //本次得分率
                                        lastTime: 41.5, //上次得分率
                                    }, {
                                        name: "张文文", //教师姓名
                                        thisTime: 43.6, //本次得分率
                                        lastTime: 52.4, //上次得分率
                                    }
                                ]
                            }, {
                                abilityName: "运算能力", //能力名称
                                teacherData: [{
                                    name: "李超", //教师姓名
                                    thisTime: 50.3, //本次得分率
                                    lastTime: 38.54, //上次得分率
                                },
                                    {
                                        name: "王旭", //教师姓名
                                        thisTime: 60.58, //本次得分率
                                        lastTime: 55.6, //上次得分率
                                    }, {
                                        name: "王立鹏", //教师姓名
                                        thisTime: 45.5, //本次得分率
                                        lastTime: 35.23, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 58.63, //本次得分率
                                        lastTime: 59.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 59.6, //本次得分率
                                        lastTime: 43.84, //上次得分率
                                    }, {
                                        name: "宫惠", //教师姓名
                                        thisTime: 53.6, //本次得分率
                                        lastTime: 41.5, //上次得分率
                                    }, {
                                        name: "张文文", //教师姓名
                                        thisTime: 47.6, //本次得分率
                                        lastTime: 52.4, //上次得分率
                                    }
                                ]
                            }, {
                                abilityName: "空间观念 ", //能力名称
                                teacherData: [{
                                    name: "李超", //教师姓名
                                    thisTime: 50.41, //本次得分率
                                    lastTime: 53.54, //上次得分率
                                },
                                    {
                                        name: "王旭", //教师姓名
                                        thisTime: 65.68, //本次得分率
                                        lastTime: 49.6, //上次得分率
                                    }, {
                                        name: "王立鹏", //教师姓名
                                        thisTime: 40.5, //本次得分率
                                        lastTime: 50.23, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 59.33, //本次得分率
                                        lastTime: 57.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 55.64, //本次得分率
                                        lastTime: 33.84, //上次得分率
                                    }, {
                                        name: "宫惠", //教师姓名
                                        thisTime: 48.63, //本次得分率
                                        lastTime: 51.5, //上次得分率
                                    }, {
                                        name: "张文文", //教师姓名
                                        thisTime: 57.6, //本次得分率
                                        lastTime: 62.4, //上次得分率
                                    }
                                ]
                            }, {
                                abilityName: "思想方法", //能力名称
                                teacherData: [{
                                    name: "李超", //教师姓名
                                    thisTime: 49.85, //本次得分率
                                    lastTime: 48.54, //上次得分率
                                },
                                    {
                                        name: "王旭", //教师姓名
                                        thisTime: 44.68, //本次得分率
                                        lastTime: 35.6, //上次得分率
                                    }, {
                                        name: "王立鹏", //教师姓名
                                        thisTime: 50.5, //本次得分率
                                        lastTime: 60.23, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 48.63, //本次得分率
                                        lastTime: 49.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 56.64, //本次得分率
                                        lastTime: 43.84, //上次得分率
                                    }, {
                                        name: "宫惠", //教师姓名
                                        thisTime: 48.63, //本次得分率
                                        lastTime: 41.5, //上次得分率
                                    }, {
                                        name: "张文文", //教师姓名
                                        thisTime: 47.6, //本次得分率
                                        lastTime: 42.4, //上次得分率
                                    }
                                ]
                            }, {
                                abilityName: "创新意识", //能力名称
                                teacherData: [{
                                    name: "李超", //教师姓名
                                    thisTime: 40.6, //本次得分率
                                    lastTime: 38.54, //上次得分率
                                },
                                    {
                                        name: "王旭", //教师姓名
                                        thisTime: 34.68, //本次得分率
                                        lastTime: 25.6, //上次得分率
                                    }, {
                                        name: "王立鹏", //教师姓名
                                        thisTime: 40.5, //本次得分率
                                        lastTime: 30.23, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 38.63, //本次得分率
                                        lastTime: 39.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 36.64, //本次得分率
                                        lastTime: 43.84, //上次得分率
                                    }, {
                                        name: "宫惠", //教师姓名
                                        thisTime: 48.63, //本次得分率
                                        lastTime: 41.5, //上次得分率
                                    }, {
                                        name: "张文文", //教师姓名
                                        thisTime: 47.6, //本次得分率
                                        lastTime: 62.4, //上次得分率
                                    }
                                ]
                            }
                        ]
                    }, {
                        view: "TeacherAbilityRange", //能力幅度
                        style: "m-t-1 m-r-0",
                        title: "进步幅度前五名教师",
                        data: [{
                            abilityName: "数形结合", //能力名称
                            teacherData: [{
                                name: "李超", //教师姓名
                                thisTime: 66.5, //本次得分率
                                lastTime: 58.54, //上次得分率
                            },
                                {
                                    name: "王旭", //教师姓名
                                    thisTime: 54.68, //本次得分率
                                    lastTime: 45.6, //上次得分率
                                }, {
                                    name: "王立鹏", //教师姓名
                                    thisTime: 70.5, //本次得分率
                                    lastTime: 50.23, //上次得分率
                                }, {
                                    name: "陈莹", //教师姓名
                                    thisTime: 58.63, //本次得分率
                                    lastTime: 59.2, //上次得分率
                                }, {
                                    name: "吕文新", //教师姓名
                                    thisTime: 76.64, //本次得分率
                                    lastTime: 73.84, //上次得分率
                                }, {
                                    name: "宫惠", //教师姓名
                                    thisTime: 58.63, //本次得分率
                                    lastTime: 41.5, //上次得分率
                                }, {
                                    name: "张文文", //教师姓名
                                    thisTime: 47.6, //本次得分率
                                    lastTime: 72.4, //上次得分率
                                }
                            ]
                        },
                            {
                                abilityName: "推理能力", //能力名称
                                teacherData: [{
                                    name: "李超", //教师姓名
                                    thisTime: 47.3, //本次得分率
                                    lastTime: 40.63, //上次得分率
                                },
                                    {
                                        name: "王旭", //教师姓名
                                        thisTime: 52.96, //本次得分率
                                        lastTime: 59.6, //上次得分率
                                    }, {
                                        name: "王立鹏", //教师姓名
                                        thisTime: 40.5, //本次得分率
                                        lastTime: 30.23, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 48.63, //本次得分率
                                        lastTime: 59.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 56.6, //本次得分率
                                        lastTime: 43.84, //上次得分率
                                    }, {
                                        name: "宫惠", //教师姓名
                                        thisTime: 58.63, //本次得分率
                                        lastTime: 41.5, //上次得分率
                                    }, {
                                        name: "张文文", //教师姓名
                                        thisTime: 43.6, //本次得分率
                                        lastTime: 52.4, //上次得分率
                                    }
                                ]
                            }, {
                                abilityName: "运算能力", //能力名称
                                teacherData: [{
                                    name: "李超", //教师姓名
                                    thisTime: 50.3, //本次得分率
                                    lastTime: 38.54, //上次得分率
                                },
                                    {
                                        name: "王旭", //教师姓名
                                        thisTime: 60.58, //本次得分率
                                        lastTime: 55.6, //上次得分率
                                    }, {
                                        name: "王立鹏", //教师姓名
                                        thisTime: 45.5, //本次得分率
                                        lastTime: 35.23, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 58.63, //本次得分率
                                        lastTime: 59.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 59.6, //本次得分率
                                        lastTime: 43.84, //上次得分率
                                    }, {
                                        name: "宫惠", //教师姓名
                                        thisTime: 53.6, //本次得分率
                                        lastTime: 41.5, //上次得分率
                                    }, {
                                        name: "张文文", //教师姓名
                                        thisTime: 47.6, //本次得分率
                                        lastTime: 52.4, //上次得分率
                                    }
                                ]
                            }, {
                                abilityName: "空间观念 ", //能力名称
                                teacherData: [{
                                    name: "李超", //教师姓名
                                    thisTime: 50.41, //本次得分率
                                    lastTime: 53.54, //上次得分率
                                },
                                    {
                                        name: "王旭", //教师姓名
                                        thisTime: 65.68, //本次得分率
                                        lastTime: 49.6, //上次得分率
                                    }, {
                                        name: "王立鹏", //教师姓名
                                        thisTime: 40.5, //本次得分率
                                        lastTime: 50.23, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 59.33, //本次得分率
                                        lastTime: 57.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 55.64, //本次得分率
                                        lastTime: 33.84, //上次得分率
                                    }, {
                                        name: "宫惠", //教师姓名
                                        thisTime: 48.63, //本次得分率
                                        lastTime: 51.5, //上次得分率
                                    }, {
                                        name: "张文文", //教师姓名
                                        thisTime: 57.6, //本次得分率
                                        lastTime: 62.4, //上次得分率
                                    }
                                ]
                            }, {
                                abilityName: "思想方法", //能力名称
                                teacherData: [{
                                    name: "李超", //教师姓名
                                    thisTime: 49.85, //本次得分率
                                    lastTime: 48.54, //上次得分率
                                },
                                    {
                                        name: "王旭", //教师姓名
                                        thisTime: 44.68, //本次得分率
                                        lastTime: 35.6, //上次得分率
                                    }, {
                                        name: "王立鹏", //教师姓名
                                        thisTime: 50.5, //本次得分率
                                        lastTime: 60.23, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 48.63, //本次得分率
                                        lastTime: 49.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 56.64, //本次得分率
                                        lastTime: 43.84, //上次得分率
                                    }, {
                                        name: "宫惠", //教师姓名
                                        thisTime: 48.63, //本次得分率
                                        lastTime: 41.5, //上次得分率
                                    }, {
                                        name: "张文文", //教师姓名
                                        thisTime: 47.6, //本次得分率
                                        lastTime: 42.4, //上次得分率
                                    }
                                ]
                            }, {
                                abilityName: "创新意识", //能力名称
                                teacherData: [{
                                    name: "李超", //教师姓名
                                    thisTime: 40.6, //本次得分率
                                    lastTime: 38.54, //上次得分率
                                },
                                    {
                                        name: "王旭", //教师姓名
                                        thisTime: 34.68, //本次得分率
                                        lastTime: 25.6, //上次得分率
                                    }, {
                                        name: "王立鹏", //教师姓名
                                        thisTime: 40.5, //本次得分率
                                        lastTime: 30.23, //上次得分率
                                    }, {
                                        name: "陈莹", //教师姓名
                                        thisTime: 38.63, //本次得分率
                                        lastTime: 39.2, //上次得分率
                                    }, {
                                        name: "吕文新", //教师姓名
                                        thisTime: 36.64, //本次得分率
                                        lastTime: 43.84, //上次得分率
                                    }, {
                                        name: "宫惠", //教师姓名
                                        thisTime: 48.63, //本次得分率
                                        lastTime: 41.5, //上次得分率
                                    }, {
                                        name: "张文文", //教师姓名
                                        thisTime: 47.6, //本次得分率
                                        lastTime: 62.4, //上次得分率
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
