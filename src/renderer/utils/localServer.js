/**
 * 本地的数据
 * */
import district from "../mock/district";//获取区县年份
import subject from "../mock/subject";//科目列表
import education from "../mock/education";//区县整体
import single from "../mock/single";//区县单科
import schoolEnsemble from "../mock/schoolEnsemble";//学校整体
import schoolSingle from "../mock/schoolSingle";//学校单科
import teachersQuality from "../mock/teachersQuality";//师资概括
import markExamination from "../mock/markExamination";//阅卷监控

export default class LocalServer {
    constructor(field) {
        this.field = field;
        this.localMap = new Map([
            ["district", district],
            ["subject", subject],
            ["education", education],
            ["single", single],
            ["schoolEnsemble", schoolEnsemble],
            ["schoolSingle", schoolSingle],
            ["teachersQuality", teachersQuality],
            ["markExamination", markExamination]
        ])
    }

    getLocal() {
        return this.localMap.get(this.field)
    }
}
