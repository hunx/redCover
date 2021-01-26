<script>
/* 本项目为开源项目，作者微信：zheng593446899，如有问题可联系*/
export default {
	onLaunch: function(e) {
		console.log(e)
		console.log('App Launch');
		var openid = wx.getStorageSync('openid');
		if (openid) {
			this.globalData.openid = openid;
			this.inviteTrack(e.query.openid, openid, e.query.id)
		} else {
			// 登录
			wx.login({
				success: res => {
					// 发送 res.code 到后台换取 openId, sessionKey, unionId
					wx.request({
						url: this.globalData.api.login,
						data: {
							code: res.code
						},
						success: (res) => {
							// 存用户的openid
							
							this.globalData.openid = res.data.data.user.openid;
							wx.setStorageSync('openid', res.data.data.user.openid);
							this.inviteTrack(e.query.openid, this.globalData.openid, e.query.id)
						}
					});
				}
			});
		}
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	globalData: {
		api: {
			login: 'https://d44ba090-a14e-45c9-a71d-37a676882106.bspapp.com/http/api/login',
			cover: 'https://d44ba090-a14e-45c9-a71d-37a676882106.bspapp.com/http/api/cover',
			coverDetail: 'https://d44ba090-a14e-45c9-a71d-37a676882106.bspapp.com/http/api/cover/detail',
			lookVideo: 'https://d44ba090-a14e-45c9-a71d-37a676882106.bspapp.com/http/api/look/video',
			inviteTrack: 'https://d44ba090-a14e-45c9-a71d-37a676882106.bspapp.com/http/api/invite/track',
		},
		openid: '',
	},
	methods: {
		shareConfig(){
			var messages = [
				{
					title: '送你个性微信红包封面，发红包时可用',
					path: '/pages/index/index?openid=' + this.globalData.openid,
				},
			];
			return messages[Math.floor(Math.random()*messages.length)];
		},
		//邀请上报
		inviteTrack(inviteOpenid, openid, id){
			if(inviteOpenid && openid && inviteOpenid != openid){
				console.log(inviteOpenid, openid)
				wx.request({
					url: this.globalData.api.inviteTrack,
					method: "POST",
					data: {
						inviteOpenid,
						openid,
						id,
					},
					success: (res) => {
						
					}
				});
			}
		},
	}
};
</script>

<style>
/*每个页面公共css */
</style>
