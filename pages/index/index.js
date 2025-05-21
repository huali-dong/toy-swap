// index.js
Page({
  data: {
    currentCategory: 'all',
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [],
    recommendToys: [
      {
        id: 1,
        name: '乐高积木',
        image: '/images/toys/lego.jpg',
        condition: '9成新',
        distance: '500m'
      },
      {
        id: 2,
        name: '遥控汽车',
        image: '/images/toys/car.jpg',
        condition: '8成新',
        distance: '800m'
      },
      {
        id: 3,
        name: '摇摇车',
        image: '/images/toys/yaoyao.jpg',
        condition: '8成新',
        distance: '800m'
      },
      {
        id: 4,
        name: '扭扭车',
        image: '/images/toys/niuniu.jpg',
        condition: '8成新',
        distance: '800m'
      }
    ]
  },

  onLoad: function() {
    this.getLocation()
    this.loadRecommendToys()
  },

  // 获取位置信息
  getLocation: function() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        this.loadNearbyToys()
      },
      fail: () => {
        wx.showToast({
          title: '请开启位置权限',
          icon: 'none'
        })
      }
    })
  },

  // 切换分类
  switchCategory: function(e) {
    const category = e.currentTarget.dataset.category
    this.setData({
      currentCategory: category
    })
    this.loadRecommendToys()
  },

  // 加载推荐玩具
  loadRecommendToys: function() {
    // TODO: 根据分类加载推荐玩具
    // 这里模拟数据，实际应该调用后端API
  },

  // 加载附近玩具
  loadNearbyToys: function() {
    // TODO: 根据位置加载附近玩具
    // 这里模拟数据，实际应该调用后端API
    const markers = [
      {
        id: 1,
        latitude: this.data.latitude + 0.001,
        longitude: this.data.longitude + 0.001,
        title: '乐高积木'
      },
      {
        id: 2,
        latitude: this.data.latitude - 0.001,
        longitude: this.data.longitude - 0.001,
        title: '遥控汽车'
      }
    ]
    this.setData({ markers })
  },

  // 跳转到详情页
  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
})
