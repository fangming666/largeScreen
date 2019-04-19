/**
 * 根据学校超均率变化正负返回的不同的样式类名和图标
 * @param {number} initNum 传入的初始数字（名次/比例）
 * @return {string} getStyle 返回的文字颜色的类
 * @return {string} getIcon 返回的图标的样式类
 * */
export default class SuperaverageInfo {
    constructor(initNum) {
        this.initNum = initNum;
    }

    getStyle() {
        let styleClass = "";//返回的样式类
        if (!this.initNum) {
            styleClass = "text-warning"
        } else if (this.initNum > 0) {
            styleClass = "text-success"
        } else {
            styleClass = "text-danger"
        }
        return styleClass;
    }

    getIcon() {
        let iconClass = "";//返回的图标的类名
        if (!this.initNum) {
            iconClass = "fa-arrows-alt-h"
        } else if (this.initNum > 0) {
            iconClass = "fa-arrow-alt-circle-up"
        } else {
            iconClass = "fa-arrow-alt-circle-down"
        }
        return iconClass;
    }
}
