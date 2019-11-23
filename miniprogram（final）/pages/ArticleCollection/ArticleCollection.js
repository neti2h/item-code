var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 设置下拉框的属性
    selectArray: [{
      "id": "10",
      "text": "文章"
    }, {
      "id": "21",
      "text": "菜谱"
    }],
    // 尝试循环输出
    try: [1, 2]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 对下拉框选择后的跳转
  Navi: function () {
    //console.log(123);
    //console.log(app.globalData.nowText);
    if (app.globalData.nowText == '菜谱') {
      wx.navigateTo({ url: '../DishCollection/DishCollection' });
      app.globalData.nowText = '请选择';
    }
    if (app.globalData.nowText == '文章') {
      wx.navigateTo({ url: '../ArticleCollection/ArticleCollection' });
      app.globalData.nowText = '请选择';
    }
  }
})