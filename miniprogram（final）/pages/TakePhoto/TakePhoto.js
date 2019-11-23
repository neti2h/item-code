Page({
  /**
   * 页面的初始数据
   */
   data: {

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
  // 拍照函数
  takePhoto: function () {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log("拍照");
        this.setData({
          src: res.tempImagePath
        })
        /**
      * 预览图片
      */
        wx.previewImage({

          urls: [this.data.src],
        })
        /**
         * 设置缓存
         */
        console.log('开始保存')
        wx.setStorage({
          key: 'key1',
          data: this.data.src,
          success: function (res) {
            console.log('异步保存成功')
          }
        }),
          //获取缓存
          wx.getStorage({
            key: 'key1',
            success: function (res) {
              console.log(res.data)
            }
          })
        // wx.setStorageSync('key2', 'data2')
        // console.log('同步保存成功')

      }
    })
  },
  // 选择相册图片函数
  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        that.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })

  }
})