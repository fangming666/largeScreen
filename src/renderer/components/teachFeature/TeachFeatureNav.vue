<template>
    <!------教师教学特征nav---->
    <div class="teach-feature-nav clearfix">
        <dt class="float-left">
            {{nav_data.title}}：
        </dt>
        <dd class="float-left" @click="chooseNav(item.content,index)"
            :class="item.active?'active':''"
            v-for="(item,index) in nav_data.data" :key="index">
            {{item.content}}
        </dd>
    </div>
</template>

<script>

    export default {
        name: "TeachFeatureNav",
        props: ["nav_data"],
        data() {
            return {
                activeIndex: -1,//根据激活的索引来改变激活的状态，默认不选，为全部
            }
        },
        methods: {
            //点击某科目的时候
            chooseNav(str, num) {
                this.activeIndex = num;
                this.$emit("changeField", str, this.nav_data.field,num);
                this.$emit("parChooseNav", str, this.nav_data.field,num)
            }
        }
    }
</script>

<style scoped lang="scss">
    .teach-feature-nav {
        width: 860px;
        margin: 0 auto 12px;
    }

    dt {
        font-size: 16px;
        color: rgba(68, 197, 255, 0.8);
        margin-right: 10px;
        line-height: 30px;
    }

    dd {
        background: rgba(19, 14, 81, 0.52);
        border: 1px solid rgba(36, 79, 143, 0.70);
        border-radius: 21.5px;
        margin-right: 10px;
        color: rgba(68, 197, 255, 0.8);
        padding: 3px 23px;
        margin-left: 0;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }

        &.active {
            background: #0B68C9;
            border: 1px solid #318EFB;
            box-shadow: inset 0 0 11px 0 rgba(4, 0, 80, 0.48);
            border-radius: 21.5px;
            color: #FFFFFF;
        }
    }
</style>
