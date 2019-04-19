/**
 * 学校超均率变化趋势
 * @param {object[]} initArr 传进来的需要进行处理的初始数组
 * @param {Map} colorMap 颜色的MAP
 * @return {string[]} getTime 返回一个只有时间的数组
 * @return {object[]} getResult 返回一个可以放在折线图中直接使用的对象数组
 * @return {number[]} getRate 返回一个只有率的数组
 * */
export default class SuperaverageTrend {
    constructor(initArr) {
        this.initArr = initArr;
        this.colorMap = new Map([
            [0, "#6E8E0C"],
            [1, "#B77705"],
            [2, "#F55556"],
            [3, "#179D6D"],
            [4, "#734DF2"],
        ])
    }

    getTime() {
        return this.initArr[0].rateArr.reduce((arr, item) => {
            arr = [...arr, item.time];
            return arr;
        }, []);
    }

    getResult() {
        return this.initArr.reduce((arr, item, index) => {
            arr = [...arr, {name: item.name?item.name:item.schoolName, data: this.getRate(item.rateArr), color: this.colorMap.get(index)}];
            return arr;
        }, [])
    }

    getRate(reqArr) {
        return reqArr.reduce((arr, item) => {
            arr = [...arr, item.rate];
            return arr;
        }, [])
    }
}
