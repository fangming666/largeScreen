<template>
    <div id="app">
        <a href="javascript:;" class="close-electron" @click="closeElectron">
            关 闭
        </a>
        <PubHead>
        </PubHead>
        <PubBg>
        </PubBg>
        <MainLink>
        </MainLink>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {ipcRenderer} from 'electron'

    export default {
        name: 'ydb-big-data',

        components: {
            PubHead: () => import("./components/pubHead/publicHead"),
            PubBg: () => import("./components/pubBg/pubBg"),
            MainLink: () => import("./components/MainLink/MainLink")
        },
        methods: {
            //关闭整个程序
            closeElectron() {
                ipcRenderer.send('close');
            }
        }
    }
</script>

<style lang="scss">
    /* CSS */
    .close-electron {
        position: absolute;
        right: 42px;
        top: 20px;
        text-decoration: none;
        font-size: 16px;
        color: #383476;
    }
</style>
