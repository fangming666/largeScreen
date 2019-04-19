<template>
    <!-----选择科目---->
    <transition name="el-fade-in-linear">
        <div class="modal-subject">
            <pubModal @parentCloseModal="parentCloseModal">
                <div class="modal-subject-content">
                    <div class="modal-school-info">
                        <dl class="clearfix">
                            <dt class="float-left">
                                整体报告：
                            </dt>
                            <dd class="float-left clearfix">
                                <a href="javascript:;"
                                   :class="ownSubjectId===subjectList[0].subjectId?'active':''"
                                   @click="changeList(subjectList[0].subjectId,subjectList[0].name)"
                                >{{subjectList[0].name}}</a>
                            </dd>
                        </dl>
                        <dl class="clearfix">
                            <dt class="float-left">
                                单科报告：
                            </dt>
                            <dd class="float-left">
                                <a href="javascript:;"
                                   @click="changeList(item.subjectId,item.name)"
                                   :class="ownSubjectId===item.subjectId?'active':''"
                                   v-for="(item,index) in subjectList" v-if="index">
                                    {{item.name}}</a>
                            </dd>
                        </dl>
                        <a href="javascript:;" class="examine" @click="check">
                            查看
                        </a>
                    </div>
                </div>
            </pubModal>
        </div>
    </transition>
</template>

<script>
    import pubModal from "../pubModal/pubModal";

    export default {
        name: "modalSubject",
        props: ["subjectList", "subjectId"],
        data() {
            return {
                ownSubjectId: -1,
                ownSubjectName: ""
            }
        },
        components: {
            pubModal
        },
        methods: {
            parentCloseModal(result) {
                this.$emit("parentCloseModal", result)
            },
            //点击选择科目的时候
            changeList(subjectId, subjectName) {
                this.ownSubjectName = subjectName;
                this.ownSubjectId = subjectId;
            },
            //点击查看的时候
            check() {
                this.$emit("parentCloseModal", false);
                this.$emit("parentCheck", {subjectName: this.ownSubjectName, subjectId: this.ownSubjectId})
            }
        },
        mounted() {
            this.ownSubjectName = this.subjectList[0].name;
            this.ownSubjectId = this.subjectId;
        }

    }
</script>

<style scoped lang="scss">
    .modal-subject-content {
        width: 100%;
        height: 257px;
        background-image: url("../../static/modal-subject-bg.png");
        margin-top: -4px;
        position: relative;
    }


    .modal-school-info {
        width: 100%;
        position: absolute;
        right: 10px;
        top: 7px;
        box-sizing: border-box;
        padding: 21px 0 35px 28px;

        dl {
            margin-top: 0;
            margin-bottom: 15px;
            &:nth-child(2){
                dd {
                    a {
                        &:last-child {
                            width: 108px;
                        }
                    }
                }
            }
        }

        dt {
            width: 70px;
            font-size: 14px;
            color: #8EBCF4;
            font-weight: normal;
            text-align: right;
            position: relative;
            top: 5px;
        }

        dd {
            margin: 0;
            width: 440px;

            a {
                float: left;
                border: 1px solid #1362CB;
                border-radius: 21.5px;
                font-size: 14px;
                color: #8EBCF4;
                width: 76px;
                height: 28px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;
                margin-bottom: 13px;
                text-decoration: none;

                &.active {
                    background-image: linear-gradient(-180deg, #27A6FF 0%, #0092FA 97%);
                    color: #FFFFFF;
                }
            }
        }
    }

    .examine {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 16px;
        color: #FFFFFF;
        width: 115px;
        height: 32px;
        background-image: linear-gradient(-180deg, #4EB7FF 0%, #139CFF 97%);
        border-radius: 21.5px;
        margin: 30px auto 0;
    }
</style>
