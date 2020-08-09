import Vue from "vue";
import Router from "vue-router";

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from "../views/layout/Layout";

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [{
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/resume"
    // name: '常用布局',
    // hidden: true,
    // children: [{
    //   path: 'index',
    //   component: () => import('@/views/quicklayout/index')
    // }]
  },
  {
    path: "/resume",
    component: Layout,
    redirect: "/resume/index",
    children: [{
      path: "index",
      name: "关于我",
      component: () => import("@/views/resume/index"),
      meta: {
        title: "关于我",
        icon: "resume"
      }
    }]
  },
  {
    path: "/quicklayout",
    component: Layout,
    redirect: "/quicklayout/image-text",
    name: "quicklayout",
    meta: {
      title: "布局片段",
      icon: "layout"
    },
    alwaysShow: true,
    children: [{
        path: "image-text",
        name: "Image-Text",
        component: () => import("@/views/quicklayout/image-text"),
        meta: {
          title: "image-text",
          icon: ""
        }
      },
      {
        path: "icon-text",
        name: "Icon-Text",
        component: () => import("@/views/quicklayout/icon-text"),
        meta: {
          title: "icon-text",
          icon: ""
        }
      },
      {
        path: "css3-scrollbar",
        name: "Css3-scrollbar",
        component: () => import("@/views/quicklayout/css3-scrollbar"),
        meta: {
          title: "css3-scrollbar",
          icon: ""
        }
      },
      {
        path: "backtop",
        component: () => import("@/views/quicklayout/backtop/index"), // Parent router-view
        name: "backtop",
        meta: {
          title: "backtop(0/anchor)",
          icon: ""
        },
        redirect: "/quicklayout/backtop/backtop-1",
        children: [{
            path: "backtop-1",
            component: () => import("@/views/quicklayout/backtop/backtop-1"),
            name: "backtop-1",
            meta: {
              title: "backtop-1",
              icon: ""
            }
          },
          {
            path: "backtop-2",
            component: () => import("@/views/quicklayout/backtop/backtop-2"),
            name: "backtop-2",
            meta: {
              title: "backtop-2",
              icon: ""
            }
          },
          {
            path: "backtop-3",
            component: () => import("@/views/quicklayout/backtop/backtop-3"),
            name: "backtop-3",
            meta: {
              title: "backtop-3",
              icon: ""
            }
          },
          {
            path: "backtop-4",
            component: () => import("@/views/quicklayout/backtop/backtop-4"),
            name: "backtop-4",
            meta: {
              title: "backtop-4",
              icon: ""
            }
          },
          {
            path: "backtop-5",
            component: () => import("@/views/quicklayout/backtop/backtop-5"),
            name: "backtop-5",
            meta: {
              title: "backtop-5",
              icon: ""
            }
          },
          {
            path: "backtop-6",
            component: () => import("@/views/quicklayout/backtop/backtop-6"),
            name: "backtop-6",
            meta: {
              title: "backtop-6",
              icon: ""
            }
          },
          {
            path: "backtop-7",
            component: () => import("@/views/quicklayout/backtop/backtop-7"),
            name: "backtop-7",
            meta: {
              title: "backtop-7",
              icon: ""
            }
          },
          {
            path: "backtop-8",
            component: () => import("@/views/quicklayout/backtop/backtop-8"),
            name: "backtop-8",
            meta: {
              title: "backtop-8",
              icon: ""
            }
          }
        ]
      },
      {
        path: "loading",
        component: () => import("@/views/quicklayout/loading/index"), // Parent router-view
        name: "loading",
        meta: {
          title: "loading",
          icon: ""
        },
        redirect: "/quicklayout/loading/loading1",
        children: [{
            path: "loading1",
            component: () => import("@/views/quicklayout/loading/loading1"),
            name: "loading1",
            meta: {
              title: "loading1",
              icon: ""
            }
          },
          {
            path: "loading2",
            component: () => import("@/views/quicklayout/loading/loading2"),
            name: "loading2",
            meta: {
              title: "loading2",
              icon: ""
            }
          },
          {
            path: "loading3",
            component: () => import("@/views/quicklayout/loading/loading3"),
            name: "loading3",
            meta: {
              title: "loading3",
              icon: ""
            }
          }
        ]
      },
      {
        path: "close",
        name: "close",
        component: () => import("@/views/quicklayout/close"),
        meta: {
          title: "close",
          icon: ""
        }
      },
      {
        path: "container-center",
        name: "container-center",
        component: () => import("@/views/quicklayout/container-center"),
        meta: {
          title: "container-center",
          icon: ""
        }
      },
      {
        path: "css3-selector",
        name: "css3-selector",
        component: () => import("@/views/quicklayout/css3-selector"),
        meta: {
          title: "css3-selector",
          icon: ""
        }
      }
    ]
  },
  {
    path: "/toolFn",
    component: Layout,
    redirect: "/toolFn/date",
    name: "工具函数",
    meta: {
      title: "工具函数",
      icon: "fx"
    },
    alwaysShow: true,
    children: [{
        path: "date",
        name: "date",
        component: () => import("@/views/toolFn/date"),
        meta: {
          title: "date",
          icon: ""
        }
      },
      {
        path: "operate",
        name: "operate",
        component: () => import("@/views/toolFn/operate"),
        meta: {
          title: "operate",
          icon: ""
        }
      },
      {
        path: "throttle",
        name: "throttle",
        component: () => import("@/views/toolFn/throttle"),
        meta: {
          title: "throttle",
          icon: ""
        }
      },
      {
        path: "debounce",
        name: "debounce",
        component: () => import("@/views/toolFn/debounce"),
        meta: {
          title: "debounce",
          icon: ""
        }
      }
    ]
  },
  {
    path: "/animation",
    component: Layout,
    redirect: "/animation/base",
    name: "animation",
    meta: {
      title: "动画操作",
      icon: "animation"
    },
    alwaysShow: true,
    children: [{
        path: "base",
        name: "base",
        component: () => import("@/views/animation/base"),
        meta: {
          title: "base",
          icon: ""
        }
      },
      {
        path: "setTimeout",
        name: "setTimeout",
        component: () => import("@/views/animation/setTimeout"),
        meta: {
          title: "setTimeout",
          icon: ""
        }
      },
      {
        path: "requestAnimationFrame",
        name: "requestAnimationFrame",
        component: () => import("@/views/animation/requestAnimationFrame"),
        meta: {
          title: "requestAnimation",
          icon: ""
        }
      }
    ]
  },
  {
    path: "/regular",
    component: Layout,
    // redirect: "/regular/base",
    // name: "regular",
    // meta: {
    //   title: "正则",
    //   icon: "regular"
    // },
    //alwaysShow: true,
    children: [{
      path: "index",
      name: "正则笔记",
      component: () => import("@/views/regular/base"),
      meta: {
        title: "正则笔记",
        icon: "regular"
      }
    }]
  },
  {
    path: "/gitoperate",
    component: Layout,
    children: [{
      path: "index",
      name: "git操作",
      component: () => import("@/views/gitoperate/index"),
      meta: {
        title: "git操作",
        icon: "git"
      }
    }]
  },
  {
    path: "/tools",
    component: Layout,
    children: [{
      path: "index",
      name: "常用工具",
      component: () => import("@/views/tools/index"),
      meta: {
        title: "常用工具",
        icon: "tools"
      }
    }]
  },
  //   {
  //     path: "/blogs",
  //     component: Layout,
  //     children: [{
  //       path: "index",
  //       name: "常看博客",
  //       component: () => import("@/views/blogs/index"),
  //       meta: {
  //         title: "常看博客",
  //         icon: "form"
  //       }
  //     }]
  //   },
  //   {
  //     path: "/plugins",
  //     component: Layout,
  //     children: [{
  //       path: "index",
  //       name: "常用插件",
  //       component: () => import("@/views/plugins/index"),
  //       meta: {
  //         title: "常用插件",
  //         icon: "plugins"
  //       }
  //     }]
  //   },
  //   {
  //     path: "/creativeLab",
  //     component: Layout,
  //     children: [{
  //       path: "index",
  //       name: "Lab",
  //       component: () => import("@/views/creativeLab/index"),
  //       meta: {
  //         title: "Lab",
  //         icon: "lab"
  //       }
  //     }]
  //   },
  //   {
  //     path: "/myTracks",
  //     component: Layout,
  //     hidden: true,
  //     children: [{
  //       path: "index",
  //       name: "我的足迹",
  //       component: () => import("@/views/myTracks/index"),
  //       meta: {
  //         title: "我的足迹",
  //         icon: "form"
  //       }
  //     }]
  //   },
  {
    path: "/myshare",
    component: Layout,
    children: [{
      path: "index",
      name: "Share",
      component: () => import("@/views/myshare/index"),
      meta: {
        title: "Share",
        icon: "share"
      }
    }]
  },
  {
    path: "external-link",
    component: Layout,
    children: [{
      path: "https://github.com/gitkingchen",
      name: "GitHub",
      meta: {
        title: "GitHub",
        icon: "github"
      }
    }]
  },
  //   {
  //     path: "/mybooks",
  //     component: Layout,
  //     children: [{
  //       path: "index",
  //       name: "读过的书",
  //       component: () => import("@/views/mybooks/index"),
  //       meta: {
  //         title: "读过的书",
  //         icon: "form"
  //       }
  //     }]
  //   },
  //   {
  //     path: "/aboutme",
  //     component: Layout,
  //     children: [{
  //       path: "index",
  //       name: "关于我",
  //       component: () => import("@/views/aboutme/index"),
  //       meta: {
  //         title: "关于我",
  //         icon: "form"
  //       }
  //     }]
  //   },
  //   {
  //     path: "/recommend",
  //     component: Layout,
  //     children: [{
  //       path: "index",
  //       name: "推荐",
  //       component: () => import("@/views/recommend/index"),
  //       meta: {
  //         title: "推荐",
  //         icon: "form"
  //       }
  //     }]
  //   },



  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});
