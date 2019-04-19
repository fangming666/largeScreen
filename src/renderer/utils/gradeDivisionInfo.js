/**
 * 学校等级划分/学校等级变化
 * @param {object[]} reqArr 需要处理的数组
 * @param {string} grade 传进来的等级
 * @param {boolean} gradeJudge 是否只有一个不能取消等级的判断
 * @return {object[]} getCore 返回已经处理好的可在学校等级划分图表中使用的数组
 *@return {object[]} getGradeCore 根据等级返回对应的数组
 * @return {object[]} getGradeArr 返回所有等级的数组，根据active字段来判定是否激活
 *
 * @return {object[]} getRate 返回在学校等级变化中需要使用的数据
 * */
import Compare from "./compare";
import SuperaverageTrendInfo from "./SuperaverageTrendInfo";

export default class GradeDivisionInfo extends Compare {
    constructor(reqArr, grade = "A") {
        super();
        this.reqArr = reqArr;
        this.grade = grade;
        this.gradeJudge = false
    }


    getCore() {
        return this.reqArr.reduce((initArr, item, index) => {
            initArr = [...initArr, {
                name: item.name, color: item.color, stack: item.stack,
                key: index,
                data: item.data.reduce((otherArr, otherItem) => {
                    otherArr = [...otherArr, otherItem.scale];
                    return otherArr;
                }, [])
            }];
            return initArr;
        }, []);
    }

    getRate() {
        return this.reqArr.reduce((initArr, item, index) => {
            initArr = [...initArr, {
                name: item.name,
                key: index,
                data: new SuperaverageTrendInfo(item.data).getResult()
            }];
            return initArr;
        }, []);
    }

    getGradeCore(gradeArr, coreArr, reqGradeJudge) {
        let resultCoreArr = coreArr;
        if (!reqGradeJudge) {
            for (let index in this.reqArr) {
                if (this.reqArr[index].name === this.grade) {
                    let result = gradeArr[index].active;
                    if (result) {
                        resultCoreArr = [...resultCoreArr, this.reqArr[index]].sort(this.sortUp("key"));
                    } else {
                        for (let i in resultCoreArr) {
                            if (this.grade === resultCoreArr[i].name) {
                                resultCoreArr.splice(i, 1);
                            }
                        }
                    }
                    break;
                }
            }
        }
        return resultCoreArr;
    }

    getGradeRate(gradeArr, rateArr,reqGradeJudge) {
        let resultRateArr = rateArr;
        if(!reqGradeJudge){
            for (let index in this.reqArr) {
                if (this.reqArr[index].name === this.grade) {
                    let result = gradeArr[index].active;
                    if (result) {
                        if (resultRateArr.length) {
                            resultRateArr = resultRateArr.reduce((initArr, rateItem, rateIndex) => {
                                initArr = [...initArr, {
                                    data:
                                        rateItem.data.reduce((endArr, endItem, endIndex) => {
                                            endArr = [...endArr, Number.parseFloat((+endItem + this.reqArr[index].data[rateIndex].data[endIndex]).toFixed(2))];
                                            return endArr;
                                        }, [])
                                    , name: rateItem.name,
                                    color: rateItem.color,
                                }];
                                return initArr;
                            }, []);
                        } else {
                            resultRateArr = [...this.reqArr[index].data]
                        }
                    } else {
                        resultRateArr = resultRateArr.reduce((initArr, rateItem, rateIndex) => {
                            initArr = [...initArr, {
                                data:
                                    rateItem.data.reduce((endArr, endItem, endIndex) => {
                                        endArr = [...endArr, Number.parseFloat((+endItem - this.reqArr[index].data[rateIndex].data[endIndex]).toFixed(2))];
                                        return endArr;
                                    }, [])
                                , name: rateItem.name,
                                color: rateItem.color,
                            }];
                            return initArr;
                        }, []);

                    }
                }
            }
        }
        return resultRateArr;
    }


    getGradeArr() {
        return this.reqArr.reduce((initArr, item) => {
            initArr = [...initArr, {name: item.name, active: item.name === "A"}];
            return initArr;
        }, [])
    }

    changeGradeArr() {
        let resultArr = this.reqArr;
        let onlyGrade = "";
        let sumGrade = this.reqArr.reduce((initGrade, item) => {
            if (item.active) {
                initGrade = [...initGrade, item.name];
            }
            return initGrade
        }, []);
        onlyGrade = sumGrade.length === 1 ? (sumGrade[0] === this.grade ? sumGrade[0] : '') : '';
        if (!onlyGrade) {
            this.gradeJudge = false;
            for (let item of resultArr) {
                if (this.grade === item.name) {
                    item.active = !item.active;
                    break;
                }
            }
        } else {
            this.gradeJudge = true;
        }
        return resultArr;
    }

    getGradeJudge() {
        return this.gradeJudge;
    }
}
