<template>
    <!------教师任务达标数---->
    <div class="teachers-tasks base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <table class="table" border cellspacing="0" cellpadding="0" v-if="colConfigs.length">
            <thead>
            <tr>
                <th rowspan="2">
                    老师
                </th>
                <th v-for="item in colConfigs" colspan="3">
                    <span>{{item.rank}}</span>(名)
                    <span>{{item.score}}</span>(分)
                </th>
            </tr>
            <tr>
                <th v-for="item in rowConfigs">
                    {{item}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in tableData">
                <td v-for="(child,childIndex) of item"
                    :class="!(childIndex%3)&&childIndex?(!child?'text-warning':child>0?'text-success':'text-danger'):''">
                    {{child}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TeachersTasks",
        props: ["req_data", "req_title", "req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        data() {
            return {
                colConfigs: [],
                rowConfigs: ["任务数", "达标数", "差距"],
                tableData: []
            }
        },
        mounted() {
            let rowConfigs = [];
            this.colConfigs = this.req_data[0].data.reduce((initArr, item) => {
                initArr = [...initArr, {rank: item.rank, score: item.score}];
                rowConfigs = [...rowConfigs, "任务数", "达标数", "差距"];
                return initArr;
            }, []);
            this.rowConfigs = rowConfigs;
            this.tableData = this.req_data.reduce((initArr, item) => {
                let arr = [item.name];
                for (let child of item.data) {
                    arr = [...arr, child.tasks, child.people, child.gap]
                }
                initArr = [...initArr, arr];
                return initArr;
            }, [])
        }
    }
</script>

<style scoped lang="scss">
    .teachers-tasks {
        width: 859px;
        height: 339px;

        .table {
            border: 1px solid #2B2482;
            margin-top: 20px;
            th, td {
                height: 40px;
                vertical-align: middle;
                font-size: 14px;
                color: #729CF2;
                text-align: center;
                padding: 0 13px;
                border: 1px solid #2B2482;
                border-right: 0;
                border-bottom: 0;

            }

            th {
                background: #1A1464;
                width: 78px;
                &[colspan="3"] {
                    width: 208px;
                    border-top: 0;
                    span{
                        &:first-child{
                            margin-right: 2px;
                        }
                        &:last-child{
                            margin-left: 11px;
                            margin-right: 12px;
                        }
                    }
                }

                &[rowspan="2"] {
                    width: 87px;
                    border-left: 0;
                    border-top: 0;
                }
            }

            tbody {
                tr {
                    td {
                        background: #201A6D;

                        &:first-child {
                            border-left: 0;
                        }
                    }

                    &:nth-child(2n) {
                        td {
                            background: #1D176A;
                        }
                    }
                }
            }
        }
    }
</style>
