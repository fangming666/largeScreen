<template>
    <!----教师教学特征（单科）----->
    <div class="teach-feature-solely">
        <el-table
                :data="tableData"
                style="width: 100%"
                size="small"
                v-if="columnData.length"
                :default-sort="{prop: 'date', order: 'descending'}"
                :row-class-name="tableRowClassName"
                @row-click="handleRowChange"
        >
            <el-table-column
                    v-for="(item,index) in columnData"
                    v-if="!index"
                    :key="item"
                    :prop="item"
                    :label="item"
                    align="center"
                    class-name="teach-feature-solely-one"
                    width="1"
            >
            </el-table-column>
            <el-table-column
                    v-for="(item,index) in columnData"
                    v-if="index===2||index ===1"
                    :key="item"
                    :prop="item"
                    :label="item"
                    align="center"
                    :width="index===2?150:100"
            >
                <template slot-scope="scope">
                    <div class="head-title">
                        <img class="float-left" v-if="index===1" :src="scope.row['头像']"/>
                        <span class="float-left" v-else>{{scope.row['姓名']}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    v-for="(item,index) in columnData"
                    v-if="index&&(index!==2&&index!==1)"
                    :key="item"
                    :prop="item"
                    :label="item"
                    align="center"
                    sortable
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import SubjectKnowledgeAbility from "../../utils/SubjectKnowledgeAbility";

    export default {
        name: "teachFeatureSolely",
        props: ["teacherArr", "subjectOutcomeArr"],
        data() {
            return {
                tableData: [],
                columnData: [],

            }
        },
        methods: {
            handleRowChange(row) {
                this.$emit("parOpenVisiting", row.id);
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex % 2) {
                    return 'normal-row';
                }
                return 'activation-other-row';
            },
            //初始化数据
            protract() {
                let subjectKnowledgeAbility = new SubjectKnowledgeAbility(this.subjectOutcomeArr[0]);
                let knowledgeArr = subjectKnowledgeAbility.getKnowledgeArr();
                this.tableData = this.teacherArr.reduce((initArr, item) => {
                    let initJson = {};
                    for (let index in knowledgeArr) {
                        initJson[knowledgeArr[index]] = item.knowledgeArr.data[index].score;
                    }
                    initArr = [...initArr, {"id": item.teacherId, '头像': item.imgHref, '姓名': item.name, ...initJson}];
                    return initArr;
                }, []);
                let columnArr = [];
                for (let key in this.tableData[0]) {
                    columnArr = [...columnArr, key]
                }
                this.columnData = columnArr;
            },
        },
        watch: {
            teacherArr() {
                this.protract()
            }
        },
        mounted() {
            this.protract()
        }
    }
</script>

<style scoped lang="scss">
    .teach-feature-solely {
        width: 1334px;
        margin: 33px auto 0;
        height: 450px;
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }


    .head-title {
        overflow: hidden;
        display: flex;
        justify-content: center;

        img {
            width: 30px;
            height: 30px;
            margin-right: 17px;
            border-radius: 50%;
            vertical-align: middle;
        }

        span {
            line-height: 32px;
            display: inline-block;
            width: 50px;
            white-space: nowrap;
            text-align: left;
        }
    }

</style>
