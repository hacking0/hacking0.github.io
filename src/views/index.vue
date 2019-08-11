<template>
    <div class="layout">
        <Layout>
        <Header :style="{position: 'fixed', width: '100%'}">
            <common-header :transfer="false"/>
        </Header>
        <Content :style="{margin: '64px 0 0', background: '#fff', minHeight: '600px'}">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </Content>
    </Layout>
    </div>
</template>

<script>
    import CommonHeader from './components/header.vue'

    export default {
        components: {
            CommonHeader
        },
        data () {
            return {}
        },
        mounted () {},
        methods: {
        },
    }
</script>

<style scoped lang="less">
    .ivu-layout-header {
        z-index: 100;
        background-color: transparent;
        padding: 0;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.19);
    }
</style>
