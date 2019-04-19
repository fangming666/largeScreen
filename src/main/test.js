for (let i = 0; i < 5; i++) {
    if (i < 5) {
        this.arr = [...this.arr, {
            "name": this.teacherArr[i], //姓名
            "subject": "数学", //科目
            "schoo": this.schoolArr[i], //学校
            "grade": this.gradeArr[i], //年级
            "academic": this.academicArr[i], //职称
            "educational": this.educationalArr[i], //学历
            "sex|1": ["男", "女"], //性别
            "phone": /^1[34578]\d[****]{4}\d{4}$/, //手机号
            "email": /^[0-9a-zA-Z_]{4,9}@gaoxin\.edu\.cn$/, //邮箱地址
            "knowledgeArr": {
                title: "知识点模块教学水平",
                view: "TeachKnowledgeArr",
                judge: "teach",
                data: [{
                    "name": "数与式", //知识点名称
                    "score|1-100": 1, //比例
                }, {
                    "name": "统计与概率", //知识点名称
                    "score|1-100": 1, //比例
                }, {
                    "name": "方程与不等式", //知识点名称
                    "score|1-100": 1, //比例
                }, {
                    "name": "图形的变化", //知识点名称
                    "score|1-100": 1, //比例
                }, {
                    "name": "函数", //知识点名称
                    "score|1-100": 1, //比例
                }, {
                    "name": "图形的性质", //知识点名称
                    "score|1-100": 1, //比例
                }, ]
            },
            "ability": {
                title: "能力模块教学水平",
                view: "TeachAbility",
                judge: "teach",
                data: [{
                    "name": "数形结合", //能力名称
                    "score|1-100": 1, //比例
                },
                    {
                        "name": "空间观念", //能力名称
                        "score|1-100": 1, //比例
                    }, {
                        "name": "思想方法", //能力名称
                        "score|1-100": 1, //比例
                    }, {
                        "name": "创新意识", //能力名称
                        "score|1-100": 1, //比例
                    }, {
                        "name": "推理能力", //能力名称
                        "score|1-100": 1, //比例
                    }, {
                        "name": "运算能力", //能力名称
                        "score|1-100": 1, //比例
                    }
                ]
            },
            "increment": {
                view: "TeachIncrement",
                judge: "teach",
                title: "学生增值指数",
                data: [{
                    "name": "尖子生",
                    "score|1-100": 1, //起点水平
                    "endScore|1-100": 1, //终点水平
                }, {
                    "name": "上线生",
                    "score|1-100": 1, //起点水平
                    "endScore|1-100": 1, //终点水平
                }, {
                    "name": "普通生",
                    "score|1-100": 1, //起点水平
                    "endScore|1-100": 1, //终点水平
                }, {
                    "name": "后进生",
                    "score|1-100": 1, //起点水平
                    "endScore|1-100": 1, //终点水平
                }]
            },
            "stabilize": {
                view: "TeachStabilize",
                judge: "teach",
                title: "学生稳定指数",
                data: [{
                    name: "尖子生",
                    "score|1-100": 1
                }, {
                    name: "上线生",
                    "score|1-100": 1
                }, {
                    name: "普通生",
                    "score|1-100": 1
                }, {
                    name: "后进生",
                    "score|1-100": 1
                }]
            }
        }]
    }
};
