const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-02-28', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '所有生意都能用AI+短视频重做一遍',url: ''}, 
    { title: '用AI写出来的文案，如果没有结合你的定位、人设、优势、产品就是垃圾',url: ''},
    { title: '流量获客不是一招两招，而是一套系统的组合拳',url: ''},
    { title: '做任何生意都可以抽象成两步：1.验证模型 2.杠杠放大',url: ''},
    { title: '善弈者通盘无妙手，善战者无赫赫之功', url: '' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'AI同行拆解',
  HEO_HERO_TITLE_3: '流量获客是一套组合拳',
  HEO_HERO_TITLE_4: 'AI时代，跟着清华哥就完事了~',
  HEO_HERO_TITLE_5: '所有生意都能用AI+短视频重做一遍',
  HEO_HERO_TITLE_LINK: 'https://www.jiehe.tech/category/%E5%85%AC%E5%9F%9F%E5%BC%95%E6%B5%81%E7%B3%BB%E5%88%97?theme=heo',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '工厂老板', url: '/tag/有厂' },
  HEO_HERO_CATEGORY_2: { title: '实体门店', url: '/tag/有店' },
  HEO_HERO_CATEGORY_3: { title: '服务咨询', url: '/tag/有服务' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🏃 10年科技互联网创业者',
    '🤖️ 3年精准流量获客10W+',
    '🤝 知识付费亿级超盘手'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/WalterHe0808', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'icon_canyin',
      img_1: '/images/heo/icon_canyin.webp',
      color_1: '#989bf8',
      title_2: 'icon_fuzhuang',
      img_2: '/images/heo/icon_fuzhuang.webp',
      color_2: '#eb6840'
    },
    {
      title_1: 'icon_gongchang',
      img_1: '/images/heo/icon_gongchang.webp',
      color_1: '#57b6e6',
      title_2: 'icon_jiaju',
      img_2: '/images/heo/icon_jiaju.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'icon_jiancai',
      img_1: '/images/heo/icon_jiancai.webp',
      color_1: '#f7cb4f',
      title_2: 'icon_jiaopei',
      img_2: '/images/heo/icon_jiaopei.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'icon_jiazheng',
      img_1: '/images/heo/icon_jiazheng.webp',
      color_1: '#eb6840',
      title_2: 'icon_jixie',
      img_2: '/images/heo/icon_jixie.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'icon_lvyou',
      img_1: '/images/heo/icon_lvyou.webp',
      color_1: '#f29e39',
      title_2: 'icon_meiye',
      img_2: '/images/heo/icon_meiye.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'icon_qiche',
      img_1: '/images/heo/icon_qiche.webp',
      color_1: '#f7cb4f',
      title_2: 'icon_chongwu',
      img_2: '/images/heo/icon_chongwu.webp',
      color_2: '#e9572b'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '链接清华哥',
  HEO_SOCIAL_CARD_TITLE_2: '和清华哥聊聊',
  HEO_SOCIAL_CARD_TITLE_3: '点击加我微信',
  HEO_SOCIAL_CARD_URL: 'https://www.jiehe.tech/about',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
