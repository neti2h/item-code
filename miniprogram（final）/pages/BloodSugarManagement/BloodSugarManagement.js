var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //当前显示的所有记录对象数组
  allrecord:[
    {
      data:'2018/09/10 ',
      time:'12:30:11',
      bloodsugar:56
    },
    {
      data: null,
      time: null,
      bloodsugar: null
    },
    {
      data:null,
      time:null,
      bloodsugar:null
    }
  ],
  isshowrecord:false
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
  // 记录血糖按钮
  RecordBloodsugar:function(){
    var that = this
    that.setData({
      isshowrecord: true,
    })
  },
  // 取消按钮
  CancelRecord: function () {
    var that = this
    that.setData({
      isshowrecord: false,
    })
  },
  // 确定按钮
  ConfirmRecord: function () {
    var time = util.formatTime(new Date());
    var date = time.substring(0, 10);
    time = time.substring(11);
    this.setData({
      isshowrecord: false,
    })
  }
})