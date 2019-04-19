let resultData = [];

function resultManage() {
    let emailArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        initArr = [],
        teacherArr = ["陈强", "陈冰", "徐玉宇", "陈营", "李超"],
        subjectArr = ["语文", "数学", "英语", "生物", "历史", "地理", "道德与法治", "语文", "数学"],
        gradeArr = ["七年级", "八年级", "九年级", "八年级", "九年级"],
        academicArr = ["正高级", "高级", "一级", "二级", "三级"],
        educationalArr = ["博士研究生", "硕士研究生", "本科", "专科", "高中"],
        schoolArr = ["实验", "一中", "二中", "三中", "五中"];
    for (let i = 0; i < 445; i++) {
        if (i < 5) {
            initArr = [...initArr, {
                "name": teacherArr[i], //姓名
                "subject": "数学", //科目
                teacherId: i,
                "imgSrc": "src/renderer/assets/head" + (i + 1) + ".png",
                "school": schoolArr[i], //学校
                "grade": gradeArr[i], //年级
                "academic": "正高级", //职称
                "educational": "博士研究生", //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄

                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.round(Math.random()) * 10 + 1] +
                    emailArr[Math.round(Math.random()) * 10 + 1] +
                    emailArr[Math.round(Math.random()) * 10 + 1] +
                    emailArr[Math.round(Math.random()) * 10 + 1] +
                    emailArr[Math.round(Math.random()) * 10 + 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        } else if (i < 6) {
            initArr = [...initArr, {
                "name": ["张", "李", "王", "邹", "钱", "林", "冯", "马"][Math.floor(Math.random() * 8 + 1) - 1] + ["念", "子久", "成基", "明", "韦", "接", "杰", "仁", "以", "东", "才", "正"][Math.floor(Math.random() * 12 + 1) - 1], //姓名
                teacherId: i,
                "imgSrc": "",
                "subject": subjectArr[Math.floor(Math.random() * 9 + 1) - 1], //科目
                "school": schoolArr[Math.floor(Math.random() * 5 + 1) - 1], //学校
                "grade": gradeArr[Math.floor(Math.random() * 5 + 1) - 1], //年级
                "academic": "正高级", //职称
                "educational": "博士研究生", //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄
                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        } else if (i < 10) {
            initArr = [...initArr, {
                "name": ["张", "李", "王", "邹", "钱", "林", "冯", "马"][Math.floor(Math.random() * 8 + 1) - 1] + ["念", "子久", "成基", "明", "韦", "接", "杰", "仁", "以", "东", "才", "正"][Math.floor(Math.random() * 12 + 1) - 1], //姓名
                teacherId: i,
                "imgSrc": '',
                "subject": subjectArr[Math.floor(Math.random() * 9 + 1) - 1], //科目
                "school": schoolArr[Math.floor(Math.random() * 5 + 1) - 1], //学校
                "grade": gradeArr[Math.floor(Math.random() * 5 + 1) - 1], //年级
                "academic": "高级", //职称
                "educational": "博士研究生", //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄
                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        } else if (i < 16) {
            initArr = [...initArr, {
                "name": ["张", "李", "王", "邹", "钱", "林", "冯", "马"][Math.floor(Math.random() * 8 + 1) - 1] + ["念", "子久", "成基", "明", "韦", "接", "杰", "仁", "以", "东", "才", "正"][Math.floor(Math.random() * 12 + 1) - 1], //姓名
                teacherId: i,
                "imgSrc": '',
                "subject": subjectArr[Math.floor(Math.random() * 9 + 1) - 1], //科目
                "school": schoolArr[Math.floor(Math.random() * 5 + 1) - 1], //学校
                "grade": gradeArr[Math.floor(Math.random() * 5 + 1) - 1], //年级
                "academic": "高级", //职称
                "educational": "博士研究生", //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄
                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        } else if (i < 58) {
            initArr = [...initArr, {
                "name": ["张", "李", "王", "邹", "钱", "林", "冯", "马"][Math.floor(Math.random() * 8 + 1) - 1] + ["念", "子久", "成基", "明", "韦", "接", "杰", "仁", "以", "东", "才", "正"][Math.floor(Math.random() * 12 + 1) - 1], //姓名
                teacherId: i,
                "imgSrc": '',
                "subject": subjectArr[Math.floor(Math.random() * 9 + 1) - 1], //科目
                "school": schoolArr[Math.floor(Math.random() * 5 + 1) - 1], //学校
                "grade": gradeArr[Math.floor(Math.random() * 5 + 1) - 1], //年级
                "academic": "一级", //职称
                "educational": "硕士研究生", //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄
                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        } else if (i < 105) {
            initArr = [...initArr, {
                "name": ["张", "李", "王", "邹", "钱", "林", "冯", "马"][Math.floor(Math.random() * 8 + 1) - 1] + ["念", "子久", "成基", "明", "韦", "接", "杰", "仁", "以", "东", "才", "正"][Math.floor(Math.random() * 12 + 1) - 1], //姓名
                teacherId: i,
                "imgSrc": '',
                "subject": subjectArr[Math.floor(Math.random() * 9 + 1) - 1], //科目
                "school": schoolArr[Math.floor(Math.random() * 5 + 1) - 1], //学校
                "grade": gradeArr[Math.floor(Math.random() * 5 + 1) - 1], //年级
                "academic": "二级", //职称
                "educational": "硕士研究生", //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄
                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        } else if (i < 203) {
            initArr = [...initArr, {
                "name": ["张", "李", "王", "邹", "钱", "林", "冯", "马"][Math.floor(Math.random() * 8 + 1) - 1] + ["念", "子久", "成基", "明", "韦", "接", "杰", "仁", "以", "东", "才", "正"][Math.floor(Math.random() * 12 + 1) - 1], //姓名
                teacherId: i,
                "imgSrc": '',
                "subject": subjectArr[Math.floor(Math.random() * 9 + 1) - 1], //科目
                "school": schoolArr[Math.floor(Math.random() * 5 + 1) - 1], //学校
                "grade": gradeArr[Math.floor(Math.random() * 5 + 1) - 1], //年级
                "academic": "二级", //职称
                "educational": "本科", //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄
                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        } else if (i < 248) {
            let subjectIndex = 0;
            let schoolIndex = 0;
            let gradeIndex = 0;
            if (i < 212) {
                subjectIndex = i - 203;
                schoolIndex = 0,
                    gradeIndex = i - 203 < 3 ? i - 203 : i - 203 < 6 ? i - 203 - 3 : i - 203 - 6;
            } else if (i < 221) {
                subjectIndex = i - 203 - 9;
                schoolIndex = 1;
                gradeIndex = i - 203 - 9 < 3 ? i - 203 - 9 : i - 203 - 9 < 6 ? i - 203 - 9 - 3 : i - 203 - 9 - 6;

            } else if (i < 230) {
                subjectIndex = i - 203 - 18;
                schoolIndex = 2;
                gradeIndex = i - 203 - 18 < 3 ? i - 203 - 18 : i - 203 - 18 < 6 ? i - 203 - 18 - 3 : i - 203 - 18 - 6;

            } else if (i < 239) {
                subjectIndex = i - 203 - 27;
                schoolIndex = 3;
                gradeIndex = i - 203 - 27 < 3 ? i - 203 - 27 : i - 203 - 27 < 6 ? i - 203 - 27 - 3 : i - 203 - 27 - 6;

            } else if (i < 248) {
                subjectIndex = i - 203 - 36;
                schoolIndex = 4;
                gradeIndex = i - 203 - 36 < 3 ? i - 203 - 36 : i - 203 - 36 < 6 ? i - 203 - 36 - 3 : i - 203 - 36 - 6;

            }
            initArr = [...initArr, {
                "name": ["张", "李", "王", "邹", "钱", "林", "冯", "马"][Math.floor(Math.random() * 8 + 1) - 1] + ["念", "子久", "成基", "明", "韦", "接", "杰", "仁", "以", "东", "才", "正"][Math.floor(Math.random() * 12 + 1) - 1], //姓名
                teacherId: i,
                "imgSrc": '',
                "subject": subjectArr[subjectIndex], //科目
                "school": schoolArr[schoolIndex], //学校
                "grade": gradeArr[gradeIndex], //年级
                "academic": "三级", //职称
                "educational": "本科", //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄
                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        } else if (i < 413) {
            initArr = [...initArr, {
                "name": ["张", "李", "王", "邹", "钱", "林", "冯", "马"][Math.floor(Math.random() * 8 + 1) - 1] + ["念", "子久", "成基", "明", "韦", "接", "杰", "仁", "以", "东", "才", "正"][Math.floor(Math.random() * 12 + 1) - 1], //姓名
                teacherId: i,
                "imgSrc": '',
                "subject": subjectArr[Math.floor(Math.random() * 9 + 1) - 1], //科目
                "school": schoolArr[Math.floor(Math.random() * 5 + 1) - 1], //学校
                "grade": gradeArr[Math.floor(Math.random() * 5 + 1) - 1], //年级
                "academic": "三级", //职称
                "educational": "本科", //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄
                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        } else if (i < 430) {
            initArr = [...initArr, {
                "name": ["张", "李", "王", "邹", "钱", "林", "冯", "马"][Math.floor(Math.random() * 8 + 1) - 1] + ["念", "子久", "成基", "明", "韦", "接", "杰", "仁", "以", "东", "才", "正"][Math.floor(Math.random() * 12 + 1) - 1], //姓名
                teacherId: i,
                "imgSrc": '',
                "subject": subjectArr[Math.floor(Math.random() * 9 + 1) - 1], //科目
                "school": schoolArr[Math.floor(Math.random() * 5 + 1) - 1], //学校
                "grade": gradeArr[Math.floor(Math.random() * 5 + 1) - 1], //年级
                "academic": "无职称", //职称
                "educational": "本科", //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄
                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        } else {
            initArr = [...initArr, {
                "name": ["张", "李", "王", "邹", "钱", "林", "冯", "马"][Math.floor(Math.random() * 8 + 1) - 1] + ["念", "子久", "成基", "明", "韦", "接", "杰", "仁", "以", "东", "才", "正"][Math.floor(Math.random() * 10 + 1) - 1], //姓名
                teacherId: i,
                "imgSrc": "",

                "subject": subjectArr[Math.floor(Math.random() * 9 + 1) - 1], //科目
                "school": schoolArr[Math.floor(Math.random() * 5 + 1) - 1], //学校
                "grade": gradeArr[Math.floor(Math.random() * 5 + 1) - 1], //年级
                "academic": "无职称", //职称
                "educational": educationalArr[Math.floor(Math.random() * 5 + 1) - 1], //学历
                "sex": ["男", "女"][i % 2 ? 0 : 1], //性别
                "schoolAge": (Math.floor(Math.random() * 12 + 1) - 1), //教龄
                "phone": "1" + [3, 4, 5, 7, 8][Math.floor(Math.random() * 5 + 1) - 1] +
                    "" + (Math.floor(Math.random() * 10)) + "****" +
                    (Math.floor(Math.random() * 10)) + "" + (Math.floor(Math.random() * 10)) +

                    "" + (Math.floor(Math.random() * 10)) +
                    "" + (Math.floor(Math.random() * 10)), //手机号
                "email": emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    emailArr[Math.floor(Math.random() * 62 + 1) - 1] +
                    "@gaoxin.edu.cn", //邮箱地址
                "knowledgeArr": {
                    title: "知识点模块教学水平",
                    view: "VisitingCardKnowledge",
                    judge: "teach",
                    data: [{
                        "name": "数与式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "统计与概率", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "方程与不等式", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的变化", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "函数", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        "name": "图形的性质", //知识点名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },]
                },
                "ability": {
                    title: "能力模块教学水平",
                    view: "VisitingCardAbility",
                    judge: "teach",
                    data: [{
                        "name": "数形结合", //能力名称
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    },
                        {
                            "name": "空间观念", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "思想方法", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "创新意识", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "推理能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }, {
                            "name": "运算能力", //能力名称
                            "score": Math.floor(Math.random() * 100 + 1), //比例
                        }
                    ]
                },
                "increment": {
                    view: "VisitingCardIncrement",
                    judge: "teach",
                    title: "学生增值指数",
                    data: [{
                        "name": "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }, {
                        "name": "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //起点
                        "endScore": Math.floor(Math.random() * 100 + 1), //终点水平
                    }]
                },
                "stabilize": {
                    view: "VisitingCardStabilize",
                    judge: "teach",
                    title: "学生稳定指数",
                    data: [{
                        name: "尖子生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "上线生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "普通生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }, {
                        name: "后进生",
                        "score": Math.floor(Math.random() * 100 + 1), //比例
                    }]
                }
            }]
        }
    }
    resultData = initArr;
}
resultManage();
export default {
    data:{
        code: 0,
        msg: '',
        "data": [{
            name: '师资概况',
            data: [{
                view: "TeacherNumber",
                title: "教师数量分析",
                judge: "teacher-summary",
                data: [{
                    teacherNum: 445, //教师总数
                    studentNum: 8010, //学生总数
                    teacherCompare: 1, //教师比例
                    studentCompare: 18 //学生比例
                }]
            }, {
                view: "SchoolAverage", //学校平均分
                title: "各校师生比",
                judge: "teacher-summary",
                data: {
                    college: 18, //平均比例
                    schoolArray: [{
                        schoolName: "实验中学", //学校名称
                        score: 16, //分数
                    },
                        {
                            schoolName: "一中", //学校名称
                            score: 17, //分数
                        }, {
                            schoolName: "二中", //学校名称
                            score: 20, //分数
                        }, {
                            schoolName: "三中", //学校名称
                            score: 21, //分数
                        }, {
                            schoolName: "五中", //学校名称
                            score: 22, //分数
                        }
                    ]
                }

            }, {
                view: "GradeStandard", //学历分布
                style: "",
                title: "师资质量分析",
                judge: "teacher-summary",
                data: [{
                    grade: "博士研究生", //等级
                    y: 4, //比例
                    color: "#FFA843", //颜色
                    number: 16, //人数
                },
                    {
                        grade: "硕士研究生", //等级
                        y: 20, //比例
                        color: "#37C3C3", //颜色
                        number: 89, //人数
                    },
                    {
                        grade: "本科", //等级
                        y: 73, //比例
                        color: "#0478FD", //颜色
                        number: 325, //人数
                    },
                    {
                        grade: "专科", //等级
                        y: 3, //比例
                        color: "#5A66F7", //颜色
                        number: 15, //人数
                    }, {
                        grade: "专科以下", //等级
                        y: 0, //比例
                        color: "#DD4992", //颜色
                        number: 0, //人数
                    }
                ]
            }, {
                view: "TeacherProfessional", //职称分布
                style: "m-r-0",
                title: "师资质量分析",
                judge: "teacher-summary",
                data: [{
                    grade: "正高级", //分类
                    y: 1, //比例
                    color: "#FFA843", //颜色
                    number: 6, //人数
                },
                    {
                        grade: "高级", //等级
                        y: 2, //比例
                        color: "#37C3C3", //颜色
                        number: 10, //人数
                    },
                    {
                        grade: "一级", //等级
                        y: 9, //比例
                        color: "#6CA206", //颜色
                        number: 42, //人数
                    },
                    {
                        grade: "二级", //等级
                        y: 33, //比例
                        color: "#0478FD", //颜色
                        number: 145, //人数
                    }, {
                        grade: "三级", //等级
                        y: 47, //比例
                        color: "#5A66F7", //颜色
                        number: 210, //人数
                    }, {
                        grade: "无职称", //等级
                        y: 7, //比例
                        color: "#DD4992", //颜色
                        number: 32, //人数
                    }
                ]
            }, {

                view: "TeacherCourse", //学科结构
                style: "m-t-1",
                title: "师资结构分析",
                judge: "teacher-summary",
                data: [{
                    grade: "语文", //分类
                    y: 17, //比例
                    color: "#FFA843", //颜色
                    number: 76, //人数
                },
                    {
                        grade: "数学", //等级
                        y: 18, //比例
                        color: "#A1E335", //颜色
                        number: 78, //人数
                    },
                    {
                        grade: "英语", //等级
                        y: 17, //比例
                        color: "#049FFC", //颜色
                        number: 76, //人数
                    },
                    {
                        grade: "物理", //等级
                        y: 7, //比例
                        color: "#0876FC", //颜色
                        number: 32, //人数
                    }, {
                        grade: "化学", //等级
                        y: 8, //比例
                        color: "#05B0FF", //颜色
                        number: 36, //人数
                    }, {
                        grade: "生物", //等级
                        y: 8, //比例
                        color: "#15C9E0", //颜色
                        number: 36, //人数
                    }, {
                        grade: "地理", //等级
                        y: 7, //比例
                        color: "#8A49DD", //颜色
                        number: 29, //人数
                    }, {
                        grade: "历史", //等级
                        y: 7, //比例
                        color: "#DD4992", //颜色
                        number: 32, //人数
                    }, {
                        grade: "政治", //等级
                        y: 7, //比例
                        color: "#6149DD", //颜色
                        number: 31, //人数
                    }, {
                        grade: "音体美", //等级
                        y: 4, //比例
                        color: "#5A66F7", //颜色
                        number: 19, //人数
                    }
                ]
            }, {
                view: "TeacherAgeStructure", //年龄结构
                style: "m-t-1",
                title: "师资质量分析",
                judge: "teacher-summary",
                data: [{
                    grade: "50岁以上", //分类
                    y: 8, //比例
                    color: "#FFA843", //颜色
                    number: 34, //人数
                },
                    {
                        grade: "41-50", //等级
                        y: 23, //比例
                        color: "#37C3C3", //颜色
                        number: 101, //人数
                    },
                    {
                        grade: "30-40", //等级
                        y: 37, //比例
                        color: "#6CA206", //颜色
                        number: 165, //人数
                    },
                    {
                        grade: "30以下", //等级
                        y: 32, //比例
                        color: "#0478FD", //颜色
                        number: 145, //人数
                    }
                ]
            }, {
                view: "TeacherRatio", //男女比例
                style: "m-r-0 m-t-1",
                title: "师资结构分析",
                judge: "teacher-summary",
                data: [{
                    name: "男", //性别
                    data: [{
                        name: "整体", //分类
                        score: 42, //比例
                        number: 187 //人数
                    }, {
                        name: "50以上", //分类
                        score: 21, //比例
                        number: 62 //人数
                    }, {
                        name: "41-50", //分类
                        score: 46, //比例
                        number: 46 //人数
                    }, {
                        name: "30-40", //分类
                        score: 46, //比例
                        number: 76 //人数
                    }, {
                        name: "30以下", //分类
                        score: 39, //比例
                        number: 56 //人数
                    }]
                },
                    {
                        name: "女", //性别
                        data: [{
                            name: "整体", //分类
                            score: 42, //比例
                            number: 187 //人数
                        }, {
                            name: "50以上", //分类
                            score: 21, //比例
                            number: 62 //人数
                        }, {
                            name: "41-50", //分类
                            score: 46, //比例
                            number: 46 //人数
                        }, {
                            name: "30-40", //分类
                            score: 46, //比例
                            number: 76 //人数
                        }, {
                            name: "30以下", //分类
                            score: 39, //比例
                            number: 56 //人数
                        }]
                    }
                ]
            }]
        },
            {
                name: "教师教学特征",
                data: [{
                    view: "TeachFeature",
                    data: resultData,
                }]


            }
        ]
    }
}
