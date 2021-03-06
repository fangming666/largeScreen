/**
 * 根据科目返回知识点/能力数组
 * @param {string} subjectName 传入的科目名称
 *@return {string[]} getKnowledgeArr 返回知识点名称
 *@return {string[]} getAbilityArr 返回能力名称
 * */
export default class SubjectKnowledgeAbility {
    constructor(subjectName) {
        this.subjectName = subjectName;
        this.knowledgeMap = new Map([
            ["语文", ["语言基础知识", "积累与运用", "阅读", "写作", "语言文字应用", "古汉语知识"]],
            ["英语", ["句法", "词法", "写作", "听力", "阅读理解", "情景交际"]],
            ["生物", ["生物与环境", "生物技术", "绿色植物", "生物圈中的人", "发育与遗传", "运动和行为"]],
            ["地理", ["地球和地图", "世界地理", "中国地理",  "地方地理"]],
            ["历史", ["中国古代史", "中国近代史", "中国现代史", "世界古代史", "世界近代史", "世界现代史"]],
            ["道德与法治", ["心理健康", "品德教育", "法律与秩序", "国情与理想", "时事热点"]],
            ["数学", ["数与式", "统计与概率", "方程与不等式", "图形的变化", "函数", "图形的性质"]],
        ]);
        this.abilityMap = new Map([
            ["语文", ["鉴赏评价能力", "提取归纳能力", "分析理解能力", "语言表达能力", "概括总结能力", "写作能力"]],
            ["英语", ["听", "说", "读", "写", "翻译", "词汇运用"]],
            ["生物", ["收集处理信息", "实践", "交流合作", "分析解决问题", "获取新知识", "科学规范表达"]],
            ["地理", ["判断推理", "记忆", "图像运用", "综合分析", "识记理解", "比较"]],
            ["历史", ["分析归纳", "读图", "归纳概括", "表达交流", "观察理解", "写作"]],
            ["道德与法治", ["综合分析", "实践总结", "自我调控", "沟通交往", "归纳整理", "搜集处理信息"]],
            ["数学", ["数形结合", "空间观念", "思想方法", "创新意识", "推理能力", "运算能力"]],
        ])
    }

    getKnowledgeArr() {
        return this.knowledgeMap.get(this.subjectName);
    }

    getAbilityArr() {
        return this.abilityMap.get(this.subjectName);
    }
}
