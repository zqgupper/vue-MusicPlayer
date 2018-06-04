<template lang="html">
  <router-link :to="{name:'SingerInfo',params:{singerid:singerid}}" tag="div" class="card">
      <div class="card-slider">
          <div class="poster">
              <img :src="singerInfo.avatar_big" :alt="singerInfo.name">
          </div>
      </div>
      <div class="name">
        {{ singerInfo.name }}
      </div>  
  </router-link>
</template>

<script>
export default {
  name:"singerlist",
  data(){
    return{
      singerInfo:{}
    }
  },
  props:{
    singerid:{
      type:String,
      default:"0"
    }
  },
  created(){
    const SingerUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+this.singerid
    this.$axios.get(SingerUrl)
    .then(res => {
      this.singerInfo = res.data
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>

<style scoped>
.card {
    width: 33.3%;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;  /*怪异模式*/
    padding: 0 5px 20px;
}

.card-slider {
    border: 1px solid #eee;
}

.card .poster {
    position: relative;
    height: 0;
    padding-bottom: 100%;
}
img{
  max-width: 100%;
}
.card .name {
    font-size: 12px;
    overflow: hidden;
    white-space: normal; /*空白会被浏览器忽略*/
    line-height: 14px;
    max-height: 28px;
    margin: 4px 0 2px;
    text-align: center;
}
</style>
