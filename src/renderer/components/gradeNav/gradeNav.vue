<template>
    <!------共用的等级选择器---->
    <div class="grade-nav" v-if="gradeArr.length">
        <a href="javascript:;" @click="changeGrade(item.name)" :class="item.active?'active':''"
           v-for="item in gradeArr">{{item.name}}</a>
    </div>
</template>

<script>
    export default {
        name: "gradeNav",
        props: ["gradeArr"],
        methods: {
            changeGrade(gradeName) {
                this.$emit("parentChangeGrade", gradeName);
            }
        }
    }
</script>

<style scoped lang="scss">
    .grade-nav {
        a {
            background: #1A155D;
            border: 1px solid #2B2581;
            border-radius: 16px;
            width: 40px;
            height: 20px;
            box-sizing: border-box;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            color: #8AAEF1;
            margin-right: 8px;
            text-decoration: none;

            &:last-child {
                margin-right: 0;
            }

            &.active {
                background: #0B68C9;
                box-shadow: inset 0 0 5px 0 #0D70FF;
                color: #FFFFFF;
            }
        }
    }
</style>
