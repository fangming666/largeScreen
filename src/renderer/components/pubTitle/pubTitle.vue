<template>
    <!------公用的标题----->
    <div class="pub-title">
        <img class="row-img" :src="rowImg" alt="row">{{req_title}}
        <slot>
        </slot>
    </div>
</template>

<script>
    import rowImg from "../../static/row.png";

    export default {
        name: "pubTitle",
        data() {
            return {
                rowImg
            }
        },
        props: ["req_title"],//传入的标题
    }
</script>

<style scoped>
    .pub-title {
        font-size: 17px;
        color: #8AAEF1;
        line-height: 24px;
        font-weight: 600;
    }

    .row-img {
        margin-right: 8px;
        position: relative;
        top: -1px;
    }
</style>
