// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '使用微信账号登录',
    userInfo: {},
    hasUserInfo: false,
    rightSrc: './img/勾.png'
  },
  bindWxTap() {
    wx.login({
      success (res) {
        console.log(res);
        if(res.code) {
          wx.showToast({
            title: '登录成功',
            complete() {
              wx.navigateTo({
                url: '../homePage/homePage',
                success: function(pagedata) {
                  console.log(pagedata);
                  // 通过eventChannel向被打开页面传送数据
                  pagedata.eventChannel.emit('acceptDataFromHome', { data: res.code })
                }
              })
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
      const self = this;
      wx.getSetting({
        success (res){
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            
            self.getUserInfo();
          }else {
            wx.authorize({
              scope: 'scope.userInfo',
              success() {
                console.log('3');
                self.getUserInfo();
              },
              fail() {
                wx.showToast({
                  title: '获取授权失败',
                })
              }
            })
          }
        }
      })
      
    },
    getUserInfo() {
      const self = this;
      wx.getUserInfo({
        success: (res) => {
          console.log(res);
          self.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
})
