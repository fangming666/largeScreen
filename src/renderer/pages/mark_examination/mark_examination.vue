<template>
    <!--阅卷监控-->
    <div class="mark-examination">
        <p class="mark-examination-title">
            {{examTitle}}
        </p>
        <EducationContent>
        </EducationContent>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "mark_examination",
        data() {
            return {
                examTitle: "",
            }
        },
        components: {
            EducationContent: () => import("../../components/education_quality/EducationContent"),
        },
        methods: {
            ...mapActions(["query_mark_examination"]),
        },

        async mounted() {
            let resultDate = await this.query_mark_examination();
            this.examTitle = resultDate.examTitle
        }
    }
</script>

<style scoped lang="scss">
.mark-examination-title{
    font-size: 22px;
    color:rgba(142,188,244,0.7);
    letter-spacing: -0.35px;
    text-align: center;
}
</style>
