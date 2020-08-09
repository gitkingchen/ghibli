<template >
    <div style="padding:30px;">
        <!--priview-->
        <div>
            <strong>替换key</strong>
        </div>
        <!--priview-->
        <!--code-->
        <div style="width:800px;">

            <pre><code class="language-js">
          将value 替换为id
          var data = [
            {name:'a', value:'1'},
            {name:'b', value:'2'}
          ].map(function(item) {
              return {
                  name: item.name,
                  id: item.value
              }
          });
          
          输出：
          [
            {"name": "a", "id": "1"}, 
            {"name": "b", "id": "2"} 
          ]

      </code></pre>

        </div>
        <!--code-->

        <!--priview-->
        <div>
            <strong>比较2个数组的相同和不同</strong>
        </div>
        <!--priview-->
        <!--code-->
        <div style="width:800px;">

            <pre><code class="language-js">

        var a = [1,2,3,4]
        var b = [3,4,5,6]

        let intersection = a.filter(v => b.includes(v))
        或者
        let intersection = a.filter(function(v){ 
            return b.indexOf(v) > -1 
        })

        输出：
        [3, 4]

        let difference = a.concat(b).filter(
            v => !a.includes(v) || !b.includes(v)
        )
        或者
        let difference = a.filter(function(v){ 
            return !(b.indexOf(v) > -1) }).concat(b.filter(function(v){ 
                return !(a.indexOf(v) > -1)})
            )
        或者
        let difference = a.concat(b).filter((cur, i, arr) => {
            return arr.indexOf(cur) === arr.lastIndexOf(cur);
        });

        输出：
        [1, 2, 5, 6]

            </code></pre>

        </div>
        <!--code-->

        <!--priview-->
        <div>
            <strong>拷贝数组</strong>
        </div>
        <!--priview-->
        <!--code-->
        <div style="width:800px;">

            <pre><code class="language-js">
        var arr = [1,2,3]

        方法1:
        var copyArr = arr.slice()

        方法2：
        var copyArr = [...arr]

        方法3：
        var copyArr = arr.concat()

      </code></pre>

        </div>
        <!--code-->

        <!--priview-->
        <div>
            <strong>数据扁平化</strong>
        </div>
        <!--priview-->
        <!--code-->
        <div style="width:800px;">

            <pre><code class="language-js">
        var arr = [1, [2, [3, 4]]];

        function flatten(arr) {
            return arr.reduce(function (prev, next) {
                return prev.concat(Array.isArray(next) ? flatten(next) : next);
            }, []);
        }

        flatten(arr);
        输出：
        [1,2,3,4]

        方法2：
        let arr = [1, [2, 3, [4, [5]]]]; arr.flat(3);

        输出：
        [1,2,3,4,5]

      </code></pre>

        </div>
        <!--code-->

        <!--priview-->
        <div>
            <strong>树/扁平结构 互相转换</strong>
        </div>
        <!--priview-->
        <!--code-->
        <div style="width:800px;">

            <pre><code class="language-js">
        //树转成扁平结构
        function treeToList(tree) {
            var queen = [];
            var out = [];
            queen = queen.concat(tree);
            while (queen.length) {
                var first = queen.shift();
                if (first.children) {
                    queen = queen.concat(first.children)
                    delete first['children'];
                }

                out.push(first);
            }
            return out;
        }

        treeToList({
            name:'root',
            children:[
                {
                    name:'child1'
                },
                {
                    name:'child2'
                }
            ]
        })

        输出：
        [{name: "root"},{name: "child1"},{name: "child2"}]


        //扁平结构转成树
        function listToTree(data, root) {
            var r = [],
                o = {};
            data.forEach(function(a) {
                if (o[a.id] && o[a.id].children) {
                    a.children = o[a.id] && o[a.id].children;
                }
                o[a.id] = a;
                if (a.pid === root) {
                    r.push(a);
                } else {
                    o[a.pid] = o[a.pid] || {};
                    o[a.pid].children = o[a.pid].children || [];
                    o[a.pid].children.push(a);
                }
            });
            return r;
        }

        listToTree( [{name: "root",id:'1',pid:'-1'},{name: "child1",id:'1-1',pid:'1'},{name: "child2",id:'1-2',pid:'1'}],'-1' )

        输出：
        [{    
            name:'root',
            id:'1',
            pid:'-1',
            children:[
                {
                    id:'1-1',
                    pid:'1',
                    name:'child1'
                },
                {
                    id:'1-2',
                    pid:'1',
                    name:'child2'
                }
            ]
        }]


      </code></pre>

        </div>
        <!--code-->

    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/layout-common.scss";
</style>
<script>
import Prism from "prismjs";

export default {
    data() {
        return {};
    },
    mounted() {
        Prism.highlightAll();
        this.bindEvent();
    },
    methods: {
        bindEvent() {},
    },
};
</script>

