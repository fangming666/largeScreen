<template>
    <!-------头部信息----->
    <div class="pub-head">
        <p>
            <img :src="AllImgSrc" alt="AllImgSrc">
        </p>
    </div>
</template>

<script>
    import AllImgSrc from "../../static/all-head.png";
    const shell = require('electron').shell;
    export default {
        data(){
          return{
              AllImgSrc
          }
        },
        methods:{
            goLink(){
                shell.openExternal("http://www.baidu.com");
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "./publicHead.scss";
</style>
