<template>
    <!------教师的名片---->
    <transition name="el-fade-in-linear">
        <div class="visiting-card-warp" @click.self="closeVisiting">
            <div class="visiting-card clearfix">
                <a class="close" href="javascript:;" @click="closeVisiting"></a>
                <div class="float-left visiting-card-left">
                    <div class="username-title">
                        <img :src="visitingCardJson.imgHref" alt="head">
                        <p>
                            {{visitingCardJson.name}}
                        </p>
                    </div>
                    <dl class="clearfix">
                        <dt class="float-left">学校：</dt>
                        <dd class="float-left">{{visitingCardJson.school}}</dd>
                    </dl>
                    <dl class="clearfix">
                        <dt class="float-left">年级：</dt>
                        <dd class="float-left">{{visitingCardJson.grade}}</dd>
                    </dl>
                    <dl class="clearfix">
                        <dt class="float-left">教龄：</dt>
                        <dd class="float-left">{{visitingCardJson.schoolAge}}</dd>
                    </dl>
                    <dl class="clearfix">
                        <dt class="float-left">学历：</dt>
                        <dd class="float-left">{{visitingCardJson.academic}}</dd>
                    </dl>
                    <dl class="clearfix">
                        <dt class="float-left">职称：</dt>
                        <dd class="float-left">{{visitingCardJson.educational}}</dd>
                    </dl>
                    <dl class="clearfix">
                        <dt class="float-left">电话：</dt>
                        <dd class="float-left">{{visitingCardJson.phone}}</dd>
                    </dl>
                    <dl class="clearfix">
                        <dt class="float-left">邮箱：</dt>
                        <dd class="float-left">{{visitingCardJson.email}}</dd>
                    </dl>
                </div>
                <div class="float-left visiting-card-right">
                    <component v-for="item in assemblyArr" v-if="assemblyArr.length"
                               :is="item.view" :req_judge="item.judge" :req_title="item.title"
                               :req_data="item.data"
                               :key="item.view"
                               :subjectName="subjectName"
                               class="float-left"
                    >
                    </component>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

    export default {
        name: "VisitingCard",
        props: ["visitingCardJson"],
        data() {
            return {
                assemblyArr: [],//组件的数组
                subjectName: "",
            }
        },
        components: {
            VisitingCardKnowledge: () => import("../visiting_card/VisitingCardKnowledge"),//知识点模块教学水平
            VisitingCardStabilize: () => import("../visiting_card/VisitingCardStabilize"),//学生稳定指数
            VisitingCardAbility: () => import("../visiting_card/VisitingCardAbility"),//能力模块教学水平
            VisitingCardIncrement: () => import("../visiting_card/VisitingCardIncrement"),//学生增值指数

        },
        methods: {
            closeVisiting() {
                this.$emit("parCloseVisiting")
            }
        },
        watch: {
            visitingCardJson(newData, oldData) {
                if (JSON.stringify(newData) !== "{}") {
                    this.subjectName = this.visitingCardJson.subject;
                    this.assemblyArr = [this.visitingCardJson.knowledgeArr, this.visitingCardJson.ability,
                        this.visitingCardJson.increment, this.visitingCardJson.stabilize];
                } else {
                    this.assemblyArr = [];
                    this.subjectName = "数学";
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .visiting-card-warp {
        background: rgba(4, 1, 71, 0.56);
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .visiting-card {
        width: 1500px;
        height: 685px;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
    }

    .close {
        width: 41px;
        height: 33px;
        background-image: url("../../static/close.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        right: -2px;
        top: -3px;

        &:active {
            background-image: url("../../static/close-click.png");
        }
    }

    .visiting-card-left {
        width: 166px;
        height: 100%;
        background: rgba(15, 153, 247, 0.83);

        .username-title {
            text-align: center;
            background: #0974E7;
            overflow: hidden;
            margin-bottom: 18px;

            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: block;
                margin: 19px auto 0;
            }

            p {
                font-size: 18px;
                color: #FFFFFF;
                margin-top: 7px;
                margin-bottom: 17px;
                text-align: center;
            }
        }

        dl {
            margin-bottom: 7px;
            padding-left: 17px;
            margin-top: 5px;

            dt {
                margin: 0;
                font-weight: normal;
                color: rgba(255, 255, 255, 0.8);
                font-size: 14px;
            }

            dd {
                margin: 0;
                color: white;
                font-size: 14px;
                width: 77px;
                white-space: normal;
                word-break: break-all;
            }
        }
    }

    .visiting-card-right {
        width: 1334px;
        box-sizing: border-box;
        height: 100%;
        background: rgba(36, 32, 144, 0.89);
        border: 2px solid #31A3DF;
        border-left-width: 1px;
        padding-top: 24px;
        padding-left: 34px;
    }
</style>
