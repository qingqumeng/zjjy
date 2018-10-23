<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
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
</style>
