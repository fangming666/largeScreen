/**
 * 学校平均分返回不同的数组
 * @param {object[]} initArr 传进来的数组
 * @return {string[]} getSchoolNameArr 学校名称的数组
 * @return {number[]} getSchoolScoreArr 学校分数的数组
 * @return {number[]} getSchoolScaleArr 学校比例的数组
 * */
export class SchoolInfo {
    constructor(initArr) {
        this.initArr = initArr;
        this.colorMap = new Map([
            [0, "#3AB0C6"], [1, "#5EA8F8"], [2, "#5966EA"], [3, "#5AD098"], [4, "#3AB0C6"], [5, "#5EA8F8"]]);

    }

    getSchoolNameArr() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.schoolName];
            return arr
        }, [])
    }

    getSchoolScoreArr(reqArr = this.initArr) {
        if (reqArr) {
            return reqArr.reduce((arr, item) => {
                arr = [...arr, +item.score];
                return arr
            }, [])
        }
    }

    //返回负值的arr，方便使用金字塔图
    getLoadScore() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, -item.score];
            return arr
        }, [])
    }

    getSchoolScaleArr() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.scale];
            return arr
        }, [])
    }

    getNameArr() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.name];
            return arr
        }, [])
    }

    getTimeArr() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.time];
            return arr
        }, [])
    }

    getClassNameArr() {
        if (this.initArr) {
            return this.initArr.reduce((arr, item) => {
                arr = [...arr, item.className];
                return arr
            }, [])
        }
    }

    //返回本次得分率
    getThisTime() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.thisTime];
            return arr
        }, [])
    }

    //返回上次得分率
    getLastTime() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.lastTime];
            return arr
        }, [])
    }

    //返回进步幅度（本地得分率-上次得分率）
    getRangeAdvancement(reqArr) {
        return reqArr.reduce((arr, item) => {
            arr = [...arr, {
                name: item.name,
                thisTime: item.thisTime,
                lastTime: item.lastTime,
                end: +Number.parseFloat(item.thisTime - item.lastTime).toFixed(2)
            }];
            return arr;
        }, [])
    }

    //返回班级增值的数组
    getAddedScoreArr() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, {
                y: item.score, color: {
                    linearGradient: {x1: 10, x2: 10, y1: 0, y2: 1},
                    stops: [
                        [0, item.score > 0 ? '#EA9859' : '#0075CF'],
                        [1, item.score > 0 ? '#EA6D59' : '#00CFEA']
                    ]
                }
            }];
            return arr
        }, [])
    }

    //联考的数据
    getCollegeScore() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.collegeScore];
            return arr
        }, [])
    }

    //返回单个知识点的班级
    getKnowClassArr(syllable) {
        for (let child of this.initArr) {
            if (child.name === syllable) {
                return child.classArr;
            }
        }
    }

    //返回只有题目的数组
    getRubricArr(reqArr) {
        return reqArr.reduce((arr, item) => {
            arr = [...arr, item.rubricName];
            return arr;
        }, [])
    }

    //返回校得分率
    getSchoolScore(reqArr) {
        return reqArr.reduce((arr, item) => {
            arr = [...arr, item.schoolScore];
            return arr;
        }, [])
    }

    //返回班得分率
    getClassScore(reqArr) {
        return reqArr.reduce((arr, item) => {
            arr = [...arr, item.classScore];
            return arr;
        }, [])
    }

    //返回终点水平
    getEndScore() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.endScore];
            return arr;
        }, [])
    }

    //返回增值指数
    getValueAdded() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.endScore - item.score];
            return arr;
        }, [])
    }

    //返回已完成
    getFinish() {
        return this.initArr.reduce((arr, item, index) => {
            arr = [...arr, {y: item.finish, color: this.colorMap.get(index)}];
            return arr;
        }, [])
    }

    getAverage() {
        return this.initArr.reduce((arr, item, index) => {
            arr = [...arr, {y: item.average, color: this.colorMap.get(index)}];
            return arr;
        }, [])
    }

    //返回已完成比例
    getFinishScore() {
        return this.initArr.reduce((arr, item, index) => {
            arr = [...arr, {y: item.finish / item.total * 100, color: index ? '#0E6FCA' : '#E96148',}];
            return arr;
        }, [])
    }

    //返回未完成比例
    getRoughScore() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, (item.total - item.finish) / item.total * 100];
            return arr;
        }, [])
    }

    //返回题目名称
    getRubric() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.rubric];
            return arr;
        }, [])
    }

    //返回新的带已完成与未完成参数的数组
    getFinishRough() {
        return this.initArr.reduce((arr, item) => {
            let result = {total: 0, finish: 0};
            for (let child of item.teacherArr) {
                result = {total: child.total + result.total, finish: child.finish + result.finish}
            }
            arr = [...arr, result];
            return arr;
        }, [])
    }

    //返回教师数组
    getTeacherArr(rubric) {
        let arr = [];
        for (let child of this.initArr) {
            if (rubric === child.rubric) {
                arr = child.teacherArr;
                break;
            }
        }
        return arr;
    }

    //返回总体平均分变化趋势
    getEnsembleAverage(rubricArr) {
        let arr = [], resultArr = [];
        for (let child of rubricArr) {
            arr = [...arr, child.data]
        }
        for (let other in arr[0]) {
            let result = 0;
            for (let index in arr) {
                result = result + arr[index][other];
            }
            resultArr = [...resultArr, +(result / arr.length).toFixed(2)]
        }
        return resultArr;
    }

    //返回总平均分
    getAllAverag(rubric) {
        let average = "";
        for (let child of this.initArr) {
            if (rubric === child.rubric) {
                average = child.allAverage;
            }
        }
        return average;
    }

    //已处理异常
    getHandle() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.handle];
            return arr;
        }, [])
    }

    //未处理异常untreated
    getUntreated() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.untreated];
            return arr;
        }, [])
    }

    //已处理重裁
    getCirculateHandle() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.circulateHandle];
            return arr;
        }, [])
    }

    //未处理仲裁
    getCirculateUntreated() {
        return this.initArr.reduce((arr, item) => {
            arr = [...arr, item.circulateUntreated];
            return arr;
        }, [])
    }

    //返回时间段的数组
    getTrend() {
        return this.initArr.reduce((arr, item, index) => {
            let initJson = {name: item.name};
            initJson.data = this.getSchoolScoreArr(item.trend);
            initJson.color = this.colorMap.get(index);
            arr = [...arr, initJson];
            return arr;
        }, [])
    }
}
