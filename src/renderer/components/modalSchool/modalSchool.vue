<template>
    <!-----选择学校---->
    <transition name="el-fade-in-linear">
        <div class="modal-school">
            <pubModal @parentCloseModal="parentCloseModal">
                <div class="modal-school-content">
                    <div class="modal-school-nav">
                        <p v-for="item in yearList" :class="ownYearId===item.yearId?'year-active':''"
                           @click="changeList(item.yearId,item.year)"
                        >
                            {{item.year}}
                        </p>
                    </div>
                    <div class="modal-school-info">
                        <dl class="clearfix">
                            <dt class="float-left">
                                区报告：
                            </dt>
                            <dd class="float-left clearfix">
                                <a href="javascript:;" v-for="item in areaList"
                                   :class="ownCountyId===item.countyId?'active':''"
                                   @click="changeOtherList(item.countyId,item.county,false)"
                                >{{item.county}}</a>
                            </dd>
                        </dl>
                        <dl class="clearfix">
                            <dt class="float-left">
                                学校报告：
                            </dt>
                            <dd class="float-left clearfix">
                                <a href="javascript:;"
                                   @click="changeOtherList(item.id,item.name,true)"
                                   :class="ownSchoolId===item.id?'active':''"
                                   v-for="item in schoolList">{{item.name}}</a>
                            </dd>
                        </dl>
                        <a href="javascript:;" class="examine" @click="check">
                            查看
                        </a>
                    </div>
                </div>
            </pubModal>
        </div>
    </transition>


</template>

<script>
    import pubModal from "../pubModal/pubModal";

    export default {
        name: "modalSchool",
        data() {
            return {
                yearList: [],//年份的列表
                areaList: [],//区县列表
                schoolList: [],//学校列表
                ownYearId: -1,//本地的年份Id
                ownCountyId: -1,//本地的区县Id
                ownSchoolId: -1,//本地的学校Id
                ownName: "",//本地的学校/区县名称
                ownYear: "",//本地的年份
            }
        },
        components: {
            pubModal
        },
        props: ["districtList", "countyId", "schoolId", "yearId", "yearName","districtName"],
        methods: {
            parentCloseModal(result) {
                this.$emit("parentCloseModal", result)
            },
            //根据年份修改对应的区县以及学校列表
            changeList(reqYearId, year) {
                this.ownYear = year;
                this.ownYearId = reqYearId;
                let yearList = [], areaList = [], schoolList = [];
                this.districtList.map((item) => {
                    yearList = [...yearList, {year: item.year, yearId: item.yearId}];
                    if (reqYearId === item.yearId) {
                        areaList = item.countyList;
                        schoolList = item.school;
                    }
                });
                this.yearList = yearList;
                this.areaList = areaList;
                this.schoolList = schoolList;
            },
            //修改其他的列表信息（false:区县，true:学校）
            changeOtherList(id, name, result) {
                if (result) {
                    this.ownSchoolId = id;
                    this.ownCountyId = -1;
                } else {
                    this.ownSchoolId = -1;
                    this.ownCountyId = id;
                }
                this.ownName = name;
            },
            //点击查看
            check() {
                this.$emit("parentCloseModal", false);
                this.$emit("parentCheck", {
                    yearName: this.ownYear, schoolId: this.ownSchoolId,
                    countyId: this.ownCountyId, ownName: this.ownName,
                    yearId: this.ownYearId
                })
            }
        },
        mounted() {
            this.ownYearId = this.yearId;
            this.ownCountyId = this.countyId;
            this.ownSchoolId = this.schoolId;
            this.ownName = this.districtName;
            this.changeList(this.yearId, this.yearName);
        }
    }
</script>

<style scoped lang="scss">
    .modal-school-content {
        width: 100%;
        height: 257px;
        background-image: url("../../static/modal-school-bg.png");
        margin-top: -4px;
        position: relative;
    }

    .modal-school-nav {
        position: absolute;
        left: 23px;
        top: 23px;

        p {
            margin-top: 0;
            margin-bottom: 6px;
            width: 92px;
            height: 33px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url("../../static/modal-school-nav.svg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);

            &:active {
                background-image: url("../../static/modal-school-nav-click.svg");
            }

            &.year-active {
                background-image: url("../../static/modal-school-nav-active.svg") !important;
                font-size: 16px;
                color: #FFFFFF;
                width: 115px;
                height: 34px;
            }
        }
    }

    .modal-school-info {
        width: 418px;
        position: absolute;
        right: 10px;
        top: 7px;
        box-sizing: border-box;
        padding: 21px 0 35px 28px;

        dl {
            margin-top: 0;
            margin-bottom: 15px;
        }

        dt {
            width: 70px;
            font-size: 14px;
            color: #8EBCF4;
            font-weight: normal;
            text-align: right;
            position: relative;
            top: 5px;
        }

        dd {
            margin: 0;
            width: 300px;

            a {
                float: left;
                border: 1px solid #1362CB;
                border-radius: 21.5px;
                font-size: 14px;
                color: #8EBCF4;
                width: 76px;
                height: 28px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 13px;
                margin-bottom: 13px;
                text-decoration: none;

                &.active {
                    background-image: linear-gradient(-180deg, #27A6FF 0%, #0092FA 97%);
                    color: #FFFFFF;
                }
            }
        }
    }

    .examine {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 16px;
        color: #FFFFFF;
        width: 115px;
        height: 32px;
        background-image: linear-gradient(-180deg, #4EB7FF 0%, #139CFF 97%);
        border-radius: 21.5px;
        margin: 20px auto 0;
    }
</style>
