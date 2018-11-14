<template>
  <div class="wrapper">
      <group title="小区信息"  >        
        <x-input title="小区名" name="buildname" placeholder="请输入小区名(比如:之江家园二区)" is-type="china-name"></x-input>           
        <popup-picker title="户<i class='vux-blank-half'><i class='vux-blank-half'>型" :data="housetype" v-model="housetypevalue"></popup-picker>
        <popup-picker title="楼<i class='vux-blank-half'><i class='vux-blank-half'>层" :data="housetype" v-model="housetypevalue"></popup-picker>
        <x-input title="月租金" name="tental" placeholder="请输入月租金" keyboard="number"  :min="2" :max="8" :value="tental"  text-align="right"><i slot="right" class='vux-blank-half'> 元/月</i></x-input>
        <x-input title="联系人" name="linkman" placeholder="请输入联系人姓名" is-type="china-name"></x-input>
        <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      </group>
  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch } from 'vux'

export default {
    components: {
      Group,
      GroupTitle,
      Cell,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      Datetime,
      XNumber,
      XTextarea,
      XSwitch
    },
    props:{},
    data(){
      return {
        tental:10,
        housetype:[['1室','2室','3室','4室','5室','6室','7室'],['0卫','1卫','2卫','3卫','4卫','5卫'],['0厅','1厅','2厅','3厅','4厅','5厅']],
        housetypevalue:[['1室'],['0卫'],['0厅']]
    }
  },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){}
}
</script>
<style lang="" scoped>
    .wrapper{}
</style>