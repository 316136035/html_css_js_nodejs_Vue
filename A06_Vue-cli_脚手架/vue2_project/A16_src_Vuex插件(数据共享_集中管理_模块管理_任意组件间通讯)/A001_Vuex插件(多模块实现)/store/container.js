import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default {
    namespaced: true,//开启命名空间
    //定义Vuex的actions配置对象(组件中调用,用于编写异步函数)
    actions:{},
     //定义Vuex的actions配置对象
    mutations:{},
     //定义Vuex的mutations配置对象(组件中调用,用于修改数据)
    state:{
      list: [
        {
          sku: 100027606896,
          name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装`,
          price: 4299,
        },
        {
          sku: 100023781630,
          name: `老板（Robam）抽油烟机领航家D1S欧式顶吸双腔变频22大风量家用燃气灶吸油烟机灶具套装60D1S套装天然气`,
          price: 3999,
        },
        {
          sku: 100063215765,
          name: `老板（Robam）领航家抽油烟机D3S欧式顶吸双腔变频24大风量家用燃气灶吸油烟机挥手灶具套装60D3S套装（天然气`,
          price: 4599,
        },
        {
          sku: 100015248503,
          name: `老板（Robam）抽油烟机探索家D3S侧吸式油烟机家用变频三面拢23大风量挥手智控低噪1000Pa脱排吸油烟机28D3S`,
          price: 2799,
        },
        {
          sku: 100039699413,
          name: `老板（Robam）抽油烟机 钢琴家D3S欧式24风量变频家用燃气灶吸油烟机灶具套装62D3S＋57B2DT京东小家智能生态`,
          price: 4749,
        },
        {
          sku: 100021565685,
          name: `老板（Robam）WB780DH 10套大容量嵌入式洗碗洗锅机热风烘干消杀长效循环存储一体机家用中式搁架快速洗`,
          price: 3299,
        },
        {
          sku: 100014816111,
          name: `老板（Robam）JZT-57B6D家用燃气灶天然气灶双灶嵌入式 5.2kW大火力猛火灶易打理可调节底盘灶具灶台换灶选老板`,
          price: 2099,
        },
        {
          sku: 100066733298,
          name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装`,
          price: 6399,
        },
        {
          sku: 100027606896,
          name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装`,
          price: 4299,
        },
        {
          sku: 100023781630,
          name: `老板（Robam）抽油烟机领航家D1S欧式顶吸双腔变频22大风量家用燃气灶吸油烟机灶具套装60D1S套装天然气`,
          price: 3999,
        },
        {
          sku: 100063215765,
          name: `老板（Robam）领航家抽油烟机D3S欧式顶吸双腔变频24大风量家用燃气灶吸油烟机挥手灶具套装60D3S套装（天然气`,
          price: 4599,
        },
        {
          sku: 100015248503,
          name: `老板（Robam）抽油烟机探索家D3S侧吸式油烟机家用变频三面拢23大风量挥手智控低噪1000Pa脱排吸油烟机28D3S`,
          price: 2799,
        },
        {
          sku: 100039699413,
          name: `老板（Robam）抽油烟机 钢琴家D3S欧式24风量变频家用燃气灶吸油烟机灶具套装62D3S＋57B2DT京东小家智能生态`,
          price: 4749,
        },
        {
          sku: 100021565685,
          name: `老板（Robam）WB780DH 10套大容量嵌入式洗碗洗锅机热风烘干消杀长效循环存储一体机家用中式搁架快速洗`,
          price: 3299,
        },
  
      ]
    },
     //定义Vuex的state配置对象(存储数据)
    getters:{
      filteshow(state) {
        //过滤器
        return state.list.filter(item => {
          return item.price > 3000
        })
      }
    },
   }


