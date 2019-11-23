const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /*按钮刷新功能*/
  refresh:function(){
    wx.showNavigationBarLoading() //在标题栏中显示加载
    //模拟加载    
    wx.request({
      url: '',
      success: function (res) {
        setTimeout(function () {

          // complete
          wx.hideNavigationBarLoading() //完成停止加载

          wx.stopPullDownRefresh() //停止下拉刷新

        }, 1500)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },
  
  showPopup() {
    this.popup.showPopup();
    
  },
  //取消事件
  _error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  //确认事件
  _success() {
    console.log('你点击了加入');
    this.popup.hidePopup();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    
},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

},

})