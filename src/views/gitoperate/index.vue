<template>
  <div class="app-container">
    <div class="git-wrap">
      <h2>git 操作</h2>
      <dl v-for="item in list">
        <dt>{{item.title}}</dt>
        <dd v-for="v in item.val">
          <div class="des" v-html="v.des"></div>
          <div v-html="v.command"></div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>

  .git-wrap{

    dl{
      margin-top: 30px;
      dt{
        font-size: 20px;
        font-weight: bold;
        color: #f33232;
        margin-bottom: 5px;
      }
      dd{
        line-height: 1.6;
        margin-bottom: 10px;
        .des{
          font-size: 16px;
          color: #0072ff;
        }
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
          title:'相关设置',
          val:[
            {
              des:'生成公钥秘钥',
              command:'ssh-keygen -t rsa'    
            },
            {
              des:'查看公钥',
              command:'cat ~/.ssh/id_rsa.pub'    
            },
            {
              des:'查看远程源',
              command:'git remote show origin'
            },{
              des:'添加远程源',
              command:'git remote add origin git@xxx.git'
            },{
              des:'删除远程源',
              command:'git remote rm git@xxx.git'
            },{
              des:'设置提交人昵称',
              command:'git config --global user.name "xxx"'
            },{
              des:'设置提交人邮箱',
              command:'git config --global user.email "xxx"'
            },{
              des:'设置高亮',
              command:'git config --global color.ui true'
            },{
              des:'设置命令快捷方式',
              command:
              ` git config --global -e 
    <pre>[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    ls = log --pretty=format:\\"%C(yellow)%h %C(blue)%ad %C(red)%d %C(reset)%s %C(green)[%cn]\\" --decorate --date=short
    hist = log --pretty=format:\\"%C(yellow)%h %C(red)%d %C(reset)%s %C(green)[%an] %C(blue)%ad\\" --topo-order --graph --date=short</pre>`
            
            },


          ]
        },
        {
          title:'分支操作',
          val:[
            {
              des:'拉取远程分支',
              command:'git checkout -b test origin/test'
            },{
              des:'新建分支',
              command:'git checkout -b test -> git push origin test:test'
            },{
              des:'查看本地和远程所有分支',
              command:'git branch -a'
            },{
              des:'删除本地分支',
              command:'git branch -D test'
            },{
              des:'删除远程分支',
              command:'git push origin :test'
            },
          ]
        },{
          title:'暂存回滚删除',
          val:[
            {
              des:'回滚指定提交ID',
              command:'git reset --hard commitid -> git push origin master -f'
            },{
              des:'回滚到远程最新',
              command:'git reset --hard origin/master'
            },{
              des:'如果在别的分支进行add commit 之后发现提交错了分支',
              command:'git reset HEAD~1 -> 再切到正确的分支'
            },{
              des:'提交备注写错了',
              command:'git commit --amend -m "xxx"'
            },{
              des:'误添加文件',
              command:'git reset HEAD filename'
            },{
              des:'查看即将要删除的目录和文件',
              command:'git clean -nfd'
            },{
              des:'指定pop',
              command:'git stash pop stash@{0/1/2}'
            },{
              des:'清除暂存区',
              command:'git stash clear'
            },

          ]
        },{
          title:'差异比较',
          val:[{
            des:'工作区与暂存区的区别',
            command:'git diff'
          },{
            des:'暂存区与本地仓库的区别',
            command:'git diff --cached'
          },{
            des:'比较两个提交版本的不同',
            command:'git diff a1d2868bc3:templates/index.html 99748453a:templates/index.html'
          }]
        },{
          title:'查看日志',
          val:[{
            des:'查询某个人提交的所有log',
            command:'git log --author="xiaoming"'
          },{
            des:'提交的具体文件',
            command:'git log --stat'
          },{
            des:'查看某个文件的修改记录',
            command:'git log -p filename'
          },

          ]
        },
        {
          title:'常见错误',
          val:[
            {
              des:
`<pre>remote: Permission to xxx.git denied to username
fatal: unable to access "xxx.git/": The requested URL returned error: 403</pre>`,
              command:'git remote set-url origin git@xxx.git'
            },
            {
              des:
`<pre>error: The requested URL returned error: 401 while accessing xxx.git/info/refs
fatal: HTTP request failed</pre>`,
              command:'git remote set-url origin git@xxx.git'
            },
            {
              des:
`<pre>fatal: git checkout: updating paths is incompatible with switching branches.
Did you intend to checkout 'origin/xxx' which can not be resolved as commit?</pre>`,
              command:'git remote update'
            },
            {
              des:"fatal: refusing to merge unrelated histories",
              command:'git pull origin master --allow-unrelated-histories'
            }
          ]
        },
      ]
    };
  },
  methods: {}
};
</script>