//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    stars: [
      "白羊座：3月21日～4月20日 (Aries)",
      "金牛座：4月21日～5月21日 (Taurus)",
      "双子座：5月22日～6月21日 (Gemini)",
      "巨蟹座：6月22日～7月22日 (Cancer)",
      "狮子座：7月23日～8月23日 (Leo)",
      "处女座：8月24日～9月23日 (Virgo",
      "天秤座：9月24日～10月23日 (Libra)",
      "天蝎座：10月24日～11月22日 (Scorpio)",
      "射手座：11月23日～12月21日 (Sagittarius)",
      "摩羯座：12月22日～1月20日 (Capricorn)",
      "水瓶座：1月21日～2月19日 (Aquarius)",
      "双鱼座：2月20日～3月20日 (Pisces)"
      ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
