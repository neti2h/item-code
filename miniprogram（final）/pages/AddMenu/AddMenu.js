Page({

  /**
   * 页面的初始数据
   */
  data: {
  //出现的行数，默认出现3行
  lineArray:[1,1,1] 
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
  // 增加行数
  PushLine: function () {
    var a = this.data.lineArray;
    a.push(1);
    this.setData({
      lineArray: a,
    });
  },
  //提交后跳转到搭配页面
  goto: function () {
    wx.navigateTo({ url: '../RecommendAfterTakingPhoto/RecommendAfterTakingPhoto', }) 
  },
})