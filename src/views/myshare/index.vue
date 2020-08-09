<template>
    <div class="app-container">
        <div class="wrap">
            <h2>PPT</h2>
            <div>
                <a
                    v-for="(item,index) in list"
                    :key="index"
                    target="_blank"
                    :href="item.link"
                    :id="item.id"
                >{{item.title}}</a>
            </div>
        </div>

    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
h2 {
    margin-bottom: 20px;
}
.wrap {
    h2 {
        border-bottom: 1px solid #eee;
    }
    border: 1px solid #c5d2db;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(31, 35, 37, 0.08);
    padding: 10px;
    min-height: calc(100vh - 159px);
    box-sizing: border-box;
    > div {
        display: flex;
        flex-wrap: wrap;
    }

    a {
        color: #fff;
        font-size: 18px;
        padding: 0 10px;
        width: 180px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border-radius: 6px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        margin: 0 20px 20px 0;
        background-color: #34314c;
        background-position: right 3px bottom 3px;
        background-repeat: no-repeat;
        background-size: 20px;

        &:hover {
            -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
            -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
        }

        &#chrome {
            background-image: url(https://p2.ssl.qhimg.com/t015e742a607599c2a9.png);
        }
        &#h5 {
            background-image: url(https://p.ssl.qhimg.com/dr/442_246_100/t01d104426a6b38decf.webp);
            background-size: 30px;
        }

        &#docker {
            background-image: url(https://p4.ssl.qhimg.com/t01058495e6607a925f.png);
            background-size: 35px;
        }

        &#vue {
            background-image: url(https://p1.ssl.qhimg.com/t01dccdf1f28fab5ebb.png);
        }

        &#grid {
            background-image: url(https://p4.ssl.qhimg.com/t01322bcca4c4a5d4cd.png);
        }

        &#xcx {
            background-image: url(https://p4.ssl.qhimg.com/t0108c2b73952688598.png);
        }

        &#antv {
            background-image: url(https://p2.ssl.qhimg.com/t01a38fc3e99bab6002.png);
        }
    }
}
</style>
<script>
export default {
    data() {
        return {
            list: [
                {
                    id: "chrome",
                    link: "https://ppt.baomitu.com/d/ee025ba4",
                    title: "chrome扩展开发",
                },
                {
                    id: "h5",
                    link: "https://ppt.baomitu.com/d/cddde09a",
                    title: "移动端开发",
                },
                {
                    id: "xcx",
                    link: "https://ppt.baomitu.com/d/7bccf577",
                    title: "小程序",
                },
                {
                    id: "vue",
                    link: "https://ppt.baomitu.com/d/7d9b466b",
                    title: "vue cl3",
                },
                {
                    id: "antv",
                    link: "https://ppt.baomitu.com/d/2795858a",
                    title: "antv-G6",
                },
                {
                    id: "grid",
                    link: "https://ppt.baomitu.com/d/25886adf",
                    title: "css grid",
                },
                {
                    id: "docker",
                    link: "https://ppt.baomitu.com/d/48125c17",
                    title: "docker",
                },
            ],
        };
    },
    methods: {},
};
</script>
