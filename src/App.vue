<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';
  const ERR_OK = 0;
  export default {
    data() {
          return {
            seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        // 响应成功回调
        response = response.body;
        if (response.errno === ERR_OK) {
          console.log('成功了');
          this.seller = response.data;
        }
      }, (response) => {
        // 响应错误回调
          console.log('错误');
      });
    },
    components: {
      'v-header': header
    }
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  #app
    .tab
      display: flex
      line-height: 30px
      width: 100%
      height: 40px
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display:block
          font-size: 14px
          color: rgb(77,85,93)
          &.active
            color: rgb(240,20,20)
</style>
