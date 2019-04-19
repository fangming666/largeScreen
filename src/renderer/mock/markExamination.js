export default {
 data:{
     msg: "",
     code: 200,
     data: {
         examTitle: "七年级 2018-2019学年度第二学期期末考试", //考试名称
         data: [{
             view: "GeneralProgressMonitoring", //全科进度监控
             title: "全科进度监控",
             judge: "mark-examination",
             data: [{
                 name: "语文", //科目名称
                 total: 23904, //总量
                 finish: 12762, //已完成
             }, {
                 name: "数学", //科目名称
                 total: 19920, //总量
                 finish: 10170, //已完成
             },
                 {
                     name: "英语", //科目名称
                     total: 23904, //总量
                     finish: 9974, //已完成
                 }, {
                     name: "生物", //科目名称
                     total: 19920, //总量
                     finish: 10170, //已完成
                 }, {
                     name: "历史", //科目名称
                     total: 23904, //总量
                     finish: 12762, //已完成
                 }, {
                     name: "地理", //科目名称
                     total: 23904, //总量
                     finish: 9974, //已完成
                 }, {
                     name: "道德与法制", //科目名称
                     total: 19920, //总量
                     finish: 10170, //已完成
                 }
             ]
         }, {
             view: "GeneralProgressSingle", //单科进度监控
             title: "单科进度监控",
             judge: "mark-examination",
             data: [{
                 name: "语文", //科目
                 total: 23904, //总量
                 finish: 12762, //已完成
                 rubricArr: [{
                     rubric: "6", //题目名称
                     allAverage: 4.51, //总平均分
                     handle: 0, //已处理异常
                     untreated: 0, //未处理
                     circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                     circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                     ensembleAverage: {
                         name: "总体平均", //教师名称
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, //总体平均
                     teacherArr: [{
                         name: "崔雨", //教师名称
                         total: 596, //全部数量
                         finish: 503, //当前数量
                         average: 4.73, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "王洪霞", //教师名称
                         total: 596, //全部数量
                         finish: 490, //当前数量
                         average: 4.28, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "王杰", //教师名称
                         total: 596, //全部数量
                         finish: 460, //当前数量
                         average: 4.73, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "李明", //教师名称
                         total: 596, //全部数量
                         finish: 406, //当前数量
                         average: 4.28, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }] //老师数组
                 }, {
                     rubric: "7-8", //题目名称
                     allAverage: 3.81, //总平均分
                     handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                     untreated: 0, //未处理
                     circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                     circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                     ensembleAverage: {
                         name: "总体平均", //教师名称
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, //总体平均
                     teacherArr: [{
                         name: "王广三", //教师名称
                         total: 1328, //全部数量
                         finish: 794, //当前数量

                         average: 4.03, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "徐杏容", //教师名称
                         total: 1328, //全部数量
                         finish: 806, //当前数量

                         average: 3.75, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "于玲", //教师名称
                         total: 1328, //全部数量
                         finish: 773, //当前数量

                         average: 3.63, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }] //老师数组
                 }, {
                     rubric: "9-10", //题目名称
                     allAverage: 3.61, //总平均分
                     handle: 0, //已处理异常
                     untreated: 0, //未处理
                     circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                     circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                     ensembleAverage: {
                         name: "总体平均", //教师名称
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, //总体平均
                     teacherArr: [{
                         name: "赵云岐", //教师名称
                         total: 1328, //全部数量
                         finish: 779, //当前数量

                         average: 3.82, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "孙瑞霞", //教师名称
                         total: 1328, //全部数量
                         finish: 755, //当前数量

                         average: 3.53, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "王凤", //教师名称
                         total: 1328, //全部数量
                         finish: 799, //当前数量

                         average: 3.49, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势

                     }] //老师数组
                 }, {
                     rubric: "11-13", //题目名称
                     allAverage: 4.65, //总平均分
                     circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                     circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                     handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                     untreated: Math.floor(Math.random() * 10 + 1), //未处理
                     ensembleAverage: {
                         name: "总体平均", //教师名称
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, //总体平均
                     teacherArr: [{
                         name: "王修瑞", //教师名称
                         total: 1992, //全部数量
                         finish: 945, //当前数量

                         average: 4.58, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "颜文杰", //教师名称
                         total: 1992, //全部数量
                         finish: 970, //当前数量

                         average: 4.71, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势

                     }] //老师数组
                 }, {
                     rubric: "14-15", //题目名称
                     handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                     untreated: Math.floor(Math.random() * 10 + 1), //未处理
                     circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                     circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                     ensembleAverage: {
                         name: "总体平均", //教师名称
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, //总体平均
                     teacherArr: [{
                         name: "杜成刚", //教师名称
                         total: 1328, //全部数量
                         finish: 789, //当前数量

                         average: 2.83, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "王志良", //教师名称
                         total: 1328, //全部数量
                         finish: 780, //当前数量

                         average: 2.73, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "孙伟", //教师名称
                         total: 1328, //全部数量
                         finish: 742, //当前数量

                         average: 2.68, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                         }, ] //趋势

                     }] //老师数组
                 }, {
                     rubric: "作文", //题目名称
                     allAverage: 2.75, //总平均分
                     handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                     untreated: Math.floor(Math.random() * 10 + 1), //未处理
                     circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                     circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                     ensembleAverage: {
                         name: "总体平均", //教师名称
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, ] //趋势
                     }, //总体平均
                     teacherArr: [{
                         name: "郭长东", //教师名称
                         total: 664, //全部数量
                         finish: 212, //当前数量
                         average: 2.17, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "梁立娟", //教师名称
                         total: 664, //全部数量
                         finish: 253, //当前数量

                         average: 1.9, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "张志凤", //教师名称
                         total: 664, //全部数量
                         finish: 153, //当前数量

                         average: 3.9, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "张敏", //教师名称
                         total: 664, //全部数量
                         finish: 365, //当前数量

                         average: 3.2, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "耿莹莹", //教师名称
                         total: 664, //全部数量
                         finish: 336, //当前数量

                         average: 2.9, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, ] //趋势
                     }, {
                         name: "赵海军", //教师名称
                         total: 664, //全部数量
                         finish: 323, //当前数量
                         average: 2.6, //平均分
                         trend: [{
                             time: "00:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "00:45",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:00",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:15",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, {
                             time: "01:30",
                             score: (Math.random() * (36 - 38 + 1) + 36).toFixed(2)
                         }, ] //趋势
                     }] //老师数组
                 }] //题目数组
             },
                 {
                     name: "数学", //科目名称
                     total: 19920, //总量
                     finish: 10170, //已完成
                     rubricArr: [{
                         rubric: "填空", //题目名称
                         allAverage: 5.48, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: 0, //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "吴艳君", //教师名称
                             total: 1328, //全部数量
                             finish: 882, //当前数量
                             average: 5.52, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "张涛", //教师名称
                             total: 1328, //全部数量
                             finish: 747, //当前数量
                             average: 5.38, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "王秀芳", //教师名称
                             total: 1328, //全部数量
                             finish: 893, //当前数量
                             average: 5.55, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, ] //老师数组
                     }, {
                         rubric: "21", //题目名称
                         allAverage: 4.37, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "王兆岩", //教师名称
                             total: 1992, //全部数量
                             finish: 863, //当前数量
                             average: 4.39, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "杨海龙", //教师名称
                             total: 1992, //全部数量
                             finish: 903, //当前数量
                             average: 4.34, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }] //老师数组
                     },
                         {
                             rubric: "22", //题目名称
                             allAverage: 3.35, //总平均分
                             handle: 0, //已处理异常
                             untreated: 0, //未处理
                             circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                             circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                             ensembleAverage: {
                                 name: "总体平均", //教师名称
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, //总体平均
                             teacherArr: [{
                                 name: "张瑞勇", //教师名称
                                 total: 1328, //全部数量
                                 finish: 716, //当前数量
                                 average: 3.58, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "郭丰雪", //教师名称
                                 total: 1328, //全部数量
                                 finish: 830, //当前数量
                                 average: 3.18, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "王洁", //教师名称
                                 total: 1328, //全部数量
                                 finish: 687, //当前数量
                                 average: 3.3, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }] //老师数组
                         },
                         {
                             rubric: "23", //题目名称
                             allAverage: 4.36, //总平均分
                             handle: 0, //已处理异常
                             untreated: 0, //未处理
                             circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                             circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                             ensembleAverage: {
                                 name: "总体平均", //教师名称
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, //总体平均
                             teacherArr: [{
                                 name: "何本红", //教师名称
                                 total: 1992, //全部数量
                                 finish: 663, //当前数量
                                 average: 4.36, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "王承梅", //教师名称
                                 total: 1992, //全部数量
                                 finish: 785, //当前数量
                                 average: 4.39, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }] //老师数组
                         },
                         {
                             rubric: "24", //题目名称
                             allAverage: 5.26, //总平均分
                             handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                             untreated: Math.floor(Math.random() * 10 + 1), //未处理
                             circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷

                             circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                             ensembleAverage: {
                                 name: "总体平均", //教师名称
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, //总体平均
                             teacherArr: [{
                                 name: "吕晓婷", //教师名称
                                 total: 1328, //全部数量
                                 finish: 648, //当前数量
                                 average: 5.26, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "范存辉", //教师名称
                                 total: 1328, //全部数量
                                 finish: 795, //当前数量
                                 average: 5.24, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "陈志红", //教师名称
                                 total: 1328, //全部数量
                                 finish: 758, //当前数量
                                 average: 5.29, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }] //老师数组
                         },
                     ]
                 }, {
                     name: "英语", //科目名称
                     total: 23904, //总量
                     finish: 9974, //已完成
                     rubricArr: [{
                         rubric: "6", //题目名称
                         allAverage: 3.36, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "房延勇", //教师名称
                             total: 1328, //全部数量
                             finish: 547, //当前数量
                             average: 3.34, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "李振云", //教师名称
                             total: 1328, //全部数量
                             finish: 637, //当前数量
                             average: 3.34, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }, {
                             name: "赵璐", //教师名称
                             total: 1328, //全部数量
                             finish: 711, //当前数量
                             average: 3.43, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "7", //题目名称
                         allAverage: 4.2, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "孙凤华", //教师名称
                             total: 1328, //全部数量
                             finish: 742, //当前数量
                             average: 4.78, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "张守双", //教师名称
                             total: 1328, //全部数量
                             finish: 566, //当前数量
                             average: 3.74, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }, {
                             name: "王欣", //教师名称
                             total: 1328, //全部数量
                             finish: 700, //当前数量
                             average: 4.09, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "8", //题目名称
                         allAverage: 3.82, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "刘新胜", //教师名称
                             total: 1328, //全部数量
                             finish: 572, //当前数量
                             average: 4.07, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "宋冬岭", //教师名称
                             total: 1328, //全部数量
                             finish: 557, //当前数量
                             average: 3.69, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }, {
                             name: "王军强", //教师名称
                             total: 1328, //全部数量
                             finish: 663, //当前数量
                             average: 3.71, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "9", //题目名称
                         allAverage: 4.44, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "单秀英", //教师名称
                             total: 1328, //全部数量
                             finish: 715, //当前数量
                             average: 6.01, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "张廷芳", //教师名称
                             total: 1328, //全部数量
                             finish: 748, //当前数量
                             average: 3.6, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }, {
                             name: "赵 华", //教师名称
                             total: 1328, //全部数量
                             finish: 758, //当前数量
                             average: 3.72, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "10", //题目名称
                         allAverage: 7.82, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "任霞", //教师名称
                             total: 1593, //全部数量
                             finish: 387, //当前数量
                             average: 7.37, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "李仁仁", //教师名称
                             total: 1593, //全部数量
                             finish: 432, //当前数量
                             average: 7.59, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }, {
                             name: "王明良", //教师名称
                             total: 1593, //全部数量
                             finish: 415, //当前数量
                             average: 9.34, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "郭彬", //教师名称
                             total: 1593, //全部数量
                             finish: 421, //当前数量
                             average: 7.22, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "贾占海", //教师名称
                             total: 1593, //全部数量
                             finish: 397, //当前数量
                             average: 7.59, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }] //老师数组
                     }, ]
                 }, {
                     name: "生物", //科目名称
                     total: 19920, //总量
                     finish: 10170, //已完成
                     rubricArr: [{
                         rubric: "填空", //题目名称
                         allAverage: 5.48, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "吴艳君", //教师名称
                             total: 1328, //全部数量
                             finish: 882, //当前数量
                             average: 5.52, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "张涛", //教师名称
                             total: 1328, //全部数量
                             finish: 747, //当前数量
                             average: 5.38, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "王秀芳", //教师名称
                             total: 1328, //全部数量
                             finish: 893, //当前数量
                             average: 5.55, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, ] //老师数组
                     }, {
                         rubric: "21", //题目名称
                         allAverage: 4.37, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "王兆岩", //教师名称
                             total: 1992, //全部数量
                             finish: 863, //当前数量
                             average: 4.39, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "杨海龙", //教师名称
                             total: 1992, //全部数量
                             finish: 903, //当前数量
                             average: 4.34, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }] //老师数组
                     },
                         {
                             rubric: "22", //题目名称
                             allAverage: 3.35, //总平均分
                             handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                             untreated: Math.floor(Math.random() * 10 + 1), //未处理
                             circulateHandle: 0, //已处理仲裁卷
                             circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                             ensembleAverage: {
                                 name: "总体平均", //教师名称
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, //总体平均
                             teacherArr: [{
                                 name: "张瑞勇", //教师名称
                                 total: 1328, //全部数量
                                 finish: 716, //当前数量
                                 average: 3.58, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "郭丰雪", //教师名称
                                 total: 1328, //全部数量
                                 finish: 830, //当前数量
                                 average: 3.18, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "王洁", //教师名称
                                 total: 1328, //全部数量
                                 finish: 687, //当前数量
                                 average: 3.3, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }] //老师数组
                         },
                         {
                             rubric: "23", //题目名称
                             allAverage: 4.36, //总平均分
                             handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                             untreated: Math.floor(Math.random() * 10 + 1), //未处理
                             circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                             circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                             ensembleAverage: {
                                 name: "总体平均", //教师名称
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, //总体平均
                             teacherArr: [{
                                 name: "何本红", //教师名称
                                 total: 1992, //全部数量
                                 finish: 663, //当前数量
                                 average: 4.36, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "王承梅", //教师名称
                                 total: 1992, //全部数量
                                 finish: 785, //当前数量
                                 average: 4.39, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }] //老师数组
                         },
                         {
                             rubric: "24", //题目名称
                             allAverage: 5.26, //总平均分
                             handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                             untreated: Math.floor(Math.random() * 10 + 1), //未处理
                             circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                             circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                             ensembleAverage: {
                                 name: "总体平均", //教师名称
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, //总体平均
                             teacherArr: [{
                                 name: "吕晓婷", //教师名称
                                 total: 1328, //全部数量
                                 finish: 648, //当前数量
                                 average: 5.26, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "范存辉", //教师名称
                                 total: 1328, //全部数量
                                 finish: 795, //当前数量
                                 average: 5.24, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "陈志红", //教师名称
                                 total: 1328, //全部数量
                                 finish: 758, //当前数量
                                 average: 5.29, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }] //老师数组
                         },
                     ]
                 },
                 {
                     name: "历史", //科目
                     total: 23904, //总量
                     finish: 12762, //已完成
                     rubricArr: [{
                         rubric: "6", //题目名称
                         allAverage: 4.51, //总平均分
                         handle: 0, //已处理异常
                         untreated: 0, //未处理
                         circulateHandle: 0, //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "崔雨", //教师名称
                             total: 1992, //全部数量
                             finish: 963, //当前数量
                             average: 4.73, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "王洪霞", //教师名称
                             total: 1992, //全部数量
                             finish: 896, //当前数量
                             average: 4.28, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "7-8", //题目名称
                         allAverage: 3.81, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷

                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "王广三", //教师名称
                             total: 1328, //全部数量
                             finish: 794, //当前数量

                             average: 4.03, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "徐杏容", //教师名称
                             total: 1328, //全部数量
                             finish: 806, //当前数量

                             average: 3.75, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "于玲", //教师名称
                             total: 1328, //全部数量
                             finish: 773, //当前数量

                             average: 3.63, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }] //老师数组
                     }, {
                         rubric: "9-10", //题目名称
                         allAverage: 3.61, //总平均分
                         handle: 0, //已处理异常
                         untreated: 0, //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷

                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "赵云岐", //教师名称
                             total: 1328, //全部数量
                             finish: 779, //当前数量

                             average: 3.82, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "孙瑞霞", //教师名称
                             total: 1328, //全部数量
                             finish: 755, //当前数量

                             average: 3.53, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "王凤", //教师名称
                             total: 1328, //全部数量
                             finish: 799, //当前数量

                             average: 3.49, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "11-13", //题目名称
                         allAverage: 4.65, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷

                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "王修瑞", //教师名称
                             total: 1992, //全部数量
                             finish: 945, //当前数量

                             average: 4.58, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "颜文杰", //教师名称
                             total: 1992, //全部数量
                             finish: 970, //当前数量

                             average: 4.71, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "14-15", //题目名称
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "杜成刚", //教师名称
                             total: 1328, //全部数量
                             finish: 789, //当前数量

                             average: 2.83, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "王志良", //教师名称
                             total: 1328, //全部数量
                             finish: 780, //当前数量

                             average: 2.73, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "孙伟", //教师名称
                             total: 1328, //全部数量
                             finish: 742, //当前数量

                             average: 2.68, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "15", //题目名称
                         allAverage: 2.75, //总平均分
                         handle: 0, //已处理异常
                         untreated: 0, //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "郭长东", //教师名称
                             total: 664, //全部数量
                             finish: 212, //当前数量
                             average: 2.17, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "梁立娟", //教师名称
                             total: 664, //全部数量
                             finish: 253, //当前数量

                             average: 1.9, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "张志凤", //教师名称
                             total: 664, //全部数量
                             finish: 153, //当前数量

                             average: 3.9, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "张敏", //教师名称
                             total: 664, //全部数量
                             finish: 365, //当前数量

                             average: 3.2, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "耿莹莹", //教师名称
                             total: 664, //全部数量
                             finish: 336, //当前数量

                             average: 2.9, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "赵海军", //教师名称
                             total: 664, //全部数量
                             finish: 323, //当前数量
                             average: 2.6, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }] //老师数组
                     }] //题目数组
                 }, {
                     name: "地理", //科目名称
                     total: 23904, //总量
                     finish: 9974, //已完成
                     rubricArr: [{
                         rubric: "6", //题目名称
                         allAverage: 3.36, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: 0, //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "房延勇", //教师名称
                             total: 1328, //全部数量
                             finish: 547, //当前数量
                             average: 3.34, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "李振云", //教师名称
                             total: 1328, //全部数量
                             finish: 637, //当前数量
                             average: 3.34, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }, {
                             name: "赵璐", //教师名称
                             total: 1328, //全部数量
                             finish: 711, //当前数量
                             average: 3.43, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "7", //题目名称
                         allAverage: 4.2, //总平均分
                         handle: 0, //已处理异常
                         untreated: 0, //未处理
                         circulateHandle: Math.floor(Math.random() * 10 + 1), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "孙凤华", //教师名称
                             total: 1328, //全部数量
                             finish: 742, //当前数量
                             average: 4.78, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "张守双", //教师名称
                             total: 1328, //全部数量
                             finish: 566, //当前数量
                             average: 3.74, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }, {
                             name: "王欣", //教师名称
                             total: 1328, //全部数量
                             finish: 700, //当前数量
                             average: 4.09, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "8", //题目名称
                         allAverage: 3.82, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "刘新胜", //教师名称
                             total: 1328, //全部数量
                             finish: 572, //当前数量
                             average: 4.07, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "宋冬岭", //教师名称
                             total: 1328, //全部数量
                             finish: 557, //当前数量
                             average: 3.69, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }, {
                             name: "王军强", //教师名称
                             total: 1328, //全部数量
                             finish: 663, //当前数量
                             average: 3.71, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "9", //题目名称
                         allAverage: 4.44, //总平均分
                         handle: 0, //已处理异常
                         untreated: 0, //未处理
                         circulateHandle: Math.floor(Math.random() * (100 - 20 + 1) + 20), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "单秀英", //教师名称
                             total: 1328, //全部数量
                             finish: 715, //当前数量
                             average: 6.01, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "张廷芳", //教师名称
                             total: 1328, //全部数量
                             finish: 748, //当前数量
                             average: 3.6, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }, {
                             name: "赵 华", //教师名称
                             total: 1328, //全部数量
                             finish: 758, //当前数量
                             average: 3.72, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }] //老师数组
                     }, {
                         rubric: "10", //题目名称
                         allAverage: 7.82, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: 0, //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "任霞", //教师名称
                             total: 1593, //全部数量
                             finish: 387, //当前数量
                             average: 7.37, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "李仁仁", //教师名称
                             total: 1593, //全部数量
                             finish: 432, //当前数量
                             average: 7.59, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势

                         }, {
                             name: "王明良", //教师名称
                             total: 1593, //全部数量
                             finish: 415, //当前数量
                             average: 9.34, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "郭彬", //教师名称
                             total: 1593, //全部数量
                             finish: 421, //当前数量
                             average: 7.22, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "贾占海", //教师名称
                             total: 1593, //全部数量
                             finish: 397, //当前数量
                             average: 7.59, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }] //老师数组
                     }, ]
                 },
                 {
                     name: "道德与法制", //科目名称
                     total: 19920, //总量
                     finish: 10170, //已完成
                     rubricArr: [{
                         rubric: "填空", //题目名称
                         allAverage: 5.48, //总平均分
                         handle: 0, //已处理异常
                         untreated: 0, //未处理
                         circulateHandle: Math.floor(Math.random() * 10 + 1), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "吴艳君", //教师名称
                             total: 1328, //全部数量
                             finish: 882, //当前数量
                             average: 5.52, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "张涛", //教师名称
                             total: 1328, //全部数量
                             finish: 747, //当前数量
                             average: 5.38, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "王秀芳", //教师名称
                             total: 1328, //全部数量
                             finish: 893, //当前数量
                             average: 5.55, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, ] //老师数组
                     }, {
                         rubric: "21", //题目名称
                         allAverage: 4.37, //总平均分
                         handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                         untreated: Math.floor(Math.random() * 10 + 1), //未处理
                         circulateHandle: Math.floor(Math.random() * 10 + 1), //已处理仲裁卷
                         circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                         ensembleAverage: {
                             name: "总体平均", //教师名称
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, //总体平均
                         teacherArr: [{
                             name: "王兆岩", //教师名称
                             total: 1992, //全部数量
                             finish: 863, //当前数量
                             average: 4.39, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }, {
                             name: "杨海龙", //教师名称
                             total: 1992, //全部数量
                             finish: 903, //当前数量
                             average: 4.34, //平均分
                             trend: [{
                                 time: "00:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "00:45",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:00",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:15",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, {
                                 time: "01:30",
                                 score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                             }, ] //趋势
                         }] //老师数组
                     },
                         {
                             rubric: "22", //题目名称
                             allAverage: 3.35, //总平均分
                             handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                             untreated: Math.floor(Math.random() * 10 + 1), //未处理
                             circulateHandle: Math.floor(Math.random() * 10 + 1), //已处理仲裁卷
                             circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                             ensembleAverage: {
                                 name: "总体平均", //教师名称
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, //总体平均
                             teacherArr: [{
                                 name: "张瑞勇", //教师名称
                                 total: 1328, //全部数量
                                 finish: 716, //当前数量
                                 average: 3.58, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "郭丰雪", //教师名称
                                 total: 1328, //全部数量
                                 finish: 830, //当前数量
                                 average: 3.18, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "王洁", //教师名称
                                 total: 1328, //全部数量
                                 finish: 687, //当前数量
                                 average: 3.3, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }] //老师数组
                         },
                         {
                             rubric: "23", //题目名称
                             allAverage: 4.36, //总平均分
                             handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                             untreated: Math.floor(Math.random() * 10 + 1), //未处理
                             circulateHandle: Math.floor(Math.random() * 10 + 1), //已处理仲裁卷
                             circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                             ensembleAverage: {
                                 name: "总体平均", //教师名称
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, //总体平均
                             teacherArr: [{
                                 name: "何本红", //教师名称
                                 total: 1992, //全部数量
                                 finish: 663, //当前数量
                                 average: 4.36, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "王承梅", //教师名称
                                 total: 1992, //全部数量
                                 finish: 785, //当前数量
                                 average: 4.39, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }] //老师数组
                         },
                         {
                             rubric: "24", //题目名称
                             allAverage: 5.26, //总平均分
                             handle: Math.floor(Math.random() * 10 + 1), //已处理异常
                             untreated: Math.floor(Math.random() * 10 + 1), //未处理
                             circulateHandle: Math.floor(Math.random() * 50 + 1), //已处理仲裁卷
                             circulateUntreated: Math.floor(Math.random() * (270 - 35 + 1) + 35), //已处理仲裁卷
                             ensembleAverage: {
                                 name: "总体平均", //教师名称
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, //总体平均
                             teacherArr: [{
                                 name: "吕晓婷", //教师名称
                                 total: 1328, //全部数量
                                 finish: 648, //当前数量
                                 average: 5.26, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "范存辉", //教师名称
                                 total: 1328, //全部数量
                                 finish: 795, //当前数量
                                 average: 5.24, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }, {
                                 name: "陈志红", //教师名称
                                 total: 1328, //全部数量
                                 finish: 758, //当前数量
                                 average: 5.29, //平均分
                                 trend: [{
                                     time: "00:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "00:45",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:00",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:15",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, {
                                     time: "01:30",
                                     score: (Math.random() * (6 - 4 + 1) + 4).toFixed(2)
                                 }, ] //趋势
                             }] //老师数组
                         },
                     ]
                 }
             ]
         }, {
             view: "QuestionReviewMonitoring", //小题评阅监控
             title: "小题评阅监控",
             judge: "mark-examination",
             style: "m-r-0"

         }, {
             view: "ExceptionHandling", //小题评阅监控
             title: "单科异常处理",
             judge: "mark-examination",
             style: "m-t-1"
         }, {
             view: "Distance", //小题评阅监控
             title: "仲裁卷处理",
             judge: "mark-examination",
             style: "m-t-1"
         }, {
             view: "ReviewContrast", //小题评阅监控
             title: "小题评阅对比",
             judge: "mark-examination",
             style: "m-t-1"

         }, {
             view: "ReviewTrend",
             title: "小题评阅趋势变化",
             judge: "mark-examination",
             style: "m-t-1 m-r-0"
         }]
     }
 }

}
