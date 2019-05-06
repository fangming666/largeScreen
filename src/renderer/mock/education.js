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
                    examName: "第一学期期末考试", //考试名称
                    schoolNum: 5, //学校数
                    peopleNum: 2659, //人数
                    full: 760, //满分
                    average: 432.4, //平均分
                    median: 439.4, //中位数
                    high: 665.5, //最高分
                    lowest: 35, //最低分
                }
            }, {
                view: "SchoolAverage", //学校平均分
                title: "学校平均分",
                judge: "education",
                data: {
                    college: 432.47,
                    schoolArray: [{
                        schoolName: "实验中学", //学校名称
                        score: 471.22, //分数
                    },
                        {
                            schoolName: "一中", //学校名称
                            score: 469.53, //分数
                        }, {
                            schoolName: "二中", //学校名称
                            score: 435.54, //分数
                        }, {
                            schoolName: "三中", //学校名称
                            score: 411.93, //分数
                        }, {
                            schoolName: "五中", //学校名称
                            score: 402.76, //分数
                        }
                    ]
                }

            }, {
                view: "KeynoteCritical", //重点高中上线生/临界生
                title: "重点高中上线/临界生分布",
                data: {
                    onlineStudent: [{
                        schoolName: "实验中学", //学校名称
                        scale: 61.7 //比例
                    },
                        {
                            schoolName: "一中", //学校名称
                            scale: 59.2 //比例
                        }, {
                            schoolName: "二中", //学校名称
                            scale: 56.9 //比例
                        }, {
                            schoolName: "三中", //学校名称
                            scale: 55.4 //比例
                        }, {
                            schoolName: "五中", //学校名称
                            scale: 49.2 //比例
                        }
                    ], //上线生
                    criticalGrowth: [{
                        schoolName: "实验中学", //学校名称
                        scale: 19.9 //比例
                    },
                        {
                            schoolName: "一中", //学校名称
                            scale: 15.3 //比例
                        }, {
                            schoolName: "二中", //学校名称
                            scale: 10.4 //比例
                        }, {
                            schoolName: "三中", //学校名称
                            scale: 10.8 //比例
                        }, {
                            schoolName: "五中", //学校名称
                            scale: 10.2 //比例
                        }
                    ]
                }
            }, {
                view: "CommonCritical", //普通高中上线生/临界生
                title: "普通高中上线/临界生",
                data: {
                    onlineStudent: [{
                        schoolName: "实验中学", //学校名称
                        scale: 31.2 //比例
                    },
                        {
                            schoolName: "一中", //学校名称
                            scale: 30.8 //比例
                        }, {
                            schoolName: "二中", //学校名称
                            scale: 16.6 //比例
                        }, {
                            schoolName: "三中", //学校名称
                            scale: 9.2 //比例
                        }, {
                            schoolName: "五中", //学校名称
                            scale: 10.5 //比例
                        }
                    ], //上线生
                    criticalGrowth: [{
                        schoolName: "实验中学", //学校名称
                        scale: 30.5 //比例
                    },
                        {
                            schoolName: "一中", //学校名称
                            scale: 19.5 //比例
                        }, {
                            schoolName: "二中", //学校名称
                            scale: 10.8 //比例
                        }, {
                            schoolName: "三中", //学校名称
                            scale: 4.2 //比例
                        }, {
                            schoolName: "五中", //学校名称
                            scale: 2.1 //比例
                        }
                    ]
                }

            },
                {
                    view: "SuperaverageRateTable", //与上次考试相比超均率变化
                    title: "与上次考试相比——学校超均率变化",
                    data: [{
                        name: "实验中学", //学校名称
                        superaverageRate: 0.9, //与上次考试相比超均率变化
                        thisSuperaverage: 8.96, //本次超均率变化
                        lastSuperaverage: 8.06, //上次超均率变化
                        ranking: 0, //名次变化
                        thisRanking: 1, //本次名次变化
                        lastRanking: 1, //上次名次变化
                    }, {
                        name: "一中", //学校名称
                        superaverageRate: 1.16, //与上次考试相比超均率变化
                        thisSuperaverage: 8.57, //本次超均率变化
                        lastSuperaverage: 7.41, //上次超均率变化
                        ranking: 0, //名次变化
                        thisRanking: 2, //本次名次变化
                        lastRanking: 2, //上次名次变化
                    },
                        {
                            name: "二中", //学校名称
                            superaverageRate: -1.12, //与上次考试相比超均率变化
                            thisSuperaverage: 0.71, //本次超均率变化
                            lastSuperaverage: 1.83, //上次超均率变化
                            ranking: 0, //名次变化
                            thisRanking: 3, //本次名次变化
                            lastRanking: 3, //上次名次变化
                        },
                        {
                            name: "三中", //学校名称
                            superaverageRate: 1.61, //与上次考试相比超均率变化
                            thisSuperaverage: -4.75, //本次超均率变化
                            lastSuperaverage: -6.36, //上次超均率变化
                            ranking: 1, //名次变化
                            thisRanking: 4, //本次名次变化
                            lastRanking: 5, //上次名次变化
                        }, {
                            name: "五中", //学校名称
                            superaverageRate: -0.6, //与上次考试相比超均率变化
                            thisSuperaverage: -6.87, //本次超均率变化
                            lastSuperaverage: -6.27, //上次超均率变化
                            ranking: -1, //名次变化
                            thisRanking: 5, //本次名次变化
                            lastRanking: 4, //上次名次变化
                        }
                    ]
                },
                {
                    view: "SuperaverageTrend", //学校超均率变化趋势
                    title: "学校超均率变化趋势",
                    data: [{
                        name: "实验中学", //学校名称
                        //超均率数组
                        rateArr: [{
                            time: "18.02.16", //时间
                            rate: 9.08, //超均率
                        }, {
                            time: "18.05.04", //时间
                            rate: 8.57, //超均率
                        }, {
                            time: "18.06.26", //时间
                            rate: 8.45, //超均率
                        }, {
                            time: "18.10.24", //时间
                            rate: 8.06, //超均率
                        }, {
                            time: "19.01.18", //时间
                            rate: 8.96, //超均率
                        }], //超均率
                    },
                        {
                            name: "一中", //学校名称
                            //超均率数组
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: 9.05, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: 8.86, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: 8.43, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: 7.41, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: 8.57, //超均率
                            }], //超均率
                        },
                        {
                            name: "二中", //学校名称
                            //超均率数组
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: 0.65, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: 1.94, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: 4.96, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: 1.83, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: 0.71, //超均率
                            }], //超均率
                        },
                        {
                            name: "三中", //学校名称
                            //超均率数组
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: -8.26, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: -10.23, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: -6.05, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: -6.36, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: -4.75, //超均率
                            }], //超均率
                        },
                        {
                            name: "五中", //学校名称
                            //超均率数组
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: -11.09, //超均率
                            }, {
                                time: "18.05.04", //时间
                                rate: -8.27, //超均率
                            }, {
                                time: "18.06.26", //时间
                                rate: -6.98, //超均率
                            }, {
                                time: "18.10.24", //时间
                                rate: -6.87, //超均率
                            }, {
                                time: "19.01.18", //时间
                                rate: -6.54, //超均率
                            }], //超均率
                        }
                    ]
                },
                {
                    view: "OnlineRate", //上线率变化趋势
                    title: "学校上线率变化趋势",
                    data: [{
                        name: "重点高中",
                        data: [{
                            name: "实验中学", //学校名称
                            rateArr: [{
                                time: "18.02.16", //时间
                                rate: 25.8, //上线率
                            }, {
                                time: "18.05.04", //时间
                                rate: 24.3, //上线率
                            }, {
                                time: "18.06.26", //时间
                                rate: 28.5, //上线率
                            }, {
                                time: "18.10.24", //时间
                                rate: 30.1, //上线率
                            }, {
                                time: "19.01.18", //时间
                                rate: 31.2, //上线率
                            }],
                        },
                            {
                                name: "一中", //学校名称
                                //超均率数组
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 25.6, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 29.8, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 26.9, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 27.8, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 30.8, //超均率
                                }], //超均率
                            },
                            {
                                name: "二中", //学校名称
                                //超均率数组
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 20.1, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 16.5, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 18.4, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 15.8, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 16.6, //超均率
                                }], //超均率
                            },
                            {
                                name: "三中", //学校名称
                                //超均率数组
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 13.2, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 12.8, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 12.3, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 11.6, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 9.2, //超均率
                                }], //超均率
                            },
                            {
                                name: "五中", //学校名称
                                //超均率数组
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 11.9, //超均率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 9.6, //超均率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 13.8, //超均率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 10.2, //超均率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 10.5, //超均率
                                }], //超均率
                            }
                        ]
                    },
                        {
                            name: "普通高中",
                            data: [{
                                name: "实验中学", //学校名称
                                rateArr: [{
                                    time: "18.02.16", //时间
                                    rate: 52.8, //上线率
                                }, {
                                    time: "18.05.04", //时间
                                    rate: 54.9, //上线率
                                }, {
                                    time: "18.06.26", //时间
                                    rate: 58.6, //上线率
                                }, {
                                    time: "18.10.24", //时间
                                    rate: 60.1, //上线率
                                }, {
                                    time: "19.01.18", //时间
                                    rate: 61.7, //上线率
                                }],
                            },
                                {
                                    name: "一中", //学校名称
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
                                        rate: 59.2, //超均率
                                    }], //超均率
                                },
                                {
                                    name: "二中", //学校名称
                                    //超均率数组
                                    rateArr: [{
                                        time: "18.02.16", //时间
                                        rate: 51.8, //超均率
                                    }, {
                                        time: "18.05.04", //时间
                                        rate: 46.6, //超均率
                                    }, {
                                        time: "18.06.26", //时间
                                        rate: 50.5, //超均率
                                    }, {
                                        time: "18.10.24", //时间
                                        rate: 59.5, //超均率
                                    }, {
                                        time: "19.01.18", //时间
                                        rate: 56.9, //超均率
                                    }], //超均率
                                },
                                {
                                    name: "三中", //学校名称
                                    //超均率数组
                                    rateArr: [{
                                        time: "18.02.16", //时间
                                        rate: 40.1, //超均率
                                    }, {
                                        time: "18.05.04", //时间
                                        rate: 44.5, //超均率
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
                                    name: "五中", //学校名称
                                    //超均率数组
                                    rateArr: [{
                                        time: "18.02.16", //时间
                                        rate: 49.5, //超均率
                                    }, {
                                        time: "18.05.04", //时间
                                        rate: 43.8, //超均率
                                    }, {
                                        time: "18.06.26", //时间
                                        rate: 48.3, //超均率
                                    }, {
                                        time: "18.10.24", //时间
                                        rate: 46.6, //超均率
                                    }, {
                                        time: "19.01.18", //时间
                                        rate: 49.2, //超均率
                                    }], //超均率
                                }
                            ]
                        }
                    ]

                }
            ]
        }]
    }

}
