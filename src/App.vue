<template>
  <div id="app">
    <router-view class="routerview"></router-view>
    <Footer style="position:fixed"></Footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  components:{}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './styles/style.css';
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
 }
 .routerview{
   margin-bottom:50px; 
 }

</style>
