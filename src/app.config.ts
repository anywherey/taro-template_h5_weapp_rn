import { useGlobalIconFont } from './components/Iconfont/helper';
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/community/index',
    'pages/my/index',
  ],
  window: {
    // "navigationStyle":"custom",
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    // navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: "#9c9d9e",
    selectedColor: "#0089ff",
    backgroundColor: "white",
    borderStyle: "black",
    custom: false,
    list: [
      {
        pagePath: 'pages/index/index',
        text: "首页",
        iconPath: "assets/tab/home.png",
        selectedIconPath: "assets/tab/home_active.png"
      },
      {
        pagePath: 'pages/community/index',
        text: "社区",
        iconPath: "assets/tab/community_light.png",
        selectedIconPath: "assets/tab/community_light_active.png"
      },
      {
        pagePath: 'pages/my/index',
        text: "我的",
        iconPath: "assets/tab/my.png",
        selectedIconPath: "assets/tab/my_active.png"
      }
    ]
  },
  "subpackages": [
    {
      "root":'pages/subPages',
      "pages":[
        "page1/page1"
      ]
    }
  ],
  usingComponents: Object.assign(useGlobalIconFont()),
})
