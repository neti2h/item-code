//index.js
//获取应用实例
const app = getApp()
/*把这两个变量作为全局变量，看起来会好看一点*/
let SCREEN_WIDTH = 750
let RATE = wx.getSystemInfoSync().screenHeight / wx.getSystemInfoSync().screenWidth
Page({
  data: {
    chooseArray: ['菜品', '果蔬'],
    chooseIndex: 0,
    ScreenTotalW: SCREEN_WIDTH,
    ScreenTotalH: SCREEN_WIDTH * RATE,
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      'https://p3.pstatp.com/large/43700001e49d85d3ab52',
      'https://p3.pstatp.com/large/39f600038907bf3b9c96',
      'https://p3.pstatp.com/large/31fa0003ed7228adf421'
    ],
    links: [
      '../user/user',
      '../user/user',
      '../user/user'
    ]

  },
  //轮播图的切换事件
  SwiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  ChangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  //点击图片触发事件
  SwipClick: function (e) {
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      url: this.data.links[this.data.swiperCurrent]
    })
  },
  // 底部弹框选择拍菜品还是果蔬
  BindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      chooseIndex: e.detail.value
    })
  // 这里要做一个页面跳转到拍照页
    if (e.detail.value == '0')
    {
      wx.navigateTo({ url: '../TakePhoto/TakePhoto' });
    }
    if (e.detail.value == '1')
    {
      wx.navigateTo({ url: '../TakePhoto/TakePhoto' });
    }
  }
})


