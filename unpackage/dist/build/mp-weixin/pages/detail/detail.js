(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{1055:function(o,t,n){"use strict";n.r(t);var e=n("6bb8"),i=n.n(e);for(var a in e)"default"!==a&&function(o){n.d(t,o,(function(){return e[o]}))}(a);t["default"]=i.a},"6b73":function(o,t,n){"use strict";n.r(t);var e=n("cfe9"),i=n("1055");for(var a in i)"default"!==a&&function(o){n.d(t,o,(function(){return i[o]}))}(a);n("fce1");var d,c=n("f0c5"),l=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],d);t["default"]=l.exports},"6bb8":function(o,t,n){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=null,e=null,i={data:function(){return{id:"",audit:!1,modalShow:"",coverDetail:{inviteLockNum:0,lookVideoLockNum:0,getDesc:""},lockEdInfo:{inviteLockNum:0,lookVideoLockNum:0,isLocked:!1},ad:""}},onLoad:function(o){this.id=o.id,this.audit=o.audit,this.getCoverDetail(!0)},onShow:function(o){this.getCoverDetail(!1)},onShareAppMessage:function(o){var t=getApp().shareConfig();return t.path+="&id="+this.id,console.log(t),t},methods:{handle:function(){},getCoverDetail:function(t){var n=this;o.request({url:getApp().globalData.api.coverDetail,data:{id:this.id,openid:getApp().globalData.openid},success:function(o){n.coverDetail=o.data.data.coverDetail,n.lockEdInfo=o.data.data.lockEdInfo,n.ad=o.data.data.ad,t&&n.ad&&(n.ad.one&&n.adinsertInit(n.ad.one),n.ad.five&&n.adInit(n.ad.five)),n.lockEdInfo.isLocked&&(n.modalShow=!0)},complete:function(){o.hideLoading()}})},lookAd:function(){n.show().catch((function(){n.load().then((function(){return n.show()})).catch((function(t){o.showToast({title:"调起视频失败，请稍后再试",icon:"none",duration:2e3}),console.log("激励视频 广告显示失败")}))}))},adInit:function(o){var t=this;wx.createRewardedVideoAd&&(n=wx.createRewardedVideoAd({adUnitId:o}),n.onLoad((function(){console.log("Ad onLoad event emit")})),n.onError((function(o){console.log("Ad onError event emit",o)})),n.onClose((function(o){console.log("Ad onClose event emit",o),o&&o.isEnded?(t.lockEdInfo.lookVideoLockNum++,console.log("正常播放结束，可以下发游戏奖励")):console.log("播放中途退出，不下发游戏奖励"),t.trackLookVideo(o.isEnded)})))},adinsertInit:function(o){wx.createInterstitialAd&&(e=wx.createInterstitialAd({adUnitId:o}),e.onLoad((function(){e.show().catch((function(o){console.error(o)}))})),e.onError((function(o){})),e.onClose((function(){})))},trackLookVideo:function(t){o.request({url:getApp().globalData.api.lookVideo,data:{openid:getApp().globalData.openid,id:this.id,isEnded:t},success:function(o){}})},openModal:function(){this.modalShow=!0},closeModal:function(){this.modalShow=!1}}};t.default=i}).call(this,n("543d")["default"])},"792c":function(o,t,n){},cfe9:function(o,t,n){"use strict";var e;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return e}));var i=function(){var o=this,t=o.$createElement;o._self._c},a=[]},d310:function(o,t,n){"use strict";(function(o){n("e51e");e(n("66fd"));var t=e(n("6b73"));function e(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,n("543d")["createPage"])},fce1:function(o,t,n){"use strict";var e=n("792c"),i=n.n(e);i.a}},[["d310","common/runtime","common/vendor"]]]);