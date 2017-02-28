<template>
  <div class="rating">
    <h1 class="title">商品评价</h1>
    <ratingselect @toggle-onlycontent="toggleOnlycontent" @ratingtype="ratingtype" :select-type="selectType" :only-content="onlyContent" :desc="desc"></ratingselect>
  </div>
</template>

<script type="text/ecmascript-6">
  import ratingselect from 'components/ratingselect/ratingselect';
  const ALL = 2;

  export default{
    data() {
      return {
        selectType: ALL,
        onlyContent: false,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      };
    },
    components: {
      ratingselect
    },
    methods: {
      ratingtype(type) {
        this.selectType = type;
      },
      toggleOnlycontent(val) {
        this.onlyContent = val;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
