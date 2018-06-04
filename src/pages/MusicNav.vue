<template lang="html">
  <div class="bars">
      <div class="bar">
        <router-link to="/hot">热歌榜</router-link>
        <span class="gap-line"> </span>
      </div>
      <div class="bar">
        <router-link to="/new">新歌榜</router-link>
        <span class="gap-line"> </span>
      </div>
      <div class="bar">
        <router-link to="/king">经典榜</router-link>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.bars{
  display: flex;
}

.bars .bar {
    padding: 18px 0 12px 0;
    font-size: 16px;
    flex: 1;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    text-align: center;
    color: #999;
    position: relative;
    z-index: 2;
}

.bars .bar .gap-line {
    position: absolute;
    right: 0;
    top: 20px;
    width: 1px;
    height: 18px;
    border-left: 1px solid #ddd;
}

</style>
