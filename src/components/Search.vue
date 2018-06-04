<template lang="html">
  <div class="search">
    <div class="searchbox">
        <i class = 'iconfont icon-erji'></i>
        <div class="searchmain">
            <!-- <i id="iconToSearch" class="y4"></i> -->
            
            <input v-model="searchdata" type="search" class="searchtxt" placeholder="搜索你喜欢的音乐">
            <!-- <i id="iconToClear" class="a1q y4"></i> -->
        </div>
        <router-link tag="span" :to="{name:'SearchView',params:{searchcontent:searchdata}}" class="searchbtn">搜索</router-link>
    </div>
  </div>
</template>

<script>

import '../assets/music/iconfont.css'

export default {
  name:"search",
  data(){
    return{
      searchdata:""
    }
  },
}
</script>

<style scoped>
.search{
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
}
.searchbox {
    position:relative;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    color: #555;
    font-size: 17px;
    text-align: center;
    /* transform: translateZ(0); */
}

.searchmain {
    position: absolute;
    left: 33px;
    top: 8px;
    right: 14px;
    background: #fff;
    border-radius: 2px;
    border: 1px solid #e6e6e6;
    height: 28px;
}

.iconfont{
    position: absolute;
    top: 2px;
    left: 7px;
    font-size: 21px;
}
/* .y4 {
    display: inline-block;
    width: 44px;
    height: 44px;
    background-image: url('../assets/music.png');
    background-size: 44px auto;
    background-repeat: no-repeat;
} */

.searchtxt {
    vertical-align: top;
    outline: none;
    /* background: transparent; */
    border: none;
    font-family: "microsoft yahei",Verdana,Arial,Helvetica,sans-serif;
    font-size: 14px;
    height: 28px;
    width: 100%;
    max-width:90%;
    text-overflow: ellipsis;
    overflow: hidden;
}

/* .a1q {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background-position: -8px -140px;
    width: 28px;
    height: 28px;
} */

.searchbtn {
    position: absolute;
    right: 13px;
    top: 8px;
    width:50px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    background-color: #e5e5e5;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -ms-border-radius: 3px;
    color: #333333;
    font-size: 14px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
}

</style>
