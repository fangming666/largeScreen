<template>
    <!------与上次考试相比，学校超均率变化----->
    <div class="superaverage-rate-table base-box" :class="req_judge">
        <pubTitle :req_title="req_title">
        </pubTitle>
        <el-table
                :data="req_data"
                size="small"
                border
                :row-class-name="tableRowClassName"
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="学校"
                    :width="req_judge==='school-ensemble'?60:''"
            >
            </el-table-column>
            <el-table-column
                    label="超均率变化(%)"
                    :width="req_judge==='school-ensemble'?128:'148'"
            >
                <template slot-scope="scope">
                    <div :class="SuperaverageClass(scope.row.superaverageRate).getStyle()">
                        <i class="fa" :class="SuperaverageClass(scope.row.superaverageRate).getIcon()"></i>
                        <span style="margin-left: 7px">{{ scope.row.superaverageRate}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="thisSuperaverage"
                    label="本次(%)"
                    >
            </el-table-column>
            <el-table-column
                    prop="lastSuperaverage"
                    label="上次(%)"

            >
            </el-table-column>
            <el-table-column
                    label="名次变化"
            >
                <template slot-scope="scope">
                    <div :class="SuperaverageClass(scope.row.ranking).getStyle()">
                        <i class="fa" :class="SuperaverageClass(scope.row.ranking).getIcon()"></i>
                        <span style="margin-left: 7px">{{ Math.abs(scope.row.ranking)}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="thisRanking"
                    label="本次"
                    :width="req_judge==='school-ensemble'?54:''"
            >
            </el-table-column>
            <el-table-column
                    prop="lastRanking"
                    label="上次"
                    :width="req_judge==='school-ensemble'?54:''"
                    w>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import SuperaverageInfo from "../../utils/SuperaverageInfo";

    export default {
        name: "SuperaverageRateTable",
        props: ["req_data","req_title","req_judge"],
        components: {
            pubTitle: () => import("../pubTitle/pubTitle"),
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex % 2) {
                    return 'normal-row';
                }
                return 'activation-row';
            },
            SuperaverageClass(initNum){
                return new SuperaverageInfo(initNum)
            }
        },
    }
</script>
<style scoped lang="scss">
    .superaverage-rate-table {
        width: 802px;
        height: 345px;
        box-sizing: border-box;
        margin-top: 18px;
        .el-table{
            margin-top: 18px;
        }
    }
    .school-ensemble{
        width: 608px;
        height: 338px;
        .el-table{
            margin-top: 10px;
        }
    }
</style>
