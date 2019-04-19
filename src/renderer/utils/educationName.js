/**
 * 返回组件数组的名称
 * @param {object[]} initArr 需要处理的对象数组
 * @return {string[]} getNameArr 返回一个只有组件大标题的对象数组
 * */
export default class EducationName {
    constructor(initArr) {
        this.initArr = initArr;
    }
    getNameArr(){
        return this.initArr.reduce((arr,item) =>{
            arr = [...arr,item.name];
            return arr
        },[])
    }
}
