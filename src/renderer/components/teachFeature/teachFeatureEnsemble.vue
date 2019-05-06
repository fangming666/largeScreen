<template>
    <div>
        <!--教师教学特征全科的时候-->
        <div class="teach-feature-ensemble clearfix">
            <div v-for="item in teacherArr"
                 @click="openVisiting(item.teacherId)"
                 :key="item.teacherId" class="teach-feature-ensemble-item float-left">
                <img :src="item.imgHref" alt="头像">
                <p class="user-name">
                    {{item.name}}
                </p>
                <p class="info">
                    <span>{{item.school}}</span><span>{{item.subject}}</span><span>{{item.grade}}</span>
                </p>
                <p class="phone">
                    {{item.phone}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "teachFeatureEnsemble",
        props: ["teacherArr"],
        methods: {
            openVisiting(id) {
                this.$emit("parOpenVisiting", id)
            },
            /**
             * @return {string}
             */
            HeadImg(src) {
                return `../src/renderer/static/${src}`;
            }
        }
    }
</script>

<style scoped lang="scss">
    .teach-feature-ensemble {
        width: 1560px;
        height: 478px;
        margin: 15px auto 0;
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .teach-feature-ensemble-item {
        cursor: pointer;
        width: 180px;
        height: 224px;
        background-image: url("../../static/teach-feature-item-bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border: 1px solid #2E2789;
        box-sizing: border-box;
        margin-bottom: 20px;
        padding: 18px 23px 0;
        margin-right: 15px;
        &:hover,&:active{
            background-image: url("../../static/teach-feature-item-bg-hover.png");
        }
        &:nth-child(8n) {
            margin-right: 0;
        }


        & > img {
            width: 80px;
            height: 80px;
            display: block;
            border-radius: 50%;
            margin: 0 auto;
            /*border: 1px solid #979797;*/
        }

        p {
            margin: 0;
        }

        .user-name {
            text-align: center;
            font-size: 18px;
            color: #BFD6FF;
            padding: 8px 0 9px;
            border-bottom: 1px solid #262076;
        }

        .info {
            margin: 15px 0 8px;
            padding-left: 5px;

            span {
                font-size: 14px;
                color: #8AAEF1;
                margin-right: 9px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }

        .phone {
            padding-left: 5px;
            font-size: 14px;
            color: #8AAEF1;
        }
    }

</style>
