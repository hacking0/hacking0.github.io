<template>
    <div>
        <!-- 固定头部 -->
        <Header :style="{position: 'fixed', width: '100%'}">
            <common-header :transfer="true"/>
        </Header>

        <!-- 全屏首页 -->
        <div class="index">
            <Row type="flex" justify="center" align="middle" class="home-background"
                 :style="{backgroundImage:'url('+backgroundUrl+')'}">
                <Col span="24" class="home-background-mask">
                    <h1>疯人院的茶与酒</h1>
                </Col>
            </Row>
        </div>

        <!-- 简介列表 -->
        <Row v-for="item in brief">
            <Col span="12" offset="6">
                <Card :bordered="false" dis-hover class="brief-card">
                    <p slot="title">
                        <router-link :to="item.url">{{item.title}}</router-link>
                    </p>
                    <p class="brief">{{item.brief}}</p>
                    <p>
                        <Row style="padding-top: 10px;">
                            <Col span="12">
                                <Tag v-for="tag in item.tags">{{tag.name}}</Tag>
                            </Col>
                            <Col span="12" class="brief-time">
                                {{item.time}}
                            </Col>
                        </Row>
                    </p>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    import backgroundUrl0 from '../images/background0.jpg'
    import backgroundUrl1 from '../images/background1.jpg'
    import backgroundUrl2 from '../images/background2.jpg'
    import backgroundUrl3 from '../images/background3.jpg'
    import backgroundUrl4 from '../images/background4.jpg'
    import backgroundUrl5 from '../images/background5.jpg'
    import backgroundUrl6 from '../images/background6.jpg'
    import backgroundUrl7 from '../images/background7.jpg'
    import backgroundUrl8 from '../images/background8.jpg'
    import backgroundUrl9 from '../images/background9.jpg'

    import CommonHeader from './components/header.vue'

    export default {
        name: 'home',
        components: {
            CommonHeader
        },
        data () {
            return {
                backgroundUrls: [
                    backgroundUrl0,backgroundUrl1,backgroundUrl2,backgroundUrl3,backgroundUrl4,
                    backgroundUrl5,backgroundUrl6,backgroundUrl7,backgroundUrl8,backgroundUrl9,
                ],
                backgroundUrl: '',
                brief:[],
            }
        },
        mounted () {
            this.backgroundUrl = this.backgroundUrls[Math.floor(Math.random()*10)];

            this.setBrief();
        },
        methods: {
            setBrief() {
                this.brief = [
                    {
                        url:'/content/changhenge',
                        title:'人生长恨水长东——记《长恨歌》',
                        brief:'这城市里的真心，却唯有到流言里去找的。流言的浪漫在于它无拘无束能上能下的想象力。',
                        tags:[{name:'文学'}],
                        time:'2019-08-11 01:10:00'
                    },
                    {
                        url:'/content/qipashuo',
                        title:'生活就是眼前的苟且',
                        brief:'诚然，人生有诗和远方，但生活就是眼前的苟且。',
                        tags:[{name:'杂记'},{name:'奇葩说'}],
                        time:'2019-08-11 01:14:00'
                    },
                ];
            },
        },
    }
</script>

<style scoped lang="less">
    a {
        color: #2f2f2f;
    }

    .index{
        width: 100%;
        height: 100vh;
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            font-size: 45px;
            letter-spacing: 2px;
            color: #fff;
            line-height: 100vh;
        }
        .ivu-row-flex{
            height: 100%;
        }
        .home-background {
            background-size: 100% 100%;
            .home-background-mask {
                background: rgba(56,56,56,.75);
                height: 100%;
            }
        }
    }

    .brief-card {
        margin: 20px 0 20px 0;
    }
    .brief {
        color: #6e6e6e;
        font-size: 16px;
    }
    .brief-time {
        color: #969696;
        text-align: right;
    }

    .ivu-layout-header {
        z-index: 100;
        background-color: transparent;
        padding: 0;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.19);
    }

    .ivu-card-head-inner, .ivu-card-head p {
        font-size: 22px;
    }
</style>
