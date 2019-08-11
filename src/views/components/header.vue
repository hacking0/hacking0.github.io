<template>
    <div>
        <!-- 固定头部 -->
        <Row :class="headerClass">
            <Col span="2" offset="1" class="header-menu-col">
                <Icon type="md-menu" class="header-menu" @click="openMenu = true"/>
            </Col>
            <Col span="2" offset="13" class="header-col">
                　HOME
            </Col>
            <Col span="2" class="header-col">
                　技术
            </Col>
            <Col span="2" class="header-col">
                　随笔
            </Col>
            <Col span="2" class="header-col">
                　ABOUT
            </Col>
        </Row>

        <!-- 导航菜单 -->
        <Drawer placement="left" :closable="false" v-model="openMenu">
            <menus />
        </Drawer>
    </div>
</template>

<script>
    import Menus from './menus.vue'

    export default {
        name:'header',
        components: {
            Menus
        },
        props:{
            transfer: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                headerClass: '',
                openMenu: false,
            }
        },
        mounted() {
            //transfer为true时，顶部滚动头部样式变化
            if (this.transfer) {
                this.headerClass = 'header-scroll';
                window.addEventListener('scroll', this.handleScroll);
            } else {
                this.headerClass = 'header-default';
            }
        },
        methods: {
            handleScroll () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop<=20) {
                    this.headerClass = 'header-scroll';
                } else {
                    this.headerClass = 'header-default';
                }
            },
        },
        destroyed () {
            if (this.transfer) {
                window.removeEventListener('scroll', this.handleScroll)
            }
        },
    }
</script>

<style scoped lang="less">
    .header-scroll {
        z-index: 100;
        position: fixed;
        top: 0;
        height: 64px;
        width: 100%;
        color: #d3d7d4;
        background-color:transparent;
        font-size: 16px;
        font-weight: 700;
        .header-menu-col {
            .header-menu {
                font-size: 26px;
            }
        }
    }

    .header-default {
        z-index: 100;
        position: fixed;
        top: 0;
        height: 64px;
        width: 100%;
        color: #777;
        background-color: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.19);
        font-size: 16px;
        font-weight: 700;
        .header-menu-col {
            .header-menu {
                font-size: 26px;
            }
        }
    }
</style>