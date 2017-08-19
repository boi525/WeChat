//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    sayings:[
      "临渊羡鱼,不如退而结网.",
      "畏惧失败,就是毁灭成功.",
      "骏马秋风冀北,杏花春雨江南."
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
