/**
 * 对对象数组进行排序
 * @param {string} field 根据某个字段进行排序
 * @return {object[]} sortUp 进行升序排序
 * @return {object[]} sortDown 进行降序排序
 * */
export default class Compare {

    sortUp(field) {
        return function (obj1, obj2) {
            let val1 = obj1[field];
            let val2 = obj2[field];
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            } else {
                return 0;
            }
        }

    }
    sortDown(field) {
        return function (obj1, obj2) {
            let val1 = obj1[field];
            let val2 = obj2[field];
            if (val1 < val2) {
                return 1;
            } else if (val1 > val2) {
                return -1;
            } else {
                return 0;
            }
        }

    }
}
