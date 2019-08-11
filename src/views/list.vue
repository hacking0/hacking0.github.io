<template>
    <div>
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
    export default {
        name: "list",
        data () {
            return {
                id: this.$route.params.id,
                brief: [],
            }
        },
        mounted () {
            this.setBrief();
        },
        methods: {
            setBrief() {
                if (this.id === 'literatureMain') {
                    this.brief = [
                        {
                            url:'/content/changhenge',
                            title: '人生长恨水长东——记《长恨歌》',
                            brief: '这城市里的真心，却唯有到流言里去找的。流言的浪漫在于它无拘无束能上能下的想象力。',
                            tags: [{name: '文学'}],
                            time: '2019-08-11 01:10:00'
                        },
                    ];
                } else if (this.id === 'notesDaily') {
                    this.brief = [
                        {
                            url:'/content/qipashuo',
                            title: '生活就是眼前的苟且',
                            brief: '诚然，人生有诗和远方，但生活就是眼前的苟且。',
                            tags: [{name: '杂记'}, {name: '奇葩说'}],
                            time: '2019-08-11 01:14:00'
                        },
                    ];
                }
            },
        }
    }
</script>

<style scoped lang="less">
    a {
        color: #2f2f2f;
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

    .ivu-card-head-inner, .ivu-card-head p {
        font-size: 22px;
    }
</style>