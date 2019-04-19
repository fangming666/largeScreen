<template>
    <!-------公用的模态框----->
    <transition class="fade">
        <div class="pub-modal-wrap" @click.self="closeModal">
            <div class="pub-modal">
                <img :src="pubModalHead" alt="head">
                <a class="close" href="javascript:;" @click="closeModal"></a>
                <slot>
                </slot>
            </div>
        </div>
    </transition>
</template>

<script>
    import pubModalHead from "../../static/pub-modal-head.png";
    export default {
        name: "pubModal",
        data(){
            return{
                pubModalHead
            }
        },
        methods:{
            closeModal(){
                this.$emit("parentCloseModal",false)
            },

        }
    }
</script>

<style scoped lang="scss">
    .pub-modal-wrap {
        background: rgba(4, 1, 71, 0.56);
        position: fixed;
        left: 0;
        top:0;
        width: 100vw;
        height: 100vh;
    }
    .pub-modal{
        width: 566px;
        margin: 198px auto 0;
        position: relative;
    }
    .close{
        width: 41px;
        height: 33px;
        background-image: url("../../static/close.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        right: 0;
        top:0;
        &:active{
            background-image: url("../../static/close-click.png");
        }
    }
</style>
