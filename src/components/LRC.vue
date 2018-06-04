<template lang="html">
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      {{ getAllKey }}
      <!-- <p class="lrc-p" v-show="key < currentTime && key > currentTime - (keyArr[index+1] - keyArr[index])" v-for="(item,key,index) in lrcData">{{ item }}</p> -->
      <!-- lrc文件中的时间与播放获得时间对应的比对关系 -->
      <p class="lrc-p" :class="{'active':key < currentTime && key > currentTime - (keyArr[index+1] - keyArr[index]) }" 
        v-for="(item,key,index) in lrcData">
        {{ item }}{{ srcollLrc(key,index) }}
      </p>
    </div>
    <!-- key < currentTime && key > currentTime - (keyArr[index+1] - keyArr[index]) -->
  </div>
</template>



<script>
export default {
  name:"lrc",
  data(){
    return{
      lrcData:{},
      keyArr:[]
    }
  },
  props:{
    currentTime:{
      type:Number,
      default:null
    },
    durationTime:{
      type:Number,
      default:null
    },
    songid:{
      type:String,
      default:""
    }
  },
  created(){
    const lrcUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.song.lry&songid="+this.songid
    this.$axios.get(lrcUrl)
    .then(res => {
      //解析歌词
      var lyrics = res.data.lrcContent.split("\n");  //将歌词以符号"\n"切割为字符串数组
      var lrcObj = {};
      for(var i = 0 ;i<lyrics.length;i++){
        var lyric = decodeURIComponent(lyrics[i]);   //解码
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;  //对应[00:00.71]的正则
        var timeRegExpArr = lyric.match(timeReg);   //返回一个符合正则规则的时间集合
        if(!timeRegExpArr)continue;
        var clause = lyric.replace(timeReg,'');  //将所有的时间剔除，只剩下歌词的集合
           for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
               var t = timeRegExpArr[k];
               var min = Number(String(t.match(/\[\d*/i)).slice(1)), //取[00并且转化为数字
                   sec = Number(String(t.match(/\:\d*/i)).slice(1)); //取：00并且转化为数字
               var time = min * 60 + sec;
               lrcObj[time] = clause;
           }
        }
        this.lrcData = lrcObj;
        //console.log(lrcObj);  //得到如下形式的歌词
        /*
        {
          "100"："我是歌词",
          "103":"我是歌词2"
        }
        */
    })
    .catch(error => {
      console.log(error);
    })
  },
  computed:{
    // 取出所有的key
    getAllKey : function(){
			for(var allkey in this.lrcData){
				this.keyArr.push(allkey);
			}
		}
  },
  methods:{//computed和methods函数声明方式都可以
    srcollLrc(key,index){
      const lrcDiv = this.$refs.lrc //放歌词的大div
      if(key < this.currentTime && key > this.currentTime - (this.keyArr[index+1] - this.keyArr[index])){
          lrcDiv.style.top = -((index-2)*30)+"px"
          //当满足条件时小div.lrcContainer不动，歌词的大div向上走
      }
    }

  }
}
</script>

<style scoped>

.lrcContainer{
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.lrc{
	width: 100%;
  position: absolute;
  top: 0;
}
/* .active{ //active应该是变红，在全局app.vue中
	display: block;
} */
.lrc-p{
  height: 30px;
	line-height: 30px;
}

.up30{
	margin-top: -30px;
}

</style>
