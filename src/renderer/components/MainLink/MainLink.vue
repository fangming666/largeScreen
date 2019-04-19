<template>
    <div class="main-link">
        <router-link class="link-exam" to="/examination" exact></router-link>
        <router-link class="link-education" to="/education" exact></router-link>
        <router-link class="link-teacher" to="/teachers_quality" exact></router-link>
    </div>
</template>

<script>
    export default {
        name: "MainLink"
    }
</script>

<style scoped lang="scss">
    @import "./Main_link";
</style>
