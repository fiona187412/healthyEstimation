// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '使用微信账号登录',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    rightSrc: './img/勾.png'
  },
  bindWxTap() {
    wx.login({
      success (res) {
        console.log(res);
        if(res.code) {
          console.log('登录成功');
          wx.navigateTo({
            url: '../homePage/homePage',
            success: function(pagedata) {
              console.log(pagedata);
              // 通过eventChannel向被打开页面传送数据
              pagedata.eventChannel.emit('acceptDataFromHome', { data: res.code })
            }
          })
        } else {
          console.log('登录失败');
          wx.showModal({
            title: '提示',
            content: '登录失败，请重试',
            showCancel: false,
          })
        }
      },
      fail (res) {
        console.log(res);
      }
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.authorize({
        scope: 'scope.userInfo',
        success () {
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
        }
      })
    }

    
  },
  getUserInfo() {
    
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
